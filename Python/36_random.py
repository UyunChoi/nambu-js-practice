import random

print(random.random())          # 0~1미만 실수 난수
print(random.randrange(1,7))  # 1~6까지의 정수 난수 발생
print(random.randint(1,7))    # 1~7까지의 정수 난수 발생

list1 = [1,2,3,4,5,6,7,8,9,10]

random.shuffle(list1)           #list의 아이템 순서를 바꿈
print(list1)

print(random.choice(list1))     # list 아이템 중 하나를 임의로 선택
print(random.sample(list1, 5))  # list 아이템 중 5개의 임의로 선택