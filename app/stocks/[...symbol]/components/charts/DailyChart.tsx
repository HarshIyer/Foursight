import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { Suspense, useRef } from "react";
const timestamp = require("unix-timestamp");

export default function DailyChart(props: any) {
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
      text: "Today's Price Movement",
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

      dateTimeLabelFormats: {
        hour: "%H:%M",
      },
      title: {
        text: "Time",
      },
    },
    yAxis: {
      title: {
        text: "Price",
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
