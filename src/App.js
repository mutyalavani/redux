import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';


function App() {
  const [actor, setactor] = useState('')
  const [cricketer, setcricketer] = useState('')
  const [politician, setpolitician] = useState('')
  const [scientist, setscientist] = useState('')

  const dispatch=useDispatch()
  const storeData= useSelector(store=>store)
  
  return (
    <div className="App">
      <div className="store">
     <input onInput={(event)=>{setactor(event.target.value)}} placeholder="Enter Actor Name"/>
      <button onClick={()=>{dispatch({type:"AddActor",value:actor})}}>Add Actor</button>
      <h1>{storeData.actorsReducer.actors}</h1>
      </div>

      <div className="store">
      <input onInput={(event)=>{setcricketer(event.target.value)}} placeholder="Enter Cricketer Name"/>
      <button onClick={()=>{dispatch({type:"AddCricketer",value:cricketer})}}>Add Cricketer</button>
      <h1>{storeData.cricketersReducer.cricketers}</h1>
      </div>

      <div className="store">
      <input onInput={(event)=>{setpolitician(event.target.value)}} placeholder="Enter politician Name "/>
      <button onClick={()=>{dispatch({type:"AddPolitician",value:politician})}}>Add Politician</button>
      <h1>{storeData.politiciansReducer.politicians}</h1>
      </div>

      <div className="store">
      <input onInput={(event)=>{setscientist(event.target.value)}} placeholder="Enter Scientist Name"/>
      <button onClick={()=>{dispatch({type:"AddScientist",value:scientist})}}>Add scientist</button>
      <h1>{storeData.scientistsReducer.scientists}</h1>
      </div>

    </div>
  );
}

export default App
