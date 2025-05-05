// Function to track live train status
function trackTrain() {
    const trainNumber = document.getElementById("train-number").value;
    const trainName = document.getElementById("train-name").value;
    if (trainNumber || trainName) {
        alert(`Fetching live status for Train: ${trainName || trainNumber}`);
        // Add logic to fetch live train status here
    } else {
        alert("Please enter a train number or name.");
    }
}
 
// Function to check ticket confirmation probability
function checkTicketProbability() {
    const trainNumber = document.getElementById("prob-train-number").value;
    const date = document.getElementById("prob-date").value;
    if (trainNumber && date) {
        alert(`Checking ticket confirmation probability for Train Number: ${trainNumber} on ${date}`);
        // Add logic to calculate ticket confirmation probability here
    } else {
        alert("Please enter both train number and date.");
    }
}
