""" 생성 """
dic1 = {}
print(dic1)

dic2 = dict()
print(dic2)

dic3 = {'name':'item', 1:3.5, False:[1,2,3]}
print(dic3)

dic4 = dict(name='홍길동', height=180, age=20)
print(dic4)


student = {'name':'홍길동', 'major':'전통과', 'score':3.5}
scores = {1:3.5, 2:4.0, 3:4.3, 4:4.2}


""" 아이템 값 가져오기 """
print(student['name'])
print(student['major'])

print(scores[2])
print(scores[5])


""" 아이템 수정, 추가 """
student['major'] = '정보통신과'
print(student)

student['score'] = 4
print(student)


scores[2] = '4.5'
print(scores)

scores[5] = '5.0'
print(scores)


""" 아이템 삭제 """
del student['name']
print(student)

del scores[1]
print(scores)


""" key, value 가져오기 """
print(student.items()) # 튜플처럼?
print(student.keys())
print(student.values())

# list
print(list(student.items))
print(list(student.keys))
print(list(student.values))



