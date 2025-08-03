function solve(array) {

    let string = array.shift();

    for (let line of array) {
        if (line === "Done") {
            break;
        }

        let tokens = line.split(' ');
        let action = tokens[0];

        if (action === 'Change') {
            let [, char, replacement] = tokens;

            while (string.indexOf(char) >= 1) {
                string = string.replace(char, replacement);
            }
            console.log(string)
        } else if (action === 'Includes') {
            let [, subs] = tokens;

            if (string.includes(subs)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action === 'End') {
            let [, subs] = tokens;
            
            if (string.endsWith(subs)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (action === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        } else if (command === 'FindIndex') {
            let [, char] = tokens;
            let index = string.indexOf(char);
            console.log(index);
        } else if (action === 'Cut') {
            let [, index, count] = tokens;
            string = string.substring(index, index + count);
            console.log(string);
        }

    }
}
solve(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])