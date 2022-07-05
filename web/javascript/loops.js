/**
 * Loops - while,for
 */

console.log('while loop - print 1 to 10')
start = 1
end = 10
while (start <=end){
    console.log(start)
    start +=1
}

console.log('for loop - print 2 to 20')

for (i=2;i<=20;i=i+2){
    console.log(i)
}

console.log('for loop - break at 10')

for (i=2;i<=20;i=i+2){
    console.log(i)
    if (i==10)
        break
}


console.log('for loop - continue at 10')

for (i=2;i<=20;i=i+2){
    
    if (i==10)
        continue
    console.log(i)
}