import type { Book } from "../types/Book";
import './Library.css'

function Library({title, author, image}:Book) {
  return(
    <div className="bookCard">
      <img src={image} alt={author} className="bookImage"/>
      <p className="title">{title}</p> 
      <p className="author">{author}</p>
    </div>
  );
}

export default Library;