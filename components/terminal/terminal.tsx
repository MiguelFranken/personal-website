import Term from "@/components/terminal/term";
import { useCallback, useEffect, useRef } from "react";
import { useTerminal } from "@/hooks/useTerminal";

export default function Terminal() {
  const term = useRef<HTMLInputElement>(null);

  const { history, pushToHistory } = useTerminal();

  // add initial history
  useEffect(() => {
    console.log("Initialize History");
    pushToHistory({
      command: "cat welcome.txt",
      response:
        "Hey Folks! Welcome to my personal website where you can discover more about me, my interest for web development and where you can find me when I'm not working.",
    });
  }, [pushToHistory]);

  const focusInput = useCallback(() => {
    term.current.focus();
  }, []);

  const TerminalHeader = useCallback(
    () => (
      <div className="shrink-0 grid grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-red-500 w-3.5 h-3.5"></div>
          <div className="rounded-full bg-yellow-500 w-3.5 h-3.5"></div>
          <div className="rounded-full bg-green-500 w-3.5 h-3.5"></div>
        </div>
        <div className="text-center">bash</div>
      </div>
    ),
    []
  );

  const TerminalBody = useCallback(
    () => (
      <div className="flex-1">
        {history.map((item, index) => (
          <div key={index}>
            <div className="font-bold">guest@miguel ~ % {item.command}</div>
            <div className="text-gray-700" onClick={(e) => e.stopPropagation()}>
              {item.response}
            </div>
          </div>
        ))}
        <Term ref={term} />
      </div>
    ),
    [history]
  );

  return (
    <div
      onClick={focusInput}
      className="font-mono flex flex-col bg-white border-2 border-current px-4 py-3 space-y-6"
    >
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
}
