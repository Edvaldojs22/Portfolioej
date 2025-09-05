/* eslint-disable react/prop-types */
import "./Project.css";
export default function Project({ img, h1text, text, technologies }) {
  return (
    <div className="opacity_projeto">
      <div className="img_texto_sobre">
        <img src={img} alt="" />
        <h1>{h1text}</h1>
      </div>

      <div className="texto_sobre">
        <div className="painel_text_p">
          <p>{text}</p>
        </div>

        <ul className="painel_skills">
          {technologies.map((TecIcon, index) => (
            <li key={index}>
              <TecIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
