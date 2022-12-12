import { TextareaHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type TextareaProps = {
  label: string;
  register: UseFormRegister<any>;
} & TextareaHTMLAttributes<HTMLTemplateElement>;

export default function Textarea({
  register,
  label,
  name = "",
  placeholder,
  required,
}: TextareaProps) {
  return (
    <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
      <div className="w-full sm:w-1/3 px-4 mb-5 sm:mb-0">
        <span className="block mt-2 text-sm font-medium text-gray-100">
          {label}
        </span>
      </div>
      <div className="w-full sm:w-2/3 px-4">
        <div className="max-w-xl">
          <textarea
            placeholder={placeholder}
            className="block h-56 py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg resize-none"
            required={required}
            {...register(name)}
          />
        </div>
      </div>
    </div>
  );
}
