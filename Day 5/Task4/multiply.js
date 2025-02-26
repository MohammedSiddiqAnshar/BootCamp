const prompt=require("prompt-sync")();
a=parseInt(prompt("the table end point "));
b=parseInt(prompt("which number table"));
for(i=1;i<=a;i++)
{
    const d=i*b;
    console.log(d);
}