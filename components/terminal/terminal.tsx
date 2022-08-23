import styles from "@/styles/terminal.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function Terminal() {
  const [value, setValue] = useState("");

  const changeInput = (value) => {
    setValue(value.replaceAll(" ", "&nbsp;"));
  };

  return (
    <div className="font-mono flex flex-col bg-white/50 backdrop-blur-sm backdrop-blur-xl border-2 border-current px-4 py-3 space-y-6">
      <div className="shrink-0 grid grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-red-500 w-3.5 h-3.5"></div>
          <div className="rounded-full bg-yellow-500 w-3.5 h-3.5"></div>
          <div className="rounded-full bg-green-500 w-3.5 h-3.5"></div>
        </div>
        <div className="text-center">bash</div>
      </div>
      <div className="flex-1">
        <div className="font-bold">guest@miguel ~ % cat welcome.txt</div>
        <div className="text-gray-700">
          Hey Folks! Welcome to my personal website where you can discover more
          about me, my interest for web development and where you can find me
          when I'm not working.
        </div>
        <div className="flex">
          <div className="font-bold">guest@miguel ~ %&nbsp;</div>
          <span
            className={classNames(styles.growingInput, "inline-grid group")}
          >
            <input
              type="text"
              className="font-bold focus:outline-0 border-none focus:ring-0 p-0 inline-block relative caret-transparent"
              size={1}
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
      </div>
    </div>
  );
}
