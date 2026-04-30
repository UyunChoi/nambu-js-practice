import Footer from "./Footer";
import Header from "./Header";
import SearchArea from "./SearchArea";
import '../css/BookFinder.css';
import BookDetail from "./BookDetail";
import { useState } from "react";
import type { Book } from "../types/Book";
import BookContext from "../contexts/BookContext";


const BookFinder = () => {
  const [selected, setSelected] = useState<Book|null>(null);
  const selectBook = (book:Book)=>{
    setSelected(book);
  };
  return(
    <BookContext.Provider value={{setSelected}}>
      <div className="BookFinder">
        <Header/>
        <div className="main-content">
          <SearchArea/>
          <BookDetail book={selected}/>
        </div>
        <Footer/>
      </div>
    </BookContext.Provider>
  );
};

export default BookFinder;