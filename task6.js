let choice = Number(prompt(
    "Restaurant Menu\n1. Burger\n2. Pizza\n3. Shawarma\n4. Biryani\n\nEnter your choice:"
));

switch (choice) {
    case 1:
        console.log("Burger - Rs. 350");
        break;

    case 2:
        console.log("Pizza - Rs. 1200");
        break;

    case 3:
        console.log("Shawarma - Rs. 250");
        break;

    case 4:
        console.log("Biryani - Rs. 400");
        break;

    default:
        console.log("Invalid Choice");
}