import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar(props: any) {
  let logStatus = props.logStatus;
  return (
    <div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop logStatus={logStatus} />
      </div>
    </div>
  );
}
