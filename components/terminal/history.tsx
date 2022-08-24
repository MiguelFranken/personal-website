import { useContext } from "react";
import { TerminalContext } from "@/lib/store";

export default function TerminalHistory() {
  const { state } = useContext(TerminalContext);

  return (
    <div>
      {state.history.map((item) => (
        <div key={item.id}>
          <div className="font-bold">guest@miguel ~ % {item.command}</div>
          <div className="text-gray-700">{item.response}</div>
        </div>
      ))}
    </div>
  );
}
