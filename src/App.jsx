import './App.css'
import Card from './componets/Card.jsx'
import data from "./componets/data.js"



function App() {
  return (
    <div className='ota'>
       {data.map((e,i)=>{
        return <Card key={i} odam={e}/>
       })}
    </div>
  )
}

export default App
