//

export default function Contact() {
  return (
    <div className="h-auto my-3 p-2" id="Contacts">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-mono text-4xl my-3 text-orange-400">Let's Talk</h2>
        <hr className="w-1/3 border-purple-700 border-2"/>
      </div>
      <div className="w-full flex flex-col md:h-full h-auto justify-center items-center mt-5">
        <div className="w-full  md:w-1/2 p-2 mt-5 md:mt-0 flex justify-center items-center flex-col md:h-full">
            <h2 className="text-xl text-orange-500 font-semibold my-3">Engage Our Socials</h2>
            <div className="flex flex-row justify-center items-center">
                <i className="fa-brands mx-2 text-3xl fa-whatsapp hover:scale-105"></i>
                <i className="fa-brands mx-2 text-3xl fa-discord hover:scale-105"></i>
                <i className="fa-brands mx-2 text-3xl fa-x-twitter hover:scale-105"></i>
                <i className="fa-brands mx-2 text-3xl fa-instagram hover:scale-105"></i>
                <i className="fa-brands mx-2 text-3xl fa-facebook hover:scale-105"></i>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center flex-col">
            <h2 className="text-xl text-orange-500 font-semibold my-3">Send Us A Message</h2>
            <form action="" className="md:w-3/4 w-full p-2 flex justify-center items-center flex-col">
                <label className="input input-bordered flex items-center gap-2 mt-1 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-1 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <textarea className="textarea textarea-bordered w-full mt-1" placeholder="Bio"></textarea>
                <button className="btn bg-orange-500 text-white mt-1">Send</button>
            </form>
        </div>
    </div>
    </div>
  )
}

