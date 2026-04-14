/* todoApp.js */
// DB
const DB = [];
let isCheck = false; //정말로 삭제하시겠습니까?

// 모듈화
class todo {
    //원래 필요없음
    constructor(id, text){
        this.id = id;
        this.text = text;
        this.complete = false;
    }
    
    /* 할일 추가 */
    add(text){
        // id는 배열에서 길이 -> 자동 
        // 중복X
        // 애초에 유효한 값이 아니면 처음부터 추가할 수 없게 해야함 -> 어떻게? 
        // id는 접근 못 하게 하고 생성할때 부여함
        try {
            const newId = DB.length() + 1;
            this.id = newId;
            this.
            //
            DB.push();

        } catch (e) {
            e = new Error('할일을 생성하지 못 했습니다.');
        }


    }
    
    /* 상태 전환 */
    check(id, complete){

    }

    /* 할일 삭제 */ 
    // 삭제 후, 순서 재정렬 //순서 index // idㄷ
    delete(id, isCheck, index){
        if(isCheck){

        }
    }

    //목록 보기
    
}


class todoList {
    // 목록 보기
    viewList(){

    }
}








