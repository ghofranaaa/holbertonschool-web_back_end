import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(req, res) {
        const databasePath = process.argv[2];

        readDatabase(databasePath)
            .then((fields) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('This is the list of our students\n');
                const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
                sortedFields.forEach((field) => {
                    res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
                });
                res.end();
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const databasePath = process.argv[2];

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(databasePath)
            .then((fields) => {
                if (fields[major]) {
                    res.status(200).send(`List: ${fields[major].join(', ')}`);
                } else {
                    res.status(500).send('Cannot load the database');
                }
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }
}

export default StudentsController;
