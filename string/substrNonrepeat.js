let str = "abcaabde";

function substrNonrepeat(str) {
    let ltr = '';
    let len = 0;
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (!ltr.includes(str[i])) {
            ltr += str[i];
            if (ltr.length > len) {
                len = ltr.length;
                
                word = ltr;
            }
        } else {
            // Move the left side of the window to the right, past the repeated character
            while (ltr.includes(str[i])) {
                ltr = ltr.slice(1);
            }
            ltr += str[i];
        }
    }
    return word;
}

console.log(substrNonrepeat(str)); // Output: "abcde"
