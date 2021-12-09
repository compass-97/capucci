import React,{useState} from 'react';
import axios from 'axios';


function App() {
  const [value, setValue] = useState('')

  const getValue = (e) => {
    setValue(e.target.value)
  }

  const submit = () => {
    axios({
      method: 'post',
      url: `http://localhost:5000/api/test`,
      data: {value}
    }).then(res=>{
      setValue('')
    })
  }

  return (
    <>
    <input type='text' value={value || ''} onChange={getValue} />
    <button type='button' onClick={submit}>전송</button>
    <p>{value}</p>
    </>
  );
}

export default App;
