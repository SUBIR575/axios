import { useRef } from "react";
import { useActiveMenu } from "react-active-menu";
import classNames from "classnames";
import Test from "./Test";
import Theme from "./Theme";

export default function Home() {
  const scrollableRef = useRef();
  const { active, handleTriggerClick, registerSectionRef, registerTriggerRef } =
    useActiveMenu({
      scrollableElement: scrollableRef.current,
    });
  const data = [
    {
      id: 1,
      des: "loram ispam this is 1",
    },
    {
      id: 2,
      des: "loram ispam this is 2",
    },
    {
      id: 3,
      des: "loram ispam this is 3",
    },
    {
      id: 4,
      des: "loram ispam this is 4",
    },
    {
      id: 5,
      des: "loram ispam this is 5",
    },
    {
      id: 6,
      des: "loram ispam this is 6",
    },
    {
      id: 7,
      des: "loram ispam this is 7",
    },
    {
      id: 8,
      des: "loram ispam this is 8",
    },
    {
      id: 9,
      des: "loram ispam this is 9",
    },
    {
      id: 10,
      des: "loram ispam this is 10",
    },
    {
      id: 11,
      des: "loram ispam this is 11",
    },
  ];
  return (
    <>
      <nav className="triggers">
        <ul>
          {data.map((i) => (
            <li>
              <button
                className={classNames({ active: active === i.id })}
                onClick={handleTriggerClick(i?.id)}
                ref={registerTriggerRef(i?.id)}
                type="button"
              >
                {i.id}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sections" ref={scrollableRef}>
        {data.map((i) => (
          <section ref={registerSectionRef(i.id)}>
            <h2>Section {i.id}</h2>
            <p>{i.des}</p>
          </section>
        ))}
      </div>
      <Theme />
    </>
  );
}
