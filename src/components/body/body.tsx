import Home from "../Home/home"
import Members from "../members/members"
import Project from "../project/project"
import About from "../about/about"
import Contact from "../contact/contact"
import OtherProjects from "../project/otherprojects"

export default function Body() {
  return (
    <>
        <main className="w-full h-full">
            <Home />
            <Project />
            <OtherProjects />
            <About />
            <Members />
            <Contact />
        </main>
    </>
  )
}
