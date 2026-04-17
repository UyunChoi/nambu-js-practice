""" 
피젯수(정수형)와 젯수를 매개변수로 전달받아 
몫과 나머지를 튜플로 반환하는 함수를 만드시오.

divide(15, 4) 실행하면 (3, 3)을 반환하는 식으로 만드시오.
"""

def divide(div, det):
    quo = div // det
    rem = div % det
    return (quo, rem)

result = divide(25,6) # tuple
print(result )

q, r = divide(25,6)
print(q, r)

_, r = divide(25,6)
print(r)