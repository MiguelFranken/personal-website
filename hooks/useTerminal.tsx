import { useCallback, useContext, useMemo } from "react";
import { TerminalContext, TerminalHistoryItem } from "@/lib/store";

export type TerminalCommands = {
  [command: string]: (...args: unknown[]) => void;
};

export const useTerminal = () => {
  const { dispatch } = useContext(TerminalContext);

  const video = useMemo(() => {
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

  const pushToHistory = useCallback(
    (item: TerminalHistoryItem) => {
      dispatch({ type: "ADD_HISTORY_ITEM", payload: item });
    },
    [dispatch]
  );

  const resetHistory = useCallback(() => {
    dispatch({ type: "RESET_HISTORY" });
  }, [dispatch]);

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
            <ul className="flex" style={{ gap: "2rem" }}>
              {Array.from(files.keys()).map((fileName) => (
                <li key={fileName}>{fileName}</li>
              ))}
            </ul>
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
        } else if (fileName) {
          response = `cat: ${fileName}: No such file`;
        } else {
          response = "cat: You have to specify a file";
        }
        const item: TerminalHistoryItem = {
          command: `cat ${fileName || ""}`,
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
        } else if (fileName) {
          response = `sh: ${fileName}: No such file`;
        } else {
          response = "sh: You have to specify a file";
        }
        const item: TerminalHistoryItem = {
          command: `sh ${fileName || ""}`,
          response,
        };
        await pushToHistory(item);
      },
    }),
    [files, pushToHistory, resetHistory]
  );

  return {
    pushToHistory,
    resetHistory,
    commands,
    files,
  };
};
