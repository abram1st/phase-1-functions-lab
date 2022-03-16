function distanceFromHqInBlocks(p1) {
    if (p1 > 42)
        return p1 - 42
    else (p1 < 42)
        return 42 - p1
  }
  function distanceFromHqInFeet(feet2) {
    if (feet2 > 42)
        return ((feet2 - 42) * 264)
    else (feet2 < 42)
        return((42 - feet2)* 264)
  }

  function distanceTravelledInFeet(start1, destination1) {
    if (start1 > destination1)
        return ((start1 - destination1) * 264)
    else (start1 < destination1)
        return ((destination1 - start1)* 264)
  }

  function calculatesFarePrice(start2, destination2) {
    let blockDistance = Math.abs(start2 - destination2);
    let distanceTravel = blockDistance * 264;
        if (distanceTravel < 400){
        console.log('give customers a free sample');
            return 0
        }
        else if (distanceTravel >= 2500)
            return 'cannot travel that far'
        else if (2000 <= distanceTravel && distanceTravel < 2500)
            return 25
        else if (400 < distanceTravel && distanceTravel < 2000) {
            let rideCost = (0.02 * (distanceTravel - 400))
            return rideCost
        }
  }
