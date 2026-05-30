import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");

  };
  const user =
  JSON.parse(localStorage.getItem("user"));

  return (

    <div
      className="
         bg-white
        border-2 rounded-md border-[rgba(0,0,0,0.08)]
        px-6 py-4
        flex items-center justify-end
        relative
      "
    >

      <div className="relative">

        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2
            hover:bg-gray-100
            px-3 py-2
            rounded-lg
          "
        >

          <span className="text-gray-700">
            <span className="text-gray-600">

  Welcome {user?.fullName}

</span>
          </span>

          <ChevronDown size={18} />

        </button>

        {open && (

          <div
            className="
              absolute right-0 mt-2
              w-40
              bg-white
              border
              rounded-lg
              shadow-lg
              overflow-hidden
              z-50
            "
          >

            <button
              onClick={logout}
              className="
                w-full text-left
                px-4 py-3
                hover:bg-gray-100
              "
            >
              Logout
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default Header;