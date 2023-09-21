import { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";

type EChartProps = {
  echartsOptions?: EChartsOption;
};

export const EChart: React.FC<EChartProps> = ({ echartsOptions }) => {
  return (
    <ReactECharts
      style={{
        height: "100%",
        width: "100%",
      }}
      option={echartsOptions}
    />
  );
};
