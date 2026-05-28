let score = "33"
console.log(typeof score);
console.log(typeof(score));//both ways are correct

let valueInNumber = Number(score)// score means 33 string hai but Number() ke wajah se ye number me convert hojayega
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = "33abs"
valueInNumber = Number(score)// issbar string me sirf numbers nahi, alphabets bhi hain isliye ab result alag hoga
//NaN (not an number) store hoga, typeof me number hi show karega but NaN hi rahega
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = null
valueInNumber = Number(score)//null ke case me 0 store hoga
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = true
valueInNumber = Number(score)//1 ayega and false ke liye 0 ayega
console.log(typeof valueInNumber);
console.log(valueInNumber);

score = "krushna"
valueInNumber = Number(score)//number me convert nhi hosakta isliye NaN milega
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)//1 => true, 0 => false
console.log(booleanIsLoggedIn);


isLoggedIn = ""

booleanIsLoggedIn = Boolean(isLoggedIn)//empty string => false, anything inside the string => true eg. "" => false, "hii" => true
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hii" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)