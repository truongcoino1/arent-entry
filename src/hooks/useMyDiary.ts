import { useState } from "react";

const dummyData = new Array(8).fill(0).map((e, i) => {
  return {
    date: "2021-01-01",
    hour: "12:00",
    content:
      "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  };
});
export const useMyDiary = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [data, setData] = useState([...dummyData]);
  const onExpand = () => {
    setData((preState) => [...preState, ...dummyData]);
    setExpand(true);
  };
  return {
    data,
    expand,
    setExpand: onExpand,
  };
};
