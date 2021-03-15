module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arr[i] == bracketsConfig[j][1] && arr[i-1] == bracketsConfig[j][0]) {
                arr.splice(i-1, 2);
                i = 0;
                break;          
            }
        } 
    }
    return arr < 1 ? true : false
}
