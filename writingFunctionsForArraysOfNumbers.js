var jennysNumber = [8, 6, 7, 5, 13, 0, 9];

biggestNumberInArray();
averageOfNumbersInArray();

function biggestNumberInArray(arrayToCheck) {
	var bigNum = jennysNumber[0];
	for (var counter = 1; counter < jennysNumber.length; counter++) {
		if (jennysNumber[counter] > bigNum) {
			bigNum = jennysNumber[counter];
		} else {
		    bigNum = bigNum;
		}
	}
	console.log(bigNum);
}


function averageOfNumbersInArray(arrayToCheck) {
	var avgNum = jennysNumber[0];
	for (var counter = 1; counter < jennysNumber.length; counter++) {
	  avgNum = avgNum + jennysNumber[counter];
	}
    avgNum = (avgNum / jennysNumber.length).toFixed(2);
    console.log(avgNum);
}
