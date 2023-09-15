import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum, dolor sit amet consectetur
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Surya</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab voluptas minima amet officiis velit et soluta dolore tempore quae! Odio consequatur at perspiciatis quo cum saepe commodi alias ex.
            </p>
        </div>
    </div>
  )
}
