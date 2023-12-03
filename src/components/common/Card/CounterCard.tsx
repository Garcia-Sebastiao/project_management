type TCounterCard = {
  title: string;
  count: number;
};

export function CounterCard({ title, count }: TCounterCard) {
  return (
    <div className="w-full flex flex-col gap-3 bg-zinc-100 rounded-lg p-6">
      <h2 className="text-3xl font-bold text-primary">{count}</h2>{" "}
      <p className="text-primaryText font-medium">{title}</p>
    </div>
  );
}
