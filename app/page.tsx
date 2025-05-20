import Link from "next/link";


export default function Home() {
  return (

    <main className="flex flex-col gap-[32px]  sm:items-center h-screen  ">
      
        <h1 className="text-7xl mt-40 ">Home,Hello Word</h1>
        <Link href='/contact'
          className="bg-blue-700 w-80 h-10 rounded mt-10
        text-center hover:bg-white  text-black text-3xl  transition duration-500 ease-in-out"
        >Contact</Link>

    



    </main>


  );
}
