""" len 전역함수 """
scores = [30, 50, 90, 89, 56, 87, 45]

length = len(scores)

""" list 분할 """
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers1 = numbers[0:4]

print(numbers1)     # [0, 1, 2, 3]
print(numbers[:4])  # [0, 1, 2, 3]

print(numbers[4:])  # [4, 5, 6, 7, 8, 9, 10]
print(numbers[7:4]) # []
print(numbers[7:11])# s
print(numbers[:])   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# 데이터 처리할 때 