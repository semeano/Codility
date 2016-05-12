/**************
Time complexity
**************/

// Count minimal number of jumps from position X to Y (D: size of the jump)
function FrogJmp(X, Y, D) {
	return Math.ceil((Y-X)/D);
}

// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// Write a function that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.
function TapeEquilibrium(A) {
	var fp = [];
	var sp = [];
	var l = A.length-1;
	for (var i = 0; i < l; i++) {
		if (i === 0) fp.push(A[i]);
		else fp.push(A[i] + fp[i-1]);
		if (i === 0) sp.push(A[l]);
		else sp.push(A[l-i] + sp[i-1]);
	}
	var result = -1;
	for (var j = 0; j < l; j++) {
		var minDiff = Math.abs(fp[j]-sp[l-1-j]);
		if (minDiff < result || result < 0) result = minDiff;
	}
	return result;
}

// Find the missing element in a given permutation.
// [2,3,1,5] => 4
function PermMissingElem(A) {
	var sum = 0;
	var l = A.length;
	for (var i = 0; i < l; i++) {
		sum += A[i];
	}
	l += 1;
	return (l*(l+1))/2 - sum;
}
