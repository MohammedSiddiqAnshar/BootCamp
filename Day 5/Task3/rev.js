const args = process.argv;

if(args.length!==3){
    console.log('please enter your string');
    process.exit(1)
}

const message = args[2];

const reversedmessage = message.split('').reverse().join('');

console.log(reversedmessage)