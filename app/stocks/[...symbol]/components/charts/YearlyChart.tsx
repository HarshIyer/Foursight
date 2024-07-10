import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";
const timestamp = require("unix-timestamp");

export default function YearlyChart(props: any) {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }
  const data = props.data;
  const dataFormatted = data.map((d: [number, number]) => {
    return [d[0] * 1000, d[1]];
  });
  const options: Highcharts.Options = {
    time: {
      timezone: "Asia/Kolkata",
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "This year's Price Movement",
    },
    chart: {
      plotBackgroundColor: "",
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Price",
        color: "#037a68",
        type: "line",
        data: dataFormatted,
      },
    ],
    xAxis: {
      type: "datetime",
      title: {
        text: "Time",
      },
      ordinal: true,
    },
    yAxis: {
      title: {
        text: "Price",
      },
    },
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
