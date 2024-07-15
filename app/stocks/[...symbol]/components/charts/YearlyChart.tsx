import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";

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
        color: "#037a68",
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
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
}
