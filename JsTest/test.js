document.write(); // 안쓰나봄
/*  document.write()는 
현대적인 웹 개발에서는 
성능 저하와 문서 구조 파괴 등의 이유로 사용이 권장되지 않으며, 
주로 DOM 조작 메서드나 템플릿 리터럴 방식으로 대체 

1. innerHTML (특정 요소 내용 교체)
가장 일반적으로 사용되는 방법입니다. 
특정 HTML 요소의 내용을 바꾸거나 새로 추가할 때 사용합니다.

    document.getElementById('result').innerHTML = '새로운 내용입니다.';

2. textContent (텍스트만 안전하게 변경)
HTML 태그를 렌더링하지 않고,純純한 텍스트만 넣을 때 사용합니다. 
보안상 가장 안전합니다. 

    document.getElementById('result').textContent = '텍스트만 들어갑니다.';

3. insertAdjacentHTML() (요소 위치 지정하여 삽입)
innerHTML보다 성능이 좋으며, 
기존 요소의 앞/뒤 등 구체적인 위치를 지정하여 HTML을 삽입할 수 있습니다.

    // 예시: 특정 요소 뒤에 HTML 추가
    const target = document.getElementById('target');
    target.insertAdjacentHTML('afterend', '<div>추가된 내용</div>');

4. createElement 및 appendChild (요소 생성)
더 구조적이고 동적인 요소 생성 방식

    const newDiv = document.createElement('div');
    newDiv.textContent = '새로운 엘리먼트';
    document.body.appendChild(newDiv);
    
document.write()를 사용하면 안 되는 이유
    문서 초기화: 
        페이지 로드가 완료된 후 
        document.write()를 사용하면 
        기존 HTML 문서가 지워지고 새로운 내용으로 덮어쓰여집니다.
    성능 저하: 
        브라우저의 HTML 파싱을 차단하여 속도를 느리게 합니다.
    비동기 스크립트와의 호환성: 
        외부 스크립트가 비동기로 로드될 때 문제를 일으킵니다.    

관련 레퍼런스
    메서드의 작동 방식, 위험성 및 사용을 지양해야 하는 이유
        https://developer.mozilla.org/ko/docs/Web/API/Document/scripts
        https://html.spec.whatwg.org/multipage/dom.html#dom-document-scripts
    document.write()를 대체하여 사용할 수 있는 현대적인 DOM 조작 메서드들의 목록
        https://developer.mozilla.org/ko/docs/Web/API/Document
*/
window.prompt();

// 명시적 형변환
parseInt()
Number()
parseFloat()
Number()

String()

Number.toString()   //16진수 문자형
Number.toFixed()    //실수 문자형

/* j-query 
왜 안 쓰게 되었나요?
    브라우저 지원: 
        과거에는 브라우저마다 DOM 로드 완료를 감지하는 방식이 달랐지만, 
        이제는 모든 현대 브라우저가 표준 API를 지원합니다.
    성능/무게: 
        단순한 로딩 체크를 위해 무거운 jQuery 라이브러리를 불러오는 것이 비효율적입니다.
    스크립트 위치: 
        요즘은 <script src="..." defer> 속성을 사용하여 
        HTML 파싱이 끝난 뒤 실행되도록 설정하는 것이 표준이라 
        별도의 로딩 체크 코드가 필요 없는 경우가 많습니다.
지금은 무엇으로 대체하나요?
    ① 가장 현대적인 방법 (defer 속성 사용)
        HTML의 <head> 태그 안에서 스크립트를 호출할 때 defer 속성을 넣으면, 
        DOM 로드가 끝난 뒤에 스크립트가 실행됩니다. 
        가장 권장되는 방식입니다.

        <script src="script.js" defer></script>

    ② 순수 자바스크립트 (DOMContentLoaded)
        스크립트 파일 내부에서 로드 시점을 제어해야 한다면 이 이벤트를 사용합니다.

        document.addEventListener('DOMContentLoaded', () => {
            // DOM이 완전히 로드된 후 실행할 코드
            console.log('DOM ready!');
        });
    
    ③ 고전적인 방식 (body 하단 배치)
        스크립트 태그를 </body> 직전에 두면 
        별도의 이벤트 리스너 없이도 DOM 요소에 바로 접근할 수 있습니다.
        
        
    [나중에 할 일] :  jQuery 프로젝트를 순수 자바스크립트로 변환(Refactoring)하는 작업
*/

