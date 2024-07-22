import { useEffect, useState } from "react";
import IndicesComponent from "../components/IndicesComponent";

export default function IndicesSection(props: any) {
  const data = props;
  let indicesData = [
    {
      SENSEX: {
        name: "SENSEX",
        data: data.data?.data?.exchangeAggRespMap.BSE.indexLivePointsMap["1"],
      },
      NIFTY: {
        name: "NIFTY",
        data: data.data?.data?.exchangeAggRespMap.NSE.indexLivePointsMap.NIFTY,
      },
      BANKNIFTY: {
        name: "BANKNIFTY",
        data: data.data?.data?.exchangeAggRespMap.NSE.indexLivePointsMap
          .BANKNIFTY,
      },
      NIFTYMIDSELECT: {
        name: "NIFTYMIDSELECT",
        data: data.data?.data?.exchangeAggRespMap.NSE.indexLivePointsMap
          .NIFTYMIDSELECT,
      },
      FINNIFTY: {
        name: "FINNIFTY",
        data: data.data?.data?.exchangeAggRespMap.NSE.indexLivePointsMap
          .FINNIFTY,
      },
    },
  ];
  const indicesList = indicesData[0]; // Access the first (and only) element in the array
  return (
    <div className="mt-4 ">
      <h1 className="font-semibold text-xl mb-4">Indices</h1>
      <div className="flex flex-row overflow-x-scroll mt-4">
        <IndicesComponent data={indicesList.SENSEX} />
        <IndicesComponent data={indicesList.NIFTY} />
        <IndicesComponent data={indicesList.BANKNIFTY} />
        <IndicesComponent data={indicesList.NIFTYMIDSELECT} />
        <IndicesComponent data={indicesList.FINNIFTY} />
      </div>
    </div>
  );
}
