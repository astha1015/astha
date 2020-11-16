import React, { useState } from 'react';

function PageView(){
    const[count, setCount] = useState(0) 
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <button onClick={()=>setCount(count)}>reset</button>
        </div>
    )
}

export default PageView;