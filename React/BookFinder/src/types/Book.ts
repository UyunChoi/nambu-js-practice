interface Book {
  title : string;
  contents : string;
  url: string;
  isbn : string;
  datetime : string;
  authors : string[];
  publisher : string;
  translators : string[];
  price : number;
  sale_price : number;
  thumbnail : string;
  status : string;
}

export type { Book };

//보완하기
//date : string -> Date

export type ApiResponse<T> = {
  documents:T[];
  meta: {
    is_end: boolean;
  }
}