import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksBar = links.map((link)=>{
    let hash = `#${link}`;
    return(<a key={link} href={hash}>{link}</a>);
  });
  
  return <nav>{linksBar}</nav>;
}

export default NavBar;
