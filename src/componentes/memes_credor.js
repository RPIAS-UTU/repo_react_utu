// https://www.youtube.com/watch?v=5DAEdXKp7QA&t=1317s

import html2canvas from "html2canvas";
import { useState } from "react";

function CreadorMemes() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="container">
      <br />
      <h1> Bienvenidos a React</h1>
      <br />

      <div class="form-group">
        <label for="select-imagen">
          <strong class="font-weight-bold">
            Selecciona tu imagen preferida
          </strong>
        </label>
        <select
          id="select-imagen"
          className="form-control"
          onChange={onChangeImagen}
        >
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="santiago">The king of Rings</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
      </div>
      <br />

      <div class="form-group">
        <label for="select-imagen">
          <strong class="font-weight-bold">Define el texto de arriba</strong>
        </label>
        <input
          className="form-control"
          onChange={onChangeLinea1}
          type="text"
          placeholder="Por ejemplo el nombre de un amigo"
        />{" "}
      </div>

      <br />

      <div class="form-group">
        <label for="select-imagen">
          <strong class="font-weight-bold">Define el texto de arriba</strong>
        </label>
        <input
          className="form-control"
          onChange={onChangeLinea2}
          type="text"
          placeholder="Una frase que se te ocurra, que no sea muy larga"
        />{" "}
      </div>

      <br />
      <div class="form-group">
        <button
          className="form-control btn btn-success"
          onClick={onClickExportar}
        >
          Descargar mi meme
        </button>
      </div>

      <br />

      <div className="meme" id="meme">
        <span>{linea1}</span> 
        
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

      <br />
      <br />




    </div>

  );
}

export default CreadorMemes;
