import { NavBar } from "@/components";
import { NavMobile } from '@/components'

export default function GenealLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col w-full ">
      <header>
        <NavMobile />
        <NavBar />

      </header>

      <div className=" flex flex-col items-center">
        <h1 className="text-xl mt-10 text-4xl md:text-7xl bg-blue-700 w-90 h-10 md:h-22 p-2 text-center rounded md:w-200">
          This is my family </h1>
        {children}

      </div>

    </div>
  );
}
