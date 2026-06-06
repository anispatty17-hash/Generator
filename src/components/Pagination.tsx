// placeholder
"use client";

interface Props {
  page: number;
  total: number;
  limit: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  total,
  limit,
  onChange
}: Props) {
  const totalPages =
    Math.ceil(total / limit);

  return (
    <div className="flex gap-2 mt-6">

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="px-4 py-2 rounded-lg bg-slate-800"
      >
        Prev
      </button>

      <div className="px-4 py-2">
        {page} / {totalPages || 1}
      </div>

      <button
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="px-4 py-2 rounded-lg bg-slate-800"
      >
        Next
      </button>

    </div>
  );
}