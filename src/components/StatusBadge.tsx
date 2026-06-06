// placeholder
interface Props {
  status: string;
}

export default function StatusBadge({
  status
}: Props) {
  const color =
    status === "online"
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <span
      className={`${color} px-3 py-1 rounded-full text-xs`}
    >
      {status}
    </span>
  );
}