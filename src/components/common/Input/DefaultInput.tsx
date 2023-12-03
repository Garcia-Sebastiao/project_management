type TDefaultInput = {
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  error?: string;
  register?: any;
  className?: string;
  onChange?: (e: any) => void;
};

export function DefaultInput({
  placeholder,
  type = "text",
  value,
  register,
  label,
  error,
  className,
  onChange,
}: TDefaultInput) {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="text-base text-primaryText">{label}</label>

      <input
        className={`w-full outline-none ${
          error ? "border-red-500 border" : ""
        } p-4 rounded-md text-primaryText ${className} bg-gray-100`}
        placeholder={placeholder}
        type={type}
        value={value}
        {...register}
        onChange={onChange}
      />

      {error && <span className="text-red-600 text-sm pt-1">{error}</span>}
    </div>
  );
}
