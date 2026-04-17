age = 20
adult = 19

# if
if age >= adult :
  print('성인')

# if else
if age >= adult :
    print('성인')
else :
   print('미성년')


gender = 'female'

# if elif
if gender == 'male' :
   print('남')
elif gender == 'female':
   print('여')

# (elif) vs (if)
score = 90

print('elif ----------- ')
if score >= 90:
   result = 'A'
   print('test : ', result)
elif score >= 80:
   result = 'B'
   print('test : ', result)
elif score >= 70:
   result = 'C'
   print('test : ', result)
elif score >= 60:
   result = 'D'
   print('test : ', result)
else :
   result = 'F'
   print('test : ', result)
print('result : ', result)

print('if ----------- ')
if score >= 90:
   result = 'A'
   print('test : ', result)
if score >= 80:
   result = 'B'
   print('test : ', result)
if score >= 70:
   result = 'C'
   print('test : ', result)
if score >= 60:
   result = 'D'
   print('test : ', result)
else :
   result = 'F'
   print('test : ', result)
print('result : ', result)