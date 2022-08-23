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

  const commands: TerminalCommands = useMemo(
    () => ({
      help: async () => {
        const item: TerminalHistoryItem = {
          command: "help",
          response: (
            <>
              <p>ls [-l]: list directory contents</p>
              <p>cat: print files</p>
              <p>clear: clear output</p>
              <p>sh: run an executable file</p>
            </>
          ),
        };
        await pushToHistory(item);
      },
      clear: async () => {
        await resetHistory();
      },
      ls: async () => {
        const item: TerminalHistoryItem = {
          command: "ls",
          response: (
            <div className="space-x-8">
              <span>welcome.txt</span>
              <span>hobbies.txt</span>
              <span>do-not-run</span>
            </div>
          ),
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

  // add initial history
  useEffect(() => {
    pushToHistory({
      command: "cat welcome.txt",
      response:
        "Hey Folks! Welcome to my personal website where you can discover more about me, my interest for web development and where you can find me when I'm not working.",
    });
    commands["help"]();
  }, [commands, pushToHistory]);

  const onKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "l") {
        resetHistory();
        term.current.reset();
      }
    },
    [resetHistory]
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
    <div className="grid grid-cols-3 py-3">
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
      className="w-full h-full focus-within:ring-4 focus-within:ring-yellow-400 flex flex-col font-mono bg-white border-2 border-current divide-y px-4"
    >
      <TerminalHeader />

      <div className="flex-1 overflow-scroll py-3">
        <TerminalBodyHistory />
        <Term ref={term} executeCommand={executeCommand} />
      </div>
    </div>
  );
}
