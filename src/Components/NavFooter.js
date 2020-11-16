import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function NavFooter (){
    return(
        <div>
                    <p className='text-blue-500 text-bold text-xl'>Reach Her:</p>
                   
                    <div className="m-3 md:m-15 flex flex-wrap lg:flex-no-wrap justify-evenly ">
                        <a className="bg-red-500 hover:bg-blue-700 text-white  py-1 lg:py-2 px-2 lg:px-4 rounded-full" href='https://www.linkedin.com/in/asthasharma94/'>
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon >
                        </a>
                    
                        <a className="bg-red-500 hover:bg-blue-700 text-white  py-1 lg:py-2 px-2 lg:px-4 rounded-full" href='https://github.com/astha1015'>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon >
                        </a>
                        <a className="bg-red-500 hover:bg-blue-700 text-white  py-1 lg:py-2 px-2 lg:px-4 rounded-full" href='https://mail.google.com/mail/?view=cm&fs=1&to=3sharma.astha@gmail.com&su=SUBJECT&body=BODY'>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon >
                        </a>
                    </div>

        </div>
    )
}

export default NavFooter