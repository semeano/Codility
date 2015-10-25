// Find longest sequence of zeros in binary representation of an integer.
function BinaryGap(N) {
	var maxGap = 0;
	var currGap = 0;
	var gapStarted = false;
	var bin = _dec2bin(N);
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

function _dec2bin(dec) {
	return (dec >>> 0).toString(2);
}
