from functools import reduce

print(reduce(lambda x,y:x*y,filter(lambda x:x%2 == 0,range(1,11))))