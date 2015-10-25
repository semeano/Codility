// Find the maximal sum of any double slice.
function MaxDoubleSliceSum(A) {
	var l = A.length;
	if (l === 3) return 0;
	var s1 = s2 = [];
	for (var h = 0; h < l; h++) { s1.push(0); s2.push(0); }
	for (var i = 1; i < l-1; i++) {
		s1[i] = Math.max(s1[i-1]+A[i], 0);
	}
	for (var j = l-2; j > 0; j--) {
		s2[j] = Math.max(s2[j+1]+A[j], 0);
	}
	var max = 0;
	for (var k = 1; k < l-1; k++) {
		max = Math.max(max, s1[k-1]+s2[k+1]);
	}
	return max;
}

// From reading material: https://codility.com/media/train/7-MaxSlice.pdf
function _MaxSlice(A) {
	var result = 0;
	var max_ending = 0;
	for (var i = 0; i < A.length; i++) {
		max_ending = Math.max(0, max_ending + A[i]);
		result = Math.max(result, max_ending);
	}
	return result;
}
