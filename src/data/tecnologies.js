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
    name: "HTML",
    Icon: FaHtml5,
    color: "#e34c26",
    id: 1,
    description:
      "Domino HTML com profundidade, utilizando suas tags e estrutura semântica para criar páginas web bem organizadas, acessíveis e otimizadas para mecanismos de busca. Tenho experiência prática com HTML5, aplicando elementos como <section>, <article>, <header> e <footer> para garantir clareza estrutural e melhor indexação. Com HTML, construo a base sólida para interfaces modernas, sempre alinhado às boas práticas de desenvolvimento front-end.",
  },
  {
    name: "CSS",
    Icon: IoLogoCss3,
    color: "#264de4",
    id: 2,
    description:
      "Domino CSS com segurança e eficiência, utilizando-o para transformar estruturas HTML em interfaces modernas, responsivas e visualmente atraentes. Tenho domínio sobre propriedades de layout como Flexbox e Grid, além de técnicas avançadas de estilização, animações e transições. Sei aplicar boas práticas de organização e reutilização de estilos, garantindo escalabilidade e manutenção do código. Meu conhecimento em CSS me permite criar experiências visuais consistentes e adaptáveis a diferentes dispositivos e tamanhos de tela.",
  },
  {
    name: "JavaScript",
    Icon: RiJavascriptFill,
    color: "#f0db4f",
    id: 3,
    description:
      "Tenho domínio sólido de JavaScript, linguagem essencial para o desenvolvimento web moderno. Utilizo seus recursos para criar interfaces dinâmicas, interativas e responsivas, tanto no front-end quanto no back-end com Node.js.. Trabalho com manipulação de DOM, eventos, requisições assíncronas (AJAX/fetch), e aplico conceitos como closures, callbacks, promessas e programação orientada a objetos. Também tenho experiência com ES6+ e boas práticas de código limpo, modular e reutilizável. JavaScript é uma das minhas principais ferramentas para transformar ideias em funcionalidades reais e eficientes.",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "#68a063",
    id: 4,
    description:
      "Domino Node.js como ambiente de execução JavaScript no servidor, utilizando-o para desenvolver aplicações escaláveis, rápidas e eficientes. Tenho experiência prática na criação de APIs RESTful, manipulação de rotas, integração com bancos de dados como MongoDB e MySQL, e uso de frameworks como Express.js.. Trabalho com programação assíncrona, promessas e manipulação de eventos para garantir alta performance e responsividade. Também aplico boas práticas de arquitetura, como separação de responsabilidades e uso de middlewares, garantindo organização e clareza no código.",
  },
  {
    name: "React",
    Icon: FaReact,
    color: "#61dafb",
    id: 5,
    description:
      "Atualmente, é a tecnologia que mais utilizo no meu dia a dia. Tenho domínio sólido da biblioteca React para construção de interfaces web modernas, dinâmicas e escaláveis. Trabalho com componentes funcionais, hooks como useState, useEffect e useContext, além de aplicar boas práticas de organização e reutilização de código. Tenho experiência na integração com APIs, gerenciamento de estado e criação de aplicações responsivas. Meu foco está em entregar interfaces performáticas e com excelente experiência para o usuário, sempre buscando evoluir com as novidades do ecossistema React.",
  },
  {
    name: "Angular",
    Icon: FaAngular,
    color: "#dd1b16",
    id: 6,
    description:
      "Já utilizei Angular em alguns projetos colaborativos com amigos e, mesmo não sendo a tecnologia que uso com mais frequência, consegui trabalhar com ela com naturalidade e sem dificuldades. Tenho familiaridade com sua estrutura baseada em componentes, rotas, serviços e integração com APIs. Entendo bem os conceitos fundamentais do framework e consigo desenvolver aplicações funcionais e organizadas. Embora ainda esteja em processo de aprofundamento, tenho facilidade de aprendizado e estou sempre disposto a praticar mais para evoluir com a ferramenta.",
  },
  {
    name: "Java",
    Icon: FaJava,
    color: "#007396",
    id: 7,
    description:
      "Java foi uma das primeiras linguagens que aprendi na faculdade, e desde então desenvolvi uma boa base na sua sintaxe e nos conceitos fundamentais da programação orientada a objetos. Embora não utilize com frequência atualmente, já a usei em diversos exercícios e projetos acadêmicos, sempre com facilidade e bom entendimento. Gosto da robustez da linguagem e da clareza que ela exige na estruturação do código. Tenho segurança para trabalhar com Java em contextos de estudo e estou aberto a aprofundar ainda mais meu conhecimento conforme surgirem novas oportunidades.",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    id: 8,
    description:
      "Tenho grande afinidade com MongoDB, especialmente pela sua facilidade de uso e flexibilidade como banco de dados NoSQL. Gosto de trabalhar com integrações entre MongoDB e Node.js, criando aplicações que lidam com dados de forma eficiente e escalável. Já utilizei MongoDB em projetos reais, inclusive em ambientes empresariais, e me sinto confortável ao modelar documentos, realizar operações CRUD e aplicar filtros avançados com consultas. A estrutura orientada a documentos me permite desenvolver com agilidade e adaptar facilmente os dados às necessidades da aplicação.",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#00758f",
    id: 9,
    description:
      "Tenho conhecimento prático em MySQL, adquirido durante a faculdade e aplicado em projetos nos quais realizei integrações com sistemas e APIs. Embora não seja o banco de dados que utilizo com maior frequência atualmente, consigo trabalhar com suas funcionalidades com segurança, especialmente na criação de tabelas, consultas SQL, relacionamentos entre dados e operações CRUD. Entendo bem sua estrutura relacional e sei como aplicar boas práticas de modelagem para garantir integridade e desempenho. Estou sempre aberto a retomar e aprofundar o uso do MySQL conforme a demanda dos projetos.",
  },
  {
    name: "Amazon Web Services",
    Icon: FaAws,
    color: "#ff9900",
    id: 10,
    description:
      "Recentemente obtive a certificação AWS Cloud Practitioner, o que reforçou minha base teórica e prática em serviços de computação em nuvem. Tive a oportunidade de realizar estágio na empresa Compass UOL, onde aprofundei meus conhecimentos sobre os principais conceitos da AWS, como infraestrutura elástica, máquinas virtuais (EC2), armazenamento, segurança e boas práticas de arquitetura em nuvem. Durante esse período, desenvolvi e publiquei um projeto completo utilizando uma instância EC2 gratuita, configurando o ambiente, realizando deploy e colocando a aplicação no ar. Essa experiência me proporcionou uma visão prática e estratégica sobre como utilizar a AWS para criar soluções escaláveis e eficientes.",
  },
];
