import { InputHTMLAttributes, ReactElement, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
};

const InputPwd = (props: InputProps): ReactElement => {
  const {value, placeholder, className} = props
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="relative">
      <input
        type={`${showPwd ? 'text' : 'password'}`}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        {...props}
        className={`block w-full appearance-none border-2 border-gray-line rounded-md p-2 bg-gray-50 ${className}`}
      />
      <span className="absolute right-4 top-1/2 transfrom -translate-y-1/2 text-primary text-bold select-none" onClick={() => {setShowPwd(!showPwd)}}>{showPwd ? "Hide" : "Show"}</span>
    </div>
  );
};

export default InputPwd;