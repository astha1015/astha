import React from 'react';
import Navigation from './Navigation'

class Header extends React.Component{
    render(){
        return(
            <div className="border-b p-5">
            <div className= " flex justify-between items-center">
                
                
                <h2 className="lg:text-md sm:text-xs sm:w-1/5 lg:w-2/5 xs:invisible sm:invisible md:visible lg:visible font-bold text-red-500"></h2>
                <h1 className="text-3xl lg:w-3/5 sm:w-4/5 font-bold">{this.props.name} <br /></h1>
                <Navigation/>
            </div>
            <p className="text-center">Machine Learning | Data Science | Software Engineering </p>
            </div>
            
                
            

        )
    }
}


export default Header;

