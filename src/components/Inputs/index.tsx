import { Controller, FieldValues } from "react-hook-form";
import { IInput } from "./types";
import { InputText, InputContainer, ErrorText } from "./styles";

export function Input<T extends FieldValues>({
  name,
  control,
  placeholder,
  type = "text",
  leftIcon,
  errorMessage,
}: IInput<T>) {
  return (
    <InputContainer>
      {leftIcon}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputText
            {...field}
            placeholder={placeholder}
            type={type}
          />
        )}
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputContainer>
  );
}
