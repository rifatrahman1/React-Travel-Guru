import { FaArrowRightLong } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";



const Booking = () => {
    const location = useLocation();
    return (
        <div className="flex justify-around ml-36 mt-36 text-white">
            <div>
            <h1 className="text-[100px] bebas">Cox's bazar</h1>
            <p>Coxs Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
            <Link to={'booking/calender'} className={({isActive}) => isActive ? location.pathname === 'booking/travel' : location.pathname === 'booking/calender'}><button className="bg-[#F9A51A] cursor-pointer font-medium flex items-center gap-4 px-7 py-2 rounded-lg text-black mt-6.5">Booking <span className="mt-1"><FaArrowRightLong /></span></button></Link>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Booking;