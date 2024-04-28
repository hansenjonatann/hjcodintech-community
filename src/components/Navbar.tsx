import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navList = [
    {
      id: 1,
      label: "Beranda",
      url: "/",
    },
    {
      id: 2,
      label: "Forum",
      url: "/forum",
    },
    {
      id: 3,
      label: "Showcase",
      url: "/showcase",
    },
  ];

  return (
    <>
      <nav className="flex  w-full px-8 justify-between p-4 items-center">
        <Link href="/" className=" text-md md:block md:text-lg font-bold">
          Komunitas HJ Codin Tech{" "}
        </Link>
        <div className="flex flex-1 justify-end">
          <button
            className=" md:hidden text-white hover:text-indigo-600 focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <ul className="flex gap-4 items-center">
            {navList.map((item) => (
              <Link key={item.id} href={item.url} className="hidden md:block">
                {item.label}
              </Link>
            ))}
            <Link href="/daftar" className="hidden md:block">
              Daftar
            </Link>
            <Link
              href="/masuk"
              className=" hidden md:block text-white bg-blue-700 px-3 py-2 rounded shadow-md"
            >
              Masuk
            </Link>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="block w-full transition-all duration-150 ease-in-out md:w-0 md:hidden bg-white backdrop-blur-md py-4 px-4 md:py-0 md:px-0 text-black ">
          <ul>
            {navList.map((nav) => (
              <Link key={nav.id} href={nav.url} className="block">
                {nav.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
