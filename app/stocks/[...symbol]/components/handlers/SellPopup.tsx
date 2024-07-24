import { useState } from "react";

export default function SellPopup(props: any) {
  const [quantity, setQuantity] = useState(0);

  function updateQuantity(e: any) {
    setQuantity(e.target.value);

    if (e.target.value < 0) {
      setQuantity(0);
      return;
    } else if ((e.target.value = NaN)) {
      setQuantity(0);
      return;
    }
  }

  function handleBuy(e: any) {
    e.preventDefault();
  }

  return (
    <div className="bg-white mx-4 my-2">
      <div className="flex flex-row">
        <h1 className="text-3xl  red-text mr-2">SELL</h1>
        <h1 className="text-2xl">{props.companyName}</h1>
      </div>
      <div className="mt-2 text-lg">
        LTP: <span className="ml-1 font-semibold red-text">₹ {props.ltp}</span>
      </div>
      <div>
        <form onSubmit={handleBuy}>
          <div className="text-lg flex flex-col mt-4">
            <label className="text-xl ">Quantity</label>
            <input
              type="number"
              className="border border-[#B8B8B8] rounded-md my-2 p-2"
              value={quantity}
              onChange={updateQuantity}
            />
            <h1>Total value: {(quantity * props.ltp).toFixed(2)}</h1>
            <div className="flex justify-center items-center">
              <button className="mt-2 flex w-fit px-4 text-xl font-semibold p-2 bg-[#037A68] text-white  rounded-md">
                Buy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
