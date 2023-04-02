let numbers = [5, 2, 4, 7, 12, 23, 1, 55];

function findSmallnum(numbers) {
    let nums = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < nums) {
            nums = numbers[i];
        }
    }
    return nums;
}

let nums = findSmallnum(numbers);
console.log(nums);
