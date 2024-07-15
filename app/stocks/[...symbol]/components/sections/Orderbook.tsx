import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Orderbook(props: any) {
  let symbol = decodeURIComponent(props.symbol);

  const [sellOrdersData, setSellOrdersData] = useState<
    { price: number; qty: number }[]
  >([]);
  const [buyOrdersData, setBuyOrdersData] = useState<
    { price: number; qty: number }[]
  >([]);
  useEffect(() => {
    async function getOrderBookData() {
      let data;
      try {
        data = await axios.post(`${apiURL}/getOrderBook`, {
          symbol: symbol,
        });
      } catch (err) {
        console.error(err);
      }
      setSellOrdersData(data?.data.orderData.sellBook);
      setBuyOrdersData(data?.data.orderData.buyBook);
    }
    getOrderBookData();
  }, [symbol]);

  return (
    <div className="mt-2 mb-4">
      <h1 className="mb-4 font-semibold">Order Book</h1>
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="md:w-[50%]">
          <table className="w-full md:w-full border border-[#E0E0E0] mb-4 md:mb-0 rounded-md text-sm md:text-base border-separate border-spacing-x-4 border-spacing-y-2">
            <thead>
              <tr className="green-text">
                <th>Bid Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(buyOrdersData).map(([key, value]) => (
                <tr key={key}>
                  <td>₹ {value.price}</td>
                  <td>{value.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:w-[50%] ml-2">
          <table className="w-full md:w-full border border-[#E0E0E0] rounded-md text-sm md:text-base border-separate border-spacing-x-4 border-spacing-y-2">
            <thead>
              <tr className="green-text">
                <th>Ask Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(sellOrdersData).map(([key, value]) => (
                <tr key={key}>
                  <td>₹ {value.price}</td>
                  <td>{value.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
