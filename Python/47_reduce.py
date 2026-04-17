# import 필요
from functools import reduce

nums = range(1,5)
sum = reduce(lambda x,y: x+y, nums)
print(sum)

mul = reduce(lambda x,y: x*y, nums)
print(mul)