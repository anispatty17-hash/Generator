// placeholde// 
interface Props {
  title: string;
  value: string | number;
}

export default function StatsCard({
  title,
  value
}: Props) {
  return (
    <div className="card p-6">
      <div className="text-sm text-gray-400">
        {title}
      </div>

      <div className="mt-3 text-3xl font-bold text-cyan-400">
        {value}
      </div>
    </div>
  );
}