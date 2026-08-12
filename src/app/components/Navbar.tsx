type NavbarProps = {
  isVisible: boolean;
};

const Navbar = ({ isVisible }: NavbarProps) => {
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-8 py-6 text-black transition-all duration-700 ease-out md:px-12 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      {/* Reserve the left slot for the animated logo so the menu does not collide with it. */}
      <div className="flex items-center gap-6">
        <div className="w-28 shrink-0 md:w-40" aria-hidden="true"></div>

        <ul className="hidden items-center gap-6 text-sm font-medium md:flex px-12"> 
          <li className="hidden cursor-pointer rounded-full border border-black px-4 py-1">
            Homepage
          </li>
          <li className="cursor-pointer transition hover:text-gray-500">Profile</li>
          <li className="cursor-pointer transition hover:text-gray-500">Projects</li>
          <li className="cursor-pointer transition hover:text-gray-500">Background</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black px-5 py-2 font-semibold text-white transition hover:bg-gray-800">
          Hire me
        </button>

        <div className="flex items-center gap-4 text-xl">
          <span className="cursor-pointer transition hover:text-gray-500">🌐</span>
          <span className="cursor-pointer transition hover:text-gray-500">⚙️</span>
          <span className="cursor-pointer transition hover:text-gray-500">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
