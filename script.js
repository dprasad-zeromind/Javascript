// let js= "amazing";
// if(js==="amazing")alert("Java script is Fun!");

// //values and variables   
// let country = "india";
// let continent ="Andhra Pradesh";
// let population =53.448;

// console.log(country,"\n"+continent,"\n"+population);

// //Data types

// let isIsland = false
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// //let, const and var
// language ="Telugu";
// const ap= "Andhra Pradesh";
// const tG="Telangana";

// //Basic Operator's

// console.log(population / 2);
// population ++;
// console.log(population);    
// console.log(population>6);
// console.log(population<33);


// const description= continent +' is part of ' + country+' and its population of '+population+' million people speck '+ language;
// console.log(description);

// //Literals
// console.log(`${continent} is part of ${country} and its population of ${population} million people speck ${language}`);

// //math operator's
// const year=2026;
// const agePrasad=year-1990;
// const ageSarada=year-1992;

// console.log(agePrasad+ "\n"+ ageSarada);

// // Assignment operator's   
// let x=10+5;
// x+=10;
// x*=4;
// x++;
// x--;
// console.log(x);

// //comparison oprator's

// console.log(agePrasad>ageSarada);
// console.log(agePrasad>=18);
// const isFullage= agePrasad>=18;
// console.log(year-1991>year-2018);

// let a,b;
// a=b= 25-10-5;
// console.log(a,b);

// const student={
//     firstName:"DurgaPrasad",
//     age:32,
//     cgpa:10.00,
//     isPass:true,
// };
// student [name]= "Dprasad";
// console.log(student[name]);

// let age =16;

// if (age>=18){
//     console.log("You are enagible to Vote");
// }else {console.log("You are Not enagible to Vote");
// }

// let number =prompt("Enter the Number will odd or Even!"
// );

// if (number % 2===0){
//     console.log(number, "Is Even");
// }else{ console.log(number, "Is Odd");
//     }

// let mode = "silver";
// let color;

// if (mode==="dark"){
//     color="black";
// }else if(mode ==="pink"){
//    color="pink"; 
// }else if(mode ==="blue"){
//     color ="blue";
// }else {
//     color = "White";
// }

// console.log(color);

// let result= age >=18? "Adult" : "Non adult";
// console.log(result);

// let num=prompt('Enter a number:');
// if (num%5===0){
//     console.log(num,"Is Multiple Of 5");
// }else{
//         console.log(num,'Is Not Multiple Of 5');
//     }

    let score=prompt('Enter your score(0-100)');
    let grade;
if(score >= 90 && score <= 100){
    grade = "A";
}else if (score >=70 && score<= 89){
    grade ="B";
}else if(score >=60 && score<=69){
    grade ="C";
}else if(score >=50 && score<=59){
    grade ="D";
}else if (score >= 0 && score<=49){
        grade ="Fail";
}else if (score >=100){
    grade="Stupid Please Enter corrct Markes!";
}

console.log("According your score, Your Grade Was : ",grade);




















