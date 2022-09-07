import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
//estilos
import '../../components/Subscribe/Subscribe.css'
//imagenes
import arrow from '../../assets/img/arrowRight.png'

const Subscribe = () => {

  const [state, handleSubmit] = useForm("xnqrjbnv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='Ingresa tu email'
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            <img className="arrow" src={arrow} alt="flecha en dirección derecha" />
          </button>
        </fieldset>
    </form>
  );
}

export default Subscribe