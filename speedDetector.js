function checkSpeed(event) {
    event.preventDefault(); // prevent form submission
    const speedInput = document.getElementById("speed");
    const speed = parseInt(speedInput.value);
    const output = document.getElementById("output");

    if (speed <= 70) {
        output.classList.remove("error");
        output.textContent = "Ok";
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints >= 12) {
            output.classList.add("error");
            output.textContent = "License suspended";
        } else {
            output.classList.remove("error");
            output.textContent = "Points: " + demeritPoints;
        }
    }
}