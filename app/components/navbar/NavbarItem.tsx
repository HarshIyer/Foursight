import Link from "next/link";

export default function NavbarItem(props: {
  title: string;
  link: string;
  active: boolean;
  component: React.ReactElement;
}) {
  return (
    <div
      className={
        "text-[#037A68] py-1 px-2 mx-2 md:mr-1 my-2 font-semibold text-xl md:text-xl rounded-lg hover:text-teal-800 transition transition-all-1.5s hover:bg-teal-700 "
      }
    >
      <div className="hidden md:block">
        <Link href={props.link}>
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="block md:hidden">
        <Link href={props.link}>{props.component}</Link>
      </div>
    </div>
  );
}
