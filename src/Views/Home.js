import React from 'react'

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
                <form className="w-full max-w-lg container mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Full Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text "/>
                            
                        
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        <button className="shadow bg-blue-500 hover:bg-beal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Send
                        </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Home