import { useState } from 'react'
import flor3 from './assets/flor3.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [erroremail, setErroremail] = useState("");

//Validação do email

function ValidaEmail(value) {
 if (value.length === 0) {
      setErroremail("O email não pode estar vazio.");
      return;
    } 

  setErroremail("");
} 

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    ValidaEmail(value);

  };


//Validação da senha

 function ValidaSenha (value) {
 if (value.length === 0) {
      setError("A senha não pode estar vazia.");
      return;
    } 

    setError("");
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    ValidaSenha(value);

  };
  return (
    <>
    <div className='DivLogin'>
      <img src={flor3} className="ImgFlor" alt="" />
      <div className='DivInput'>
        <h1 className='NomeLogin'>Login</h1>
      <InputLogin placeholder="Digite o seu email..." type="email" value={email} onChange={handleChangeEmail} />
       <div className="error-container">
      {erroremail && <p className="error-messageemail">{erroremail}</p>}
      </div>
      <InputLogin placeholder="Digite o seu senha..." type="password" value={password} onChange={handleChange}/>
      <div className="error-container">
      {error && <p className="error-message">{error}</p>}
      </div>
      <div className='container-checkboxEsquecisenha'>
      <RelembremeForm/>  
      </div>
     <Botao/>     
     </div>   
     </div>
    </>
  )
}

 
//Botão de login

  function Botao() {
    return <button className='BotaoLogin'>Clique aqui</button>;
  }

//Input de login
function InputLogin({ placeholder, type, password, value, onChange}) {
  return (
    <input
      className='InputLogin'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

//Checkbox e Esqueceu senha

  function RelembremeForm(){
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(event){
      setIsChecked(event.target.checked);
    }

    return(
      <div>
        <label className='checkboxLabel'>
          <input
          className='checkboxForm'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          />
          Relembreme-me
        </label>
        <a href="#" className='EsqueciSenhaLink'>Esqueceu senha?</a>
      </div>
    );
  }


  function ModoEscuro() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="card">
      
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
}





  
 export {App, Botao, InputLogin, RelembremeForm};
 export default App;






