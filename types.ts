import { FieldError, UseFormRegister, RegisterOptions } from "react-hook-form";

export type FormData = {
  username: string;
  email: string;
  yearsOfExperience: number;
  address: string;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  registerOptions?: RegisterOptions;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames =
  | "email"
  | "yearsOfExperience"
  | "password"
  | "confirmPassword";
