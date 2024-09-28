import React, { useState } from 'react';

function Contact(props) {
  const [state,setstate] = useState({
    name:'',
    email:"",

  })
  const add=(e)=>{
    e.preventDefault();
    if(state.name === "" && state.email === ""){
      alert("All the fields are Mandatory!");
      return;
    }
    props.ContactHandler(state);
    setstate({name:'',email:''});
    console.log(state);
  }

  return (
    <div className='ui main'>
      <h1 style={{marginTop:'46px'}}>Add Contact</h1>
      <form className='ui form' onSubmit={add}>
        <div className='field'>
          <label>Name</label>
          <input type='text' name='name' placeholder='Name' 
          value={state.name}
          onChange={(e)=>setstate({name: e.target.value})}/>
        </div>
        <div className='field'>
          <label>Name</label>
          <input type='text' name='email' placeholder='email'
          value={state.email}
          onChange={(e)=>setstate({email: e.target.value})}
        />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  )
}

export default Contact