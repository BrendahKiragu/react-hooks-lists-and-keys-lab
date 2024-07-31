import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
//user has:name,city,bio,color,links,projects

//our app is the parent component
//it renders navbar, home, about,projectlist components (sections)
//we do import of these components
//we also import user data from a user component that is in another folder
//user data has a project array that has objects with  4 properties
