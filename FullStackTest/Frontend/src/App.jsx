import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [jokes,setjokes ] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((Response)=>{
      setjokes(Response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
     <h1 className="jokes">
      Our Life is a Joke
     </h1>
     <p>Jokes:{jokes.length}</p>
     {
      jokes.map((jokes,index)=>(
        <div key ={jokes.id}>
        <h2>{jokes.joke}</h2>
      </div>
        
      ))
    
    }
    </>
  )
}

export default App
