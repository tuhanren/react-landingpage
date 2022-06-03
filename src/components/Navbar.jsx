import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[90px]">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between">
        <div>DEFI</div>
        <div>
          <ul>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
          </ul>
          <button>Use Defi</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
