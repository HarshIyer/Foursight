import { apiURL } from "@/app/components/apiURL";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
moment().format();
export default function Orderbook(props: any) {
  let symbol = decodeURIComponent(props.symbol);

  const [sellOrdersData, setSellOrdersData] = useState<
    { price: number; qty: number }[]
  >([]);
  const [buyOrdersData, setBuyOrdersData] = useState<
    { price: number; qty: number }[]
  >([]);
  const [time, setTime] = useState("");
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
      setTime(
        moment(data?.data.orderData.tsInMillis * 1000).format(
          "MMMM Do YYYY h:mm A"
        )
      );
    }
    getOrderBookData();
  }, [symbol]);

  return (
    <div className="mt-2 mb-4">
      <h1 className="mb-2 font-semibold">Order Book</h1>
      <div className="mb-4 border border-2-[#E0E0E0] py-4 px-2 rounded-md text-sm">
        <h1>
          Last Updated: <span className="green-text">{time}</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="md:w-[50%]">
          <table className="w-full md:w-full border border-[#E0E0E0] mb-4 md:mb-0 rounded-md text-sm md:text-base border-separate border-spacing-x-4 border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 font-medium">
                <td>Bid Price</td>
                <td>Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(buyOrdersData).map(([key, value]) => (
                <tr key={key}>
                  <td>₹ {value.price}</td>
                  <td className="green-text">{value.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:w-[50%] ml-2">
          <table className="w-full md:w-full border border-[#E0E0E0] rounded-md text-sm md:text-base border-separate border-spacing-x-4 border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 font-medium">
                <td>Ask Price</td>
                <td>Quantity</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(sellOrdersData).map(([key, value]) => (
                <tr key={key}>
                  <td>₹ {value.price}</td>
                  <td className="red-text">{value.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
