// Get GPA From Marks

let grtGpa = (marks) => {

    let gpa;

    if (marks >= 0 && marks < 33) {
        gpa = 0;
    }else if (marks >= 33 && marks <40) {
        gpa = 1;
    }else if (marks >= 40 && marks <50) {
        gpa = 2;
    }else if (marks >= 50 && marks <60) {
        gpa = 3;
    }else if (marks >= 60 && marks <70) {
        gpa = 3.5;
    }else if (marks >= 70 && marks <80) {
        gpa = 4;
    }else if (marks >= 80 && marks <100) {
        gpa = 5;
    }

    return gpa;

}


// Get Grade From Marks

let getGrade = (marks) => {

    let grade;

    if (marks >= 0 && marks < 33) {
        grade = 'F';
    }else if (marks >= 33 && marks <40) {
        grade = 'D';
    }else if (marks >= 40 && marks <50) {
        grade = 'C';
    }else if (marks >= 50 && marks <60) {
        grade = 'B';
    }else if (marks >= 60 && marks <70) {
        grade = 'A-';
    }else if (marks >= 70 && marks <80) {
        grade = 'A';
    }else if (marks >= 80 && marks <100) {
        grade = 'A+';
    }

    return grade;

}