import { Link, NavLink } from "react-router-dom";
import cox from '../assets/images/home.png'
import sree from '../assets/images/Sreemongol.png'
import sun from '../assets/images/sundorbon.png'

const Travel = () => {
    return (
        <div>
            <Link to={''}>
            <div className="flex items-center  gap-7.5">
                <NavLink className={({isActive}) => isActive ? 'border-4 border-[#F9A51A] rounded-3xl bg-linear-to-bl from-[#000000] to-[#000000]' : ''} to={'/cox'}><img className="rounded-3xl w-[300px]  h-[420px] bg-accent" src={cox} alt="" /></NavLink>
                <NavLink className={({isActive}) => isActive ? 'border-4 border-[#F9A51A] rounded-3xl bg-linear-to-bl from-[#000000] to-[#000000]' : ''} to={'/srre'}><img className="rounded-3xl  h-[420px] bg-accent" src={sree} alt="" /></NavLink>
                <NavLink className={({isActive}) => isActive ? 'border-4 border-[#F9A51A] rounded-3xl bg-linear-to-bl from-[#000000] to-[#000000]' : ''} to={'/sundor'}><img className="rounded-3xl  h-[420px] bg-accent" src={sun} alt="" /></NavLink>
            </div></Link>
        </div>
    );
};

export default Travel;