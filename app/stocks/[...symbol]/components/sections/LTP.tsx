export default function LTP(props: any) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <h1 className="font-medium text-2xl md:text-2xl mr-2">
          {" "}
          {props.companyName}
        </h1>
        <div className="hidden md:flex flex-row">
          <button className="flex bg-[#037A68] py-0 px-2 text-base text-white rounded-md hover:bg-teal-800 transition transition-all-0.5s ml-3">
            Buy
          </button>
          <button className="flex bg-[#CF0000] py-0 px-2 text-base text-white rounded-md hover:bg-red-700 transition transition-all-0.5s ml-3">
            Sell
          </button>
          <button className="flex border border-[#B8B8B8] bg-white py-0 px-2 text-base text-black rounded-md  ml-3">
            Watch
          </button>
        </div>
      </div>
      <div className="flex flex-row items-end h-full">
        <p className="text-black text-xl md:text-xl font-medium mr-2 md:mr-3">
          ₹ {JSON.stringify(props.ltp)}
        </p>
        <p
          className={
            props.dayChange >= 0
              ? `green-text text-md md:text-md font-semibold flex mt-auto items-end justify-end h-full`
              : `red-text text-md md:text-md font-semibold flex mt-auto items-end justify-end h-full`
          }
        >
          {props.dayChange.toFixed(2)} ({props.dayChange >= 0 ? "+" : ""}
          {props.dayChangePerc.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
}
