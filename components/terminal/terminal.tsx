import Term from "@/components/terminal/term";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  TerminalCommands,
  TerminalHistoryItem,
  useTerminal,
} from "@/hooks/useTerminal";

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

  const commands: TerminalCommands = useMemo(
    () => ({
      ls: async () => {
        console.log("Execute ls command");
        const item: TerminalHistoryItem = {
          command: "ls",
          response: "TODO Result of LS Command",
        };
        await pushToHistory(item);
      },
      cat: async () => {
        console.log("Execute cat command");
        const item: TerminalHistoryItem = {
          command: "cat",
          response: "TODO Result of cat command",
        };
        await pushToHistory(item);
      },
    }),
    [pushToHistory]
  );

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
      <div className="flex-1" onClick={(e) => e.stopPropagation()}>
        {history.map((item, index) => (
          <div key={index}>
            <div className="font-bold">guest@miguel ~ % {item.command}</div>
            <div className="text-gray-700">{item.response}</div>
          </div>
        ))}
        <Term ref={term} commands={commands} />
      </div>
    ),
    [commands, history]
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
