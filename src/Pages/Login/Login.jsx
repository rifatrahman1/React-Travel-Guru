import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const Login = () => {
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
        <div className='w-[600px] mx-auto px-14 py-10 bg-white shadow-2xl mt-24 rounded-2xl'>
          <h3 className='text-2xl font-bold'>Login</h3>
          <div className='flex flex-col'>
            <input className='border-b-2 mt-5 border-x-0 border-t-0 border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="text" name="email" placeholder='Username or Email' id="" />
            <input className='border-b-2 mt-5 border-x-0 border-t-0 border-[#C5C5C5] focus:outline-none px-2 py-3 rounded-none' type="password" name="password" placeholder='Password' id="" />
            <div className='flex items-center mt-6 justify-between font-bold'>
              <div className='flex items-center gap-4'><input type="checkbox" name="box" id="" />
              <p>Remember Me</p></div>
              <button className='text-[#F9A51A] cursor-pointer underline underline-offset-4'>Forgot Password</button>
            </div>
            <button className='bg-[#F9A51A] font-medium cursor-pointer py-3.5 mt-12.5'>Login</button>
            <p className='mt-4 font-medium text-center'>Don’t have an account? <Link to={'/register'} className='text-[#F9A51A] underline underline-offset-4'>Create an account</Link></p>
          </div>
          <div>
        <div className="divider mt-6">OR</div>
        <button className='flex mt-9 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaFacebook className='text-4xl text-blue-500'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        <button className='flex mt-2 items-center border-2 py-2.5 w-8/12 mx-auto px-2 rounded-full'><FaGoogle className='text-4xl text-yellow-400'/><p className='text-center mx-auto font-medium'>Continue with Facebook</p></button>
        </div>
        </div>
        
        </div>
    );
};

export default Login;




// import InputField from "./components/InputField";
// const App = () => {
//   return (
    
//   )
// }
// export default App;