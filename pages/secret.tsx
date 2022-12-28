import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "supabaseClient";

const secretLogin = "andrewfmlconf";
const secretPassword = "alexfmlconf";

export default function SecretPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState<any[] | null>(null);
  const [search, setSearch] = useState("");

  const loadUsers = async () => {
    setUsers(null);

    const { data } = await supabase.from("Users").select("*");

    setUsers(data);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");

    location.reload();
  };

  useEffect(() => {
    const isLSLoggedIn = localStorage.getItem("isLoggedIn");

    if (!!isLSLoggedIn) {
      setIsLoggedIn(true);

      loadUsers();
    }
  }, []);

  const handleChange = ({ target: { value } }: any) => setSearch(value);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const [firstInput, secontInput] = event.target;

    if (
      firstInput.value === secretLogin &&
      secontInput.value === secretPassword
    ) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "yep");

      return loadUsers();
    }
  };

  if (isLoggedIn) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              ПОЛЬЗОВАТЕЛИ
            </h1>
          </div>

          {!users ? (
            <div className="flex justify-center">ЗАГРУЗКА...</div>
          ) : (
            <>
              <input
                onChange={handleChange}
                placeholder="НАЙТИ ПО ФАМИЛИИ"
                className="w-full mb-4 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ID
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ДАТА СОЗДАНИЯ
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ФАМИЛИЯ
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ИМЯ
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ЦЕРКОВЬ
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        СКОЛЬКО ЛЕТ{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ПАВТОР{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        СЛУЖЕНИЕ{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ОЖИДАНИЯ
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ТРАНСФЕР{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ДЕТИ{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ТЕЛЕФОН{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ПОЧТА{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ГОРОД{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        СКОЛЬКО ДНЕЙ{" "}
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ВОПРОС
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      .filter((user) =>
                        search.trim() !== ""
                          ? user.firstName
                              .toLocaleLowerCase()
                              .includes(search.toLocaleLowerCase())
                          : user
                      )
                      .map(
                        (
                          {
                            id,
                            createdAt,
                            firstName,
                            city,
                            church,
                            age,
                            pastor,
                            ministry,
                            expect,
                            transfer,
                            children,
                            phone,
                            email,
                            lastName,
                            days,
                            q,
                          },
                          i
                        ) => {
                          if (i === 0)
                            return (
                              <tr key={i}>
                                <td className="px-4 py-3">{id}</td>
                                <td className="px-4 py-3">{createdAt}</td>
                                <td className="px-4 py-3">{firstName}</td>
                                <td className="px-4 py-3">{lastName}</td>
                                <td className="px-4 py-3">{church}</td>
                                <td className="px-4 py-3">{age}</td>
                                <td className="px-4 py-3">{pastor}</td>
                                <td className="px-4 py-3">{ministry}</td>
                                <td className="px-4 py-3">{expect}</td>
                                <td className="px-4 py-3">{transfer}</td>
                                <td className="px-4 py-3">{children}</td>
                                <td className="px-4 py-3">{phone}</td>
                                <td className="px-4 py-3">{email}</td>
                                <td className="px-4 py-3">{city}</td>
                                <td className="px-4 py-3">{days}</td>
                                <td className="px-4 py-3">{q}</td>
                              </tr>
                            );

                          return (
                            <tr key={i}>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {id}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {createdAt}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {firstName}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {lastName}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {church}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {age}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {pastor}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {ministry}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {expect}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {transfer}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {children}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {phone}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {email}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {city}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {days}
                              </td>
                              <td className="border-t-2 border-gray-200 px-4 py-3">
                                {q}
                              </td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              </div>
              <div className="flex mt-4 w-full">
                <button
                  onClick={loadUsers}
                  className="flex mr-2 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
                >
                  ПЕРЕЗАГРУЗИТЬ ПОЛЬЗОВАТЕЛЕЙ
                </button>
                <button
                  onClick={logout}
                  className="flex  text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
                >
                  ВЫЙТИ
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <form
        onSubmit={handleSubmit}
        className="container px-5 py-24 mx-auto flex flex-wrap items-center"
      >
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col mt-10 w-[400px] mx-auto">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            ФМЛ
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              СЕКРЕТНЫЙ ЛОГИН
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              СУПЕР СЕКРЕТНЫЙ ПАРОЛЬ
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
          >
            ВОЙТИ
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Если вы тут случайно, перейдите на главную{" "}
            <Link href="/">
              <span className="text-purple-500 cursor-pointer">страничку</span>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
