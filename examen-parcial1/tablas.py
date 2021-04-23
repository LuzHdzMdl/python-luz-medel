#luz
# examen
#23/04/21


numeros = input("Ingresa un numero: ")
num = int (numeros)


if (num > 0):
  for i in range (1,11):
    print (num," x ",i," = ",num*i)
if (num <= 0):
    print ("ERROR: Solo valores positivos")

