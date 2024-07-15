import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";
const timestamp = require("unix-timestamp");

export default function MonthlyChart(props: any) {
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
      text: "",
    },
    chart: {
      plotBackgroundColor: "",
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        color: "#037a68",
        name: "Price",

        type: "line",
        data: dataFormatted,
      },
    ],
    xAxis: {
      tickLength: 0,
      type: "datetime",
      title: {
        text: "",
      },
      ordinal: true,
    },
    yAxis: {
      tickLength: 0,
      title: {
        text: "",
      },
    },
  };

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
        constructorType={"chart"}
      />
    </div>
  );
}
