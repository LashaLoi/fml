import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import InputMask from "react-input-mask";

type InputProps = {
  label: string;
  register: UseFormRegister<any>;
  mask?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  name = "",
  placeholder,
  required,
  type = "text",
  register,
  mask,
}: InputProps) {
  const props = {
    type: type,
    required: required,
    placeholder: placeholder,
    mask: mask ?? "",
    className:
      "block py-4 px-3 w-full text-sm text-black placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-black focus:border-yellow-500 rounded-lg",
    ...register(name),
  };

  return (
    <label className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
      <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
        <span className="text-sm font-medium text-black">{label}</span>
      </div>
      <div className="w-full sm:w-2/3 px-4">
        <div className="max-w-xl">
          {props.mask !== "" ? <InputMask {...props} /> : <input {...props} />}
        </div>
      </div>
    </label>
  );
}
