min_temp = int(input()) 
max_temp = int(input()) 
main_temp = int(input())

if min_temp > main_temp < max_temp:
    print("���� �������")
elif min_temp < main_temp > max_temp:
    print("���� ��������")
else:
    print("���������� �����������")