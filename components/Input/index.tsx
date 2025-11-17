import ElectricBorder from "@/components/components/ElectricBorder";
import { InputHTMLAttributes } from "react";
import { ChangeHandler, UseFormRegister } from "react-hook-form";
import InputMask from "react-input-mask";

type InputProps = {
  label: string;
  register: UseFormRegister<any>;
  mask?: string;
  pastMask?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  name = "",
  placeholder,
  required,
  type = "text",
  register,
  mask,
  pastMask,
}: InputProps) {
  const props = {
    type: type,
    required: required,
    placeholder: placeholder,
    mask: mask ?? "",
    className:
      "block py-4 px-3 w-full text-sm text-black placeholder-gray-500 font-medium outline-none bg-transparent  border-gray-400 hover:border-black focus:border-yellow-500 rounded-lg",
    ...register(name),
  };

  // if (pastMask) {
  //   props.onChange = ((event: any) => {
  //     console.log({ event });
  //     if (event?.target?.value.startsWith("8")) {
  //       props.mask = "8 029 9999999";
  //     }

  //     if (event?.target?.value.startsWith("+")) {
  //       props.mask = "+375 (99) 999 99 99";
  //     }

  //     props.onChange(event);
  //   }) as ChangeHandler;
  // }

  return (
    <label className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
      <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
        <span className="text-sm font-medium text-black">{label}</span>
      </div>
      <div className="w-full sm:w-2/3 px-4">
        <div className="max-w-xl">
          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            {props.mask !== "" ? (
              <InputMask {...props} />
            ) : (
              <input {...props} />
            )}
          </ElectricBorder>
        </div>
      </div>
    </label>
  );
}
