# test.txt 만들기
""" file 읽기 """
f = open('test.txt', 'r')           # Comma-Separated Values
                                    # read

text = f.read()
print(text)

f.close()


with open('test.txt', 'r+') as f:   # read and write
    text = f.read()
    print(text)


# 한줄씩
with open('test.txt', 'r+') as f:
    lines = f.readlines()

    for line in lines:
        print(line, end="")
""" 줄바꿈 방지: 
    end=""는 "출력이 끝나고 아무것도(빈 문자열) 붙이지 마라"는 뜻입니다. 
    즉, 줄바꿈을 하지 말라는 명령입니다.
    중복 줄바꿈 제거: 
    코드 상단에서 f.readlines()로 읽어온 각 line 데이터에는 이미 문장 끝에 줄바꿈 문자(\n)가 포함되어 있습니다.
        만약 
        print(line)이라고만 쓰면: 
        line 안의 줄바꿈 + print 자체의 줄바꿈이 합쳐져 한 줄씩 띄어서 출력됩니다.
        
        print(line, end="")라고 쓰면: 
        line 안의 줄바꿈만 적용되어 원본 파일과 똑같은 간격으로 출력됩니다   
"""

# 다른 폴더 열어보기 -> 작성했던 코드들


""" file 쓰기 """
text = '안녕하세요. \n 파이썬입니다. \n 반갑습니다.'
with open('text1.txt', 'w') as f:
    f.write(text)

