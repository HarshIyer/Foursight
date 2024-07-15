import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { Suspense, useRef } from "react";
const timestamp = require("unix-timestamp");

export default function DailyChart(props: any) {
  const data = props.data;

  let chartColor = "#037a68";
  if (data.length > 0) {
    if (data[0][1] > data[data.length - 1][1]) {
      chartColor = "#ce0000";
    }
  }
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
        name: "Price",
        color: chartColor,
        type: "line",
        data: dataFormatted,
      },
    ],
    xAxis: {
      type: "datetime",

      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
      title: {
        text: "",
      },
      tickLength: 0,
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
      />
    </div>
  );
}
