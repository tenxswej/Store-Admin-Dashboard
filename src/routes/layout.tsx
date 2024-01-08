import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.component";
import SideBar from "./components/SideBar.component";
import MobileMenu from "./components/MobileMenuBar";

const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);



  return (
    <main className='min-h-screen bg-background selection:bg-none duration-200 transition-all'>
      <header className='sticky top-0 z-10 flex flex-col antialiased  text-primary'>
        <Header setOpen={setOpen} />
      </header>
      <section className='flex flex-row items-start w-full max-w-[2500px] mx-auto p-4'>
        {/* Not a good idea to have an empty div like this but it does solve the problem so.. */}
        <div
          className='hidden md:block md:min-w-[180px] md:max-w-[180px] h-screen'
          style={{ visibility: "hidden" }}
        />
        <SideBar />
        <MobileMenu open={open} setOpen={setOpen} />
        <div className='w-full'>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
