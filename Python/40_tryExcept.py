# 프로그램이 중지되지 않도록

str1 = input('피젯수를 입력하시오.')
str2 = 0

try :
    num1 = int(str1)
    num2 = int(str2)
    result = num1 / num2
    print('{}/{} = {}'.format(num1, num2, num1/num2))
except :
    print('입력갑을 확인하시오.')

# Error -> Exception
# Error(아무리 예외처리해도 시스템이 죽음) vs Exception(예외상황) -> Exception이 더 정확한 용어
try :
    num1 = int(str1)
    num2 = int(str2)
    result = num1 / num2
    print('{}/{} = {}'.format(num1, num2, num1/num2))
except Exception as e:
    print('exception : ', e)


# 예외처리 구분
try :
    num1 = int(str1)
    num2 = int(str2)
    result = num1 / num2
    print('{}/{} = {}'.format(num1, num2, num1/num2))
except ValueError:
    print('숫자를 입력하시요')
except ZeroDivisionError:
    print('0으로 나눌 수 없습니다.')
except Exception as e:
    print('exception : ', e)


# 예외가 발생하지 않으면 실행됨
try :
    num1 = int(str1)
    num2 = int(str2)
    result = num1 / num2
    
except Exception as e:
    print('exception : ', e)
else :
    print('{}/{} = {}'.format(num1, num2, num1/num2))


# 예외가 발생하더라도 실행해야하는 것들
# 파일 열면 닫아줘야 다른쪽에서 접근가능
try :
    num1 = int(str1)
    num2 = int(str2)
    result = num1 / num2
    
except Exception as e:
    print('exception : ', e)
else :
    print('{}/{} = {}'.format(num1, num2, num1/num2))
finally :
    print('처리가 완료 되었습니다.')