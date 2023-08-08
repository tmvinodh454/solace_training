const async = require("async");

function square(x, y){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(x+y);
		}, 2000);
	});
}

async function output(x,y,z){
	const ans = await square(x,y,z);
	console.log(ans);
	console.log(z);
}

async function output1(x,y){
	const ans1 = await square(x,y);
	console.log(ans1);
	//console.log(z);
}
output(10,20,20);
output1(30,20);
