import { useContext } from 'react';
import '../css/BookItem.css';
import type { Book } from '../types/Book';
import BookContext from '../contexts/BookContext';

interface BookItemProps {
  book: Book;
}

const BookItem = ({book}:BookItemProps) => {
  const context = useContext(BookContext);

  if(!context) throw new Error('');
  const { setSelected } = context
  
  return(
    <div className='book-item' >
      <img src={book.thumbnail} alt={`${book.title}의 표지`} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.authors.join(', ')}</p>
      </div>
    </div>
  );
};

export default BookItem;