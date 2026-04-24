interface BookProp {
  title : string
  author : string
}

function Book({title, author}:BookProp){
  return(
    <>
      <h4>title : {title} <br /> author : {author}</h4>
    </>
  )
}

export default Book;