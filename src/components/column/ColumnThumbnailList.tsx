import { useColumnThumbnail } from "../../hooks/useColumnThumbnail";
import LinearButton from "../common/LinearButton";
import ColumnThumbnail from "./ColumnThumbnail";

const ColumnThumbnailList = () => {
  const { data, setExpand, expand } = useColumnThumbnail();

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 mt-6">
        {data.map((item) => {
          return (
            <ColumnThumbnail
              key={item.type}
              name={item.name}
              time={item.time}
              type={item.type}
            />
          );
        })}
      </div>
      {!expand && (
        <div onClick={() => setExpand()} className="flex justify-center py-4">
          <LinearButton name="コラムをもっと見る" />
        </div>
      )}
    </>
  );
};

export default ColumnThumbnailList;
