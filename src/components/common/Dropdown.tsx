import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
  open: boolean;
  elements: string[] | ReactNode[];
}

function Dropdown({ children, open, elements }: Props) {
  return (
    <div className="relative z-50">
      {children}
      {open && (
        <ul className=" bg-gray-400 text-light absolute w-[280px] right-0">
          {elements.map((item, index) => {
            return item == "コラム一覧" ? (
              <NavLink key={index} to="/column">
                <li
                  className="px-8 py-5 cursor-pointer hover:text-primary-400"
                  style={{
                    boxShadow: "0px -0.5px 2px 0px #414141",
                  }}
                >
                  {item}
                </li>
              </NavLink>
            ) : item == "自分の記録" ? (
              <NavLink key={index} to="/records">
                <li
                  className="px-8 py-5 cursor-pointer hover:text-primary-400"
                  style={{
                    boxShadow: "0px -0.5px 2px 0px #414141",
                  }}
                >
                  {item}
                </li>
              </NavLink>
            ) : (
              <li
                key={index}
                className="px-8 py-5 cursor-pointer hover:text-primary-400"
                style={{
                  boxShadow: "0px -0.5px 2px 0px #414141",
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
