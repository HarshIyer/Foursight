import { NavTransition } from "@/app/components/navbar/NavTransition";

export default function HoldingTable(props: any) {
  const { data, profitData } = props;

  function getProfitsByScrip(scrip: string) {
    for (let i = 0; i < profitData.length; i++) {
      if (profitData[i].scrip === scrip) {
        return profitData[i].profit.toFixed(2);
      }
    }
  }

  function getProfitPerScrip(scrip: string) {
    for (let i = 0; i < profitData.length; i++) {
      if (profitData[i].scrip === scrip) {
        return profitData[i].profitPerShare.toFixed(2);
      }
    }
  }
  function getLTP(scrip: string) {
    for (let i = 0; i < profitData.length; i++) {
      if (profitData[i].scrip === scrip) {
        return profitData[i].ltp.toFixed(2);
      }
    }
  }
  return (
    <div className="w-full    overflow-x-scroll">
      <table className="border-separate border-spacing-x-2 border-spacing-y-4 md:border-spacing-2 w-full text-sm text-center">
        <thead>
          <tr className=" font-semibold text-gray-500 border-separate border-spacing-5">
            <td className="text-start ">SCRIP</td>
            <td>QUANTITY</td>
            <td>BUY</td>
            <td>LTP</td>
            <td>P/L</td>
            <td>EPS</td>
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
                <td className={`font-semibold text-gray-600`}>
                  ₹{getLTP(holding.scrip)}
                </td>{" "}
                <td
                  className={`font-semibold ${getProfitsByScrip(holding.scrip) > 0 ? "green-text" : "red-text"}`}
                >
                  {getProfitsByScrip(holding.scrip)}
                </td>
                <td
                  className={`font-semibold ${getProfitPerScrip(holding.scrip) > 0 ? "green-text" : "red-text"}`}
                >
                  {getProfitPerScrip(holding.scrip)}
                </td>
                <td className="text-gray-600 font-semibold">
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
