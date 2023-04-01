
function roadRadar(speed, area) {
  let motorwayLimit = 130;
  let interstateLimit = 90;
  let cityLimit = 50;
  let residentialAreaLimit = 20;
  let withinLimit = true;
  let difference;
  let zoneLimit;
  switch (area) {
    case "motorway":
      zoneLimit = motorwayLimit;
      if (motorwayLimit < speed) {
        withinLimit = false;
        difference = Math.abs(motorwayLimit - speed);
      }
      break;
    case "interstate":
      zoneLimit = interstateLimit;
      if (interstateLimit < speed) {
        withinLimit = false;
        difference = Math.abs(interstateLimit - speed);
      }
      break;
    case "city":
      zoneLimit = cityLimit;
      if (cityLimit < speed) {
        withinLimit = false;
        difference = Math.abs(cityLimit - speed);
      }
      break;
    case "residential":
      zoneLimit = residentialAreaLimit;
      if (residentialAreaLimit < speed) {
        withinLimit = false;
        difference = Math.abs(residentialAreaLimit - speed);
      }
      break;
  }

  if (withinLimit) {
    console.log(`Driving ${speed} km/h in a ${zoneLimit} zone`);
  } else {
    let status;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${zoneLimit} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, 'motorway');
roadRadar(160, "interstate");
