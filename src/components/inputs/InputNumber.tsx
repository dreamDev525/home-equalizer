import { InputHTMLAttributes, ReactElement } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
};

const InputNumber = (props: InputProps): ReactElement => {
  const {value, placeholder, className} = props

  return (
    <input
      type="number"
      autoComplete="off"
      value={value}
      placeholder={placeholder}
      {...props}
      className={`block w-full appearance-none border-2 border-gray-line rounded-md p-2 bg-gray-50 ${className}`}
    />
  );
};

export default InputNumber;