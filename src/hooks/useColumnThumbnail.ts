import { useState } from "react";
import columnData from "../../mock/thumbnail.json";

export const useColumnThumbnail = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [data, setData] = useState(columnData.thumbnail);

  const onExpand = () => {
    setData((preState) => [...preState, ...columnData.extraThumbnail]);
    setExpand(true);
  };
  return {
    data,
    setExpand: onExpand,
    expand,
  };
};
