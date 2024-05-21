import React from "react";
import "./css_modules/Skills.css";

const skills = [
  { name: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", imgAlt: "Javascript" },
  { name: "Typescript", link: "https://www.typescriptlang.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", imgAlt: "Typescript" },
  { name: "React", link: "https://react.dev/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", imgAlt: "React" },
  { name: "Next.js", link: "https://nextjs.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", imgAlt: "Next.js" },
  { name: "Node.js", link: "https://nodejs.org/en", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", imgAlt: "Node.js" },
  { name: "Express.js", link: "https://expressjs.com/", imgSrc: "https://sagarshah.dev/_next/static/media/icon-express.14fe67e7.svg", imgAlt: "Express.js" },
  { name: "Socket.io", link: "https://socket.io/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg", imgAlt: "Socket.io" },
  { name: "PostgreSQL", link: "https://www.postgresql.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", imgAlt: "PostgreSQL" },
  { name: "MongoDB", link: "https://www.mongodb.com/", imgSrc: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress", imgAlt: "MongoDB" },
  { name: "Tailwindcss", link: "https://tailwindcss.com/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", imgAlt: "Tailwindcss" },
  { name: "Figma", link: "https://www.figma.com/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", imgAlt: "Figma" },
  { name: "Git", link: "https://git-scm.com/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", imgAlt: "Git" },
  { name: "Spring Boot", link: "https://spring.io/projects/spring-boot", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", imgAlt: "Spring Boot" },
  { name: "Python", link: "https://www.python.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", imgAlt: "Python" },
  { name: "TensorFlow", link: "https://www.tensorflow.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", imgAlt: "TensorFlow" },
  { name: "Java", link: "https://www.java.com/", imgSrc: "https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512", imgAlt: "Java" },
];

const SkillItem = ({ name, link, imgSrc, imgAlt }) => (
    <div className="skill-item">
        <a target="_blank" rel="noopener noreferrer" href={link} className="skill-link">
            <img 
                alt={imgAlt}
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                className="skill-image"
                src={imgSrc}
                style={{ color: "transparent" }}
            />
        </a>
        <p className="skill-name">{name}</p>
    </div>
);

export default function Skills() {
  return (
    <div className="main">
      <div className="about">
        <span className="span-btn">Skills</span>
      </div>
      <p className="description-txt">The skills, tools and technologies I am really good at:</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            link={skill.link}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
          />
        ))}
      </div>
    </div>
  );
}

