// src/data/tecnologies.js
import {
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";

export const tecnologies = [
  {
    Icon: FaHtml5,
    color: "#e34c26",
    id: 1,
    description: "Linguagem de marcação para estruturar páginas web.",
  },
  {
    Icon: IoLogoCss3,
    color: "#264de4",
    id: 2,
    description: "Estilização de páginas web com layouts modernos.",
  },
  {
    Icon: RiJavascriptFill,
    color: "#f0db4f",
    id: 3,
    description: "Linguagem de programação para interatividade no navegador.",
  },
  {
    Icon: FaNodeJs,
    color: "#68a063",
    id: 4,
    description: "Ambiente de execução JavaScript no servidor.",
  },
  {
    Icon: FaReact,
    color: "#61dafb",
    id: 5,
    description: "Biblioteca JavaScript para interfaces reativas.",
  },
  {
    Icon: FaAngular,
    color: "#dd1b16",
    id: 6,
    description: "Framework completo para aplicações web.",
  },
  {
    Icon: FaJava,
    color: "#007396",
    id: 7,
    description:
      "Linguagem robusta usada em sistemas corporativos e apps Android.",
  },
  {
    Icon: SiMongodb,
    color: "#47A248",
    id: 8,
    description: "Banco de dados NoSQL orientado a documentos.",
  },
  {
    Icon: SiMysql,
    color: "#00758f",
    id: 9,
    description: "Banco de dados relacional amplamente utilizado.",
  },
  {
    Icon: FaAws,
    color: "#ff9900",
    id: 10,
    description: "Serviços de computação em nuvem da Amazon.",
  },
];
