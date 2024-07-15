// document.write('body mainjs파일(inline)')
// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`
console.log(myName); // HEROPY
console.log(email); // thesecon@gmail.com
console.log(hello); // Hello HEROPY?!

console.log('오류~');
// var로 변수 선언 num은 어떤 타입도 가능 - 중복 선언이 가능하다(기존데이터 삭제)
var num = 1+2;
var num2 = '1'+'2';

// 새로운 변수 선언타입 let - 중복 선언이 불가능하다
let num3 = 1+3;
let num4 = '1'+'2';

console.log(num);
console.log(num2);
console.log(num3);
console.log(num4);

// var는 hoisting(호이스팅)이 가능
// let은 hoisting이 불가능
// hoisting은 변수를 선언하고 할당했을 때, 변수사용 이후에 할당해도 사용이 가능함(스코프의 맨 위로 선언해줌)
console.log('num5 : ', num5);
var num5 = 10;

// const는 상수선언
const num6 = 11;
// num6 = 15; num6은 상수로 선언되었기 때문에 변경이 불가하여 에러를 유발함
console.log('num4 : ', num6);

let undif;
let obj = {asc:123};
console.log(obj.asc);
console.log(obj.zzz);
console.log(undif);
// 타입을 확인하려면 typeof()를 사용하면 된다
console.log(typeof(`type : `,obj));
// 명시적 타입변환
let result = 10 + Number('15');
console.log(result);
let result2 = String(10) + '15';
console.log(result2);

let each = 0;
for(let i=0; i<1000; i++){
    if(i%2){
        each++;
    }
}
console.log('each : ',each);

for(i=1; i<=9; i++){
    for(let j=1; j<=9; j++){
        // console.log(i,` X `,j,` = `,i*j);
    }
}

let result3 = 0;
for(i=1; i<=9; i++){
    for(j=0; j<=9; j++){
        for(let n=0; n<=9; n++){
            result3 = (i**3)+(j**3)+(n**3);
            if(result3 < 1000)
                console.log(result3);
        }
    }
}
// console.log('test : ',5**3);