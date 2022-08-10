//-------the loop of prompt input to enter only positive number.------------------------
PromptInputLoop:for (;;) {
var text = prompt('Enter a positive integer');
var n = promptFilter(text); // bring input to function promptFilter to sort some charecter that not necessery out

//------------ storage variable ------------------------------------------------------
var setOfprime = [];
    if (!isNaN(n)&&n>0) break;  // if value is not null and more than 0 will be store in this variable
}

//-----------Sort some character.---------------------------------
function promptFilter(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {  // tests for a match in a string if it finds a match covert it to int but it is not found return it to non
        return parseInt(value)} 
    else {
        return NaN
    }
}

//----------------Check the input that have the prime numbers or not.----------------------
function isPrime(n) {
    for (let i = 2; n>i; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
    

//------------------------ Show the prime numbers of the input number.---------------------
function showPrime(n) {
    for (let i = 2; n>i; i++){
        if(!isPrime(i))               
            continue;                // breaks one iteration (in the loop) 
                else if(isPrime(i)){
                setOfprime.push(i)   // push value that match function isPrime to store in var setOfprime = [];
            }   
    }
alert("The prime numbers of " + n + ' are '+ setOfprime)
}

showPrime(n); // show output of this function

