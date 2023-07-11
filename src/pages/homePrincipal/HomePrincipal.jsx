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
import img_ecommerceImage from "../../assets/images/img_ecommerce.png";
import ContactUs from "../ContactUs";
import DrawerMenu from "../drawerMenu/DrawerMenu";
import Sobremi from '../sobremi/sobremi';
import linkedin from '../../assets/images/linkedin.png';
import githubredes from '../../assets/images/githubredes.png';
import whatsapp from '../../assets/images/whatsapp.png';

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

  let img = img_ecommerceImage;
  let linked = linkedin;
  let redesgithub = githubredes; 
  let redeswhatsapp = whatsapp;
  return (
    <div className={style.container} >

      
       {/* <div>
       <canvas id="canvas">
         <h1> Hola mundo esto es un mensaje de prueba</h1>
        </canvas>
       </div> */}
      <div className={style.divnav}>
      <div className={style.menu}>
        <DrawerMenu />
       </div>
        <nav className={style.nav}>
        <a  style={{ textAlign: 'left', marginRight: '600px' }}
          href="https://drive.google.com/file/d/1vMFHsEkzjTpWu8TtXDTmRBbVVtYLdc0p/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Mi currículum</a>
          <a  href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inicio</a>
          <a   href="#seccion1">Sobre mí</a>
          <a  href="#seccion2">Habilidades</a>
          <a  href="#seccion3">Proyectos</a>
          <a  href="#seccion4">Contacto</a>           
        </nav>
        </div>
        <div className={style.divredes}>
          <a href="https://www.linkedin.com/in/andrecarosu">
          <img className={style.imgredes} src={linked} alt="redes" />
          </a>
          <a href="https://github.com/andrecarosu">
          <img className={style.imgredes} src={redesgithub} alt="github" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=57+3014102103&text=Hola%20cliente,%20me%20gustaría%20contactarte%20por%20favor.">
            <img className={style.imgredes} src={redeswhatsapp} alt="whatsapp" />
          </a>
        
        </div>
        <div  className={style.divSeccion1}>
        <div className={style.divimg}>
          <img src="https://res.cloudinary.com/dfmkjxjsf/image/upload/v1688910405/20160625_112429_mqnjlp.jpg" />
          
          </div>
          <div className={style.divnav2}>
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
          <h1 className={style.h1} >Carolina Suárez</h1>
          <h1 className={style.h2} >Desarrolladora Web Full Stack</h1> 
        
          </div>
            </div>
            <br></br>
           
            <span id="seccion1"></span>
        <div  className={style.seccion2}>        
        <h1 className={style.h10} >Sobre mí</h1> <br></br>
         <div className={style.p10}>

          <Sobremi />
         </div>
           </div>

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
        <div className={style.divSeccion5}>
        <span className={style.divSeccion3} id="seccion3"></span>

      <h1 className={style.h6}>Proyectos</h1>
       <h3>Ecommerce de Venta de vinos</h3>  
       <span className={style.h7}>Utilizamos para este proyecto la metodología Scrum, patron de diseño MVC y tecnologías React, Sequelize,
        Postgresql, Express, Nodejs, Github, y JavaScript.
       </span>
      <img className={style.imagenProyect} src={img} alt="Ecommerce" />
      <div className={style.divSeccion4} >
       
        <a className={style.aSeccion3} 
          href="https://ecommerce-khaki-nine.vercel.app" target="_blank" rel="noopener noreferrer">
           Ver Proyecto</a> <br></br> 
        </div>         
        </div>

        <div className={style.divSeccion6}>
        <span  id="seccion4"></span> 
              <h1 className={style.h9}>Contacto</h1>
        <span className={style.spanSeccion4}>contactame por correo llenando estos campos: </span>
              <div className={style.divSeccion10}> 
              <div style={{ overflow: 'hidden', maxWidth: '100%', width: '500px', height: '500px' }}>
        <div id="google-maps-display" style={{ height: '90%', width: '90%', maxWidth: '90%' }}>
          <iframe style={{ height: '100%', width: '100%', border: '0' }} src="https://www.google.com/maps/embed/v1/place?q=Zipaquirá,+Cundinamarca,+Colombia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
      </div>
        <div className={style.divSeccion11}>
        <ContactUs />
        </div>
        </div>
        </div>
        
    </div>
  );
}

export default HomePrincipal;

