import Home from "../Home/home"
import Members from "../members/members"
import Project from "../project/project"
import About from "../about/about"
import Contact from "../contact/contact"

export default function Body() {
  return (
    <>
        <main className="w-full h-full">
            <Home />
            <Members />
            <Project />
            <About />
            <Contact />
        </main>
    </>
  )
}
