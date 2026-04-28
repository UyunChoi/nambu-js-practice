interface Movie {
  id : number;
  title : string;
  poster : string;
}

interface MovieResponse {
  movies: Movie[];
  count: number; // meta data
}

const container : React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap:'0.2rem',
  justifyContent:'center',
  alignItems:'center',
  minHeight: '100vh'
};

const card : React.CSSProperties = {
  width: '10rem',
  height: '20rem',
  border : '0.5rem solid #ddd',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  display : 'flex',
  flexDirection: 'column'
};

const image : React.CSSProperties = {
  width: '100%',
  height: '90%',
  objectFit : 'cover'
}

const title : React.CSSProperties = {
  height : '10%',
  display: 'flex',
  alignItems : 'center',
  justifyContent: 'center',
  fontSize : '1.2rem',
  fontWeight : 'bold',
  padding : '0.02rem' 
}

export type { Movie, MovieResponse };
export {container, card, image, title}