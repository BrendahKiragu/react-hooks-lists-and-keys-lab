import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((link, index)=>{
      return (
        <a href={`#${link}`} key={index}>{link}</a>
      )
    })}
    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
