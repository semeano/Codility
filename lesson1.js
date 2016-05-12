/*********
Iterations
*********/

// Find longest sequence of zeros in binary representation of an integer.
// 1041 => 5 (10000010001)
function BinaryGap(N) {
	var maxGap = 0;
	var currGap = 0;
	var gapStarted = false;
	var bin = _DecimalToBinary(N);
	var A = ('' + bin).split('');
	var l = A.length;
	if (l <= 2) return 0;
	else {
		var prevVal = '';
		for (var i = 0; i < l; i++) {
			if (A[i] === '1') gapStarted = true;
			if (A[i] === '0' && gapStarted) {
				currGap++;
			}
			else if (prevVal === '0' && A[i] === '1') {
				maxGap = currGap > maxGap ? currGap : maxGap;
				currGap = 0;
			}
			prevVal = A[i];
		}
	}
	return maxGap;
}

function _DecimalToBinary(N) {
	return (N >>> 0).toString(2);
}
