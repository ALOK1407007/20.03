import React,{useRef,useState} from 'react'
import IMG1 from './img31.jpg'
import IMG2 from './img37.jpg'
const App = () => {
const [photo, setPhoto] = useState(IMG1);
const [load,setLoading]=useState(true)
let abc=useRef();
let xyz=useRef()
let handleChange=()=>{
  if(load===true){
    setLoading(false)
    setPhoto(IMG2)
  abc.current.style.borderRadius='100%'
  }
  else{
    setLoading(true)
    setPhoto(IMG1)
    abc.current.style.borderRadius='100%'
  }
  

}
  return (<>
    <img src={photo} alt='' ref={abc} height='200px' width='200px'/>
    
    <div>
      <button ref={xyz} onClick={handleChange}>{load ? "ON" : "OFF"}</button>
    </div>
    </>
  )
}

export default App
