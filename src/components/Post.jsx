import "./Post.css"

export const Post = (post) => {
  
    const {photo, text} = post.post;

    return (
    <div className="post">
        <img src={photo} alt={text} />
        <p>{text}</p>
    </div>
  )
}
