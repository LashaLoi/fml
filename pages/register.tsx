import Select from "components/Select";
import Textarea from "components/Textarea";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

export default function RegisterPage() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="p-8 bg-gray-900">
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
