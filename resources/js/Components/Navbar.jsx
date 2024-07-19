import { Link } from "@inertiajs/inertia-react";
import { FaUserCircle, FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-teal-600 text-white shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold text-white">Selayar News</a>
      </div>
      <div className="flex-none gap-4">
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-64 bg-white text-teal-600 placeholder-teal-400"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-600" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-teal-600 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {!user ? (
              <>
                <li>
                  <Link href={route('login')} as="button" className="flex items-center gap-2">
                    <FiLogIn /> Login
                  </Link>
                </li>
                <li>
                  <Link href={route('register')} as="button" className="flex items-center gap-2">
                    <FiUserPlus /> Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href={route('dashboard')} as="button" className="flex items-center gap-2 justify-between">
                    <FaUserCircle /> Profile
                    <span className="badge bg-orange-500 text-white">New</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2">
                    <FaCog /> Settings
                  </Link>
                </li>
                <li>
                  <Link href={route('logout')} method="post" as="button" className="flex items-center gap-2">
                    <FaSignOutAlt /> Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
