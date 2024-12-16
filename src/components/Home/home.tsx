import hack from '/hack.png'
import squig from '/squig.png'

export default function Home() {
  return (
    <div className="w-full flex flex-col md:flex-row md:h-screen h-auto" id='Home'>
        <div className="w-full h-screen  md:w-1/2 p-2 md:h-auto flex justify-center items-center flex-col bg-cover bg-center" style={{ backgroundImage: `url(${squig})` }}>
            <div className=' flex justify-center h-fill items-center flex-col text-orange-500'>
              <h2 className="text-center font-mono text-6xl font-extrabold">TitanDevs</h2>
              <h3 className="text-center font-sans text-2xl font-bold italic">If you can think it, we can build it.</h3>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center h-screen">
            <img src={hack} alt="Developers In The Process" className='w-full h-full md:h-auto'/>
        </div>
    </div>
  )
}
