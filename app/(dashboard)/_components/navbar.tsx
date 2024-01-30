import NavbarRoutes from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      {/* will have multiple resuable navbars in app, so not in _components */}
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
