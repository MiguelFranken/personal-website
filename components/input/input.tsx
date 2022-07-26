import { FC, ChangeEventHandler } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

export interface InputProps {
  placeholder?: string;
  label?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const input: FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  className: passedClassName,
  ...props
}) => {
  const id = uuidv4();
  const className = classNames(
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  );

  return (
    <div className={passedClassName}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label ?? "Label..."}
      </label>
      <div className="mt-1">
        <input
          type="text"
          id={id}
          className={className}
          onChange={onChange}
          placeholder={placeholder ?? "Placeholder..."}
          {...props}
        />
      </div>
    </div>
  );
};

export default input;
