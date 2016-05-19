/*****
Leader
*****/

// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
function EquiLeader(A) {
  var l = A.length;
	if (l <= 1) { return 0; }
	var leader = _Leader(A);
	if (leader === undefined) { return 0; }
	var incLeaders = [];
	var decLeaders = [];
	var incOccurOfLeader  = 0;
	var decOccurOfLeader  = 0;
	for (var i = 0; i < l; i++) {
		// Incremental
		if (A[i] === leader) {
			incOccurOfLeader++;
		}
		if (incOccurOfLeader > (i+1)/2) {
			incLeaders.push(1);
		}
		else {
			incLeaders.push(0);
		}
		// Decremental
		if (A[l-i-1] === leader) {
			decOccurOfLeader++;
		}
		if (decOccurOfLeader > (i+1)/2) {
			decLeaders.unshift(1);
		}
		else {
			decLeaders.unshift(0);
		}
	}
	var result = 0;
	for (var j = 1; j < l; j++) {
		if (incLeaders[j-1] === decLeaders[j] && decLeaders[j] === 1) {
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
	return result;
}
