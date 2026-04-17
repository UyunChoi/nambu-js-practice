student = ('name1', 'major1', 3 , 175.3, 3.5, True)

print(student)
print(student[0])
#student[0] = 'name0' # 에러 immutable

car1 = ('Tesla', "model3", 'red', 500)
print(car1)

# range
range10 = range(10)
range5 = range(-5, 15, 2)

tuple1 = tuple(range10)
print(tuple1)           # (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

print(tuple(range5))    # (-5, -3, -1, 1, 3, 5, 7, 9, 11, 13)

