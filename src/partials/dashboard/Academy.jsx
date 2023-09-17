import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  const { labels, values } = useAcademystats();
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const chartData = {
    labels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: values,
        backgroundColor: labels?.map(label => {
          // 检查标签是否为"管理學院"，是的话设置为银色，否则使用随机颜色
          if (label === "管理學院") {
            return "silver";
          } else if (label === "社會科學院" || label === "法律學院") {
            return "purple";
          } else if (label === "電資學院") {
            return "blue";
          } else if (label === "創新學院") {
            return "#00B8B8";
          } else if (label === "理學院") {
            return "yellow";
          } else if (label === "文學院") {
            return "#EDEDED";
          } else if (label === "醫學院") {
            return "#009400";
          }else if (label === "工學院") {
            return "orange";
          } else {
            return getRandomColor();
          }
        }),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full  dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 bg-white">
      {/* <header className=""> */}
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
