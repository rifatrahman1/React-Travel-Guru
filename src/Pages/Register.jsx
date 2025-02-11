import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { Auth_Context } from '../Firebase/Auth';
import { useContext, useState } from 'react';

const Login = () => {
    const { create_user } = useContext(Auth_Context);
    const [error, set_error] = useState({});

    const handle_submit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target)
        const first_name = form.get('first');
        if (first_name.length < 5 ) {
            set_error({...error, first_name: 'must be more than 5 cheracter in longer...'});
            return
        }
        const last_name = form.get('last');
        const email = form.get('email');
        const password = form.get('password');
        const con_password = form.get('con_password');
        console.log(first_name, last_name, email, password, con_password);

        create_user(email, password)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log('ERROR', error);
        })

    }
    return (
        <div className='bg-base-200 min-h-screen '>
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
                <NavLink to={'/login'}><button className='cursor-pointer bg-[#F9A51A] px-5 rounded-lg py-1 text-black'>Login</button></NavLink>
            </div>
        </div>
        <form onSubmit={handle_submit}>
        <div className='w-[600px] mx-auto px-14 py-10 bg-white shadow-2xl rounded-2xl'>
          <h3 className='text-2xl font-bold'>Create an account</h3>
          <div className='flex flex-col'>
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="first" placeholder='First Name' id="" />
            {
                error.first_name && <p className='text-red-500 font-medium'>{error.first_name}</p>
            }
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="last" placeholder='Last Name' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="email" name="email" placeholder='Username or Email' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="password" placeholder='Password' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 text-black font-bold border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="con_password" placeholder='Confirm Password' id="" />
            <div className='flex items-center mt-6 justify-between font-bold'>
              <div className='flex items-center gap-4'><input type="checkbox" name="box" id="" />
              <p>Remember Me</p></div>
              <button className='text-[#F9A51A] cursor-pointer underline underline-offset-4'>Forgot Password</button>
            </div>
            <button className='bg-[#F9A51A] font-medium cursor-pointer py-3.5 mt-12.5'>Create an account</button>
            <p className='mt-4 font-medium text-center'>Already have an account? <Link to={'/login'} className='text-[#F9A51A] underline underline-offset-4'>Login</Link></p>
          </div>
          <div>
        <div className="divider mt-6">OR</div>
        <button className='flex mt-9 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaFacebook className='text-4xl text-blue-500'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        <button className='flex mt-2 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaGoogle className='text-4xl text-yellow-400'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        </div>
        </div>
        </form>
        
        </div>
    );
};

export default Login;