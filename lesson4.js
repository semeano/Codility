/****************
Counting elements
****************/

// Find the earliest time when a frog can jump to the other side of a river.
// The goal is to find the earliest time (index) when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
// [1,3,1,4,2,3,5,4] => 6
function FrogRiverOne(X, A) {
	var desired = (X*(X+1))/2;
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
// [1,3,6,4,1,2] => 5
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
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// (5, [3,4,4,6,1,4,4]) => [3,2,2,4,2]
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




// Old lessons

// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
function MaxProductOfThree(A) {
	A.sort(function (a, b) { return a-b; });
	var l = A.length;
	var maxTriplet1 = A[l-1]*A[l-2]*A[l-3];
	var maxTriplet2 = A[0]*A[1]*A[l-1];
	maxTriplet = maxTriplet1 > maxTriplet2 ? maxTriplet1 : maxTriplet2;
	return maxTriplet;
}
// Another solution
function MaxProductOfThree(A) {
	var maxTriplet;
	var max1 = -1000;
	var max2 = -1000;
	var max3 = -1000;
	var min1 = 1000;
	var min2 = 1000;
	var l = A.length;
	for (var i = 0; i < l; i++) {
		if (A[i] > max1) {
			max3 = max2;
			max2 = max1;
			max1 = A[i];
		}
		else if (A[i] > max2) {
			max3 = max2;
			max2 = A[i];
		}
		else if (A[i] > max3) {
			max3 = A[i];
		}
		if (A[i] < min1) {
			min2 = min1;
			min1 = A[i];
		}
		else if (A[i] < min2) {
			min2 = A[i];
		}
	}
	var maxTriplet1 = max1*max2*max3;
	var maxTriplet2 = max1*min1*min2;
	maxTriplet = maxTriplet1 > maxTriplet2 ? maxTriplet1 : maxTriplet2;
	return maxTriplet;
}

// Determine whether a triangle can be built from a given set of edges.
function Triangle(A) {
	var l = A.length;
	if (l < 3) return 0;
	A.sort(function (a, b) { return a-b; });
	for (var i = 0; i < l-2; i++) {
		if (A[i] >= 0 && (A[i] + A[i+1]) > A[i+2]) return 1;
	}
	return 0;
}

// Compute number of distinct values in an array.
function Distinct(A) {
	var l = A.length;
	if (l === 0) return 0;
	if (l === 1) return 1;
	A.sort(function (a, b) { return a-b; });
	var prevVal;
	var result = 0;
	for (var i = 0; i < l; i++) {
		if (prevVal !== A[i]) {
			result++;
			prevVal = A[i];
		}
	}
	return result;
}
