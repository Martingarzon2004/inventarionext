"use client";
import { useState } from "react";

const HomePage = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [lugar, setLugar] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [iva, setIVA] = useState("");
  // Estas claves almacenan información relacionada con los datos de los productos.
  // Por defecto, esta información debe aparecer vacia.
  const [accion, setAccion] = useState("");
  // La clase "accion" define si un producto se va a añadir o retirar.
  // En el futuro, podría hacer que "accion" utilice valores binarios para la conexión con MySQL.
  const cambiarObjetos = () => {
    setId("10101010");
    setNombre("Aromáticas");
    setCategoria("Cafeteria");
    setLugar("Caja 1.1");
    setCantidad("12");
    setPrecio("3000");
    setIVA("N/A");
    setAccion("Añadir");
  }; // Estos serían los datos que se agregarían a la pre-factura en caso de añadir un producto.
  const descartarObjetos = () => {    
    setId("10101010");
    setNombre("Aromáticas");
    setCategoria("Cafeteria");
    setLugar("Caja 1.1");
    setCantidad("12");
    setPrecio("3000");
    setIVA("N/A");
    setAccion("Remover");
  }; // Estos serían los datos que se agregarían a la pre-factura en caso de remover un producto.
  const eliminarObjetos = () => {    
    setId("");
    setNombre("");
    setCategoria("");
    setLugar("");
    setCantidad("");
    setPrecio("");
    setIVA("");
    setAccion("");
  }; // Estos serían los datos que se agregarían a la pre-factura en caso de descartar un producto de la pre-factura.
  return (
    <div className="contanier">
      <ul>
        <li>
          <h3><button type="button" id="salida">Salir del módulo (fuera de servicio)</button></h3>
        </li>
        <li>
          <h3><button type="submit" id="anadir">Añadir nuevos productos</button></h3>
        </li>
        <li>
          <h3><button type="button" id="borrar">Borrar productos</button></h3>
        </li>
        <li>
          <h3><button type="submit" id="guardar">Guardar datos de la pre-factura</button></h3>
        </li>
      </ul>
      <h1 style={{ color: "blue" }}>
        Pagina principal
      </h1>
      <section id="ingreso"> 
        {/*Esta sección todavia no funciona. Una solución para esta parte del programa
        sería que los datos que se agregan a los "inputs se almacenaran en clases", Pero yo no he
        podido implementar esto*/}
        <h4>
          <br></br>
          <label>Nombre del producto...</label><input type="text" name="nombre" id="nombre"></input>
          <br></br>
          <label>Cantidad...</label><input type="number" name="cantidad" id="cantidad"></input>
          <br></br>
          <label>Precio...</label><input type="number" name="precio" id="precio"></input>
          <br></br>
          <label>IVA...</label><input type="number" name="iva" id="iva"></input>
          <br></br>
          <label>Categoria...</label><input type="text" name="categoria" id="categoria"></input>
          <br></br>
          <label>Lugar...</label><input type="text" name="lugar" id="lugar"></input>
          <br></br>
        </h4>
      </section>
      <section id="seleccion">
        <table>
          <tr>
            <th><h4>ID</h4></th>
            <th><h4>Nombre</h4></th>
            <th><h4>Categoria</h4></th>
            <th><h4>Lugar</h4></th>
            <th><h4>Cantidad</h4></th>
            <th><h4>Precio</h4></th>
            <th><h4>IVA</h4></th>
          </tr>
          <tr>
            <td><p>10101010</p></td>
            <td><p>Aromáticas</p></td>
            <td><p>Cafeteria</p></td>
            <td><p>Caja 1.1</p></td>
            <td><p>12</p></td>
            <td><p>3000</p></td>
            <td><p>N/A</p></td>
          </tr>
        </table>
        {/*Estos botones se encargan de añadir los datos de la pre-factura:
        el botón celeste coloca productos para añadir, el botón rosado coloca productos para remover,
        Y el botón gris quita elementos de la factura.
        */}
        <button
          onClick={cambiarObjetos}
          style={{ backgroundColor: "cyan", color: "black" }}>Añadir producto</button>
        <button
          onClick={descartarObjetos}
          style={{ backgroundColor: "pink", color: "black" }}>Remover producto</button>
          <button
          onClick={eliminarObjetos}
          style={{ backgroundColor: "grey", color: "black" }}>Eliminar producto</button>
      </section>
      <section id="pre-factura">
        <table>
          <tr>
            <th><h4>ID</h4></th>
            <th><h4>Nombre</h4></th>
            <th><h4>Categoria</h4></th>
            <th><h4>Lugar</h4></th>
            <th><h4>Cantidad</h4></th>
            <th><h4>Precio</h4></th>
            <th><h4>Acción</h4></th>
          </tr>
          <tr>
            <td><p>{id}</p></td>
            <td><p>{nombre}</p></td>
            <td><p>{categoria}</p></td>
            <td><p>{lugar}</p></td>
            <td><p>{cantidad}</p></td>
            <td><p>{precio}</p></td>
            <td><p>{iva}</p></td>            
            <th><p>{accion}</p></th>
            {/*Estas clases inclujen los datos del producto para añadir, remover, o eliminar de la factura.*/}
          </tr>
        </table>
      </section>
    </div>
  );
};

export default HomePage;