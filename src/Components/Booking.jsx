import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Booking = () => {
    return (
        <div>
            <h1>Coxs bazar</h1>
            <p>Coxs Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
            <Link className="">Booking <span><FaArrowRightLong /></span></Link>
        </div>
    );
};

export default Booking;