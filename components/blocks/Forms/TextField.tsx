import { Input, InputProps } from "../Basic/Input"

// TextField is just an alias to Input for consistency with the form component names
export interface TextFieldProps extends InputProps {}

export function TextField(props: TextFieldProps) {
  return <Input {...props} />
}

TextField.craft = {
  ...Input.craft,
  displayName: "TextField"
}
