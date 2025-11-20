import React, { FC } from "react";
import { FormInputProps } from "@/types/forms";

const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  name,
  ...rest
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full px-4 py-2 bg-white text-black focus:outline-none rounded-md"
    {...rest}
  />
);

export default FormInput;
