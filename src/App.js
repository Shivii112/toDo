import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';


const App = () =>{


  const [list, setlist] = useState("");
  const [item, setitem] = useState([]);
  
  const itemevent = (event) =>{
         setlist(event.target.value);
  };
  const itemlist=()=>{
  setitem((old) => {
  return[...old,list];
});
 setlist(""); 
  };

  const deleteitem = (id)=>{
    console.log("deleted");

    setitem((old)=>{
      return old.filter((arrelement,index)=>{
        return index!==id;
      })
    })
  };
  return (
    <>
      <div className='main-div'>
      <div className='center-div'>
        <h1 >ToDo List</h1>
        <input type="text" placeholder="Add a Items" value={list}onChange={itemevent}></input>
        <button  onClick={itemlist}> + </button>
        <ol>
          {/* <li>{list}</li> */}
              
          {
            item.map( (value, index) =>{
            return <Todolist 
            text={value} 
            key={index} 
            id={index}
            onSelect={deleteitem}
            />;
            })
          }       
        </ol>
        </div>
      </div>
    </>
  );
}

export default App;