/* 
위치값 활용하기 (x축, y축)
switch도 활용해볼수 있을까? (197)

키보드 다운 이벤트 등록
키보드 입력값
위치 변화
 */

/* 
아이디 패스워드 확인 테스트
 */

/* 
조건부 연산자 활용
 */

/* 
체크박스 만들기
-> 왜 Html input태그 활용 안 하고? 

레거시 프로젝트나 일부 복잡한 UI 시스템에서 표준 <input type="checkbox">를 사용하지 않고 <div>나 <span> 등으로 직접 체크박스를 구현하는 데에는 몇 가지 명확한 이유가 있습니다.

1. 디자인 커스터마이징의 한계 (과거 기준)
과거 브라우저(특히 IE 시리즈)에서는 기본 체크박스의 모양을 CSS로 수정하는 것이 거의 불가능했습니다.
브라우저마다 다른 모양: 크롬, 사파리, IE에서 보여지는 체크박스 디자인이 제각각이었습니다.
스타일링 제약: 배경색, 테두리, 체크 표시의 모양을 브랜드 가이드에 맞게 바꾸고 싶어도 CSS appearance: none; 속성이 현대만큼 강력하지 않았습니다.
해결책: 결국 개발자들은 <div>에 체크박스 이미지를 입히고, 클릭 시 이미지를 교체하는 방식으로 '직접' 만들 수밖에 없었습니다.

2. 접근성 및 포커스 제어 문제
레거시 라이브러리 중에는 체크박스를 클릭했을 때 발생하는 포커스(Focus) 효과나 아웃라인(Outline)이 디자인을 해친다고 판단하여, 이를 아예 제거하고 직접 클릭 이벤트를 바인딩하는 방식을 택한 경우가 많습니다.

3. '트리 구조'나 '3단계 상태' 구현
표준 체크박스는 '체크됨(Checked)'과 '해제됨(Unchecked)' 두 상태가 기본입니다.
하지만 레거시 프로젝트의 권한 설정이나 트리 메뉴에서는 '일부만 선택됨(Indeterminate)' 상태를 시각적으로 명확하게 보여줘야 할 때가 많았습니다.
당시에는 이 '중간 상태'를 모든 브라우저에서 동일하게 보여주기 위해 커스텀 UI를 만드는 것이 더 안정적이라고 판단했습니다.

4. 거대 프레임워크/라이브러리의 관성
과거에 유행했던 ExtJS, WebSquare, X-Platform 같은 엔터프라이즈용 UI 솔루션들은 자체적인 이벤트 시스템을 관리하기 위해 표준 태그 대신 자신들이 제어하기 쉬운 커스텀 태그 구조를 사용하곤 했습니다.

요즘은 어떤가요?
지금은 표준 input 태그를 쓰는 것이 정석입니다.
appearance: none;: 이제 이 속성 하나로 기본 디자인을 다 날리고 CSS만으로 자유롭게 꾸밀 수 있습니다.
접근성(A11y): 커스텀으로 만들면 스크린 리더가 체크박스인지 인식을 못 하지만, input을 쓰면 별도 설정 없이도 시각 장애인용 소프트웨어가 완벽히 지원합니다.
가벼움: 별도의 자바스크립트 클릭 이벤트 없이도 label 태그와의 연결만으로 작동하므로 성능상 이점이 큽니다.
혹시 지금 보시는 레거시 코드의 체크박스가 이미지 파일을 교체하는 방식인가요, 아니면 클래스명(on/off)을 넣었다 뺐다 하는 방식인가요? 구조를 보여주시면 현대적인 코드로 바꾸는 법을 알려드릴 수 있습니다.
*/

/* 
배열의 총 합 구하기
이미지를 가로로 배열하기
이미지를 가로세로로 배열하기

무한반복 처리
파일 읽기
파일 쓰기
파인 전송
DB 데이터 출력
무인도 탈출게임 -> 부루마블
장기
 */