interface Student {
    name: string;
    grade: number;
    major?: number | string; 
}

function printStudentInfo (studentInfo:Student) {
    console.log(studentInfo.name);
    console.log(studentInfo.grade);
    console.log(studentInfo.major);
}

const student1 : Student = {name: '손', grade : 5}
printStudentInfo(student1); 