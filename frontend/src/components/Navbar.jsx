import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-700";
  const activeClass = "bg-blue-600 text-white";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="text-xl font-bold text-blue-600">
            FinanceTracker
          </Link>

          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Add Transaction
            </NavLink>
          </div>

          <button
            className="md:hidden flex items-center px-2 py-1 rounded-md text-blue-600 border border-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1 bg-gray-50 border-t">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            Add Transaction
          </NavLink>
        </div>
      )}
    </nav>
  );
}
