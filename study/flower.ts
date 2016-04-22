for (var i = 123; i < 987; ++i) {
	if (check(i.toString().split('').map((n)=>parseInt(n)))){
		console.log(i);		
	}
}


function check(arr: number[]): boolean {
	var rst = false;

	var sum = 0;
	for (var i = 0; i < arr.length	; ++i) {
		sum += Math.pow(arr[i], 3);
	}

	return sum == parseInt(arr.join(''));
}

