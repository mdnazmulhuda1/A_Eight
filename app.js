/**
 * Class Student
 */


let Sname = prompt('Student Name');
let ClassName = prompt('Class');
let roll = prompt('Roll');
let bn = prompt('Bangla');
let el = prompt('English');
let math = prompt('Math');
let s = prompt('Science');


console.log(`

    Name       : ${Sname}
    Class      : ${ClassName}
    Roll       : ${roll}

    ================================================>

    Subject             Marks                    GPA                          Grade
    Bangla              ${bn}                    ${grtGpa(bn)}                ${getGrade(bn)}
    English             ${el}                    ${grtGpa(el)}                ${getGrade(el)}
    Math                ${math}                  ${grtGpa(math)}              ${getGrade(math)}
    Science             ${s}                     ${grtGpa(s)}                 ${getGrade(s)}
   
`);