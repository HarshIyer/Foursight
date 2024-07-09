import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";
const timestamp = require("unix-timestamp");

export default function WeeklyChart(props: any) {
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }
  const data = props.data;

  const dataFormatted = data.map((d: [number, number]) => {
    return [d[0] * 1000, d[1]];
  });

  const options: Highcharts.Options = {
    exporting: {
      enabled: false,
    },
    time: {
      timezone: "Asia/Kolkata",
    },

    title: {
      text: "This week's Price Movement",
    },
    chart: {
      plotBackgroundColor: "",
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "This week's Price Movement",
        color: "#037a68",
        type: "line",
        data: dataFormatted,
      },
    ],
    xAxis: {
      title: {
        text: "Time",
      },
      type: "datetime",
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
