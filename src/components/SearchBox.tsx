// placeholder
"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({
  value,
  onChange,
  placeholder
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      outline-none
      "
    />
  );
}