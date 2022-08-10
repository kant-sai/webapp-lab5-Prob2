var positiveInt = [];
var n;
var text;

// //-----------Sort some character.---------------------------------
function promptFilter(value) {
    (/^[-+]?(\d+|Infinity)$/.test(value))  // tests for a match in a string if it finds a match covert it to int but it is not found return it to non
        return Number(value)
}

//--------------------function to loop to input prompt that will break if input is negative number---------------------
function readInput () {
    PromptInputLoop:for (;;) {
        var text = prompt('Enter an integer (a negative integer to quit)');
        var n = promptFilter(text); // bring input to function promptFilter to sort some charecter 
           if ( n < 0) {
            break;
           } else if (n>0 && !isNaN(n)) {
            positiveInt.push(n);
            continue;
           }
    } return positiveInt;
} 

//---------------------arrow function to calculated Max, Min, Avg-------------------------------
const minInt = (list) => Math.min.apply(Math,list);
const maxInt = (list) => Math.max.apply(Math,list);
const sumInt = (list) => list.reduce((a,b) => a + b, 0);
const avgInt = (list) => sumInt(list)/list.length;

//---------------------function to display formation output------------------------------------
function displayStats () {
    (positiveInt.length > 0)?
    alert ('For the list ' + list + ", the average is " + avgInt(list) + ", the minimum is " + minInt(list) + ", and the maximum is " + maxInt(list)):
    alert ('For the list ' + 'empty' + ", the average is " + 0 + ", the minimum is " + 0 + ", and the maximum is " + 0);
}

//--------------show output--------------------------------------------------------------------
list = readInput(); 
displayStats(list);









