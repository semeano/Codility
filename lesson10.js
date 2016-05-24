/**************************
Prime and composite numbers
**************************/

// MinPerimeterRectangle
// Find the minimal perimeter of any rectangle whose area equals N.
// 30 => 22 (5*6)
function MinPerimeterRectangle(N) {
	var divisors = _Divisors(N);
	var higherDivisor = divisors[divisors.length-1];
	return 2 * (higherDivisor + (N/higherDivisor));
}

// Get divisors of N
function _Divisors(N) {
	var i = 1;
	var result = [];
	while (i*i < N) {
		if (N%i === 0) {
			result.push(i);
		}
		i++;
	}
	if (i*i === N) {
		result.push(i);
	}
	return result;
}

// CountFactors
// Count factors of given number n.
function CountFactors(N) {
	var divisors = _Divisors(N);
	var higherDivisor = divisors[divisors.length-1];
	if (higherDivisor*higherDivisor === N) {
		return 2*divisors.length - 1;
	}
	return 2*divisors.length;
}

// Check if N is prime
function _Primality(N) {
	var i = 2;
	while (i*i <= N) {
		if (N%i === 0) {
			return false;
		}
		i++;
	}
	return true;
}