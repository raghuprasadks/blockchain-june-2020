datentime = new Date()
console.log('date and time '+datentime)
/**
 * Java script object - key : value pair
 */
student =
{
    name:'ravi',
    location:'bengaluru',
    qualification :'BE'
} 
student1 =
{
    name:'rashmi',
    location:'bengaluru',
    qualification :'BE'
}


console.log('student object ',student)
console.log('student object:name '+student.name)
console.log('student object:location '+student.location)
splarray = []
splarray.push(datentime)
splarray.push(student)

console.log(' 0th element '+splarray[0])
console.log(' 1 st element '+splarray[1].qualification)

students =
[
    {
    name:'ravi',
    location:'bengaluru',
    qualification :'BE'
    },
    {
        name:'ramya',
        location:'bengaluru',
        qualification :'BBA'
    },
    {
        name:'gagan',
        location:'mysore',
        qualification :'MCA'
    },
]

for (i=0;i<students.length;i++){
    student = students[i]
    console.log(student.name +' - '+student.location)
}



