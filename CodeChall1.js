// Comparing BMI (I guess we just make up some numbers?) 

// BMI = (mass in kg / in meter (height * height))

// Make variables

var MarkMass = 50
var MarkHeight = 60
var JohnMass = 46
var JohnHeight = 30

var MarkBMI = MarkMass / (MarkHeight*MarkHeight)
var JohnBMI = JohnMass / (JohnHeight*JohnHeight)

//if else
if (MarkBMI > JohnBMI){
    console.log(`Mark's BMI is ${MarkBMI}, John's BMI is ${JohnBMI}. Mark's BMI is higher`)
} else {
    console.log(`John's BMI is ${JohnBMI}, Mark's BMI is ${MarkBMI}, John's BMI is higher.`)
}

//boolean

var MarkHigherBMI = MarkBMI > JohnBMI
console.log(`Is Mark's BMI higher than John's ${MarkHigherBMI}`)