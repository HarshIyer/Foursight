import Link from "next/link";

export default function NavbarItem(props: {
  title: string;
  link: string;
  active: boolean;
}) {
  return (
    <div
      className={
        "bg-[#037A68] text-white py-2 px-3 mx-2 my-2 font-extrabold text-xl rounded-lg"
      }
    >
      <Link href={props.link}>
        <p>{props.title}</p>
      </Link>
    </div>
  );
}
