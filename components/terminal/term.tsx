import classNames from "classnames";
import styles from "@/styles/term.module.css";
import { forwardRef, KeyboardEventHandler, useState } from "react";

export type TerminalCommands = {
  [command: string]: () => void;
};

const Term = (props, ref) => {
  const [value, setValue] = useState("");

  const pushToHistory = () => {
    console.log("push to history");
  };

  /*
  const commands = useMemo(
    () => ({
      start: async () => {
        await pushToHistory(
          <>
            <div>
              <strong>Starting</strong> the server...{" "}
              <span style={{ color: "green" }}>Done</span>
            </div>
          </>
        );
      },
      alert: async () => {
        alert("Hello!");
        await pushToHistory(
          <>
            <div>
              <strong>Alert</strong>
              <span style={{ color: "orange", marginLeft: 10 }}>
                <strong>Shown in the browser</strong>
              </span>
            </div>
          </>
        );
      },
    }),
    [pushToHistory]
  );
   */

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      console.log("Pressed Enter");
      event.preventDefault();
    } else if (event.key === "Tab") {
      console.log("Pressed tab");
      event.preventDefault();
    }
  };

  const changeInput = (value) => {
    setValue(value.replaceAll(" ", "&nbsp;"));
  };

  return (
    <div className="flex">
      <div className="font-bold">guest@miguel ~ %&nbsp;</div>
      <span className={classNames(styles.growingInput, "inline-grid group")}>
        <input
          ref={ref}
          onKeyDown={handleKeyDown}
          type="text"
          maxLength={20}
          className="font-bold focus:outline-0 border-none focus:ring-0 p-0 w-full block relative caret-transparent"
          onChange={(event) => changeInput(event.target.value)}
        />
        <span
          className={classNames(
            styles.dummy,
            "pointer-events-none font-bold invisible",
            "inline-block relative max-w-min",
            "after:visible after:absolute after:inset-y-0.5 after:-right-3 after:inline-block after:bg-gray-900 after:align-top after:aspect-[9/16]",
            "group-focus-within:after:animate-none"
          )}
          dangerouslySetInnerHTML={{ __html: value }}
        ></span>
      </span>
    </div>
  );
};

export default forwardRef<HTMLInputElement>(Term);
