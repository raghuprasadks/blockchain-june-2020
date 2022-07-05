function greeting(){
    console.log('Welcome to javascript')
}

greeting()
greeting()

function addition(num1,num2){
    result = num1+num2
//    console.log('result of '+num1 +" + "+num2 + " = "+result)
    console.log(`result of ${num1}  + ${num2}  = ${result}`)
}

addition(100,200)

function square(num){
    return num*num
}

result = square(4)
console.log('square of 4 is '+result)

multiplication = function (n1,n2){
    return n1*n2
}

result = multiplication(2,4)
console.log('multiplication - 2 X 4 =  '+result)



