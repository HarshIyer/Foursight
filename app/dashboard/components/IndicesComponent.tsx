export default function IndicesComponent(props: any) {
  let data = props.data;
  return (
    <div className="flex mr-4 flex-col px-4 text-lg w-fit p-2 border-2 rounded-md">
      <div
        className={`mb-2 font-medium text-sm  ${data.data?.dayChange > 0 ? "green-text" : "red-text"}`}
      >
        {data.name}
      </div>
      <div
        className={`${data.data?.dayChange > 0 ? "green-text" : "red-text"} flex font-semibold flex-row `}
      >
        <p className="mr-2 mt-auto">{data.data?.value}</p>
        <p className="text-sm mt-auto ">{data.data?.dayChange.toFixed(2)}</p>
        <p className="text-sm mt-auto ">
          ({data.data?.dayChangePerc.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
}
