/********************
Maximum slice problem
********************/

// MaxProfit
// Given a log of stock prices compute the maximum possible earning.
// [23171,21011,21123,21366,21013,21367] => 356
function MaxProfit(A) {
	var l = A.length;
	if (l <= 1) { return 0; }
	// Compute the profit between each stock price
	var profit = [];
	for (var i = 1; i < l; i++) {
		profit.push(A[i] - A[i-1]);
	}
	// Get the maximum slice
	var maxEnding = 0;
	var maxSlice = 0;
	var pLength = profit.length;
	for (var j = 0; j < pLength; j++) {
		maxEnding = maxEnding + A[j] > 0 ? maxEnding + A[j] : 0;
		maxSlice = maxEnding > maxSlice ? maxEnding : maxSlice;
	}
	return maxSlice;
}

// MaxDoubleSliceSum
// Find the maximal sum of any double slice.
// [3,2,6,-1,4,5,-1,2] => 17
// Calculate prefix sums in both directions (excluding first and last) and check where the sum of both slices is higher.
function MaxDoubleSliceSum(A) {
	var l = A.length;
	if (l === 3) return 0;
	var s1 = [];
	var s2 = [];
	for (var h = 0; h < l; h++) { s1.push(0); s2.push(0); }
	for (var i = 1; i < l-1; i++) {
		s1[i] = Math.max(s1[i-1]+A[i], 0);
	}
	for (var j = l-2; j > 0; j--) {
		s2[j] = Math.max(s2[j+1]+A[j], 0);
	}
	var max = 0;
	for (var k = 1; k < l-1; k++) {
		max = Math.max(max, s1[k-1]+s2[k+1]);
	}
	return max;
}

// MaxSliceSum
// Find a maximum sum of a compact subsequence of array elements.
// [3,2,-6,4,0] => 5
// [-10,-2,-15] => -2
function MaxSliceSum(A) {
	var l = A.length;
	if (l === 1) { return A[0]; }
	var maxEnding = 0;
	var maxSlice = 0;
	// Get max slice
	for (var i = 0; i < l; i++) {
		maxEnding = maxEnding + A[i] > 0 ? maxEnding + A[i] : 0;
		maxSlice = maxEnding > maxSlice ? maxEnding : maxSlice;
	}
	// If it is zero, then get the lowest value (where it might actually be zero)
	if (maxSlice === 0) {
		maxSlice = A[0];
		for (var j = 1; j < l; j++) {
			if (maxSlice < A[j]) { maxSlice = A[j]; }
		}
	}
	return maxSlice;
}
