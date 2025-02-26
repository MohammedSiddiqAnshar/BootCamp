const argv = process.argv;
const number = parseInt(argv[2]);
if(number % 2 == 0){
    console.log('even')
}
else{
    console.log('odd')
}