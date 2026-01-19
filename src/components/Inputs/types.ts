import { Control, FieldValues, Path } from "react-hook-form";

export interface IInput<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  type?: string;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
}
