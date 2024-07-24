import { NavTransition } from "@/app/components/navbar/NavTransition";

export default function HoldingTable(props: any) {
  const { data } = props;
  return (
    <div className="w-full    overflow-x-scroll">
      <table className="border-separate border-spacing-x-2 border-spacing-y-4 md:border-spacing-2 w-full text-sm text-center">
        <thead>
          <tr className=" font-semibold text-gray-500 border-separate border-spacing-5">
            <td className="text-start ">SCRIP</td>
            <td>QUANTITY</td>
            <td>BUY</td>
            <td>VALUE</td>
          </tr>
          <tr>
            <td colSpan={5}>
              <hr />
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((holding: any) => {
            return (
              <tr key={holding.scrip}>
                <td className="text-start font-semibold">
                  <NavTransition
                    className=""
                    href={`/stocks/${encodeURIComponent(holding.scrip)}`}
                  >
                    {holding.scrip}{" "}
                  </NavTransition>
                </td>
                <td className="text-gray-600 font-semibold">
                  {holding.quantity}
                </td>
                <td className="green-text font-semibold">
                  ₹{holding.buyPrice.toFixed(1)}
                </td>
                <td className="green-text font-semibold">
                  ₹{(holding.quantity * holding.buyPrice).toFixed(0)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
