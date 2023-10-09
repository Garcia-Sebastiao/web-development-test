import { useEffect, useState } from "react";
import {
  downIcon,
  notificationIcon,
  profileIcon,
  searchIcon,
  userImage,
} from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useHttp from "../../hooks/useHttp";
import useJWT from "../../hooks/useJWT";

export default function Header({ param }) {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [profileModal, setProfileModal] = useState(false);

  const { decode } = useJWT();
  const navigate = useNavigate();
  const { viewUser } = useHttp();
  const { handleSubmit } = useForm();
  const user_id = decode(localStorage.getItem("access_token"));

  function handleOnSearch() {
    navigate(`/system/search/${search}`);
    window.location.reload();
  }

  useEffect(() => {
    viewUser(user_id.id).then((resp) => {
      setUser(resp.data);
    });
  }, []);

  return (
    <header className="w-full flex justify-between rounded-xl">
      <form
        className="w-1/3"
        onSubmit={handleSubmit(handleOnSearch)}
        autoComplete="off"
      >
        <div className="flex rounded-md bg-variant-3 p-2 items-center gap-4">
          <img src={searchIcon} className="w-8" alt="" />
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            className="xs:text-sm lg:text-base flex-1 bg-transparent outline-none"
            placeholder="Pesquisar"
            required
          />
        </div>
      </form>

      <div className="flex items-center gap-6">
        <button>
          <img src={notificationIcon} className="w-6" alt="" />
        </button>

        <div className="flex items-center relative gap-4">
          {/* <div
            onMouseLeave={() => setProfileModal(false)}
            className={`bg-variant-2 p-4 w-52 rounded-xl border-2 border-[#ffffff20] absolute right-0 top-16 ${
              !profileModal && "hidden"
            }`}
          >
            <Link
              className={`flex p-3 rounded-md transition duration-150 focus:bg-variant-1 hover:bg-variant-1 w-full items-center gap-4`}
              to="/system/profile/edit_profile"
            >
              <img className="w-6" src={profileIcon} alt="Inicio" />
              <span className="xs:text-sm xl:text-base">Editar Perfil</span>
            </Link>
          </div> */}

          <div className="w-12 h-12 rounded-full">
            <img
              src={userImage}
              className="w-full h-full object-cover object-center rounded-full"
              alt=""
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setProfileModal(!profileModal)}
              className="flex flex-col"
            >
              <div className="flex items-center gap-8">
                <span className="xs:text-sm xl:text-base">{user?.name}</span>
                <img src={downIcon} className="w-3" alt="" />
              </div>
              <small>{user?.email}</small>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
