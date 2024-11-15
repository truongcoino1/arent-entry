import { useMyExercise } from "../../hooks/useMyExercise";

function ExerciseList() {
  const { data } = useMyExercise();
  return (
    <div className="lg:w-[960px] w-full lg:px-10 mt-[50px] px-2 lg:pb-10 pb-6 bg-dark-500 mx-auto">
      <div className="exercise-list flex items-center gap-1 py-3">
        <span className="font-inter text-[15px] text-white ">
          MY <br /> EXERCISE
        </span>
        <p className="text-white font-inter text-[15px] ml-2">2021.05.21</p>
      </div>
      <div className="h-[264px] flex text-light justify-between md:p-8 p-4 overflow-y-scroll w-full">
        <ul className="list-disc w-[45%]">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-gray-400 py-2"
            >
              <div>
                <div className="flex items-center">
                  <div className="h-[7px] w-[7px] bg-light rounded-full mr-3"></div>
                  <div>{item.headline}</div>
                </div>
                <span className="ml-4 text-primary-300">{item.kcal}kcal</span>
              </div>
              <div className="text-primary-300 text-[18px]">
                {item.mins} min
              </div>
            </li>
          ))}
        </ul>
        <ul className="list-disc w-[45%]">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-gray-400 py-2"
            >
              <div>
                <div className="flex items-center">
                  <div className="h-[7px] w-[7px] bg-light rounded-full mr-3"></div>
                  <div>{item.headline}</div>
                </div>
                <span className="ml-4 text-primary-300">{item.kcal}kcal</span>
              </div>
              <div className="text-primary-300 text-[18px]">
                {item.mins} min
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExerciseList;
