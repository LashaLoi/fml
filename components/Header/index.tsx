import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed flex justify-between px-6 py-4 w-full content-center z-10 backdrop-blur-sm bg-white/90 border-b-2">
      <Link
        href="/"
        className="flex items-center md:justify-start justify-center text-gray-900"
      >
        <span className="sm:text-3xl text-lg">ФМЛ / EXTRA</span>
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://t.me/fml_next_bot"
        className="relative px-5 py-2 font-medium text-white group bg-gray-700 hover:bg-gray-800 active:bg-gray-900 flex gap-4 justify-between"
      >
        РЕГИСТРАЦИЯ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="white"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 455 455"
          xmlSpace="preserve"
        >
          <g>
            <path
              style={{ fillRule: "evenodd", clipRule: "evenodd" }}
              d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136   c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981   c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959   C379.675,88.517,386.19,94.049,384.814,100.68z"
            />
            <path
              style={{ fillRule: "evenodd", clipRule: "evenodd" }}
              d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068   l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822   C318.739,149.061,316.115,145.614,313.567,147.179z"
            />
          </g>
        </svg>
      </a>
    </nav>
  );
}
