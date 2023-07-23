import iconBrandRecognition from "./../images/icon-brand-recognition.svg";
import iconDetailedRecords from "./../images/icon-detailed-records.svg";
import iconFullyCustomizable from "./../images/icon-fully-customizable.svg";
import UrlShortenComponent from "./UrlShortenComponent";

export default function MainSection() {
    return (
        <div className='w-full px-5 pb-16 flex flex-col bg-slate-100 sm:px-20'>
          <UrlShortenComponent></UrlShortenComponent>
          <div className='flex flex-col items-center justify-center pb-12 gap-y-6 sm:gap-y-4'>
            <p className='text-3xl font-bold'>Advanced Statistics</p>
            <p className='text-center text-primary-gray text-lg sm:w-1/3'>Track how your links are performing across the web with our 
              advanced statistics dashboard.</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-y-16 sm:flex-row sm:gap-x-6'>
            <div className='flex flex-col justify-center items-center gap-y-4 bg-white px-6 py-6 rounded-lg shadow-md relative sm:self-start'>
              <span className='bg-primary-darkViolet rounded-full w-20 h-20 flex justify-center items-center -mt-16'>
                <img className='' src={iconBrandRecognition} alt="iconBrandRecognition"></img>
              </span>
              <span className='text-xl font-bold'>Brand Recognition</span>
              <p className='text-primary-gray text-center text-base'>Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-y-4 bg-white px-6 py-6 rounded-lg shadow-md relative'>
              <span className='bg-primary-darkViolet rounded-full w-20 h-20 flex justify-center items-center -mt-16'>
                <img className='' src={iconDetailedRecords} alt="iconDetailedRecords"></img>
              </span>
              <span className='text-xl font-bold'>Detailed Records</span>
              <p className='text-primary-gray text-center text-base'>Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.</p>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-y-4 bg-white px-6 py-6 rounded-lg shadow-md relative sm:mt-28 sm:self-end'>
              <span className='bg-primary-darkViolet rounded-full w-20 h-20 flex justify-center items-center -mt-16'>
                <img className='' src={iconFullyCustomizable} alt="iconFullyCustomizable"></img>
              </span>
              <span className='text-xl font-bold'>Fully Customizable</span>
              <p className='text-primary-gray text-center text-base'>Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.</p>
            </div>
          </div>
      </div>
    )
}