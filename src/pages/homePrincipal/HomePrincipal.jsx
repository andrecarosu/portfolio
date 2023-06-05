import React, { useEffect, useState } from 'react';
import style from "./homePrincipal.module.css";
import cssImage from "../../assets/images/css.png";
import githubImage from "../../assets/images/github.png";
import htmlImage from "../../assets/images/html.png";
import javascriptImage from "../../assets/images/javascript.png";
import postgresImage from "../../assets/images/postgres.png";
import nodeImage from "../../assets/images/node.png";
import reactImage from "../../assets/images/react.png";
import expressImage from "../../assets/images/express.png";
function HomePrincipal() {

  const text = 'Hola mi nombre es:';
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'pink', 'cyan'];
  const images = [
    { name: 'CSS', src: cssImage },
    { name: 'GitHub', src: githubImage },
    { name: 'HTML', src: htmlImage },
    { name: 'JavaScript', src: javascriptImage },
    { name: 'PostgreSQL', src: postgresImage },
    { name: 'Node', src: nodeImage },
    { name: 'React', src: reactImage },
    { name: 'Express', src: expressImage },
  ];
   

  return (
    <div >
      
      <div className={style.divnav}>
        <nav className={style.nav}>
        <a  href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inicio</a>
          <a   href="#seccion1">Sobre mí</a>
          <a  href="#seccion2">Habilidades</a>
          <a  href="#seccion3">Proyectos</a>
          <a  href="#seccion4">Contacto</a>
        </nav>
        </div>
        <div  className={style.divSeccion1}>
        <h3 className={style.h3}>
      {Array.from(text).map((letter, index) => (
        <span
          key={index}
          className={style['color-animation']}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </h3>
          <h1 className={style.h1} >Andrea Carolina Suárez Mesa</h1>
          <h1 className={style.h2} >Desarrolladora Web Full Stack</h1>
          <p className={style.p1}>            
          Soy una apasionada de la programación con diez años de experiencia en el campo de los sistemas informáticos. 
          Durante mi trayectoria, he tenido la oportunidad de explorar diversas áreas de la tecnología, pero mi verdadero interés siempre ha sido la programación.</p> <br></br>
          <a className={style.aSeccion1} 
          href="https://drive.google.com/file/d/1vMFHsEkzjTpWu8TtXDTmRBbVVtYLdc0p/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            mira mi curriculum</a> <br></br>
            </div>
            <br></br>

            <span id="seccion1"></span>
        <div  className={style.seccion2}>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h1 className={style.h5} >Sobre mí</h1> <br></br>
          <p className={style.p2}>

         Mi objetivo principal es obtener una oportunidad laboral en una empresa que me brinde un entorno propicio  <br></br>
         para mi crecimiento profesional. Aspiro a continuar expandiendo mis conocimientos y habilidades en el campo  <br></br>
         de la programación, colaborando con equipos talentosos y enfrentando desafíos estimulantes <br></br>
         
         </p>
        </div>
        <br></br>
        <span id="seccion2"></span>
        <div  className={style.seccion3}>
        <h1 className={style.h5} >Habilidades</h1>
          <p className={style.p2}>
          <div  className={style.imagegrid}>
      {images.map((image, index) => (
        <div key={index}  className={style.imageitem}>
          <img src={image.src} alt={image.name} className={style.zoomableimage} />
          <div className={style.imagename}>{image.name}</div>
        </div>
      ))}
    </div>
</p>
  </div>
  <br></br>
        <span id="seccion3"></span>
      
    </div>
  );
}

export default HomePrincipal;

