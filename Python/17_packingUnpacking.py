""" packing, unpacking """
#packing -> tuple
nums = 1, 2, 3  
print(nums)
print(type(nums))

# unpacking -> list, tuple (다 됨)
num1, num2, num3 = nums 
print(num1, num2, num3)
print(type(num1))


""" unpacking """
# list
nums = [1, 2, 3, 4, 5]
num1, num2, num3, num4, num5 = nums
print(num1, num2, num3, num4, num5)
print(type(num1))   # <class 'int'>

num1, num2, *num3 = nums
print(num1, num2, num3)
print(num3)
print(type(num3))   # <class 'list'>

*num1, num2, num3 = nums
print(num1, num2, num3)
print(num1)
print(type(num1))   # <class 'list'>


# tuple
nums = (1, 2, 3)
print(nums)
print(type(nums))   # <class 'tuple'>

# 생략
num1, num2, num3 = nums
print(num1, num2, num3)

num1, num2, _ = nums
print(num1, num2)

_, _, num3 = nums
print(num3)


# dictionary
# set -> key
student = {'name':'홍길동', 'major':'정보통신', 'grade':3}
a, b, c = student
print(a, b, c)      # name major grade

set1 = {1, 2, 3, 4}
a, *b, c = set1
print(a, b, c)      # 1 [2, 3] 4