/******
Sorting
******/

// Determine whether a triangle can be built from a given set of edges.
// 0 ≤ P < Q < R < N
// A[P] + A[Q] > A[R], A[Q] + A[R] > A[P] and A[R] + A[P] > A[Q].
// [10,2,5,1,8,20] => 1 (1,2,5,8,10,20)
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
// [2,1,1,2,3,1] => 3 (1,2,3)
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

// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// [-3,1,2,-2,5,6] => 60 (A[2]*A[4]*A[5])
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

// Compute the number of intersections in a sequence of discs.
// 87% (does not pass the overflow tests)
function NumberOfDiscIntersections(A) {
	var min, max;
	var l = A.length;
	if (l < 2) { return 0; }
	for (var i = 0; i < l; i++) {
		var cMin = i - A[i];
		var cMax = i + A[i];
		if (typeof min === 'undefined' || cMin < min) {
			min = cMin;		// get where it starts
		}
		if (typeof max === 'undefined' || cMax > max) {
			max = cMax;		// get where it ends
		}
	}
	// Create transitions array, and unique array (circles with radius = 0)
	var t = [];
	for (var j = min; j <= max; j++) {
		t.push({ start: 0, end: 0 });
	}
	// Fill transitions array
	for (var k = 0; k < l; k++) {
		t[k-A[k]+Math.abs(min)].start += 1;			// start circle
		t[k+A[k]+Math.abs(min)].end += 1;		// end circle
	}
	var cCircles = 0;
	var intersections = 0;
	for (var m = 0; m <= max + Math.abs(min); m++) {
		var repeat = false;
		// Run transitions array
		if (t[m].start > 0) {
			intersections += cCircles;
			cCircles++;
			t[m].start -= 1;
			if (t[m].start > 0) {
				m--;
				repeat = true;
			}
		}
		if (t[m].end > 0 && !repeat) {
			cCircles--;
			t[m].end -= 1;
			if (t[m].end > 0) {
				m--;
			}
		}
	}
	return intersections > 10000000 ? -1 : intersections;
}
