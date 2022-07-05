/**
 * Operators - Arithmetic,Comparision,logical,assignment
 */

// Artimetic Operators : +,-,*,/,%,**,++,--

// Unary operators : ++,--
// Binary Operators : +,-,etc..
/**
console.log('Arithmetic Operations:Unary Operator')

num1=10
num1++
console.log('num1++ : '+num1)
++num1
console.log('++num1 : '+num1)
result = num1++
console.log('result:postfix : '+result)
console.log('num1 : '+num1)
result = ++num1
console.log('result:prefix : '+result)
console.log('num1 : '+num1)

console.log('Binary : Operator')
num1 = 100
num2= 150
result = num1+num2;
console.log(num1 + " + " +num2+ " = "+result)
result = num1*num2;
console.log(num1 + " * " +num2+ " = "+result)
result = num2%num1
console.log(num2 + " % " +num1+ " = "+result)

result = 2**3
console.log(" 2**3 " +" = "+result)
 */
/**
 * Comparision operators - >,<,>=,<=,==,===,!=
 */

num1=100
num2=200
num3=150

result = num1>num2
console.log(num1 + " > "+num2 +" "+result)

console.log(`${num1} > ${num2} ${result}`)

result = num1==num2
console.log(`${num1} == ${num2} ${result}`)
num4='100'

result = num1==num4
console.log(`${num1} == ${num4} ${result}`)
result = num1===num4
console.log(`${num1} === ${num4} ${result}`)
result = num1!=num2
console.log(`${num1} != ${num2} ${result}`)

/**
 * Logical operators - &&, ||,!
 */

num1=100
num2=200
num3=150

result = (num2>num1) && (num2>num3)
console.log("(num2>num1) && (num2>num3) " +result)

result = (num2<num1) || (num2>num3)
console.log("(num2<num1) || (num2>num3) " +result)

result = !((num2<num1) || (num2>num3))
console.log("!((num2<num1) || (num2>num3)) " +result)

/**
 * Assignment operator =,+=,-=,*=,/=
 */

num1 = 100
sum= num1
sum = sum + 50
console.log("result is "+sum)

sum += 50 // sum = sum +50
console.log('short hand operator += '+sum)

//ternary operator
num1=100
num2 = 200
num3 = 150
result = (num1 <num2) ? 'num1 <num2':'num1>num2'
console.log('ternary operator '+result)











