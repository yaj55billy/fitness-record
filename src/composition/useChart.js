import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, LineChart, CanvasRenderer]);

const useChart = (element) => {
  const lineChart = echarts.init(element);

  const setOption = (data) => {
    const option = data;
    return lineChart.setOption(option);
  };

  const resize = () => lineChart.resize();

  return {
    setOption,
    resize,
  };
};

export default useChart;
