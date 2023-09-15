import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/3396887/pexels-photo-3396887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora architecto ipsam ex consequatur unde provident facere, temporibus eaque nisi, voluptatibus fuga vel dolore. Obcaecati in optio aliquid reprehenderit doloribus?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora architecto ipsam ex consequatur unde provident facere, temporibus eaque nisi, voluptatibus fuga vel dolore. Obcaecati in optio aliquid reprehenderit doloribus?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora architecto ipsam ex consequatur unde provident facere, temporibus eaque nisi, voluptatibus fuga vel dolore. Obcaecati in optio aliquid reprehenderit doloribus?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora architecto ipsam ex consequatur unde provident facere, temporibus eaque nisi, voluptatibus fuga vel dolore. Obcaecati in optio aliquid reprehenderit doloribus?</p>
    </div>
  )
}
