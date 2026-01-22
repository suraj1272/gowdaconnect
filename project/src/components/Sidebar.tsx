import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return null;

  return (
<aside className="w-64 fixed left-0 top-[104px] h-[calc(100vh-104px)] bg-gray-900 text-white">
          <nav className="flex flex-col gap-2 px-4 py-6">
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>

        <p className="text-xs text-gray-400 mt-4">Network</p>
        <NavLink to="/network/members" className="sidebar-link">
          Members
        </NavLink>
        <NavLink to="/network/referrals" className="sidebar-link">
          Referrals
        </NavLink>

        <p className="text-xs text-gray-400 mt-4">Reports</p>
        <NavLink to="/reports" className="sidebar-link">
          Business Reports
        </NavLink>
        <NavLink to="/post-job" className="sidebar-link">Post a Job</NavLink>
<NavLink to="/post-ad" className="sidebar-link">Post an Ad</NavLink>
<NavLink to="/post-property" className="sidebar-link">Post a Property</NavLink>

      </nav>
    </aside>
  );
}

