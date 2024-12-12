import Home from "../Home/home"
import Members from "../members/members"
import Project from "../project/project"

export default function Body() {
  return (
    <>
        <main className="w-full h-full">
            <Home />
            <Members />
            <Project />
        </main>
    </>
  )
}
