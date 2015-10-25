// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
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
function PermMissingElem(A) {
	var sum = 0;
	var l = A.length;
	for (var i = 0; i < l; i++) {
		sum += A[i];
	}
	l += 1;
	return ((l*l)+l)/2 - sum;
}

// Count minimal number of jumps from position X to Y.
function FrogJmp(X, Y, D) {
	return Math.ceil((Y-X)/D);
}
