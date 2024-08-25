const formatTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((v) => v.toString().padStart(2, '0'))
    .join(':');
};

export default function TimerComponent({ seconds }: { seconds: number }) {
  return (
    <div
      className="mb-6 flex items-center justify-center font-mono text-6xl font-bold text-yellow-500"
      aria-live="polite"
    >
      {formatTime(seconds)}
    </div>
  );
}
