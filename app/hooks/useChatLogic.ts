import { useState, useEffect } from "react";
import {useQuery, useMutation, useSubscription} from "@apollo/client";
import { IMessage } from "react-native-gifted-chat";
import { GET_ROOM } from "@/app/services/get-room";
import { SEND_MESSAGE } from "@/app/services/send-message";
import { GetRoomResponse } from "@/app/types/get-room-response";
import {MESSAGE_ADDED_SUBSCRIPTION} from "@/app/services/message-added-subscription";

export const useChatLogic = (roomId: string) => {
  const { loading, error, data } = useQuery<GetRoomResponse>(GET_ROOM, { variables: { roomId } });
  const [sendMessageMutation] = useMutation(SEND_MESSAGE);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const { data: subscriptionData } = useSubscription(MESSAGE_ADDED_SUBSCRIPTION);

  useEffect(() => {
    if (!data) return;

    const transformedMessages = data.room.messages.map(({ body, insertedAt, user, id }) => ({
      _id: id,
      text: body,
      createdAt: new Date(insertedAt),
      user: {
        _id: user.id,
        name: user.firstName,
      },
    }));

    setMessages(transformedMessages);
  }, [data]);

  useEffect(() => {
    if (!subscriptionData) return;

    const newMessage = {
      _id: subscriptionData.messageAdded.id,
      text: subscriptionData.messageAdded.body,
      createdAt: new Date(subscriptionData.messageAdded.insertedAt),
      user: {
        _id: subscriptionData.messageAdded.user.id,
        name: subscriptionData.messageAdded.user.firstName,
      },
    };

    setMessages((prev) => [newMessage, ...prev]);
  }, [subscriptionData]);

  const sendMessage = async (messageText: string) => {
    const newMessage: IMessage = {
      _id: Date.now().toString(),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: data?.room?.user?.id || "fallbackId",
        name: data?.room?.user?.firstName || "Unknown",
      },
    };
    setMessages((prev) => [newMessage, ...prev]);
    try {
      await sendMessageMutation({
        variables: {
          roomId,
          body: messageText,
        },
      });
    } catch (e) {
      console.error(e);
      setMessages((prev) => prev.filter((msg) => msg._id !== newMessage._id));
    }
  };

  return {
    loading,
    error,
    data,
    messages,
    sendMessage,
  };
};
