import { Link } from "react-router-dom";
import { booksIcon, dashboardIcon, profileIcon } from "../../assets";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useJWT from "../../hooks/useJWT";

export default function Navbar({ active }) {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const { decode } = useJWT();
  const userRole = decode(localStorage.getItem("role_token"));

  return (
    <aside className="bg-variant-2 rounded-xl backdrop-blur-sm h-full flex flex-col items-start gap-32 p-10 z-10">
      <h2 className="lg:text-xl xl:text-2xl font-poppinsBold px-3">
        Booklet.com
      </h2>

      <nav className="w-full h-full flex justify-between flex-col">
        <ul className="w-full flex flex-col items-start gap-6">
          <li className="w-full">
            <Link
              className={` ${
                active == "home" ? "bg-variant-1" : ""
              } flex p-3 rounded-md transition duration-150 focus:bg-variant-1 hover:bg-variant-1 w-full items-center gap-4`}
              to="/system/main"
            >
              <img className="w-6" src={dashboardIcon} alt="Inicio" />
              <span className="xs:text-sm xl:text-base">Início</span>
            </Link>
          </li>
          {userRole.role != "Escritor" ? (
            ""
          ) : (
            <li className="w-full">
              <Link
                className={` ${
                  active == "profile" ? "bg-variant-1" : ""
                } flex p-3 rounded-md transition duration-150 focus:bg-variant-1 hover:bg-variant-1 w-full items-center gap-4`}
                to="/system/profile/author_profile"
              >
                <img className="w-6" src={profileIcon} alt="Inicio" />
                <span className="xs:text-sm xl:text-base">Perfil</span>
              </Link>
            </li>
          )}
          <li className="w-full">
            <Link
              className={` ${
                active == "books" ? "bg-variant-1" : ""
              } flex p-3 rounded-md transition duration-150 focus:bg-variant-1 hover:bg-variant-1 w-full items-center gap-4`}
              to="/system/books"
            >
              <img className="w-6" src={booksIcon} alt="Inicio" />
              <span className="xs:text-sm xl:text-base">Livros</span>
            </Link>
          </li>
        </ul>

        <ul className="w-full flex flex-col items-start gap-6">
          <li className="w-full">
            <button
              onClick={() => {
                logOut();
                navigate("/auth/sign_in");
              }}
              className={`flex p-3 rounded-md transition duration-150 focus:bg-variant-1 hover:bg-variant-1 w-full items-center gap-4`}
              to="/auth/sign_in"
            >
              <img className="w-6" src={dashboardIcon} alt="Inicio" />
              <span className="xs:text-sm xl:text-base">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
