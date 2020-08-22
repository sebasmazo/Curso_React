import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) =>{
    const [counter, setCounter] = useState(value);  //Retorna un arreglo 
    
    const handleReset = (e) => {    //El numero del counter se vuelve igual al value enviado como prop
        setCounter(value);
    }
    const handleMinus = (e) => {    //Resta menos 1 el numero del counter
        setCounter(counter - 1);
    }
    //HandleAdd <!-- El boton manda a la funcion handle add -->
    const handleAdd = (e) => {
        setCounter( counter + 1 );
        //setCounter( (c)=>c + 1 ); 2da forma 
    }
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick = { handleAdd }> +1 </button>   
            <button onClick={handleReset}> Reset </button>   
            <button onClick={handleMinus}> -1 </button>   
        </Fragment>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;