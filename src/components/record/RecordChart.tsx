import { useRecordChart } from "../../hooks/useRecordChart";
import Chart from "../common/Chart";

const RecordChart = () => {
  const { data, dateType, type, setType } = useRecordChart();

  return (
    <div className="lg:w-[960px] w-full lg:px-0 px-3 bg-[#2E2E2E] mx-auto ">
      <div className="px-5 flex items-center gap-1 py-3">
        <span className="font-inter text-[15px] text-white ">
          BODY <br /> RECORD
        </span>
        <p className="text-white font-inter text-[15px] ml-2">2021.05.21</p>
      </div>
      <Chart data={data} />
      <div className="flex p-5 gap-5">
        {dateType.map((date: string) => (
          <span
            key={date}
            onClick={() => setType(date)}
            className={`${
              type == date
                ? "bg-primary-300 text-white"
                : "bg-white text-primary-300"
            } w-[56px] cursor-pointer h-[24px] rounded-[50px] flex items-center justify-center`}
          >
            {date}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecordChart;
