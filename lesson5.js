// Determine whether given string of parentheses is properly nested.
function Nesting(S) {
	if (S === '') return 1;
	var l = S.length;
	if (l%2 !== 0 || S[0] !== '(' || S[l-1] !== ')') return 0;
	var A = [];
	for (var i = 0; i < S.length; i++) {
		if (S[i] !== '(' && S[i] !== ')') return 0;
		if (S[i] === '(') {
			A.push(S[i]);
		}
		else {
			if (A.length === 0) return 0;
			A.splice(-1,1);
		}
	}
	return A.length === 0 ? 1 : 0;
}

// Cover "Manhattan skyline" using the minimum number of rectangles.
function StoneWall(H) {
	var l = H.length;
	var stones = 0;
	var stack = [];
	for (var i = 0; i < l; i++) {
		stack.push(0);
	}
	var stack_num = 0;
	for (var j = 0; j < l; j++) {
		while (stack_num > 0 && stack[stack_num - 1] > H[j]) {
			stack_num--;
		}
		if (stack_num > 0 && stack[stack_num - 1] === H[j]) {
			continue;
		}
		else {
			stones++;
			stack[stack_num] = H[j];
			stack_num++
		}
	}
	return stones;
}

// N voracious fish are moving along a river. Calculate how many fish are alive.
function Fish(A, B) {
	if (A.length === 1) return 1;
	for (var i = 1; i < A.length; i++) {
		if (B[i-1] === 1 && B[i] === 0) {
			if (A[i-1] > A[i]) {
				A.splice(i,1);
				B.splice(i,1);
				i--;
			}
			else {
				A.splice(i-1,1);
				B.splice(i-1,1);	
				i -= 2;
			}
		}
	}
	return A.length;
}
