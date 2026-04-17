r1 = [x**2 for x in range(1,11)]
r2 = [x for x in range(1,21) if x%2 == 0]
r3 = [x for x in range(1,21) if x%3 == 0]
r4 = [x**2 for x in range(1,21) if x%5 == 0]

r5 = [x for x in range(1,11) if (lambda x:(x**2)<=10)(x)]
r6 = [x**2 for x in range(1,11) if (lambda x:(x**2)<=10)(x)]
# 비어있지 않은 튜플로 인식
# r5 = [x for x in range(1,11) if (lambda x:(x**2)<=10)]
# r5 = [x for x in range(1,11) if (lambda x:(x**2)<=10)(x)]

print(r1)
print(r2)
print(r3)
print(r4)
print(r5)
print(r6)