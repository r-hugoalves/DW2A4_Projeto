import React, { useState } from "react";

export function Formulario(){

    const[values, setValues] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
    });

    const [submited, setSubmited] = useState(false); 

    const [valid, setValid] = useState(false); 


    const handleFirstNameInputChange = (event: { target: { value: any; }; }) => {
        setValues({...values, firstName: event.target.value})
    }

    const handleLastNameInputChange = (event: { target: { value: any; }; }) => {
        setValues({...values, lastName: event.target.value})
    }

    const handleEmailInputChange = (event: { target: { value: any; }; }) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event: { preventDefault: () => void; }) =>{
        event.preventDefault(); 
        if(values.firstName && values.lastName && values.email){
            setValid(true); 
        }
        setSubmited(true); 
    }

    return(
        <div className="bodyBackground">
            <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                {submited && valid ? <div className="sucess-message"> Sucesso! Você enviou sua mensagem! </div> : null}
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="first-name"
                    className="form-fied"
                    type="text"
                    placeholder="Primeiro Nome"
                    name="firstName"    
                />
                {submited && !values.firstName ?
                    <span className="ErrorMessage hover:bg-rose-600 transition-all duration-500" > 
                        Por favor, preencha o campo
                    </span> : null}

                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    id="last-name"
                    className="form-fied"
                    type="text"
                    placeholder="Segundo Nome"
                    name="lastName"    
                />
                 {submited && !values.lastName ?
                    <span className="ErrorMessage hover:bg-rose-600 transition-all duration-500" > 
                        Por favor, preencha o campo
                    </span> : null}

                <input
                    onChange={handleEmailInputChange}
                    value={values.email}
                    id="email"
                    className=" form-fied"
                    type="text"
                    placeholder="E-mail"
                    name="email"    
                />
                 {submited && !values.email ?
                    <span className="ErrorMessage hover:bg-rose-600 transition-all duration-500" > 
                        Por favor, preencha o campo
                    </span> : null}

                <button className="form-field hover:bg-red-700 transition-all duration-500" type="submit">
                    Enviar
                </button>
            </form>
        </div>
        </div>
    )
}