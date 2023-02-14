interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-lg bg-violet-600"
        style={progressStyles}
        role="progressbar"
        aria-label="Progresso de hábito completados nesse dia"
        aria-valuenow={props.progress}
      ></div>
    </div>
  );
}
