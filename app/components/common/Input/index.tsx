import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { useFocus } from "@/app/hooks/useFocus";
import { Label } from "@/app/components/typography/Label";
import { Colors } from "@/app/constants/styles/color";
import { Caption } from "@/app/components/typography/Caption";
import { inputStyle } from "@/app/components/common/Input/styles";
import { useSecureToggle } from "@/app/hooks/useSecureToggle";
import { SecureToggleIcons } from "@/app/components/common/Input/secureToggleIcons";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  editable = true,
  error,
  secureTextEntry,
  ...props
}: InputProps) => {
  const { isFocused, methods } = useFocus();
  const { display, toggleMethods } = useSecureToggle(secureTextEntry);

  return (
    <View style={inputStyle.container}>
      {!!label && (
        <Label style={!editable ? { color: Colors.graySoft } : {}}>
          {label}
        </Label>
      )}

      <View style={inputStyle.inputContainer}>
        <TextInput
          style={[
            inputStyle.input,
            isFocused && { borderColor: Colors.plum },
            !!error && !!editable && { borderColor: Colors.error },
            !editable && inputStyle.disabled,
          ]}
          {...{
            ...methods,
            ...props,
            editable,
            secureTextEntry: toggleMethods.isSecure,
          }}
        />
        {display && <SecureToggleIcons {...toggleMethods} />}
      </View>

      {!!error && !!editable && (
        <Caption color="error" style={inputStyle.caption}>
          Nieprawidałowe dane
        </Caption>
      )}
    </View>
  );
};
