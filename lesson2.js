// Find the earliest time when a frog can jump to the other side of a river.
function FrogRiverOne(X, A) {
	var desired = ((X*X)+X)/2;
	var sum = 0;
	var B = [];
	for (var i = 0; i < X; i++) {
		B.push(0);
	}
	for (var j = 0; j < A.length; j++) {
		if (B[A[j]-1] === 0) {
			B[A[j]-1] = A[j];
			sum += A[j];
			if (sum === desired) {
				return j;
			}
		}
	}
	return -1;
}

// Check whether array A is a permutation.
function PermCheck(A) {
	var l = A.length;
	var B = [];
	for (var i = 0; i < l; i++) {
		B.push(0);
	}
	for (var j = 0; j < l; j++) {
		if (B[A[j]-1] === 0) {
			B[A[j]-1] = 1;
		}
		else {
			return 0;
		}
	}
	return 1;
}

// Find the minimal positive integer not occurring in a given sequence.
function MissingInteger(A) {
	var l = A.length;
	var B = [];
	for (var i = 0; i < l; i++) {
		B.push(0);
	}
	for (var j = 0; j < l; j++) {
		if (B[A[j]-1] === 0) {
			B[Math.abs(A[j])-1] = 1;
		}
	}
	for (var k = 0; k < l; k++) {
		if (B[k] === 0) {
			return k+1;
		}
	}
	return l+1;
}

// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
function MaxCounters(N, A) {
	var max = 0;
	var currMax = 0;
	var B = [];
	for (var i = 0; i < N; i++) {
		B.push(0);
	}
	for (var j = 0; j < A.length; j++) {
		var currVal = A[j];
		if (currVal === N+1) {
			max = currMax;
		}
		else {
			var pos = currVal-1;
			if (B[pos] < max) {
				B[pos] = max + 1;
			}
			else {
				B[pos]++;
			}
			if (B[pos] > currMax) currMax = B[pos];
		}
	}
	for (var k = 0; k < N; k++) {
		if (B[k] < max) B[k] = max;
	}
	return B;
}
