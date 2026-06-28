function stringChop(str, size) {
  // your code here
	if(str==null) return [];
	let res=[];
	for(let i=0;i<str.length;i=i+size){ // all substring of same length aecept the last one
		res.push(str.slice(i,i+size));
	}
	return res;
}

// // Do not change the code below
const str = prompt("Enter String.");

const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

