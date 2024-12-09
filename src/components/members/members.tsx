import team from './teammembers.json'

export default function Members() {
  return (
    <div className="md:h-screen h-auto mt-5 p-2" id="Members">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-mono text-4xl my-3 text-orange-400">Team Members</h2>
        <hr className="w-1/3 border-purple-700 border-2"/>
      </div>
      <div className="p-2 my-3 flex flex-col md:flex-row justify-center items-center">
        {
          team.map(member => (
            <div className='w-full md:w-1/5 p-2 m-2 rounded-lg h-1/6 md:h-1/2 flex flex-col justify-center items-center border border-orange-500' key={member.id}>
              <img className='w-full rounded-lg' src="https://media.istockphoto.com/id/1349231567/vector/young-man-anime-style-character-anime-boy-vector.jpg?s=612x612&w=0&k=20&c=92lg_s72y-gYEfVoWKlq1bzmbWNNI6anQwyhwpMEMiw=" alt="team member photo" />
              <h2 className='font-mono p-1 text-lg'>{member.name}</h2>
              <h3 className='my-1'>{member.role}</h3>
              <p className='italic'>"{member.quote}"</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
