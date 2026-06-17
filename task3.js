let grade = prompt("Enter your grade (A, B, C, D, F):");

switch (grade.toUpperCase()) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "D":
        console.log("Needs Improvement");
        break;

    case "F":
        console.log("Failed");
        break;

    default:
        console.log("Invalid Grade");
}