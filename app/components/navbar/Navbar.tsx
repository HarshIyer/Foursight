import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
    </div>
  );
}
