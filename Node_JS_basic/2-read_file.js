const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim().length > 0);

		if (lines.length <= 1) {
			throw new Error('Cannot load the database');
		}

		lines.shift();
		const fieldGroups = {};
		let totalStudents = 0;

		lines.forEach((line) => {
			const [firstname, , , field] = line.split(',');

			if (firstname && field) {
				totalStudents++;
				if (!fieldGroups[field]) {
					fieldGroups[field] = [];
				}
				fieldGroups[field].push(firstname);
			}
		});

		console.log(`Number of students: ${totalStudents}`);

		for (const [field, students] of Object.entries(fieldGroups)) {
			console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
		}
	} catch (error) {
		console.error('Cannot load the database');
	}
}

module.exports = countStudents;
