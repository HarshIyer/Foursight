import { NavTransition } from "@/app/components/navbar/NavTransition";

export default function OrderTable(props: any) {
  const { data } = props;
  let length = data.length;
  let newArray = data.slice(length - 10, length).reverse();
  return (
    <div className="w-full overflow-x-scroll">
      <table className="border-separate border-spacing-x-2 border-spacing-y-4 md:border-spacing-2 w-full text-sm text-center">
        <thead>
          <tr className=" font-semibold text-gray-500 border-separate border-spacing-5">
            <td className="text-start ">SCRIP</td>
            <td>QUANTITY</td>
            <td>PRICE</td>
            <td>TYPE</td>
            <td>DATE</td>
          </tr>
          <tr>
            <td colSpan={5}>
              <hr />
            </td>
          </tr>
        </thead>
        <tbody>
          {newArray.map((order: any) => {
            return (
              <tr key={order.scrip}>
                <td className="text-start font-semibold">
                  <NavTransition
                    className=""
                    href={`/stocks/${encodeURIComponent(order.scrip)}`}
                  >
                    {order.scrip}{" "}
                  </NavTransition>
                </td>
                <td className="text-gray-600 font-semibold">
                  {order.quantity}
                </td>
                <td
                  className={`green-text font-semibold ${order.type === "SELL" ? "red-text" : "green-text"}`}
                >
                  ₹{order.price.toFixed(1)}
                </td>
                <td
                  className={` font-semibold ${order.type === "SELL" ? "red-text" : "green-text"}`}
                >
                  {order.type}
                </td>{" "}
                <td className="green-text font-semibold">
                  {new Date(order.time).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
