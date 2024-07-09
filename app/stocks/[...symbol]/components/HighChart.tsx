import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";
const timestamp = require("unix-timestamp");

export default function HighChart(props: any) {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }
  const data = [
    [1720496700, 210.87],
    [1720496760, 211.61],
    [1720496820, 209.79],
    [1720496880, 206.85],
    [1720496940, 207.84],
  ];

  const dataFormatted = data.map((d) => {
    return [`${timestamp.toDate(d[0])}`, d[1]];
  });

  const options: Highcharts.Options = {
    title: {
      text: "Today's Price Movement",
    },
    series: [
      {
        type: "line",
        data: dataFormatted,
      },
    ],
  };
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
}
