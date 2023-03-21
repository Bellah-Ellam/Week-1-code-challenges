function myGrading() {
    // Get the input values
    const score1 = parseFloat(document.getElementById("score1").value);
    const score2 = parseFloat(document.getElementById("score2").value);

    if (score1 > 100 || score2 > 100) {
        alert('Enter correct number');
        return; // to prevent unwanted values and exit the function
    }

    let grade = ""; // declare and assign default value

    // Assign the grade based on the average score
    // Calculate the average score
    const average = (score1 + score2) / 2;
    
    if (average > 79) {
        grade = "A";
    } else if (average >= 60 && average <= 79) {
        grade = "B";
    } else if (average >= 50 && average <= 59) {
        grade = "C";
    } else if (average >= 40 && average <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Display the result
    document.getElementById("showdata").innerHTML = `Your grade is ${grade}`;
}