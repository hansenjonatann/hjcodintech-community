import Navbar from "@/components/Navbar";
import { Main } from "next/document";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HJ Codin Community</title>
      </Head>
      <Navbar />
    </>
  );
}
