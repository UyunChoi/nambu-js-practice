""" 
점수를 입력받아 평점을 구하는 함수를 만드시오.
calcGrade(95)를 실행하면 ‘A’를 반환하는 식으로 만드시오. 
"""

def calcGrade(input):
    try:
        intInput = int(input)
        if intInput >= 90:
            return 'A'
        elif intInput >= 80:
            return 'B'
        elif intInput >= 70:
            return 'C'
        elif intInput >= 60:
            return 'D'
        else:
            return 'F'
    except:
       return '입력값을 확인하세요.'

print(calcGrade(95))