import { ReactNode, useCallback, useState } from "react";

export type TerminalHistoryItem = {
  command: string;
  response?: ReactNode | string;
};
export type TerminalHistory = TerminalHistoryItem[];

export type TerminalCommands = {
  [command: string]: (...args: unknown[]) => void;
};

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
