import './App.css'
import type { Book } from './types/Book'
import Library from './componant/Library';
const books:Book[] = [
  { title: "title1", author: "author1", image:"https://image.aladin.co.kr/product/32790/94/cover500/k722936599_1.jpg"},
  { title: "title2", author: "author2", image:"https://image.aladin.co.kr/product/20651/30/cover200/k532636268_1.jpg"},
  { title: "title3", author: "author3", image:"https://image.aladin.co.kr/product/35836/48/cover200/k172037861_1.jpg"}
]; 

function App() {

  return (
    <div className="libraryPage">
      <Library title={books[0].title} author={books[0].author} image={books[0].image}/>
      <Library title={books[1].title} author={books[0].author} image={books[1].image}/>
      <Library title={books[2].title} author={books[0].author} image={books[2].image}/>
    </div>
  )
}

export default App
