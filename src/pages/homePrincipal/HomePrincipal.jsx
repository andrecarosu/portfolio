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
   

  return (
    <div >
      
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
          {/* <a className={style.aSeccion1} 
          href="https://drive.google.com/file/d/1vMFHsEkzjTpWu8TtXDTmRBbVVtYLdc0p/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            mira mi curriculum</a> <br></br> */}
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

          En este momento, me encuentro en la búsqueda laboral activa y estoy con espectativa de encontrar una oportunidad que me permita 
          demostrar mis habilidades y seguir creciendo como profesional. Me encantaría invitarlo(a) a revisar mi currículum y conocer más
           acerca de mi experiencia.  <br></br>
           <br></br>       

           Agradezco sinceramente su atención y quedo a su disposición para cualquier consulta. 
         <br></br>
         <br></br>
         <br></br>
         
           ¡Saludos cordiales!
         
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
        <div className={style.divSeccion5}>
        <span className={style.divSeccion3} id="seccion3"></span>

      <h1 className={style.h6}>Proyectos</h1>
       <h3>Ecommerce de Venta de vinos</h3>  
       <span className={style.h7}>Utilizamos para este proyecto la metodología Scrum, patron de diseño MVC y tecnologías React, Sequelize,
        Postgresql, Express, Nodejs, Github, y JavaScript.
       </span>
      <img className={style.imagenProyect} src={img} alt="Ecommerce" />
      <div className={style.divSeccion4} >
      
      <p className={style.p4}>
        <span className={style.h8}>The wine cellar  </span>
        es una tienda de vinos que permite hacer compras en internet
        por medio de la plataforma de pagos de mercado pago; cuenta con un panel
        de administrador a través del cuál se puede crear, actualizar, eliminar productos, usuarios
        y ver el historial de ventas; en la parte del cliente comprador
        se puede iniciar sesión por google o registrarse en la página, al iniciar sesión se habilita un panel 
        de usuario, con opción de ver el historial de compras realizadas, actualizar perfil, calificar y comentar
        los distintos productos comprados, teniendo en cuenta tanto la calidad del producto, como la experiencia de compra.
        Quisimos brindarle a ambos usuarios (administrador y comprador),  una buena experiencia de usuario, es por eso 
        que nos esmeramos en hacer una aplicación intuitiva, con un diseño sencillo y fácil de usar.
        </p> <br></br>  
        <a className={style.aSeccion3} 
          href="https://ecommerce-khaki-nine.vercel.app" target="_blank" rel="noopener noreferrer">
           Ver Proyecto</a> <br></br> 
        </div>         
        </div>

        <div className={style.divSeccion6}>
        <span  id="seccion4"></span> 
        <h1 className={style.h6}>Contacto</h1> 
        <span>Si desea me puede enviar un correo llenando estos campos: </span>
        <ContactUs />
        </div>
    </div>
  );
}

export default HomePrincipal;

