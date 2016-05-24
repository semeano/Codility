/****************
Counting elements
****************/

// Find the earliest time when a frog can jump to the other side of a river.
// The goal is to find the earliest time (index) when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
// (5, [1,3,1,4,2,3,5,4]) => 6
function FrogRiverOne(X, A) {
	var desired = (X*(X+1))/2;		// The sum of the counter (B) array: (l*(l+1))/2
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
// Create a counter array, and if the value reapeats or if it's out of boundaries, it will fail.
// [4,1,3,2] => 1
// [4,1,3] => 0
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
// [1,3,6,4,1,2] => 5
// Create a counter for all positive values and check the first to fail.
function MissingInteger(A) {
	var l = A.length;
	var B = [];
	for (var i = 0; i < l; i++) {
		B.push(0);
	}
	for (var j = 0; j < l; j++) {
		if (B[A[j]-1] === 0) {
			B[A[j]-1] = 1;
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
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// (5, [3,4,4,6,1,4,4]) => [3,2,2,4,2]
function MaxCounters(N, A) {
	var max = 0;
	var currMax = 0;
	var B = [];
	// Create counter array
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
			// Keep track of current maximum value
			if (B[pos] > currMax) currMax = B[pos];
		}
	}
	// Set the remain counters (that were never increased) to max
	for (var k = 0; k < N; k++) {
		if (B[k] < max) B[k] = max;
	}
	return B;
}
