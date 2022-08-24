import TerminalPrompt, {
  TerminalPromptProps,
} from "@/components/terminal/prompt";
import {
  ElementRef,
  KeyboardEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useTerminal } from "@/hooks/useTerminal";
import { TerminalContext } from "@/lib/store";
import TerminalHistory from "@/components/terminal/history";

type TerminalPromptHandle = ElementRef<typeof TerminalPrompt>;

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

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prompt = useRef<TerminalPromptHandle>(null);
  const { commands } = useTerminal();
  const { dispatch } = useContext(TerminalContext);

  const onKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "l") {
        dispatch({
          type: "RESET_HISTORY",
        });
        prompt.current.reset();
      }
    },
    [dispatch]
  );

  // focus and scroll to terminal prompt input field
  const focusInput = useCallback(() => {
    // focus only when no text is selected
    if (window.getSelection().isCollapsed) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight; // scroll to bottom
      prompt.current.focus();
    }
  }, []);

  const executeCommand: TerminalPromptProps["executeCommand"] = useCallback(
    async (command: string, arg?: string) => {
      if (command) {
        const commandToExecute = commands[command.toLowerCase()];
        if (commandToExecute) {
          await commandToExecute(arg);
        } else {
          await commands["not-found"](command);
        }
      } else {
        await commands["empty"]();
      }
      focusInput();
    },
    [commands, focusInput]
  );

  // add initial history
  useEffect(() => {
    commands["cat"]("welcome.txt");
    commands["help"]();
  }, [commands]);

  return (
    <div
      onClick={focusInput}
      onKeyDown={onKeyDown}
      ref={containerRef}
      className="selection:text-white selection:bg-gray-900 w-full h-full overflow-scroll focus-within:ring-4 focus-within:ring-yellow-300 font-mono flex flex-col bg-white border-2 border-current space-y-3 transition ease-in-out"
    >
      <TerminalHeader />

      <div className="flex-1 px-4 pb-3">
        <TerminalHistory />
        <TerminalPrompt ref={prompt} executeCommand={executeCommand} />
      </div>
    </div>
  );
}
