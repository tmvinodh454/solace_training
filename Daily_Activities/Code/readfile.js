const fs = require("fs");
const cheerio = require('cheerio');

fs.readFile("file1.json", function(err, data){
	if(err) throw err;
	const users = JSON.parse(data);
	console.log(users);
});


fs.readFile("file2.txt", 'utf8', function(err, data1){
	if(err) throw err;
	console.log(data1.toString());
});

fs.readFile("file3.html", function(err, data2){
	if(err) throw err;
	const B = cheerio.load(data2);
	const bodyContent = B('body').html();
    console.log(bodyContent);
});
