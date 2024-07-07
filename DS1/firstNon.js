let str = "cocoloco";

for (let i of str) {
    if (str.indexOf(i) == str.lastIndexOf(i)) {
        console.log(i)
        break;
    }
}


