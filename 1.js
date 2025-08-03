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
            while (string.indexOf(char) >= 0) {
                string = string.replace(char, replacement);
            }
            console.log(string);
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
        } else if (action === 'FindIndex') {
            let [, char] = tokens;
            let index = string.indexOf(char);
            console.log(index);
        } else if (action === 'Cut') {
            let [, index, count] = tokens;
            index = Number(index);
            count = Number(count);
            string = string.substring(index, index + count);
            console.log(string);
        }
    }
}
