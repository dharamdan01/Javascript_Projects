let countNumber = document.getElementById('countNumber');
let IncrementNumber = document.querySelector('input');
let j = 0, result, i = parseInt(IncrementNumber.value);
function incrementButton()  // 2
{
    // debugger;
    if(IncrementNumber.value != 1)
    {

        result = j + parseInt(IncrementNumber.value); 
        countNumber.innerText = result; 
        j = result; 
    } 
    else
    {
        j = j + 1; // 1 + 1
        countNumber.innerText = j; // 2
    }
}   

function decrementButton()
{
    if(IncrementNumber.value != 1) 
    {
        result = j - parseInt(IncrementNumber.value); 
        countNumber.innerText = result; -3
        j = result;
    }
    else
    {
        j = j - 1; 
        countNumber.innerText = j; 
    }
}

function resetButton()
{
    countNumber.innerText = 0;
    j = 0;
    IncrementNumber.value = 1;
}




