import React, {useState, useEffect} from 'react'

const Home = () => {

    const [sum,setSum] = useState(1);
    

    const increment = ()=>{
        setSum(1+sum)
      
    }

    useEffect(() => {
        console.log(1231232);
    }, [sum])
    
    
  return (
    <div>{sum}
    <button onClick={increment}>Click Me!</button></div>
  )
}

export default Home