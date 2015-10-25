// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
function MaxProductOfThree(A) {
	A.sort(function(a, b){return a-b});
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
	A.sort(function(a, b){return a-b});
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
	A.sort(function(a, b){return a-b});
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