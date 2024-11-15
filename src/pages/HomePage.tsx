import Hexagon from "../components/home/Hexagon";
import { categories } from "../../mock/foods";
import Chart from "../components/common/Chart";
import Layout from "../components/common";
import { useHome } from "../hooks/useHome";
import FoodList from "../components/home/FoodList";
import FoodSummary from "../components/home/FoodSummary";
function HomePage() {
  const { data, setActive, setExpand, active, expand } = useHome();

  return (
    <Layout>
      <div>
        <div className="flex w-full">
          <FoodSummary />
          <div className="lg:flex-[60%] w-full">
            <Chart data={data} />
          </div>
        </div>
        <div className="flex mx-auto cursor-pointer items-center lg:w-[700px] gap-2 w-[95%] justify-between mt-10">
          {categories.map((e) => (
            <Hexagon
              onClick={() => setActive(e.name)}
              key={e.name}
              type={e.type}
              name={e.name}
            />
          ))}
        </div>
        <FoodList active={active} setExpand={setExpand} expand={expand} />
      </div>
    </Layout>
  );
}

export default HomePage;
