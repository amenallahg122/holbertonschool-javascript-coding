const fs = require('fs');

function countStudents(path) {
  try {
    const result = fs.readFileSync(path, 'utf8');
    const count = result.split('\n').length - 1;
    console.log(`Number of students: ${count}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;