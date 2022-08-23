import classNames from "classnames";
import styles from "@/styles/term.module.css";
import {
  forwardRef,
  ForwardRefRenderFunction,
  KeyboardEventHandler,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type TermProps = {
  children?: ReactNode;
  executeCommand: (str: string) => void;
};

type TermHandle = {
  focus: () => void; // focus input
  reset: () => void; // reset input
};

const Term: ForwardRefRenderFunction<TermHandle, TermProps> = (
  { executeCommand }: TermProps,
  ref
) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    reset() {
      setInputValue("");
    },
    focus() {
      inputRef.current.focus();
    },
  }));

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Enter") {
      console.log("Pressed Enter");

      executeCommand(inputValue);
      setInputValue("");

      event.preventDefault();
    } else if (event.key === "Tab") {
      console.log("Pressed tab");
      event.preventDefault();
    }
  };

  const changeInput = (value) => {
    setInputValue(value.replaceAll(" ", "&nbsp;"));
  };

  return (
    <div className="flex">
      <div className="font-bold">guest@miguel ~ %&nbsp;</div>
      <form
        autoComplete="off"
        className={classNames(styles.growingInput, "inline-grid group")}
      >
        <input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          value={inputValue}
          type="text"
          autoComplete="off"
          maxLength={20}
          className="font-bold focus:outline-0 border-none focus:ring-0 p-0 w-full block relative caret-transparent"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <span
          className={classNames(
            styles.dummy,
            "pointer-events-none font-bold invisible",
            "inline-block relative max-w-min",
            "after:visible after:absolute after:inset-y-0.5 after:-right-3 after:inline-block after:bg-gray-900 after:align-top after:aspect-[9/16]",
            "group-focus-within:after:animate-none"
          )}
          dangerouslySetInnerHTML={{
            __html: inputValue.replaceAll(" ", "&nbsp;"),
          }}
        ></span>
      </form>
    </div>
  );
};

export default forwardRef(Term);
