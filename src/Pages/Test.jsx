import React,{useState} from "react";

  
  export default function Form() {
    const [inputs, setInputs] = useState({
        no1: "",
        no2: ""
      })
    
      const changeHandle = e => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        })
      }
    
      const submitHandle = e => {
        e.preventDefault()
        console.log(parseInt(inputs.no1) + parseInt(inputs.no2))
      }
      
      return (
        <form onSubmit={submitHandle}>
          <input type="number" name="no1" value={inputs.no1} onChange={changeHandle} />
          <input type="number" name="no2" value={inputs.no2} onChange={changeHandle} />
          <button type="submit">Submit</button>
        </form>
      );
    }
  