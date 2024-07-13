import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";

export default function Navbar() {
  return (
    <div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarPC />
      </div>
    </div>
  );
}
