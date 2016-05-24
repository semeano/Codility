/**********
Prefix sums
**********/

// Count the number of passing cars on the road. Array A contains only "0" (car traveling east) and "1" (car traveling west).
// We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
// [0,1,0,1,1] => 5 : (0,1), (0,3), (0,4), (2,3), (2,4)
function PassingCars(A) {
	var result = 0;
	var l = A.length;
	// Create an array of prefix sums
	var P = _PrefixSums(A);
	for (var i = 0; i < l; i++) {
		if (A[i] === 0) {
			// Add how many other "1" are ahead of the current position
			result += (P[l] - P[i]);
		}
	}
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

// Compute number of integers divisible by k in range [A..B].
// For A = 6, B = 11 and K = 2, your function should return 3 (6, 8 and 10 are divisible by 2).
function CountDiv(A, B, K) {
	var result = 0;
	if (A === B) {
		result = A%K === 0 ? 1 : 0;
	}
	else {
		if (A === 0) {
			result = 1;
		}
		// Calculate the number of integers divisible by B
		result += B >= K ? Math.floor(B/K) : 0;
		A--;
		// Subtract the number of integers divisible by A-1
		result -= A >= K ? Math.floor(A/K) : 0;
	}
	return result;
}

// Find the minimal nucleotide from a range of sequence DNA.
/*
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?
The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).
For example, consider string S = CAGCCTA and arrays P, Q such that:
    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:
The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
*/
// ("CAGCCTA", [2,5,0], [4,5,6]) => [2,4,1]
function GenomicRangeQuery(S, P, Q) {
	// Create a matrix for every nucleotides occurency
	var impactFactor = [];
	var impactFactorChar = S.split('');
	var sLength = impactFactorChar.length;
	for (var i = 0; i < sLength; i++) {
		switch (impactFactorChar[i]) {
			case "A":
				impactFactor.push([1,0,0,0]);
			break;
			case "C":
				impactFactor.push([0,1,0,0]);
			break;
			case "G":
				impactFactor.push([0,0,1,0]);
			break;
			case "T":
				impactFactor.push([0,0,0,1]);
			break;
		}
	}
	// Compute the prefix sums of the matrix
	for (var j = 1; j < sLength; j++) {
		for (var k = 0; k < 4; k++) {
			impactFactor[j][k] += impactFactor[j-1][k];
		}
	}
	var result = [];
	var qLength = Q.length;
	for (var t = 0; t < qLength; t++) {
		var x = P[t];
		var y = Q[t];
		for (var u = 0; u < 4; u++) {
			var prev = 0;
			if (x > 0) {
				prev = impactFactor[x-1][u];
			}
			// Check the difference in sums. If there's any then this is the minimal nucleotide.
			if (impactFactor[y][u] - prev > 0) {
				result.push(u+1);
				break;
			}
		}
	}
	return result;
}

// Find the minimal average of any slice containing at least two elements.
// Every slice must be of size two or three. Slices of bigger sizes are created from such smaller slices. Therefore should any bigger slice have an optimal value, all sub-slices must be the same, for this case to hold true. Therefore we check all possible slices of size 2/3 and return the smallest one.
// [4,2,2,5,1,5,8] => 1 (being (1,2) the smaller slice)
function MinAvgTwoSlice(A) {
	var l = A.length;
	var min = (A[0] + A[1])/2;
	var pos = 0;
	for (var i = 1; i < l; i++) {
		var avgPair = (A[i-1] + A[i])/2;
		if (avgPair < min) {
			min = avgPair;
			pos = i-1;
		}
	}
	if (l > 2) {
		for (var j = 2; j < l; j++) {
			var avgTrio = (A[j-2] + A[j-1] + A[j])/3;
			if (avgTrio < min) {
				min = avgTrio;
				pos = j-2;
			}
		}
	}
	return pos;
}
