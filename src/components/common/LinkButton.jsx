import { Link } from "react-router-dom";

export default function LinkButton({ className, value, onClick, href }) {
  return (
    <Link
      to={href}
      className={`${className} px-6 py-4 rounded-md text-white transition outline-none duration-150 hover:brightness-75`}
      onClick={onClick}
    >
      {value}
    </Link>
  );
}
