""" string.format() """
num1 = 3
num2 = 5

# ""
str1 = "{}".format(10)
str2 = 'str2 : {}, {}'.format(10,20)
str3 = "str3 : {} X {} = {}".format(num1, num2, num1*num2)


print(str1)
print(str2)
print(str3)


""" 순서 """
age = 20
name = '홍길동'

# '' 
str4 = 'str4 : 이름은 {} 나이는 {}'.format(name, age)
str5 = 'str5 : 이름은 {0} 나이는 {1}'.format(name, age)
str6 = 'str6 : 이름은 {1} 나이는 {2}'.format(name, age)
str7 = 'str7 : 이름은 {:s} 나이는 {:d}'.format(name, age)

print(str4)
print(str5)
print(str6)
print('이름은 {1} 나이는 {2}'.format(age, name))
print(str7)


""" string 서식지정자 """

age = 20
name = '홍길동'

# s d
print('이름은 %s 나이는 %d'%(name, age))
print('이름은 %s 나이는 %5d'%(name, age)) # -> 공백 
print('이름은 %s 나이는 %05d'%(name, age))

pi = 3.141592

# f
print('pi = %f'%(pi))
#print('pi = %4f'%(pi))
print('pi = %10f'%(pi))     # 10진수
print('pi = %3.0f'%(pi))    # 공백
print('pi = %03.0f'%(pi))   # 0
print('pi = %.7f'%(pi))