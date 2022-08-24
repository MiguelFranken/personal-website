import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

export type TerminalHistoryItem = {
  id?: string;
  command: string;
  response?: ReactNode | string;
};
export type TerminalHistory = TerminalHistoryItem[];

export type TerminalCommands = {
  [command: string]: (...args: unknown[]) => void;
};

export const useTerminal = () => {
  const [history, setHistory] = useState<TerminalHistory>([]);

  const video = useMemo(() => {
    console.log("rerender video");
    return (
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
    );
  }, []);

  const files = useMemo(
    () =>
      new Map([
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
            content: video,
          },
        ],
      ]),
    [video]
  );

  const pushToHistory = useCallback((item: TerminalHistoryItem) => {
    const timestamp = new Date().toISOString();
    // add random number so that we can add for the initial history multiple items at once
    item.id = `${Math.floor(Math.random() * 1000)}-${timestamp}`;
    setHistory((old) => [...old, item]);
  }, []);

  const resetHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const commands: TerminalCommands = useMemo(
    () => ({
      empty: async () => {
        await pushToHistory({ command: "" });
      },
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
      "not-found": (command: string) => {
        pushToHistory({
          command,
          response: `Command not found : '${command}'. Type 'help' for available commands.`,
        });
      },
      clear: async () => {
        await resetHistory();
      },
      ls: async () => {
        const item: TerminalHistoryItem = {
          command: "ls",
          response: (
            <div className="space-x-8">
              {Array.from(files.keys()).map((fileName) => (
                <span key={fileName}>{fileName}</span>
              ))}
            </div>
          ),
        };
        await pushToHistory(item);
      },
      cat: async (fileName: string) => {
        const file = files.get(fileName);
        let response;
        if (file) {
          if (file.type === "text") {
            response = file.content;
          } else {
            response = "cat: cannot read executable file";
          }
        } else {
          response = `cat: ${fileName}: No such file`;
        }
        const item: TerminalHistoryItem = {
          command: `cat ${fileName}`,
          response,
        };
        await pushToHistory(item);
      },
      sh: async (fileName: string) => {
        const file = files.get(fileName);
        let response;
        if (file) {
          if (file.type === "executable") {
            response = file.content;
          } else {
            response = "sh: cannot execute this file type";
          }
        } else {
          response = `sh: ${fileName}: No such file`;
        }
        const item: TerminalHistoryItem = {
          command: `sh ${fileName}`,
          response,
        };
        await pushToHistory(item);
      },
    }),
    [files, pushToHistory, resetHistory]
  );

  useEffect(() => {
    console.log("Init useTerminal hook");
  }, []);

  // add initial history
  useEffect(() => {
    commands["cat"]("welcome.txt");
    commands["help"]();
  }, [commands, pushToHistory]);

  return {
    history,
    pushToHistory,
    resetHistory,
    commands,
    files,
  };
};
