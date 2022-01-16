import { SyntheticEvent } from "react";

type Props = {
  secondary?: boolean;
  label?: string;
  onClick?: (e?: SyntheticEvent) => void;
};

export default function Button(props: Props) {
  const { secondary = false, label = "Button", onClick } = props;

  const className = !secondary
    ? "bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded"
    : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-center py-2 px-4 rounded";

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
