
# this
class Person:
    def hello(self):
        print('Hello')

person1 = Person()
person1.hello()

person2 = Person()
person2.hello()

# constructor
# 메모리 공간을 확보하고 
class Person:
    def __init__(self):
        self.hi = 'Hi'

    def hello(self):
        print('Person : Hello')
        print(self.hi)

person = Person()
person.hello()
print(person.hi)


""" 속성 정의와 초기화 """
class Person1:
    def __init__(self, n, g):
        self.name = n
        self.age = g

    def hello(self):
        print('Hello, %s님 당신은 %d살 입니다.'%(self.name, self.age))


""" 비공개 속성 정의 """
class Person2:
    def __init__(self, n, g):
        self.name = n
        self.__age = g

    def hello(self):
        print('Hello, %s님 당신은 %d살 입니다.'%(self.name, self.__age))

person2 = Person2('홍길동', 20)
person2.hello()
# print(person.__age)
# person.__age = 100


class Person3:
    def __init__(self, name, age):
        self.name = name
        if 0 <= age <= 20: 
            self.__age = age
        else: 
            self.__age = 0  
    def inc_age(self):
        self.__age += 1
    def info(self):
        print(self.__age)

person = Person3('홍길동', 20)
person.inc_age()
person.info()


""" 클래스 속성 사용 """
class Person: 
    conunt = 0

# 둘다 인스턴싱 안 하고 
""" 클래스 메서드 정의 """


""" 정적 메서드 정의 """
# self가 없어서 속성 못 씀
class Math:
    @staticmethod
    def add(a, b):
        return a + b
    def sub(a, b):
        return a - b
print(Math.add(4,8))
print(Math.sub(4,8))