a = [1,2,3,4,5,6,7]

# a.map -> X 
# list의 메소드가 아님   
# 전역함수

nums1 = [1,2,3,4,5]
nums2 = [6,7,8,9,10]

def pow(x):
    return x ** 2
f = lambda x:x**2

print(map(pow,nums1))
print(map(f, nums2))
print(map(lambda x:x**2, nums1))

print(list(map(pow,nums1)))
print(list(map(f, nums1)))
print(list(map(lambda x:x**2, nums1)))

print(list(map(lambda x,y:x*y, nums1,nums2)))



