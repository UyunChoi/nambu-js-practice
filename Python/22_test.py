def divide(div, det):
    quo = div // det
    rem = div % det
    return (quo, rem)

result = divide(25,6) #tuple
print(result )

q, r = divide(25,6)
print(q, r)

_, r = divide(25,6)
print(r)