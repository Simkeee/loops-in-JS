// 1 Zadatak Write a program that checks if a given 
// element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var e = 3;
a = [5, -4.2, 3, 7];
result=false;
for (var w = 0; w < a.length; w++) {
    if(a[w]==e){
        result=true;
    }
}
if(result=true){
console.log("1. ZADATAK: Yes!");
}
else
{
console.log("1. ZADATAK: no!");
}

//2 Zadatak Write a program that multiplies every 
// positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

niz1=[-3, 11, 5, 3.4, -8];

for(r=0; r < niz1.length ;r++){
    if(niz1[r]>0)
    {
       niz1[r]*=2;
    }
}
console.log("2. ZADATAK: Multiplies every positive element of a given array "+niz1);

//3 Zadatak Write a program that finds the minimum of a 
// given array and prints out its value andindex.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

niz2=[4, 2, 2, -1, 6];
b=niz2[0];
index=0;

for(var d=1; d<niz2.length; d++)
{
    if(niz2[d]<b){
        b=niz2[d];
        index=d;
    }
}
console.log("3. ZADATAK: Minimum of a given array is " +b+" with index "+index);

//4 Zadatak  Write a program that finds the first 
// element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2



niz21=[4, 2, 2, -1, 6];
var temp=1;

for (n=0; n<niz21.length; n++)///////Bubble sort Implementation using Javascript/////
{ 
for(z=0; z<niz21.length-n-1; z++)
{
 if (niz21[z] > niz21[z + 1])
{
    temp=niz21[z];
    niz21[z]=niz21[z+1];
    niz21[z+1]=temp;
}
}
}
console.log("4. ZADATAK: The first element larger than minimum is "+niz21[1]);

//zadatak 5 Write a program that calculates the sum of 
// positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

niz3=[3, 11, -5, -3, 2]
k=0;

for(q=0; q < niz3.length ;q++){
    if(niz3[q]>0)
    {
       k=k+niz3[q];// isto sto i niz1[i]=niz1[i]*2
    }
}
console.log("5. ZADATAK: Sum of positive elements in the array is: "+k);

//Zadatak 6 Write a program that checks if a given array is symmetric. 
// An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

s = [2, 4, -2, 7, -2, 4, 2]
rezultat=0;

for(i=0 ; i<s.length ; i++)
{
rezultat=s[i]-s[s.length-1-i];
}
if(rezultat==0){
    console.log("6. ZADATAK: Niz je simetrican!");
}
else{
    console.log("6. ZADATAK: Niz nije simetrican!");
}

// Zadatak 7 Write a program that intertwines two arrays. 
// You can assume the arrays are of the samelength.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

niz4=[4, 5, 6, 2];
niz5=[3, 8, 11, 9];
niz6=[];

for(f=0;f<niz4.length;f++)
{
    niz6=[niz6, niz4[f], niz5[f]];
}
console.log("7. ZADATAK: Intertwines two arrays is array "+niz6)

// 8.Zadatak Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

niz7=[4, 5, 6, 2];
niz8=[3, 8, 11, 9];

niz9=[niz7,niz8];
console.log("8. ZADATAK: Concatenates two arrays is array "+niz9);


// 9.Zadatak Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

element = 2;
niz10 =[4, 6, 2, 8, 2, 2];

for(y=0;y<niz10.length;y++)
{
   if(niz10[y]===element)
   {
    niz10[y]="";
   }
}
console.log("9. ZADATAK: Arrey eith deletes a given element: "+niz10);

//10 Zadatak Write a program that inserts a given element 
//e on the given position p in the array a. If
//the value of the position is greater than the array length, 
//print the error message.Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

elementE=78;
psitionP=3;
niz11=[2, -2, 33, 12, 5, 8];
niz12=[elementE];
niz13=[niz11[0]];
niz14=[];

for(t=niz11.length-psitionP; t<niz11.length; t++)
{
    niz12=[niz12,niz11[t]];
}
for(v=1;v<psitionP;v++)
{
    niz13=[niz13,niz11[v]];
}
    niz14=[niz13, niz12];
console.log("10. ZADATAK: Arrey with inserts a given element: "+niz14);