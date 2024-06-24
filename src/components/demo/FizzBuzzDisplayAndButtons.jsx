//This set of components demonstrates prop-types and eslint support around props
//You can delete the contents of components/demo
import React from 'react'
import { fizzBuzz } from './fizzBuzz';
export function FizzBuzzDisplayAndButtons() {
    const [natNums, setNatNums] = React.useState(1)
    
// onClick={setNatNums((prevValue) => prevValue + 1)}
    return (
        <div>
            <h1>{fizzBuzz(natNums)}</h1>
            <button  onClick={()=>setNatNums((prevValue) => prevValue + 1)}>Next</button>
            <button onClick={()=>setNatNums(1)}>Reset</button>
        </div>
    );
}
