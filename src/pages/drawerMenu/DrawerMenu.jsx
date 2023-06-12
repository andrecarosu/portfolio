import { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import "react-modern-drawer/dist/index.css";
import IconMenu from './IconMenu'
import style from './drawer.module.css'

export default function DrawerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div  onClick={toggleDrawer} style={{ cursor: 'pointer' }}> <IconMenu /> </div>

            <Drawer style={{ height: '70%', backgroundColor:'rgb(230, 215, 230)' }}className={style.container} open={isOpen} onClose={toggleDrawer} direction='left'>
                <div >
                    <div >
                        <h1 className={style.h1}>Mi Portafolio</h1>
                    </div>
                    <div className={style.divnav}>
        <div className={style.nav}>
        <a  style={{ textAlign: 'left', marginRight: '600px' }}
          href="https://drive.google.com/file/d/1vMFHsEkzjTpWu8TtXDTmRBbVVtYLdc0p/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Mi currículum</a>
        <a  href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inicio</a>
          <a   href="#seccion1">Sobre mí</a>
          <a  href="#seccion2">Habilidades</a>
          <a  href="#seccion3">Proyectos</a>
          <a  href="#seccion4">Contacto</a>           
        </div>
        </div>
                </div>
            </Drawer>
            
        </>
    )
}