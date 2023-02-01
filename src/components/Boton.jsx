import Button from 'react-bootstrap/Button';

const Boton = (props) =>{
    const {nameButton} = props
    return(
        <Button variant="primary" type='submit'>{nameButton}</Button>
    )
}

export default Boton