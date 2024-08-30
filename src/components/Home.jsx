import "./Home.css"

export const Home = () => {
  return (
    <div className="page home" id="home">
        <video autoPlay muted loop id="bgVideo">
          <source src="src/assets/skeleton_infinite.mp4" type="video/mp4"/>
        </video>
        <h1 className="title">
          THE PORKULERS
        </h1>
    </div>
  )
}
