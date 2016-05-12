/*****
Arrays
*****/

// Rotate an array to the right by a given number of steps.
// [3,5,6,7], 3 => [5,6,7,3]
function CyclicRotation(A, K) {
	if (A.length > 0) {
		for (var i = 0; i < K; i++) {
			A.unshift(A.pop());
		}
	}
	return A;
}

// Find value that occurs in odd number of elements.
// [9,3,9,3,9,7,9] => 7
function OddOccurrencesInArray(A) {
	A.sort();
	if (A.length === 1) {
		return A[0];
	}
	else {
		var index;
		for (var i = 0; i < A.length; i++) {
			if (A.length > i+1 && A[i] === A[i+1]) {
				i++;
			}
			else {
				index = i;
			}
		}
		return A[index];
	}
}
