stuData.map( (data, index) => {

    let result;
    data.bangla >= 33 && data.english >= 33 && data.math >= 33 && data.science >= 33 && data.social >= 33 && data.religion >= 33 ? result = 'Passed': result = 'Failed';

    
    let cgpa = getGPA(data.bangla) + getGPA(data.english) + getGPA(data.math) + getGPA(data.science) + getGPA(data.social) +  getGPA(data.religion);
    cgpa = cgpa/6; 

    
    result == 'Failed' ? cgpa = 0 : '';
    

    /**
     * Output 
     */

    console.log(`
            Name    :   ${data.name}
            Class   :   ${data.class}
            Roll    :   ${data.roll}
    ===================================================================================================
        Subject             Mark            GPA             Grade           Result           CGPA
        Bangla              ${data.bangla}              ${getGPA(data.bangla)}               ${getGrade(data.bangla)}               ${result}           ${cgpa.toFixed(2)}
        English             ${data.english}             ${getGPA(data.english)}              ${getGrade(data.english)}                    
        Maths               ${data.math}                ${getGPA(data.math)}                 ${getGrade(data.math)}
        Science             ${data.science}             ${getGPA(data.science)}              ${getGrade(data.science)}
        Social Science      ${data.social}              ${getGPA(data.social)}               ${getGrade(data.social)}
        Religion            ${data.religion}            ${getGPA(data.religion)}             ${getGrade(data.religion)}
    `);

})