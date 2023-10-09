export default function Input({
  type,
  className,
  placeholder,
  onChange,
  value,
  name,
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`${className} w-full p-4 rounded-md bg-variant-1 outline-none`}
    />
  );
}
