import Layout from "../components/common";
import Recommend from "../components/column/Recommend";
import ColumnThumbnailList from "../components/column/ColumnThumbnailList";

function Column() {
  return (
    <Layout>
      <div className="Column lg:w-[960px] w-full lg:px-0 px-4 mt-5 mx-auto">
        <Recommend />
        <ColumnThumbnailList />
      </div>
    </Layout>
  );
}

export default Column;
