import Layout from "../components/common";
import ExerciseList from "../components/record/ExerciseList";
import RecordSummary from "../components/record/RecordSummary";
import RecordChart from "../components/record/RecordChart";
import MyDiaryList from "../components/record/MyDiaryList";

function Records() {
  return (
    <Layout>
      <RecordSummary />
      <RecordChart />

      <ExerciseList />

      <MyDiaryList />
    </Layout>
  );
}

export default Records;
