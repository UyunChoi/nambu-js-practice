""" 함수 정의 """
# defined 정의하다


""" 매개변수가 없는 함수 """
def funcName():
    print()

def hello():
    print('Hello World!')

hello() # 함수호출


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
print(function(second=5,first=3,third=7))


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
print(function1())
print(function1(1, 2, 3))
print(function1(1, 2))
print(function1(1))
print(function1(first=1, second=2, third=10))
print(function1(1, second=5))
print(function1(second=5, first=2))
#task floar?


