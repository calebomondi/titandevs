//import fb from '/fb.png'

export default function Project() {
  return (
    <div className="md:h-screen h-auto my-8 p-2" id="Project">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-mono text-4xl my-3 text-orange-400">Reimagining Facebook UI</h2>
        <hr className="w-1/3 border-purple-700 border-2"/>
      </div>
      <div className="w-full flex flex-col md:flex-row md:h-full h-auto justify-center items-center">
        <div className="w-full md:h-screen md:w-1/2 p-2 h-auto mt-5 md:mt-0 flex justify-center items-center flex-col bg-cover bg-center">
            <div className=' flex justify-center h-fill md:w-3/4 items-center flex-col'>
              <h2 className="text-center font-mono text-3xl font-extrabold text-orange-400">What's wrong with the current UI?</h2>
              <p className="text-center font-sans text-lg font-bold">
              The placement of Facebook's menu tab at the top of the mobile interface can be inconvenient, 
              as it requires users to stretch their fingers to reach it, disrupting the natural flow of navigation. 
              This design choice may lead to user frustration and a less seamless experience. 
              </p>
            </div>
            <div className=' flex justify-center h-fill md:w-3/4 items-center flex-col mt-5'>
              <h2 className="text-center font-mono text-3xl font-extrabold text-orange-400">What we fixed?</h2>
              <p className="text-center font-sans text-lg font-bold">
              We designed the UI with the menu placed at the bottom to enhance accessibility and user convenience. 
              This placement aligns with the natural thumb zone, making navigation easier and reducing strain when 
              switching between tabs. By prioritizing comfort and efficiency, this design choice aims to create a seamless, 
              user-friendly experience that caters to how people naturally interact with their mobile devices.
              </p>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center h-screen">
            <img 
              src="https://github.com/user-attachments/assets/9e826f23-231a-4c7d-8991-43b0ae05425b"
              alt="Redesigned facebook ui" 
              className='w-fit h-full md:h-auto'
            />
        </div>
    </div>
    </div>
  )
}
