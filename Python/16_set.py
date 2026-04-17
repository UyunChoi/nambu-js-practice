set1 = {1, 2, 3}    # 리터럴

set1.add(4)
print(set1)                     # {1, 2, 3, 4}

# list 형식으로도 넘겨받을 수 있음
set1.update([4, 5, 6])
print(set1)                     # {1, 2, 3, 4, 5, 6}

set1.remove(5)
print(set1)                     # {1, 2, 3, 4, 6}


# 아이템 수정, 삭제
set0 = set() # list로 넘겨줌

set1 = set([0, 1, 2, 3, 4, 5, 6])
set2 = set([4, 5, 6, 7, 8, 9, 10, 10])

# 교집합
print (set1 & set2)
print (set1.intersection(set2)) # {4, 5, 6}

# 합집합
print(set1 | set2)
print(set1.union(set2))         # {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# 차집합
print(set1 - set2)
print(set1.difference(set2))    # {0, 1, 2, 3}

