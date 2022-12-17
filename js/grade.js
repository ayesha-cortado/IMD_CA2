document.getElementById('module-select').addEventListener('change', displayGrades);

function displayGrades() {
  var selectedModule = this.value;
  var gradeDisplay = document.getElementById('grade-display');
  if (selectedModule === 'Module 1') {
    gradeDisplay.innerHTML = '<h3>Module 1 Grades</h3><p>Grade 1: A</p><p>Grade 2: B</p><p>Grade 3: C</p>';
  } else if (selectedModule === 'Module 2') {
    gradeDisplay.innerHTML = '<h3>Module 2 Grades</h3><p>Grade 1: D</p><p>Grade 2: E</p><p>Grade 3: F</p>';
  } else if (selectedModule === 'Module 3') {
    gradeDisplay.innerHTML = '<h3>Module 3 Grades</h3><p>Grade 1: G</p><p>Grade 2: H</p><p>Grade 3: I</p>';
  }
}
