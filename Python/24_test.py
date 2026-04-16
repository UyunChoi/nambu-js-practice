class Student:
    def __init__(self,g, c, n):
        self.grade = g
        self.classInfo = c
        self.name = n
    def introduce(self):
        print('%d학년 %d반 %s입니다.'%(self.grade, self.classInfo, self.name))

student1 = Student(4, 6, 'name1')
student1.introduce()
