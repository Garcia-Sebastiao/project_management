export function Button({
  label,
  className,
  type = "button",
  onClick,
}: {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-4 font-medium rounded-md bg-base text-white hover:brightness-75 transition duration-150 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
