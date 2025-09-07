import React from "react"

const CreateAccount = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbwsBxxeVL7szSMcc7EFlboMm8RF-ROBhPNSGH2xqALb0fF7HC114ncC-w50AR-CMiI3/exec";
         fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Username=${e.target.username.value}&Password=${e.target.password.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
    }

    return (
        <div>
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
            <input name='username' placeholder="username"/>
            <input name='password' placeholder="password"/>
            <button>Create Account</button>
            </form>
        </div>
    );
}


export default CreateAccount