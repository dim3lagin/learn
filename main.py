min_temp = int(input()) 
max_temp = int(input()) 
main_temp = int(input())

if min_temp > main_temp < max_temp:
    print("Надо нагреть")
elif min_temp < main_temp > max_temp:
    print("Надо остудить")
else:
    print("Нормальная температура")