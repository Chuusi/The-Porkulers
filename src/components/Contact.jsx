import "./Contact.css"
export const Contact = () => {
  return (
    <div className="page contact" id="contact">
        <h2 className="page_title contact_title">CONTACTA CON NOSOTROS</h2>
        <ul className="contact_list">
          <li><i className="fa-regular fa-envelope"></i> <a href="mailto:the_porkulers@outlook.es" target="_blank">the_porkulers@outlook.es</a></li>
          <li className="whatsapp"><i className="fa-brands fa-whatsapp"></i><a>+34 659 59 59 59</a></li>
          <li><i className="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/profile.php?id=100090815241715" target="_blank">THE PORKULERS</a></li>
          <li><i className="fa-brands fa-youtube"></i> <a href="https://www.youtube.com/@user-theporkulers13">The Porkulers</a></li>
        </ul>
    </div>
  )
}
