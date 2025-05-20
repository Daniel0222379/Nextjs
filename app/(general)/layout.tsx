import { NavBar } from "@/components";

export default function GenealLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className=" flex flex-col items-center">
        <h1 className="text-4xl mt-10 md:text-7xl">This is my family </h1>
        {children}

      </div>

    </div>
  );
}
