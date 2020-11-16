import React from 'react'
import logo from '../images/igrss.png'
function Publication(){
    return(
        <div>
            <div className='container items-center mx-auto m-10'>
                <div className=" w-full lg:flex">
                    <div className="lg:h-auto lg:w-48 flex bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l p-3" >
                    <img src={logo} alt='Logo' />
                    </div>
                    
                    <div className="bg-white p-4 flex flex-col justify-between leading-normal">
                        <div className="m-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">International Geospace and Remote Sensing Simposyum</div>
                            <p className="text-gray-700 text-base italic">
                                <b>Astha Sharma,</b> Md Tamjidul Hoque, Elias Ioup, Mahdi Abdelguerfi, “Flight Data of Airplane for Wind Forecasting”, IGARSS, Waikoloa Hawaii, USA, September 2020
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Publication