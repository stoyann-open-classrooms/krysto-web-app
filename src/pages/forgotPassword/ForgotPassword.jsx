import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../features/auth/authSlice';

function ForgotPassword() {
    const [formData, setFormData] = useState({
      });
      const dispatch = useDispatch();
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(forgotPassword(formData))

    }
  return (
    <main className='container'>

        <section className='headings'>
            <h2>Mot de passe oublié</h2>
            <p>Indiquer votre email, vous recevrez un mail pour pouvoir renitialiser votre mots de passe</p>
        </section>
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="mail"
                  id="email"
                  onChange={onChange}
                  placeholder="Entrer votre email"
                />
              </div>
             
              <div className="form-group">
                <button className=" btn btn-block">Ce connecter</button>
              </div>
            </form>
            
          </section>
    </main>
  )
}

export default ForgotPassword