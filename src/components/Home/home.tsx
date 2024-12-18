//import hack from '/hack.png'
//import squig from '/squig.png'
//import banner from '/bnr3.png'

export default function Home() {
  const squig = 'https://github.com/user-attachments/assets/41862270-817f-4a11-9e52-65a0194f0544'
  const banner = 'https://github.com/user-attachments/assets/916a4854-e5fd-420b-82d6-849a18ef9701'
  return (
    <div className="w-full flex flex-col md:flex-row md:h-screen h-auto" id='Home'>
        <div className="w-full h-screen  md:w-1/2 p-2 md:h-auto flex justify-center items-center flex-col bg-cover bg-center" style={{ backgroundImage: `url(${squig})` }}>
            <div className=' flex justify-center text-white h-fill items-center flex-col bg-cover bg-center p-2 md:w-1/2 h-2/3 md:h-1/2 w-full' style={{ backgroundImage: `url(${banner})` }}>
              <h2 className="text-center font-mono text-6xl font-extrabold">TitanDevs</h2>
              <h3 className="text-center font-sans text-2xl font-bold italic">If you can think it, we can build it.</h3>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center h-screen">
            <img 
              src="https://github.com/user-attachments/assets/f7071a03-a2e1-402d-b458-35d02e283596" 
              alt="Developers In The Process" 
              className='w-full h-full md:h-auto'
            />
        </div>
    </div>
  )
}
