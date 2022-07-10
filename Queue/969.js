/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
	let result = [];
	if (arr.length === 1) {
		return result;
	}
	let { max, maxPosition } = findMaxLtSpecific(arr);
	// 最大值在最后一个位置，因此最大值不需要翻转
	if (maxPosition === arr.length - 1) {
		let toBeSort = arr.slice(0, arr.length - 1);
		// 继续翻转除最大值外前面的数字
		return [...result, ...pancakeSort(toBeSort)];
	} else if (maxPosition !== arr.length) {
		// 没有在正确的位置，需要翻转
		if (maxPosition > 0) {
			arr = reverse(arr, maxPosition + 1);
			result.push(maxPosition + 1);
		}
		arr = reverse(arr, arr.length);
		result.push(arr.length);
		let toBeSort = arr.slice(0, arr.length - 1);
		return [...result, ...pancakeSort(toBeSort)];
	}
};

/**
 * 翻转
 * @param {*} arr
 * @returns
 */
function reverse(arr, index) {
	let result = [];
	arr.forEach((item, i) => {
		if (i < index) {
			result.unshift(item);
		} else {
			result.push(item);
		}
	});
	return result;
}

/**
 * 查找小于指定数的最大数
 * @param {*} arr
 * @param {*} specific
 * @returns
 */
function findMaxLtSpecific(arr, specific = Infinity) {
	let max = 0;
	let maxPosition = -1;
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (item < specific) {
			max = Math.max(item, max);
			maxPosition = max === item ? i : maxPosition;
		}
	}
	return { max, maxPosition };
}

// console.log(pancakeSort([10, 8, 3, 2, 7, 5, 6, 9, 1, 4]));

console.log(pancakeSort([3, 2, 4, 1]));

// 3 4 2 3 2
// 4 2 3 1
// 1 3 2 4
// 3 1 2 4
// 2 1 3 4
// 1 2 3 4
