import faq from './faq.json'
import us from './us'

export default function About() {
  return (
    <div className='h-auto my-5 p-2' id='Titans'>
      <div className="flex flex-col my-4 justify-center items-center">
        <h2 className="text-center font-mono text-4xl my-3 text-orange-400">Who Are TitanDevs?</h2>
        <hr className="w-1/3 border-purple-700 border-2"/>
      </div>
      <div className="flex justify-center items-center flex-col p-2 m-3">
        <h2 className="text-xl text-orange-500 font-semibold my-3">About Us</h2>
        <div className='md:w-3/4 m-2 text-lg'>
            <p className='text-center'>{us}</p>
        </div>
        <h2 className="text-xl text-orange-500 font-semibold my-3">FAQ</h2>
        <div className="flex justify-center items-center flex-col p-2 m-3 w-full">
            {
                faq.map(faq => (
                    <div className="collapse collapse-arrow bg-base-200 md:w-1/2 mt-1" key={faq.id}>
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">{faq.quiz}</div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}
