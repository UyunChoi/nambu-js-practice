""" list 축약표현 """
list1 = list(range(1,10))

list2 = list(map(lambda x:x**2,list1))

list3 = [x**2 for x in list1]
list4 = [x**2 for x in range(1,10)]

list5 = [x**2 for x in list1 if x>5]
list6 = [x**2 for x in range(1,10) if x>5]

print(list1)
print(list2)
print(list3)
print(list4)
print(list5)
print(list6)
