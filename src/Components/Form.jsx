import React, {useState} from "react";


const Form = () => {

  const [user, setUser] = useState({
    name:'',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    console.log(user.email)
    if(user.name.length < 5 || !emailRegex.test(user.email) || user.email.length === 0){
      alert('Por favor verifique su información nuevamente')
    
    }else{
      alert(`Gracias ${user.name}, te contactaremos cuando antes vía mail`)

    }
      
  }

  return (
    <div>
      <form action= 'POST' onSubmit={handleSubmit} >
        {user.name}
        <input type="text" value= {user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
        {user.email}
        <input type="email" value= {user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
