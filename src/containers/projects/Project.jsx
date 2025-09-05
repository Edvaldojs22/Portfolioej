/* eslint-disable react/prop-types */
import "./Project.css";
export default function Project({
  img,
  h1text,
  text,
  technologies,
  site,
  linkCodigo,
  textSite,
}) {
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

        <nav className="painel_links_projetos">
          <a href={site} target="_blank">
            {textSite}
          </a>
          <a href={linkCodigo} target="_blank">
            Código GitHub
          </a>
        </nav>

        <ul className="painel_skills">
          {technologies.map(({ Icon, color }, index) => (
            <li key={index}>
              <Icon color={color} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
