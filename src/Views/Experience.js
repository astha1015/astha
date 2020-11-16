import React from 'react'

function Experience(){
    return(
        <div className="pb-10">
            <div className='container mx-auto overflow-auto p-10 mt-10 shadow'>
                <div className='flex flex-wrap lg:flex-no-wrap lg: justify-between text-blue-800'>
                    <h1 className="text-xl">
                        Machine Learning Engineer
                    </h1>
                    <p>Aug 2018 - Aug 2020</p>
                </div>
                <p>Canizaro Livingston Gulf States Center for Environmental Informatics</p>
                <ul className='pl-10 pt-5'>
                    <li className='list-disc'>Built a machine learning pipeline to predict wind speed and direction in high altitudes (98% more accurate)</li>
                    <li className='list-disc'>Worked with a very large dataset with over 1.5M data points</li>
                    <li className='list-disc'>Applied distributed computing using spark for 86% faster convergence on ML algorithms like Logistic Regression, Linear Regression, k-means, kNN, XGBC, SVM, Random Forest</li>
                    <li className='list-disc'>Analyzed and visualized results of computing data using libraries like NumPy, pandas, matplotlib, seaborn, plotly and sci-kit learn</li>
                </ul>
            </div>
            <div className='container mx-auto overflow-auto p-10 mt-10 shadow'>
                <div className='flex flex-wrap lg:flex-no-wrap lg: justify-between text-blue-800'>
                    <h1 className="text-xl">
                        Digital Marketing Analyst
                    </h1>
                    <p>Jul 2016 - Jul 2018</p>
                </div>
                <p>Janaki Technology Pvt. Ltd.</p>
                <ul className='pl-10 pt-5'>
                    <li className='list-disc'>Analyzed consumer behavior, market trend and opportunities and worked on finalizing new features to improve UX/UI, and user engagement (increased by 80K visits/mo.) and sales by 17%</li>
                    <li className='list-disc'>Prepared detailed reports on current and prospective customers, competitors and marketing channels and sources</li>
                    <li className='list-disc'>Utilized Google Analytics and Google Tag Manager and implemented new scripts that increased performance by 33%</li>
                </ul>
            </div>
        </div>
    )
}
export default Experience