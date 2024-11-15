import { useRecordSummary } from "../../hooks/useRecordSummary";
import RecordCategory from "./RecordCategory";

const RecordSummary = () => {
  const { data } = useRecordSummary();

  return (
    <div className="flex my-[50px] lg:w-[960px] lg:px-0 px-3 w-full justify-between mx-auto scroll-smooth">
      <div className="grid lg:grid-cols-3 cursor-pointer gap-2 grid-cols-2">
        {data.map((item) => (
          <RecordCategory
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordSummary;
