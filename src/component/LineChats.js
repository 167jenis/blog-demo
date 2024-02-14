import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChats = () => {
  const series = [
    {
      name: "High - 2013",
      data: [
        {
          x: "2-1-2017 GMT",
          y: 34,
        },
        {
          x: "2-2-2017 GMT",
          y: 43,
        },
        {
          x: "2-3-2017 GMT",
          y: 33,
        },
        {
          x: "2-4-2017 GMT",
          y: 52,
        },
        {
          x: "2-5-2017 GMT",
          y: 22,
        },
        {
          x: "2-6-2017 GMT",
          y: 20,
        },
        {
          x: "2-7-2017 GMT",
          y: 56,
        },
        {
          x: "2-8-2017 GMT",
          y: 40,
        },
        {
          x: "2-9-2017 GMT",
          y: 30,
        },
        {
          x: "2-10-2017 GMT",
          y: 30,
        },
        {
          x: "2-11-2017  GMT",
          y: 56,
        },
      ],
    },
  ];
  const options = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },

    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    // yaxis: {
    //   labels: {
    //     formatter: function (val) {
    //       return (val / 1000000).toFixed(0);
    //     },
    //   },
    //   title: {
    //     text: "Price",
    //   },
    // },
    xaxis: {
      type: "datetime",
    },
  };
  //   const options = {
  //     chart: {
  //       height: 350,
  //       type: "line",
  //       dropShadow: {
  //         enabled: true,
  //         color: "#000",
  //         top: 18,
  //         left: 7,
  //         blur: 10,
  //         opacity: 0.2,
  //       },
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     colors: ["#77B6EA", "#545454"],
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     title: {
  //       text: "Average High & Low Temperature",
  //       align: "left",
  //     },
  //     grid: {
  //       borderColor: "#e7e7e7",
  //       row: {
  //         colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },
  //     markers: {
  //       size: 1,
  //     },
  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //       title: {
  //         text: "Month",
  //       },
  //     },
  //     yaxis: {
  //       title: {
  //         text: "Temperature",
  //       },
  //       min: 5,
  //       max: 40,
  //     },
  //     legend: {
  //       position: "top",
  //       horizontalAlign: "right",
  //       floating: true,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },
  //   };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default LineChats;
