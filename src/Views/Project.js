import React from 'react'

function Project(){
    return(
        <div>
            <div className='container mx-auto m-10'>
                <div className=" w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l bg-wind-predict" >
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="m-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Flight data of Airplane for Wind Forecasting</div>
                            <p className="text-gray-700 text-base">Developed Machine Learning (ML) model for predicting wind speed at high altitudes (98% accurate). 
                            Performed data analysis and operations on over 1M data points.
                            Used machine learning techniques to evaluate algorithms to improve performance and accuracy.

                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='container mx-auto m-10'>
                <div className=" w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l bg-sql-inject" >
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="m-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">SQL Injection Detector</div>
                            <p className="text-gray-700 text-base">Devised a penetration testing tool using Python to test and detect SQL Injection vulnerabilities. 
                            Established support for any websites or Android/iOS apps
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='container mx-auto m-10'>
                <div className=" w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l bg-online-exam" >
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="m-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">Academic Examination System</div>
                            <p className="text-gray-700 text-base">Led a team of four to implement a web interface that allows students to take exam online.
                            Designed modular reusable website for ease of scalability and testing using Django. 
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Project