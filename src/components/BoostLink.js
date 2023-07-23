import bgBoostMobile from "./../images/bg-boost-mobile.svg";
import bgBoostDeskTop from "./../images/bg-boost-desktop.svg";

export default function BoostLink() {
    return (
        <div style={{'--bg-boost-mobile': `url(${bgBoostMobile})`, '--bg-boost-deskTop': `url(${bgBoostDeskTop})`}}
        className="flex flex-col justify-center items-center gap-y-4 px-8 py-8 min-h-[240px]
        bg-primary-darkViolet bg-[image:var(--bg-boost-mobile)] sm:bg-[image:var(--bg-boost-deskTop)]
        bg-right-bottom bg-no-repeat">
            <span className='text-2xl font-bold text-white'>Boost your links today</span>
            <button className='bg-primary-gray text-xl text-white font-bold px-8 py-2 rounded-3xl sm:text-lg sm:px-6 sm:py-1'>Get Started</button>
        </div>
    )
}