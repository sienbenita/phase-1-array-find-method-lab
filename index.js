// code your solution here
function checkResult(element) {
    return (element.result === "W")
}
function superbowlWin(array) {
    const result =  array.find(checkResult);
    return result ? result.year : result;
}