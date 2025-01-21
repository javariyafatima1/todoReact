import { useState } from 'react';
import './App.css';
import { FaEdit ,MdDelete} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";



function App() {
const [list, setList] = useState([])
const [inputValue, setInputValue] = useState("")
const [edittext, setedittext] = useState(false)
const [updateindex, setupdateindex] = useState(false)
  
 

 
  const addItem = () => {
    

    
    setList([...list,{
      itemvalue:inputValue,
      compelete:false,
      
    }])
    setInputValue("")
    

    
  }
  
  const editTodo =(item,index)=>{
        setInputValue(item.itemvalue)
        setedittext(true)
        setupdateindex(index)
       
        

  }
  const updateTodo =()=>{
   setedittext(false)
   setInputValue("")
   
let ar =[...list]
ar[updateindex].itemvalue=inputValue
setList(ar)

  }
   


  
  const deletebutton = (remove) => {
     setList(list.filter((item)=> item  !== remove))
  }
  
  const alldelete=()=>{
    setList([])
  }

  const compeletevalue = (index,value) => {

   const compeletelist = [...list];
   if(value){
    console.log(value)
    compeletelist[index].compelete = true;

   }else{
    compeletelist[index].compelete = false;
   }
   setList(compeletelist);
 }


  return (
    <div className="App">
       <header className="App-header">
        <div className='new'>
        <h1>TODO APP</h1>
      
      
        <input placeholder='Enter Todo Item'className='input'
            onChange={event => setInputValue(event.target.value)}
          
            value={inputValue}
          >
          
          </input>
      
         
          {
            edittext?(<button className='button' onClick={()=>updateTodo()}>update</button>)

          :(<button className=' add'
          onClick={addItem}
        >Add</button>
          )
          }
         
          
          <ul>
        {
            list.map((item,index) => {
              return (
              <li>
              <div className='display'>
                
                <div className='check'> 
                  <input className='inputcheck' type={'checkbox'}
                   onChange={(event) =>{compeletevalue(index,event.target.checked)}}
                  >

                  </input>
                </div>
                <div>
                  {item.compelete ?<p className="compeletecss">{item.itemvalue}</p>:<p className=' text-lg text-blue'>  {item.itemvalue}</p>}
                                

                </div>

                <div>
                <button className='button1' onClick={()=>{deletebutton(item)}}>



                  <FaTrash/>
                  </button>
                <button className='button1' onClick={() => editTodo(item,index)}><FaEdit/>
        </button>
          
                </div>
               
                </div>
</li>
              )         
  })
          }
          </ul>
<button className='button' onClick={() => alldelete()}>Alldelet</button>
            
</div>
</header>
          
    </div>
  );
}

export default App;
