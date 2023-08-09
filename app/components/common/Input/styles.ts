import { StyleSheet } from "react-native";
import { Colors } from "@/app/constants/styles/color";
import { FontName } from "@/app/enums/styles/font-name";

export const inputStyle = StyleSheet.create({
  input: {
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: Colors.whiteGray,
    fontFamily: FontName.PoppinsMedium,
    fontSize: 15,
    lineHeight: 15,
    flex: 1,
  },
  container: {
    width: "90%",
    gap: 4,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  caption: {
    marginLeft: "auto",
    marginRight: 10,
  },
  disabled: {
    backgroundColor: Colors.whiteGray,
    borderColor: Colors.whiteGray,
  },
});
