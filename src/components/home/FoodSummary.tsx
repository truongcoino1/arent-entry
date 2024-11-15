import d01 from "/assets/images/d01.jpg";
import threeFour from "/assets/icons/threefour.svg";

const FoodSummary = () => {
  return (
    <div className="flex-[40%] relative">
      <img src={d01} alt="d01" className="w-full object-cover h-[400px]" />
      <img
        src={threeFour}
        alt="threefour"
        className="absolute top-[25%] left-[35%]"
      />
      <div className="flex absolute top-[43%] left-[44%] text-white items-end justify-center">
        <div className="text-sm">05/21</div>
        <div className="text-2xl">75%</div>
      </div>
    </div>
  );
};

export default FoodSummary;
