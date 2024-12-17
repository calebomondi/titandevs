import projects from './projects.json'

export default function OtherProjects() {
  return (
    <div className="h-auto p-2" id="Others">
      <div className="flex flex-col m-5 justify-center items-center">
        <h2 className="text-center font-mono text-4xl my-3 text-orange-400">Our Other Projects</h2>
      </div>
      <div className="md:m-5 m-2 overflow-x-auto flex flex-row gap-0">
        {
            projects.map(project => (
                <div 
                className='flex flex-col h-2/6 border border-purple-600 rounded-lg p-1 m-2 min-w-[300px] md:min-w-800' 
                key={project.id}
                > 
                <div className='flex justify-center items-center flex-col p-1'> 
                    <h2 className='text-2xl font-mono p-1 font-semibold'>{project.title}</h2> 
                    <p className='text-center p-1 text-lg'>{project.desc}</p> 
                </div> 
                <div className='flex justify-center items-center'> 
                    <a href=""> 
                    <img src={project.url} alt="Project Landing Page" className='rounded-lg'/> 
                    </a> 
                </div> 
                </div>
            ))
        }
        </div>
    </div>
  )
}
