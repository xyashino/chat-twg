import { NavigationName } from "@/app/enums/navigation-name";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  [NavigationName.Chat]: ChatScreenProps;
  [NavigationName.Login]: undefined;
  [NavigationName.Rooms]: undefined;
  [NavigationName.SignUp]: undefined;
};

interface ChatScreenProps {
  id: string;
}

export type SetNavigationParamsTypes<T extends NavigationName> = NavigationProp<
  RootStackParamList,
  T
>;

export type GetNavigationParamsTypes<T extends NavigationName> = RouteProp<
  RootStackParamList,
  T
>;
