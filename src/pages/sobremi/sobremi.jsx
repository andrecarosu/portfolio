import React, { useState, useRef } from 'react';
import style from "./sobremi.module.css"


function Sobremi() {
        return (
        <div className={style.container}> 
        <div className={style.div2}>
        <h1 className={style.h1}>Quien soy?</h1>
        <p className={style.p}>
        Soy programadora con diez años de experiencia en el campo de los sistemas informáticos. 
        He tenido la oportunidad de explorar diversas áreas de la tecnología, aunque me he inclinado siempre por la programación.
        </p>
        </div>
        <div className={style.div2}>
        <h1 className={style.h1}>Qué hago?</h1>
        <p className={style.p}>
        Actualmente me encuentro tomando un curso de Ingles, de PHP y otro de Phyton, también estoy trabajando en proyectos 
        grupales en los que estoy afianzando mis conocimientos y aprendiendo a usar nuevas tecnologías.
        </p>
        </div>
        <div className={style.div2}>
        <h1 className={style.h1}>Hacia dónde voy?</h1>
        <p className={style.p}>
        Estoy con expectativa 
        de encontrar una oportunidad que me permita demostrar 
        mis habilidades y seguir creciendo como profesional.
        Me encantaría invitarte a revisar   <a className={style.aSeccion1} 
          href="https://drive.google.com/file/d/1vMFHsEkzjTpWu8TtXDTmRBbVVtYLdc0p/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
             mi curriculum</a> y conocer más acerca de mi experiencia.
        </p>
        </div>
          
        </div>
    
      )
    
}

export default Sobremi;