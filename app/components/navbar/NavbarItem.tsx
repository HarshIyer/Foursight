import Link from "next/link";

export default function NavbarItem(props: {
  title: string;
  link: string;
  active: boolean;
  component: React.ReactElement;
}) {
  return (
    <div
      // className={
      //   "bg-[#037A68]  text-white py-2 px-3 mx-2 my-2 font-extrabold text-2xl md:text-xl rounded-lg hover:bg-teal-800 transition transition-all-0.5s"
      // }
      className={
        "text-[#037A68]   py-2 px-3 mx-2 md:mx-0 my-2 font-extrabold text-2xl md:text-xl rounded-lg hover:text-teal-800 transition transition-all-0.5s"
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
