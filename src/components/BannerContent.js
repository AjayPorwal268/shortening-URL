import workingStation from "./../images/illustration-working.svg";

export default function BannerContent() {
    return (
        <div className='mt-8 w-full pl-5 sm:pl-20 pb-40 flex flex-col-reverse justify-center sm:flex-row sm:justify-between'>
            <div className='sm:w-2/5 mt-4 flex flex-col justify-center items-center sm:items-start px-5 sm:px-0'>
                <p className='text-4xl font-extrabold mb-4'>More than just <br></br> shorter links</p>
                <p className='text-primary-gray text-center font-medium mb-4 sm:items-start sm:text-left'>Build your brand’s recognition and get detailed insights 
                    on how your links are performing.</p>
                <a href='/' className='bg-primary-gray text-2xl text-white font-bold px-8 py-2 rounded-3xl sm:text-lg sm:px-6 sm:py-1'>Get Started</a>
            </div>
            <div className="sm:w-2/5 flex justify-center">
                <img className='w-full items-start' src={workingStation} alt='work station img' />
            </div>
        </div>
    )
}