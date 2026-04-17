import os
dir(os)

print(os.sep)           # 경로구분자 (위도우:\, 리눅스:/)

cur_dir = os.getcwdb()  # get Current Working Directory
print(cur_dir)

#경로 -> 문자열
test_dir = os.path.join(cur_dir, 'test')    
print(test_dir)

#경로 유무
print(os.path.exists(test_dir))

if not os.path.exists(test_dir):
    os.mkdir(test_dir)
print(os.path.exists(test_dir))