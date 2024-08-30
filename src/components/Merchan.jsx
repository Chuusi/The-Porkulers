import "./Merchan.css"
import { ShopItem } from "./ShopItem";

export const Merchan = () => {
  
  const shopItems = [
    {
        img: "src/assets/shirt.jpg",
        title: "Camiseta The Porkulers",
        description: "Tallas S, M y L",
        prize: "15€",
    },
    {
        img: "src/assets/sudadera.jpg",
        title: "Sudadera The Porkulers",
        description: "Tallas S, M y L",
        prize: "25€",
    },
    {
        img: "src/assets/cd.jpg",
        title: "Disco The Porkulers",
        description: "Disco 2024",
        prize: "25€",
    },
  ];

  return (
    <div className="page merchan_page" id="merchan">
      <h2 className="page_title">Nuestro merchan</h2>
      <div className="merchan">
        {shopItems.map(item => {
          return <ShopItem key={item.title} item={item}/>
        })}
      </div>
    </div>
  )
}
