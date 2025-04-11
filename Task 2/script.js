function pick(val)
{
    document.getElementById("a").value += val;
}

function clr()
{
    document.getElementById("a").value = " ";
}

function solve(val)
{
    let x = document.getElementById("a").value;
    let y = eval(x);
    document.getElementById("a").value = y;
}