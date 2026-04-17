def add(x,y):
    return x+y

f = lambda x,y : x+y    # 리턴 생략
print(add(1,2))
print(f(5,9))

f = lambda x: x if x%3 == 0 else 0
print(f(3))
print(f(4))
