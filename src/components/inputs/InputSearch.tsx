import { InputHTMLAttributes, ReactElement } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
};

const InputSearch = (props: InputProps): ReactElement => {
  const {value, placeholder, className} = props

  return (
    <input
      type="text"
      autoComplete="off"
      value={value}
      placeholder={placeholder}
      {...props}
      className={`block w-full appearance-none border-2 border-gray-line rounded-full py-2 px-4 bg-gray-50 ${className}`}
    />
  );
};

export default InputSearch;