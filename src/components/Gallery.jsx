import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "./Gallery.css"
import { Post } from "./Post"

export const Gallery = () => {
  
  const posts = [
    {
      photo:"src/assets/estudio.jpg",
      text:"Grabando el próximo álbum que saldrá a finales de este año",
    },
    {
      photo:"src/assets/concert.jpg",
      text:"Último concierto que dimos en Badajoz"
    },
    {
      photo:"src/assets/group_photo.jpg",
      text:"Nuestro grupo al completo"
    }
  ]
  
  return (
    <div className="page gallery" id="gallery">
        <h2 className="page_title gallery_title">Galeria</h2>
        <ResponsiveMasonry
          columnsCountBreakPoints={{424:1, 767:2, 1600:3}}
          className="gallery_mosaic"
        >
          <Masonry gutter="16px">
            {posts.map((post,index) => {
              return <Post post={post} key={index}/>
            })}
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}
