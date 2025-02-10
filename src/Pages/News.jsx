import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const News = () => {
    return (
        <div>
            <div className='flex items-center w-7/12 mx-auto justify-between pt-9'>
            <Link to={'/booking/travel'} className=''>
                <img className='' src={logo} alt="" />
            </Link>
            <div className='flex items-center gap-12 text-xl font-medium'>
                <input className='text-white px-8 rounded-lg py-2' type="search" name="search" placeholder='Search your Destination' id="" />
                <NavLink className={({isActive}) => isActive ? 'text-[#F9A51A] underline' : ''} to={'/news'}>News</NavLink>
                <NavLink to={'/destination'}></NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#F9A51A] underline' : ''} to={'/destination'}>Destination</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#F9A51A] underline' : ''} to={'/blog'}>Blog</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-[#F9A51A] underline' : ''} to={'/contact'}>Contact</NavLink>
                <NavLink to={'/login'}><button className='bg-[#F9A51A] cursor-pointer px-5 rounded-lg py-1 text-black'>Login</button></NavLink>
            </div>
        </div>
            <h1>This is news pages....</h1>
        </div>
    );
};

export default News;