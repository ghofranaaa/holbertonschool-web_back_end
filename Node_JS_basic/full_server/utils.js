const fs = require('fs');

const readDatabase = (filePath) => 
	new Promise((resolve, reject) => {
	  fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
		  return reject(new Error('Cannot load the database'));
		}
		const lines = data.trim().split('\n');
		const fields = {};
		lines.slice(1).forEach((line) => {
		  const [firstname, , , field] = line.split(',');
		  if (!fields[field]) {
			fields[field] = [];
		  }
		  fields[field].push(firstname);
		});
		resolve(fields);
	  });
	});

module.exports = readDatabase;
