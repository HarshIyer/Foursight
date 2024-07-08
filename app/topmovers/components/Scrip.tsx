import Link from "next/link";

export default function Scrip(props: {
  title: string;
  symbol: string;
  ltp: number;
  change: number;
  changePercent: number;
  yearlyHigh: number;
  yearlyLow: number;
  volume: string;
  color: string;
}) {
  return (
    <tr className="text-2xl border border-1 border-[#858585] rounded-xl">
      <td className="px-2 py-6">
        <Link href={`/stocks/${props.symbol}`}>{props.title} </Link>
      </td>
      <td
        className={
          props.color === "Green"
            ? "green-text"
            : props.color === "Red"
            ? "red-text"
            : "text-black"
        }
      >
        <Link href={`/stocks/${props.symbol}`}>₹{props.ltp}</Link>
      </td>
      <td
        className={
          props.color === "Green"
            ? "green-text"
            : props.color === "Red"
            ? "red-text"
            : "text-black"
        }
      >
        <Link href={`/stocks/${props.symbol}`}>₹{props.yearlyHigh}</Link>
      </td>
      <td
        className={
          props.color === "Green"
            ? "green-text"
            : props.color === "Red"
            ? "red-text"
            : "text-black"
        }
      >
        <Link href={`/stocks/${props.symbol}`}>₹{props.yearlyLow}</Link>
      </td>
      <td
        className={
          props.color === "Green"
            ? "green-text"
            : props.color === "Red"
            ? "red-text"
            : "text-black"
        }
      >
        <Link href={`/stocks/${props.symbol}`}>{props.volume}</Link>
      </td>
    </tr>
  );
}
