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
    <div className="shrink-0 sticky inset-x-0 top-0 bg-white/50 backdrop-blur-md grid grid-cols-3 px-4 py-3 border-b">
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
      className="w-full h-full overflow-scroll focus-within:ring-4 focus-within:ring-yellow-400 font-mono flex flex-col bg-white border-2 border-current space-y-3"
    >
      <TerminalHeader />

      <div className="flex-1 px-4 pb-3">
        <TerminalBodyHistory />
        <Term ref={term} executeCommand={executeCommand} />
      </div>
    </div>
  );
}
