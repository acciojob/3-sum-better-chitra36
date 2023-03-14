function threeSum(arr, target) {
// write your code here
	 arr = arr.sort((a,b) => a-b);
    let ans = Number.MAX_VALUE;;
    for (let i = 0; i < arr.length - 2; i++) {
        let j = i+1;
        let k = arr.length - 1;
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum === target) return sum;
            let differenceOfCurrentValue = Math.abs(sum - target);
            let previousMin = Math.abs(ans - target);
            if (differenceOfCurrentValue < previousMin) {
                previousMin = differenceOfCurrentValue;
                ans = sum;
            }
            if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return ans;
}

module.exports = threeSum;
