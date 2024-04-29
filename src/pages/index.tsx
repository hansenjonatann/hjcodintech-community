import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Komunitas HJ Codin Tech</title>
      </Head>
      <Navbar />
      <div className="md:flex md:w-full">
        <div className="hidden md:block md:w-1/4  mx-2 mb-2 border-white border-2 rounded-md shadow  md:h-screen">
          <div className="flex-col">
            <ul>
              <li>
                <div className="my-4 mx-4 ">
                  <form action="">
                    <div className="flex">
                      <input
                        type="text"
                        name="pencarian"
                        id="pencarian"
                        placeholder="pencarian"
                        className="border-2 px-2   text-sm bg-black py-1 border-white rounded-md"
                      />
                    </div>
                  </form>
                </div>
              </li>

              <li className="my-4 mx-4">
                <Link href="/">
                  <div className="flex">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/1011681?v=4"
                    />
                    <div className="ml-2">
                      <p className="font-bold">@namapengguna</p>
                      <p className="text-sm">bio</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-white border-2  h-screen rounded-lg w-full mb-2">
          <div className="w-100 mx-2  my-2 border-2 border-white rounded-lg h-2/3"></div>
          <form className="flex gap-2 items-center">
            <input
              className="w-2/3 mx-2 my-8 bg-black px-4  border-indigo-700 border-2 rounded-lg h-16"
              placeholder="Ketikkan komentar anda..."
            ></input>
            <button
              type="submit"
              className="px-8 rounded-lg bg-indigo-600 py-5 text-lg"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
