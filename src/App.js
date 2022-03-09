import './App.css';
import TextEditor from './components/TextEditor';
import React,{useState} from 'react';


function App() {
  const [value, setValue]=useState("");
  return (
    <div className="row">
      <div className='col-md-6' style={{margin:'auto' , marginTop:50}}>
        <div style={{textAlign:'center'}}>
          <h3>Text Editor</h3>
          <TextEditor value={setValue}/>

        </div>
      </div>
     
    </div>
  );
}

export default App;
