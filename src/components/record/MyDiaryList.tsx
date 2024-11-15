import { useMyDiary } from "../../hooks/useMyDiary";
import LinearButton from "../common/LinearButton";
import MyDiaryItem from "./MyDiary";

const MyDiaryList = () => {
  const { data, expand, setExpand } = useMyDiary();

  return (
    <div className="lg:w-[960px] w-full mt-[50px] mx-auto">
      <h1 className="uppercase text-dark-500 text-[23px] ">my diary</h1>
      <div className="lg:grid-cols-4 grid md:px-0 px-3 mx-auto gap-4 grid-cols-2 md:grid-cols-3">
        {data.map((e, idx) => (
          <MyDiaryItem
            key={idx}
            date={e.date}
            time={e.hour}
            content={e.content}
          />
        ))}
      </div>
      {!expand && (
        <div
          className="mx-auto mt-5 w-full  flex justify-center"
          onClick={() => setExpand()}
        >
          <LinearButton name="自分の日記をもっと見る" />
        </div>
      )}
    </div>
  );
};

export default MyDiaryList;
