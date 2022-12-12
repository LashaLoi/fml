import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  name = "",
  placeholder,
  required,
  type = "text",
  register,
  ...rest
}: InputProps) {
  return (
    <label className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
      <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
        <span className="text-sm font-medium text-gray-100">{label}</span>
      </div>
      <div className="w-full sm:w-2/3 px-4">
        <div className="max-w-xl">
          <input
            required={required}
            type={type}
            className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
            placeholder={placeholder}
            {...rest}
            {...register(name)}
          />
        </div>
      </div>
    </label>
  );
}
