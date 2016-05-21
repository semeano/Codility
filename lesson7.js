/****************
Stacks and Queues
****************/

// Determine whether a given string of parentheses is properly nested.
// "{[()()]}" => 1 | "([)()]" => 0
function Brackets(S) {
	var A = S.split('');
	var l = A.length;
	if (l === 0) { return 1; }
	if (l % 2 !== 0) { return 0; }
	var stack = [];
	for (var i = 0; i < l; i++) {
		if (stack.length === 0) {
			stack.push(A[i]);
		}
		else {
			if (stack[stack.length-1] === '(' && A[i] === ')' ||
				  stack[stack.length-1] === '[' && A[i] === ']' ||
				  stack[stack.length-1] === '{' && A[i] === '}') {
				stack.pop();
			}
			else {
				stack.push(A[i]);
			}
		}
	}
	return stack.length === 0 ? 1 : 0;
}

// N voracious fish are moving along a river. Some upstream (0) others downstream (1). When they meet, the largest eats the smallets one. Calculate how many fish are left alive.
// A=[4,3,2,1,5], B=[0,1,0,0,0] => 2
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

// Cover "Manhattan skyline" using the minimum number of blocks. Save the active blocks and remove when a lower height is found. At the end sum the remaining active blocks to the current result.
// [8,8,5,7,9,8,7,4,8] => 7
function StoneWall(H) {
	var l = H.length;
	if (l === 1) { return 1; }
	var result = 0;
	var stack = [];		// save active blocks
	for (var i = 0; i < l; i++) {
		if (H[i] < stack[stack.length-1]) {
			// remove from stack lower active blocks
			while (H[i] < stack[stack.length-1]) {
				stack.pop();
				result++;
			}
		}
		if (H[i] > stack[stack.length-1] || stack.length === 0) {
			stack.push(H[i]);
		}
	}
	return result + stack.length;
}

// Determine whether given string of parentheses is properly nested.
// S="(()(())())" => 1 | S="())" => 0
function Nesting(S) {
	if (S === '') { return 1; }
	var l = S.length;
	if (l%2 !== 0 || S[0] !== '(' || S[l-1] !== ')') { return 0; }
	var A = [];
	for (var i = 0; i < S.length; i++) {
		if (S[i] === '(') {
			A.push(S[i]);
		}
		else {
			if (A.length === 0) { return 0; }
			A.splice(-1,1);
		}
	}
	return A.length === 0 ? 1 : 0;
}



// Old lessons

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
