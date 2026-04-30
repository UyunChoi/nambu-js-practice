import '../css/Pagination.css';

interface PaginationProps {
  page : number
  onChangePagePrev : (prev:number) => void;
  onChangePageNext : (prev:number) => void;
  isEnd : boolean;
}

const Pagination = ({page,onChangePagePrev, onChangePageNext, isEnd}:PaginationProps) => {
  const onClickPrev = () => {
    onChangePagePrev(page);
  };

  const onClickNext = () => {
    onChangePageNext(page);
  };

  return (
    <div className='pagination'>
      <button onClick={onClickPrev} disabled={page===1}>{'<'}</button>
      <span>{page}</span>
      <button onClick={onClickNext} disabled={isEnd}>{'>'}</button>
    </div>
  );
};

export default Pagination;

/* 
import '../css/Pagination.css';
import type { Book } from '../types/Book';

interface PaginationProps {
  page : number
  onChangePage : (curPage:number) => void;
  onChangePage : React.~ 
}

const Pagination = ({onChangePage}:PaginationProps) => {
  const prev = () => {

  };
  const next = () => {

  };
  return (
    <div className='pagination'>
      <button>{'<'}</button>
      <span></span>
      <button>{'>'}</button>
    </div>
  );
};

export default Pagination;
*/