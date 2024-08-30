import "./About.css"

export const About = () => {
  return (
    <div className="page about" id="about">
      <div className="about_container">
        <img className="group_photo" src="src\assets\group_photo.jpg" alt="foto de los 4 integrantes de la banda subidos a un escenario saludando al público" />
        <div className="text_container">
          <p className="about_text"><span className="font_pork">the PORKULERS</span>, fue una alineación astral de tres seres de una galaxia muy lejana, donde la única pretensión aparte de &quot;dar por donde nunca se pone el sol&quot;, es pasarlo muy bien.
          </p><br />
          <p className="about_text">
          los terrícolas dicen que hacemos punk-rock, cuando nuestro objetivo es la tecno-cumbia pero parece ser que nos sale de aquella manera.
          </p><br />
          <p className="about_text">
          acogidos en la &quot;re-mayte&quot;, (zona de locales de ensayos y de otros menesteres con gente de dudosa reputación) , nos proponemos crear temas para espabilar alguna conciencia adormecida, o para que símplemente paséis un buen rato...
          </p><br />
          <p className="about_text">
          <span className="font_pork">the PORKULERS</span> SOMOS :
          </p>
          <p className="about_text">
          LOLA, BAJO Y VOZ<br/>
          PEPO, GUITARRA Y VOZ<br/>
          JESUS, BATERIA Y VOZ</p>
        </div>
      </div>
    </div>
  )
}
