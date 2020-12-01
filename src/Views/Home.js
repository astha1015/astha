import React from 'react'
import Form from './Form.js';

function Home(){
    return(
        <div className = 'p-10'>
            
            <div className="container mx-auto overflow-auto p-10 shadow w-full h-full">
                <h1 className="text-xl text-blue-800">SUMMARY</h1>
                <p className="text-gray-700">Experienced professional with a demonstrated history of working in the academic research and higher education industry. Skilled in Python, Machine Learning, Data Science. Strong administrative professional with a Master's degree focused on Computer Science from the University of New Orleans. </p>
            </div>
            <div className="skills pt-10 pb-10">
                <div className='container mx-auto'>
                <h1 className="text-xl text-blue-800">SKILLS</h1>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Python
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Javascript
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    React
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    SQL
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    HTML
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    CSS
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Data Science
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Artificial Intelligence
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Machine Learning
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Deep Learning
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Analytics
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Tableau
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Power BI
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    GIT
                </button>
                <button className="bg-pink-500 mt-5 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    AWS
                </button>
            </div> 

            </div>
            <div className='container mx-auto items-center'>
                <h1 className="text-xl font-bold text-blue-500 p-10 text-center">ANY MESSAGE?</h1>
                <Form></Form>
            </div>
        </div>
    )
}
export default Home