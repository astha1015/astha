import React from 'react'

function Education(){
    return(
        <div>
            <div className='container mx-auto overflow-auto p-10 mt-10 shadow'>
                <div className='flex flex-wrap lg:flex-no-wrap lg: justify-between text-blue-800'>
                    <h1 className="text-xl ">
                        Masters in Computer Science
                    </h1>
                    <p>Aug 2018 - Aug 2020</p>
                </div>
                <p>University of New Orleans</p>
                
                <ul className='pl-10 pt-5'>
                    <li className='list-disc'>Cumulative GPA: 3.87</li>
                    <li className='list-disc'>Relevant Coursework: Big Data, Applied Machine Learning, AI, Agile Software Engineering</li>
                </ul>
            </div>
            <div className='container mx-auto overflow-auto p-10 mt-10 shadow'>
                <div className='flex flex-wrap lg:flex-no-wrap lg: justify-between text-blue-800'>
                    <h1 className="text-xl">
                        Bachelors in Computer Engineering
                    </h1>
                    <p>Nov 2011 - Sep 2015</p>
                </div>
                <p>Tribhuvan University</p>
                <ul className='pl-10 pt-5'>
                    
                </ul>
            </div>
        </div>
    )
}
export default Education