function calculateDemeritPoints(speed) {
    
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
      if (demeritPoints <= 12) {
        console.log(`Points: ${demeritPoints}`);
      } else {
        console.log("License suspended");
      }
    }
  }
  const carSpeed = parseFloat(prompt("Enter the car's speed (in km/h):"));
  
  if (!isNaN(carSpeed)) {
    calculateDemeritPoints(carSpeed);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }
  
 
 
  
  
  
  
  