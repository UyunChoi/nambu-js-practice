/* todoApp.js */

// 가져와야할 데이터 목록
// 클라이언트 영역의 DB
const DB = [];
let isCheck = false; //정말로 삭제하시겠습니까?

/* 통신한다고 가정하고 -> 서버영역 DB
// DB에서 데이터를 조회, 생성, 수정, 삭제하는 모든 통신 작업은 Promise를 활용
// DB 조회 로직
async function getDbData() {
    // const result = await db.select().from(users).where(eq(users.id, userId));
    
}
 */

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
            // 유효성 검사 -> text의 값이 유효한지
            if (!text?.trim()){
                throw new Error('유효한 텍스트를 입력하세요.');
            }

            // 통신한다고 가정하고
            const newId = DB.length + 1; // DB.length() + 1;
            this.id = newId;
            this.text = text;
            
            const todoItem = new todo(newId, text);
            
            //console.log(`add : ${todoItem}`);
            DB.push(todoItem);
            console.log(`add : ${DB}`);

            return todoItem;

        } catch (e) {
            console.error('할일 생성 실패 : ', e.message);
        }

    }
    
    /* 상태 전환 */
    async check(id, complete){
        try {
            
        } catch (e) {
            console.error('체크 전환 실패 : ', e.message);
        }

    }

    /* 할일 삭제 */ 
    // 삭제 후, 순서 재정렬 //순서 index // idㄷ
    delete(id, isCheck, index){
        if(isCheck){
            
        }
    }

    //목록 보기
    viewList(){
        //console.log(`viewList : `, DB);
        const todoList = [...DB];
        //console.log(`viewList : ` , todoList);
        console.log(todoList);
    }
    
}
//console.log(DB);

/* 
class todoList {
    // 목록 보기
    viewList(){

    }
} */



const todo1 = new todo();
//console.log(todo1.add('청소하기'));
todo1.add('청소하기').viewList();
// console.log(DB);
const todo2 = new todo();
todo2.add('설거지').viewList();



