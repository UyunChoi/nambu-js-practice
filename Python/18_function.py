""" 함수 정의 """
# define 정의하다


""" 매개변수가 없는 함수 """
def funcName():
    print()

def hello0():
    print('Hello World!')

hello0() # 함수호출


""" 매개변수가 있는 함수 """
def hello1(name):
    print('Hello, {:s}'.format(name))

hello1('name1')


""" 매개변수가 복수인 함수 """
def add(num1, num2):
    print(num1 + num2)

add(1, 3)


""" 반환값이 있는 함수 """
def hello2():
    return 'Hello, Wold!'

print(hello2)


""" 반환값과 매개변수가 있는 함수 """
def hello3(name):
    return 'Hello, {:s}'.format(name)

print(hello3('name3'))


""" 가변 매개변수 """
def hello4(greeting, *names):
    for name in names:
        print(greeting, name)

hello4('Hi', '진', '슈가', '제이홉','RM', '지민')


""" 함수 호출시 매개변수명을 사용 """
    # 순서를 바꿀 수 있음
    # 라이브러리를 여러개 쓸 때, 헷갈리지 않도록, 각자 라이브러리에 맞는 순서대로 입력할 수 있도록

def function(first, second, third):
    return first+second+third

print(function(3,5,7))
print(function(first=3, second=5, third=7))
print(function(second=5, first=3, third=7))


"매개변수명의 기본값"
# 기본값이 있는 얘들만 생략 가능 -> 없으면 생략 불가
def function1(first=1, second=3, third=5):
    return first + second + third

print(function1())
print(function1(1, 2, 3))
print(function1(1, 2))
print(function1(1))
print(function1(first=1))
print(function1(second=5))
print(function1(first=1,third=5))
print(function1(first=1,second=5))


def function1(first, second, third=5):
    return first + second + third

print(function1(1, 2, 3))
print(function1(1, 2))
# print(function1())
# print(function1(1))
print(function1(first=1, second=2, third=10))
print(function1(1, second=5))
print(function1(second=5, first=2))

# task floor?
# Call Stack'이나 'Execution Flow(실행 흐름)'을 설명하시려던게 아닐까?

# 함수의 실행 흐름 (Execution Flow) 
    # 매개변수 명단(Task List)에 따라 값을 배치

# 스택 프레임 (Stack Frame / Floor)
""" 
    설명 의도:
    함수가 실행되는 동안 그 함수만을 위한 '전용 층(Floor/Frame)'이 생깁니다.
    그 층(Floor) 안에 first, second, third라는 이름의 칸이 마련됩니다.
    기본값(third=5)이 있다면, 값이 들어오지 않아도 그 칸은 미리 채워져 있습니다.
    호출이 끝나면 이 층은 무너지고(Pop) 다시 원래 흐름으로 돌아갑니다. 
"""

