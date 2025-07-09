import React from 'react';
import { IoIosLogIn } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
function Header() {
    return (
        <div>
            <header className="p-4 bg-slate-800 text-white text-center text-2xl p-3">
                <div className='flex justify-between items-center '>
                    <h2 className='text-4xl text-orange-500'>Movie</h2>
                    <form className="flex" role="search">
                        <input className=" me-2  text-black rounded-xl px-2" type="search" placeholder="Search" />
                        <button className="border-spacing-7 bg-green-700 rounded-lg p-2" >Search</button>
                    </form>
                    <div className='flex justify-between items-center gap-5'>
                        <div className='flex justify-between items-center gap-2'><IoIosLogIn />Login</div>
                        <div className='flex justify-between items-center gap-2'><FaRegUser />Sign-up</div>
                    </div>
                </div>

            </header>
            <div className='w-full'>
                <ul className='flex justify-between items-center gap-5 py-3 px-80 text-white bg-slate-700'>
                    <li className="hover:text-orange-700">Home</li>
                    <li className="hover:text-orange-700">Country</li>
                    <li className="hover:text-orange-700">Category</li>
                    <li className="hover:text-orange-700">Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;