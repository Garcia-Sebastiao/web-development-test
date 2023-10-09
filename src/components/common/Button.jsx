export default function Button({ className, type, value, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${className} px-6 py-4 rounded-md text-white transition duration-150 hover:brightness-75`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
