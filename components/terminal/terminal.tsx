import Term from "@/components/terminal/term";
import {
  ElementRef,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  TerminalCommands,
  TerminalHistoryItem,
  useTerminal,
} from "@/hooks/useTerminal";

type TermHandle = ElementRef<typeof Term>;

export default function Terminal() {
  const term = useRef<TermHandle>(null);
  const { history, pushToHistory, resetHistory } = useTerminal();

  // add initial history
  useEffect(() => {
    pushToHistory({
      command: "cat welcome.txt",
      response:
        "Hey Folks! Welcome to my personal website where you can discover more about me, my interest for web development and where you can find me when I'm not working.",
    });
  }, [pushToHistory]);

  const onKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "l") {
        resetHistory();
        term.current.reset();
      }
    },
    [resetHistory]
  );

  const commands: TerminalCommands = useMemo(
    () => ({
      ls: async () => {
        const item: TerminalHistoryItem = {
          command: "ls",
          response: "TODO Result of LS Command",
        };
        await pushToHistory(item);
      },
      cat: async () => {
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

  const executeCommand = useCallback(
    (str) => {
      const commandToExecute = commands[str.toLowerCase()];
      if (commandToExecute) {
        commandToExecute();
        focusInput();
      }
    },
    [commands, focusInput]
  );

  const TerminalHeader = () => (
    <div className="shrink-0 grid grid-cols-3">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-red-500 w-3.5 h-3.5"></div>
        <div className="rounded-full bg-yellow-500 w-3.5 h-3.5"></div>
        <div className="rounded-full bg-green-500 w-3.5 h-3.5"></div>
      </div>
      <div className="text-center">bash</div>
    </div>
  );

  const TerminalBodyHistory = useCallback(() => {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        {history.map((item, index) => (
          <div key={index}>
            <div className="font-bold">guest@miguel ~ % {item.command}</div>
            <div className="text-gray-700">{item.response}</div>
          </div>
        ))}
      </div>
    );
  }, [history]);

  return (
    <div
      onClick={focusInput}
      onKeyDown={onKeyDown}
      className="focus-within:ring-4 focus-within:ring-yellow-400 font-mono flex flex-col bg-white border-2 border-current px-4 py-3 space-y-6"
    >
      <TerminalHeader />

      <div className="flex-1">
        <TerminalBodyHistory />
        <Term ref={term} executeCommand={executeCommand} />
      </div>
    </div>
  );
}
