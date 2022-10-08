let student1 = {
    name: "HarryPotter",
    sessionalMarks: 45,
    midsemMarks: 80,
    endsemMarks: 84
}
let student2 = {
    name: "StrangerThings",
    sessionalMarks: 48,
    midsemMarks: 90,
    endsemMarks: 78
}
let student3 = {
    name: "Lucifer",
    sessionalMarks: 40,
    midsemMarks: 87,
    endsemMarks: 90
}
let student4 = {
    name: "MoneyHeist",
    sessionalMarks: 45,
    midsemMarks: 65,
    endsemMarks: 91
}
let student5 = {
    name: "SquidGame",
    sessionalMarks: 35,
    midsemMarks: 78,
    endsemMarks: 85
}


let student1Marks = student1.sessionalMarks + student1.midsemMarks + student1.endsemMarks;
let student2Marks = student2.sessionalMarks + student2.midsemMarks + student2.endsemMarks;
let student3Marks = student3.sessionalMarks + student3.midsemMarks + student3.endsemMarks;
let student4Marks = student4.sessionalMarks + student4.midsemMarks + student4.endsemMarks;
let student5Marks = student5.sessionalMarks + student5.midsemMarks + student5.endsemMarks;

if (student1Marks > student2Marks && student1Marks > student3Marks && student1Marks > student4Marks && student1Marks > student5Marks) {
    console.log(student1.name + " got the heighest Marks, " + "which is " + student1Marks + "/250")
} else if (student2Marks > student1Marks && student2Marks > student3Marks && student2Marks > student4Marks && student2Marks > student5Marks) {
    console.log(student2.name + " got the heighest Marks " + " which is " + student2Marks)
} else if (student3Marks > student1Marks && student3Marks > student2Marks && student3Marks > student4Marks && student3Marks > student5Marks) {
    console.log(student3.name + " got the heighest Marks " + " which is " + student3Marks)
} else if (student4Marks > student1Marks && student4Marks > student2Marks && student4Marks > student3Marks && student4Marks > student5Marks) {
    console.log(student4.name + " got the heighest Marks " + " which is " + student4Marks)
} else {
    console.log(student5.name + " got the heighest Marks " + " which is " + student5Marks)
}


let avgMarks = (student1Marks + student2Marks + student3Marks + student4Marks + student5Marks) / 5

console.log("Average Marks is: " + avgMarks)