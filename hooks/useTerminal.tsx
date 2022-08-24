import { ReactNode, useCallback, useState } from "react";

export type TerminalHistoryItem = {
  command: string;
  response?: ReactNode | string;
};
export type TerminalHistory = TerminalHistoryItem[];

export type TerminalCommands = {
  [command: string]: (...args: unknown[]) => void;
};

export const files = new Map([
  [
    "welcome.txt",
    {
      type: "text",
      content:
        "Hey Folks! Welcome to my personal website where you can discover more about me, my interest for web development and where you can find me when I'm not working.",
    },
  ],
  ["hobbies.txt", { type: "text", content: "TODO" }],
  [
    "do-not-run",
    {
      type: "executable",
      content: (
        <iframe
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
  ],
]);

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalHistory>([]);

  const pushToHistory = useCallback((item: TerminalHistoryItem) => {
    setHistory((old) => [...old, item]);
  }, []);

  const resetHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    pushToHistory,
    resetHistory,
  };
};
