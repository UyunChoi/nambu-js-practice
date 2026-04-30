import '../css/BookDetail.css';
import type { Book } from '../types/Book';

interface BookDetailProps {
  book : Book | null;
}

const BookDetail = ({book}:BookDetailProps) => {
  if(!book) {
    return <div className='book-detail'></div>;
  }
  return (
    <div className='book-detail'> 
      <h2>{book.title}</h2>
      <p>
        <strong>저자 : </strong>
        {book.authors.join(', ')}
      </p>
      <p>
        <strong>출판사 : </strong>
        {book.publisher}
      </p>
      <p>
        <strong>출판일 : </strong>
        {book.datetime}
      </p>
      <p>
        <strong>isbn : </strong>
        {book.isbn}
      </p>
      <p>
        <strong>책 내용 : </strong>
        {book.contents}
      </p>
      <p>
        <strong>상세내용 : </strong>
        <a href={book.url} target='_blank'>{`${book.title} 상세내용 링크`}</a>
        <img src={book.thumbnail} alt={`${book.title}의 표지`} />
      </p>
    </div>
  );
}

export default BookDetail;