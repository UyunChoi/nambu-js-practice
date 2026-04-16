""" list """
# mutable
scores = [30, 50, 90, 89, 56 ,87]
items = [1, 3, 'Hello', 5.6, False, 89, "World!"]

print(scores)
print(items)

score0 = scores[0]

# 조회
print(score0)
print(scores[3])
print(scores[0])
print(scores[-3])
print(scores[-5])

# 재정의
scores[1] = 100
print(scores[0])

scores[3] = 200
print(scores[3])

#scores[6] = 400    # IndexError


""" list 활용"""
#append
scores.append(99)
scores.append('Hello')
print(scores)

#insert
scores.insert(1, 33)
scores.insert(-3,'world')
print(scores)

#list (데이터 처리하기 좋은 클래스) : + * 연산자 사용 가능
list1 = [1, 2, 3, 4, 5]
list2 = [5, 6, 7, 8, 9, 10]

print(list1 + list2)
print(list2 + list1)

print(list1*3)
print(list2*2)