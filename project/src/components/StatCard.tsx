interface Props {
  title: string;
  value: number;
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded shadow p-4">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
