let choice = Number(prompt(
    "ATM Menu\n1. Check Balance\n2. Deposit Money\n3. Withdraw Money\n4. Exit\n\nEnter your choice:"
));

switch (choice) {
    case 1:
        console.log("Your balance is Rs. 5000");
        break;

    case 2:
        console.log("Deposit Money Selected");
        break;

    case 3:
        console.log("Withdraw Money Selected");
        break;

    case 4:
        console.log("Thank you for using our ATM");
        break;

    default:
        console.log("Invalid Choice");
}