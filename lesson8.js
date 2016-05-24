/*****
Leader
*****/

// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
// [4,3,4,4,4,2] => 2
function EquiLeader(A) {
  var l = A.length;
	if (l <= 1) { return 0; }
	var leader = _Leader(A);
	if (leader === undefined) { return 0; }
	var result = 0;
	var currLeaders = 0;
	for (var i = 0; i < l; i++) {
		if (A[i] === leader.leader) {
			currLeaders++;
		}
		// Check if the leader is a leader at the current point (number of occurences higher than half of the length),
		// and, that the other half of the array complies with the same rule.
		if (currLeaders > (i+1)/2 && (leader.count-currLeaders) > (l-i-1)/2) {
			result++;
		}
	}
	return result;
}

// Find the leader
function _Leader(A) {
	var l = A.length;
	var stack = [];
	for (var i = 0; i < l; i++) {
		if (stack.length === 0) {
			stack.push(A[i]);
		}
		else {
			if (A[i] !== stack[stack.length-1]) {
				stack.pop();
			}
			else {
				stack.push(A[i]);
			}
		}
	}
	if (stack.length === 0) { return undefined; }
	var result = stack[0];
	var occurencies = 0;
	for (var j = 0; j < l; j++) {
		if (A[j] === result) {
			occurencies++;
		}
	}
	if (occurencies <= l/2) { return undefined; }
	return { leader: result, count: occurencies };
}

// Dominator
// Find an index of an array such that its value occurs at more than half of indices in the array.
// Or, in other words, find an index where the leader occurs.
// [3,4,3,2,3,-1,3,3] => 0
function Dominator(A) {
	var l = A.length;
	if (l === 0) { return -1; }
	if (l === 1) { return 0; }
	var leader = _Leader(A);
	if (leader !== undefined) {
		for (var i = 0; i < l; i++) {
			if (A[i] === leader.leader) {
				return i;
			}
		}
	}
	else {
		return -1;
	}
}
