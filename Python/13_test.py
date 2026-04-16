strMult = input('배수를 입력하세요')
intMult = int(strMult)
#intMult = int(input('배수를 입력하세요.'))

factors = range(1,10)
#printFormat = '%d * %d'

for factor in factors:
    print('%d X %d = %02d'%(intMult, factor, intMult*factor))

#이중 for루프
for total in factors:
    print('-----------')
    for factor in factors:
        print('%d X %d = %02d'%(total, factor, total*factor))
