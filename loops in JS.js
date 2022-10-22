//Dimitrije Simic domaci 18.10.2022
//1.Zadatak
var x=0;
var result=0;

while(x<=10){
    result= result+x;
    x=x+1;
}
console.log("1.Zadatak: Sum of first 10 natural numbers is:  "+ result);

//2.Zadatak
var n=3;
var w=1
var result1=1;

while(w<=3){
    result1= result1*n;
    w++;
}
console.log("2.Zadatak: Cube of the number:  "+ result1);

//3.Zadatak
var k=5;
var result2=1;

while(k>=1){
    result2= result2*k;
    k--;
}
console.log("3.Zadatak: Factorial of a given number is:  "+ result2);

//4.Zadatak
var z=3;// broj n elemenata
var result3=0;

for (var j = 2; j <= z*2; j=j+2) {
    result3 += j;
    console.log("member n terms of even natural number is:  "+ j);
}
console.log("4.Zadatak: Their sum is:  "+ result3);

//5.Zadatak
var s=7788;
var result4=0;

while (s >1) {
    result4 += s % 10;       // uvecavanje rezultata za narednu cifru
    s = s / 10-(s % 10)/10; //umanjenje dobijenog broja za vrednost iza nule, dobijamo int
}
console.log("5.Zadatak: Their sum is:  "+ result4);

//6.Zadatak
var m='Eclip542se';
var result5=0;

for(u=0; u<m.length ;u++){
    if (isNaN(m[u])){          //isNaN(x) metod koji proverava da li x(string) nije broj
        result5++;
    }
}
console.log("6.Zadatak: Have a "+ result5 +" elements.");

//7.Zadatak
var niz = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];

for (var d = 0; d < niz.length; d++) {
    if(niz[d]=="c"){
        console.log("7.Zadatak: Index in array where is letter C is:  "+ d);
    }
}