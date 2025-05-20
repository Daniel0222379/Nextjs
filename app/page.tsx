import Link from "next/link";
import Image from 'next/image';
import "./globals.css";



export default function Home() {
  return (

    <main className="flex flex-col gap-[32px]  items-center h-screen min-w-[250px] ">



      <h1 className=" text-5xl mt-40 md:text-7xl ">Hello Class</h1>

      <p className="text-2xl md:text-4xl">My name is Daniel.</p>
      <Image
        width={200}
        height={200}
        src='/hello-hi.gif'
        alt="Saludo animado"
        className=" max-w-[200px] md:max-w-[400px] "
      />
      <Link href='/paternal'
        className="bg-blue-700 w-30 h-10 rounded mt-10 btn2
        text-center hover:bg-white  text-black text-3xl md:w-80  transition duration-500 ease-in-out"
      >Ready</Link>





    </main>


  );
}
