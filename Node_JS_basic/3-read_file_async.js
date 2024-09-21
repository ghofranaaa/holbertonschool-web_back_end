const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim().length);

        if (lines.length <= 1) {
            throw new Error('No student data available');
        }

        const students = lines.slice(1).map((line) => line.split(','));
        const fields = {};
        students.forEach(([firstname, , , field]) => {
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        let result = `Number of students: ${students.length}\n`;

        for (const field in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, field)) {
                result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
        }

        return result.trim(); // Ensure there are no trailing spaces or newlines
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
