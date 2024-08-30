import "./ShopItem.css"

export const ShopItem = (item) => {
  
    const {img, title, description, prize} = item.item;    

    return (
    <div className="item_card">
        <img className="img_card" src={img} alt={description} />
        <h3>{title}</h3>
        <p>{description}</p>
        <h3 className="prize_card">{prize}</h3>
    </div>
  )
}
