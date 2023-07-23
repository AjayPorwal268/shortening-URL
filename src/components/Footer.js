import iconFaceBook from "./../images/icon-facebook.svg";
import iconTwitter from "./../images/icon-twitter.svg";
import iconPrintRest from "./../images/icon-pinterest.svg";
import iconInsta from "./../images/icon-instagram.svg";
export default function Footer() {
    return (
        <div className='text-white bg-primary-VeryDarkViolet flex flex-col justify-normal items-center gap-y-8 py-8 
          sm:flex-row sm:justify-between sm:items-start sm:px-20'>
          <div className='text-2xl font-bold'>Shortly</div>
          <div className='flex flex-col gap-y-4 sm:flex-row sm:gap-x-24 items-start'>
            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className="text-xl font-bold">Features</span>
              <div className='text-primary-gray flex flex-col justify-center items-center gap-y-2'>
                <a href='/'>Link Shortening</a>
                <a href='/'>Branded Links</a>
                <a href='/'>Analytics</a>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className="text-xl font-bold">Resources</span>
              <div className='text-primary-gray flex flex-col justify-center items-center gap-y-2'>
                <a href='/'>Blog</a>
                <a href='/'>Developers</a>
                <a href='/'>Support</a>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-4'>
              <span className="text-xl font-bold">Company</span>
              <div className='text-primary-gray flex flex-col justify-center items-center gap-y-2'>
                <a href='/'>About</a>
                <a href='/'>Our Team</a>
                <a href='/'>Careers</a>
                <a href='/'>Contact</a>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-x-6'>
            <a href='/'><img className='social-icon' src={iconFaceBook} alt='iconFaceBook' /></a>
            <a href='/'><img className='social-icon' src={iconTwitter} alt='iconTwitter' /></a>
            <a href='/'><img className='social-icon' src={iconPrintRest} alt='iconPrintRest' /></a>
            <a href='/'><img className='social-icon' src={iconInsta} alt='iconInsta' /></a>
          </div>
        </div>
    )
}