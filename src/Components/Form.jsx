import React, {useState} from "react";


const Form = () => {

  const [user, setUser] = useState({
    name:'',
    email: '',
  })

  return (
    <div>
      <form action= ''>
        {user.name}
        <input type="text" value= {user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
        {user.email}
        <input type="email" value= {user.email} onChange={(e) => setUser({...user, email: e.target.value})} />

      </form>
    </div>
  );
};

export default Form;
