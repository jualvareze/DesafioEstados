import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Boton from './components/Boton';
import Mensaje from './components/Mensaje';
import { useState } from 'react';


function App() {
  const [nameStatus, setName] = useState("")
  const [passStatus, setPass] = useState("")
  const [mensajeStatus, setMensaje] = useState("")
  const [tipoMensaje, setTipoMensaje] = useState("")
  const [displayAlert, setDisplayAlert] = useState(false)

  const validar = (event) => {
    event.preventDefault()
    setDisplayAlert(true)
    if (nameStatus === '') {
      setTipoMensaje('error')
      return setMensaje(mensajeStatus + 'Ingrese el nombre')
    }
    if (passStatus === '') {
      setTipoMensaje('error')
      return setMensaje(mensajeStatus + 'Ingrese la contraseña')
    }
    if (nameStatus === 'ADL' && passStatus === '252525') {
      setTipoMensaje('exito')
      return setMensaje('La sesión fue iniciada correctamente')
    }
    else {
      setTipoMensaje('error')
      return setMensaje('contraseña erronea')
    }
  }


  return (
    <div className="App container">
      <h1>hola</h1>
      <Mensaje mensaje={mensajeStatus} tipo={tipoMensaje} display={displayAlert}></Mensaje>
      <form onSubmit={validar}>
        <div className='mb-3'>
          <label for='name'>Nombre:</label>
          <input type="text" className='form-control' id='name' onChange={(input) => setName(input.target.value)} />
          <label for='pass'>Contraseña</label>
          <input type="password" className='form-control' id='pass' onChange={(input) => setPass(input.target.value)} />
        </div>
        {nameStatus !== '' && passStatus !== '' && <Boton nameButton="iniciar sesión" />}
      </form>
    </div>
  );
}

export default App;
