import CanvasJSReact from '../../chart/canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const data = {
  line1: [
    { label: 6, y: 64 },
    { label: 7, y: 61 },
    { label: 8, y: 64 },
    { label: 9, y: 62 },
    { label: 10, y: 64 },
    { label: 11, y: 60 },
    { label: 12, y: 58 },
    { label: 1, y: 59 },
    { label: 2, y: 53 },
    { label: 3, y: 54 },
    { label: 4, y: 61 },
    { label: 5, y: 60 },
  ],
  line2: [
    { label: 6, y: 54 },
    { label: 7, y: 51 },
    { label: 8, y: 54 },
    { label: 9, y: 52 },
    { label: 10, y: 54 },
    { label: 11, y: 50 },
    { label: 12, y: 48 },
    { label: 1, y: 49 },
    { label: 2, y: 43 },
    { label: 3, y: 44 },
    { label: 4, y: 51 },
    { label: 5, y: 50 },
  ],
};
function BodyChart() {
  const options = {
    animationEnabled: true,
    theme: 'light1', // "light1", "dark1", "dark2"
    backgroundColor: '#414141',
    axisY: {
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      margin: 0,
      labelFormatter: function (e) {
        return '';
      },
    },
    axisX: {
      suffix: '月',
      interval: 1,
      gridDashType: 'solid',
      gridThickness: 1,
      lineThickness: 0,
      labelFontColor: '#FFFFFF',
    },
    data: [
      {
        color: '#FFCC21',
        lineColor: '#FFCC21',
        type: 'line',
        dataPoints: data.line1,
      },
      {
        color: '#8FE9D0',
        lineColor: '#8FE9D0',
        type: 'line',
        dataPoints: data.line2,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
}

export default BodyChart;
