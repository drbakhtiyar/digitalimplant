export default function Loading() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
