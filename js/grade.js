document.getElementById('module-select').addEventListener('change', displayGrades);

function displayGrades() {
  var selectedModule = this.value;
  var gradeDisplay = document.getElementById('grade-display');
  if (selectedModule === 'Maths') {
    gradeDisplay.innerHTML = '<h3>Computing Maths Grades</h3><p>Year 1: A</p><p>Year 2: A</p><p>Year 3: A</p>';
  } else if (selectedModule === 'German') {
    gradeDisplay.innerHTML = '<h3>German Grades</h3><p>Year 1: A</p><p>Year 2: B+</p><p>Year 3: B</p>';
  } else if (selectedModule === 'Software Development') {
    gradeDisplay.innerHTML = '<h3>Software Development Grades</h3><p>Year 1: C+</p><p>Year 2: B+</p><p>Year 3: C</p>';
  }
}
