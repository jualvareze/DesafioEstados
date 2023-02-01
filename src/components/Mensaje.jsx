
const Mensaje = (prop) => {
    const { tipo, mensaje, display } = prop
    if(display === true){
    return (
        <div className={`alert ${tipo === 'exito' ? 'alert-success' : 'alert-danger'}`}>{mensaje}</div>
    )}
}

export default Mensaje