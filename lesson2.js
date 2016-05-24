/*****
Arrays
*****/

// Rotate an array to the right by a given number of steps.
// [3,5,6,7], 3 => [5,6,7,3]
// shift: remove first item
// pop: remove last item
// push: add to the end of the array
// unshift: add to the beggining of the array
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
// Sort and check if it doesn't match
function OddOccurrencesInArray(A) {
	if (A.length === 1) {
		return A[0];
	}
	else {
		A.sort();
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
