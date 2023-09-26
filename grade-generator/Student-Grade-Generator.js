function calculateGrade() {
    try {
        // Prompt the user for to input marks
        let marks = parseFloat(prompt("Enter the student's marks (0-100):"));

        // valiator checking if values are within the range
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade;

       // if marks is greater than 79 student gets an A
            if (marks > 79) {
                grade = 'A';

                // if marks is greater 60 but less than 79 student gets a B
            } else if (marks >= 60 && marks <= 79) {
                grade = 'B';

                // if marks is greater than 50 but less than 59 student gets a C
            } else if (marks >= 50 && marks <= 59) {
                grade = 'C';

                // if marks is greater than 40 but less than 49 student gets a D
            } else if (marks >= 40 && marks <= 49) {
                grade = 'D';
                
                // if marks is less than 40 student gets an E
            } else {
                grade = 'E';
            }

            alert(`Grade: ${grade}`);
        } else {
            alert("Marks should be between 0 and 100.");
        }
    } catch (error) {
        alert("Invalid input. Please enter a valid number between 0 and 100.");
    }
}

// Call for the function to calculate the grade
calculateGrade();

