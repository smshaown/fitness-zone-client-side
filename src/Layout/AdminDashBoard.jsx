import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../Page/Shared/Navbar/Logo";
import { GrLogout } from "react-icons/gr";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
const AdminDashBoard = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>Fitness zone | Admin DashBoard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full space-y-4 bg-white shadow-2xl text-base-content">
            {/* Sidebar content here */}
            <div className="w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto">
              <Logo />
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/instructor-dashBoard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/instructor-dashBoard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
            <div className="pt-8">
              <li className="pt-2">
                <NavLink
                  className="bg-red-400 text-xl text-white"
                  to="/admin-dashBoard/manage-class"
                >
                  Manage Classes
                </NavLink>
              </li>
              <li className="pt-2">
                <NavLink
                  className="bg-red-400 text-xl text-white"
                  to="/admin-dashBoard/manage-users"
                >
                  Manage Users
                </NavLink>
              </li>
              <button
                onClick={handleLogOut}
                className="flex w-full items-center  px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
              >
                <GrLogout className="w-5 text-xl h-5" />

                <span className="mx-4 text-xl font-medium">Logout</span>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
