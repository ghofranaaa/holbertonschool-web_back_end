const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim().length > 0);

		if (lines.length <= 1) {
			throw new Error('Cannot load the database');
		}

		const header = lines.shift();
		const fieldGroups = {};

		lines.forEach((line) => {
			const [firstname, , , field] = line.split(', ');

			if (!firstname || !field) return;

			if (!fieldGroups[field]) {
				fieldGroups[field] = [];
			}
			fieldGroups[field].push(firstname);
		});

		const totalStudents = lines.length;
		console.log(`Number of students: ${totalStudents}`);

		for (const [field, students] of Object.entries(fieldGroups)) {
			console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
		}
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}

module.exports = countStudents;
