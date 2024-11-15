import { useFoodList } from "../../hooks/useFoodList";
import LinearButton from "../common/LinearButton";
import FoodItem from "./FoodItem";

type Props = {
  active: string;
  expand: boolean;
  setExpand: (expand: boolean) => void;
};
const FoodList = ({ active, expand, setExpand }: Props) => {
  const { data } = useFoodList();

  return (
    <div className="lg:w-[960px] w-full mt-[50px] flex flex-col md:px-0 px-4 items-center mx-auto">
      <div className="gap-[6px] grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">
        {data
          .filter((el) => (active !== "all" ? el.category == active : true))
          .slice(0, expand ? data.length : 8)
          .map((e, i) => (
            <FoodItem key={i} title={e.title} url={e.url} />
          ))}
      </div>
      {!expand && (
        <div onClick={() => setExpand(true)} className="mt-5 mx-auto">
          <LinearButton name="記録をもっと見る" />
        </div>
      )}
    </div>
  );
};

export default FoodList;
