const {readFileSync, writeFileSync, write} = require('fs');
console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')



writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // the 'a' here means append. if there is no third argument, node will simply create a file named result-sync.txt. If the result-sync.txt already exists, node will overwrite the contents of the file with the second argument which is the string of text.
)

console.log('done with this task')
console.log('starting with the next one')

