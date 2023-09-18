import React from 'react'

const Contador = () => {
    const [numero, setNumero] = React.useState(0);
    function Sumar() {
        setNumero(numero + 1)
    }

  return (
    <div>
        <h1>Contador</h1>
        <h1>{numero}</h1>
        <button 
        onClick={Sumar}
        style={{ backgroundColor: "cyan", color: "black" }}>
            Sumar
            </button>
        </div>
  )
}

export default Contador