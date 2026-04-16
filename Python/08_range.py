print(range(10))    # range(0, 10)
print(range(1,10))  # range(1, 10)

r1 = range(1, 10, 1)
print(r1)           # range(1, 10)

r2 = range(6, 39, 6)
print(r2)           # range(6, 39, 6)
print(tuple(r2))    # (6, 12, 18, 24, 30, 36)

r3 = range(9, 8)
print(list(r3))     # []

r4 = range(10, 0, -1)
print(r4)
print(list(r4))     # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

r5 = range(10, 0, -3)
print(tuple(r5))    # (10, 7, 4, 1)

#list 클래스
