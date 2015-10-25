// Compute number of integers divisible by k in range [a..b].
function CountDiv(A, B, K) {
	var result = 0;
	if (A === B) {
		result += A%K === 0 ? 1 : 0;
	}
	else {
		if (A === 0) {
			result += 1;
		}
		result += B >= K ? Math.floor(B/K) : 0;
		A--;
		result -= A >= K ? Math.floor(A/K) : 0;
	}
	return result;
}

// Count the number of passing cars on the road.
function PassingCars(A) {
	var result = 0;
	var sum = 0;
	var l = A.length;
	var P = _PrefixSums(A);
	for (var i = 0; i < l; i++) {
		if (A[i] === 0) {
			sum += (P[l] - P[i]);
		}
		else {
			sum += (i - P[i]);
		}
	}
	result = sum/2;
	if (result > 1000000000) return -1;
	return result;
}

// Calculate prefix sums of array A
function _PrefixSums(A) {
	var l = A.length;
	var P = [0];
	for (var i = 0; i < l; i++) {
		P.push(P[i] + A[i]);
	}
	return P;
}
