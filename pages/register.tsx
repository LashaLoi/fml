import Select from "components/Select";
import Textarea from "components/Textarea";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "supabaseClient";
import Input from "../components/Input";

const Notification = ({ onClose }: any) => (
  <div className="z-50 fixed right-0 bottom-0 p-4">
    <div className="w-full max-w-xl p-6 mt-auto ml-auto bg-gray-500 rounded-lg">
      <div className="flex items-start justify-between -mx-2">
        <div className="flex items-start px-2">
          <div className="ml-2">
            <h5 className="text-gray-100 font-semibold">Что-то пошло не так</h5>
            <span className="text-xs font-medium text-gray-300">
              Попробуйте еще раз или напишите нам
            </span>
          </div>
        </div>
        <div className="px-2">
          <button
            className="inline-block text-gray-400 hover:text-gray-300"
            onClick={onClose}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.17501 5.99999L10.7583 2.42499C10.9153 2.26807 11.0034 2.05524 11.0034 1.83333C11.0034 1.61141 10.9153 1.39858 10.7583 1.24166C10.6014 1.08474 10.3886 0.996582 10.1667 0.996582C9.94476 0.996582 9.73193 1.08474 9.57501 1.24166L6.00001 4.82499L2.42501 1.24166C2.26809 1.08474 2.05526 0.996582 1.83334 0.996582C1.61143 0.996582 1.3986 1.08474 1.24168 1.24166C1.08476 1.39858 0.9966 1.61141 0.9966 1.83333C0.9966 2.05524 1.08476 2.26807 1.24168 2.42499L4.82501 5.99999L1.24168 9.57499C1.16357 9.65246 1.10157 9.74463 1.05927 9.84618C1.01696 9.94773 0.995178 10.0566 0.995178 10.1667C0.995178 10.2767 1.01696 10.3856 1.05927 10.4871C1.10157 10.5887 1.16357 10.6809 1.24168 10.7583C1.31915 10.8364 1.41131 10.8984 1.51286 10.9407C1.61441 10.983 1.72333 11.0048 1.83334 11.0048C1.94335 11.0048 2.05227 10.983 2.15382 10.9407C2.25537 10.8984 2.34754 10.8364 2.42501 10.7583L6.00001 7.17499L9.57501 10.7583C9.65248 10.8364 9.74465 10.8984 9.8462 10.9407C9.94775 10.983 10.0567 11.0048 10.1667 11.0048C10.2767 11.0048 10.3856 10.983 10.4872 10.9407C10.5887 10.8984 10.6809 10.8364 10.7583 10.7583C10.8364 10.6809 10.8984 10.5887 10.9408 10.4871C10.9831 10.3856 11.0048 10.2767 11.0048 10.1667C11.0048 10.0566 10.9831 9.94773 10.9408 9.84618C10.8984 9.74463 10.8364 9.65246 10.7583 9.57499L7.17501 5.99999Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function RegisterPage() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await supabase.from("Users").insert([data]);

      router.push("/info");
    } catch (error) {
      console.log({ error });

      setOpen(true);
    }
  };

  return (
    <div className="p-8 bg-gray-900">
      {open && <Notification onClise={() => setOpen(false)} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-100">
              ФАМИЛИЯ / ИМЯ
            </span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                  <input
                    required
                    className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                    placeholder="ФАМИЛИЯ"
                    {...register("firstName")}
                  />
                </div>
                <div className="w-full sm:w-1/2 px-3">
                  <input
                    required
                    className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-500 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                    placeholder="ИМЯ"
                    {...register("lastName")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Select
          options={["3 Декабря", "4 Декабря", "Оба дня"]}
          label="ДЕНь"
          name="days"
          required
          register={register}
        />
        <Input
          label="Город"
          placeholder="Минск"
          name="city"
          required
          register={register}
        />
        <Input
          label="ЦЕРКОВЬ"
          placeholder="НОВОЕ ПОКОЛЕНИЕ"
          name="church"
          required
          register={register}
        />
        <Input
          label="ФИО ПАСТОРА"
          placeholder="ВОРОНЕНКО ЛЕОНИД ПЕТРОВИЧ"
          name="pastor"
          required
          register={register}
        />
        <Input
          label="ОТВЕТСТВЕННОСТЬ В ЦЕРКВИ"
          placeholder="МОЛОДЕЖНЫЙ ЛИДЕР"
          name="ministry"
          required
          register={register}
        />
        <Textarea
          label="ОЖИДАНИЕ ОТ ФОРУМА"
          placeholder="Напишите ваши ожидания"
          register={register}
          required
          name="expect"
        />
        <Select
          options={["ДА", "НЕТ"]}
          label="НУЖНА ЛИ ПОМОЩЬ С ТРАНСПОРТОМ"
          name="transfer"
          required
          register={register}
        />
        <Input
          label="ДАТА РОЖДЕНИЯ"
          placeholder="14/10/1998"
          name="age"
          required
          register={register}
          type="date"
        />
        <Textarea
          label="ДЕТИ, КОТОРЫЕ ПОЕДУ С ВАМИ НА ФМЛ (ФИО, ВОЗРАСТ)"
          name="children"
          register={register}
          required
          placeholder="..."
        />
        <Input
          label="ТЕЛЕФОН"
          placeholder="+375 (29/33) 123 45 67"
          name="phone"
          required
          register={register}
          type="tel"
        />
        <Input
          label="E-MAIL"
          placeholder="fml@gmail.com"
          name="email"
          required
          register={register}
          type="email"
        />
        <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6  border-opacity-20">
          <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
            <h4 className="text-2xl font-bold tracking-wide text-white mb-1">
              ВАШИ ДАННЫЕ
            </h4>
            <p className="text-sm text-gray-300">
              ВВЕДИТЕ ВСЕ ДАННЫЕ ЧТОБЫ ЗАРЕГИСТРИРОВАТЬСЯ
            </p>
          </div>
          <div className="w-full sm:w-auto px-4">
            <div>
              <button
                type="reset"
                className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
              >
                СБРОСИТЬ
              </button>
              <button
                type="submit"
                className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
