import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-[#BCBCBC] my-2 mx-2 rounded-xl px-2 py-1">
      <div className="flex flex-row">
        <NavbarItem title="Home" link="/" active={false} />
        <NavbarItem title="Watchlist" link="/watchlist" active={false} />
        <NavbarItem title="Find Stocks" link="/search" active={false} />
      </div>
      <div className="flex flex-row">
        <NavbarItem title="Account" link="/account" active={false} />
      </div>
    </div>
  );
}
