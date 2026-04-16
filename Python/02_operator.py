""" 산술연산자 """
print(2 + 3)  # 5
print(5 - 2)  # 3
print(1 / 2)  # 0.5
print(6 // 2) # 3
print(5 ** 2) # 25
print(2 ** 10)# 1024
print(20 % 3) # 2

num = 3
print(3 + 2)

num1 = 5
num2 = 6
print(num1 + num2)


""" 대입연산자 """
#숫자
num = 4
print(num)  # 4

num += 4
print(num)  # 8

num -= 3
print(num)  # 5

num *= 3
print(num)  # 15

num /= 4
print(num)  # 3.75

num **= 2   # 14.0625
print(num)

#문자열
hello = 'Hello'
hello += ', World! '
print(hello)# Hello, World! Hello, World! Hello, World! 

hello *= 3
print(hello)#


""" 비교연산자 """
print(5 < 6)        # True
print(5 > 6)        # False
print(11 <= 11)     # True
print(15.6 >= 6)    # True
print(13 == 13)     # True
print(11 != 6)      # True
print('Hello' < 'World!')   # True
print('홍길동' != '허균')    # True 
result = 13 == 4
print(result)       # False

""" 논리연산자 """
print(True and True)    # True
print(True and False)   # False
print(True or False)    # True
print(False or False)   # False
print(not False)        # True
print(5<6 and True)     # True

num1=3
num2=5

print(not(num1 > num2)) # True
print(num1 == num2)     # False

""" 문장의 구분 """
print('Hello', 'world!')
print('Hello'); print('World!')



""" 들여쓰기 """



""" 코드블록 """
age = 5

if age == 10 :
    print('10살')
    print('입니다.')
print('다른 블록')


""" 주석 """
# cmd + /

print('Hello, World!')
print('Hello');print(' !')

# Hello, world! 출력
print('Hello, World!')

#print('Hello, World!')

a = 1 + 2 # 더하기
print('Hello, world!') #print('1234567890')
