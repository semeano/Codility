// Find an index of an array such that its value occurs at more than half of indices in the array.
// Note: Test score: 91%. Couldn't figure out what is wrong.
function Dominator(A) {
	var l = A.length;
	if (l === 1) return 0;
	var B = [A[0]];
	for (var i = 1; i < l; i++) {
		B.push(A[i]);
		if (B.length > 1 && B[B.length-2] !== B[B.length-1]) {
			B.splice(B.length-2, 2);
		}
	}
	if (B.length === 0) return -1;
	var candidate = B[0];
	var result = -1;
	var counter = 0;
	for (var j = 0; j < l; j++) {
		if (A[j] === B[0]) {
			result = result === -1 ? j : result;
			counter++;
		}
	}
	if (l/2 > counter) return -1;
	return result;
}
