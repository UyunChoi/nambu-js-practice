""" 반환형이 콜렉션일때 unpacking """

# list
def ret_list():
    return [1, 2]

l = ret_list()
print(l)

n1, n2 = ret_list()
print(n1, n2)

n1, _ = ret_list()
print(n1)


# tuple
def ret_tuple():
    return (1,2)

t = ret_tuple()
print(t)

n1, n2 = ret_tuple()
print(n1, n2)

n1, _ = ret_tuple()
print(n1)