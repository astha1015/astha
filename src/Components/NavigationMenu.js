import React from 'react'
import { Link } from 'react-router-dom'
import NavFooter from './NavFooter'


function NavigationMenu(props){
    return(
        <div>
            <div className="font-bold text-red-500">VIEW ASTHA's</div>
                                   
                <ul className="p-10 font-bold text-blue-500 text-center ">
                    <li className="pt-5 hover:bg-gray-200">
                        <Link 
                            to='/' 
                            className=" py-3 md:shadow block "
                            onClick={props.closeMenu}
                        >Home</Link>
                         
                    </li>
                    <li className="pt-5 hover:bg-gray-200">
                        <Link 
                            to='/experience' 
                            className="py-3 md:shadow block"
                            onClick={props.closeMenu}
                        >Experience</Link>
                    </li>
                    <li className="pt-5 hover:bg-gray-200">
                        <Link 
                            to='/education' 
                            className="py-3 md:shadow block"
                            onClick={props.closeMenu}
                        >Education</Link>
                    </li>
                    <li className="pt-5 hover:bg-gray-200">
                        <Link 
                            to='/project' 
                            className=" py-3 md:shadow block"
                            onClick={props.closeMenu}
                            >Project</Link>
                    </li>
                    <li className="pt-5 hover:bg-gray-200">
                         <Link 
                            to='/publication' 
                            className=" py-3 md:shadow block"
                            onClick={props.closeMenu}
                        >Publication</Link>
                    </li>
                </ul>
                <div className="text-center p-5 relative left-0 bottom-0 w-full">
                    <NavFooter></NavFooter>
                </div>
                
        </div>
    )
}
export default NavigationMenu