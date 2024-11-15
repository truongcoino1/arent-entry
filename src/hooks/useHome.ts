import { useState } from "react";

export const useHome = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [active, setActive] = useState<string>("all");
  const [data] = useState({
    data1: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    data2: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
  });

  return { expand, setExpand, active, setActive, data };
};
