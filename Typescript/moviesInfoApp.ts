
/* 타입으로도 시도 */
const url: string = 'https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json';

interface MovieInfo {
    title: string;
    url: string;
    image: string;
    authorName: string;
    authorImage: string;
    createTime: string;
}

interface MovieList {
    articleList: MovieInfo[];
    lastPublishTime: number;
    moreList: boolean;
}

//Rranking

async function getResponse(url:string):Promise<MovieList>  { 
    // (문법오류) async function getResponse (url:string):Promise<T>  { 
    //          async function getResponse<T>(url:string):Promise<T>  { 
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('요청에 실패.');
    }
    const data = await response.json();
    return data;
}

function validateMovieData(data) {
if (!data.articleList || data.articleList.length === 0) {
throw new Error('데이터가 없습니다.');
}
}
