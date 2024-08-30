import "./NavBar.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
     <ul className="navlist">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Conocenos</a></li>
        <li><a href="#events">Eventos</a></li>
        <li><a href="#songs">Canciones</a></li>
        <li><a href="#merchan">Merchan</a></li>
        <li><a href="#gallery">Galeria</a></li>
        <li><a href="#contact">Contacto</a></li>
     </ul>
    </nav>
  ) 
}
