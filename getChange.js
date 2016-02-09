//cents must be a whole number
//if you have $4.58, cents will be 458

function getChange (cents) {
	var bill = 0;
	var quar = 0;
	var dim = 0;
	var nic = 0;

	while (cents>=100) {
		bill++;
		cents-=100;
	}
	while (cents>=25) {
		quar++;
		cents-=25;
	}
	while (cents>=10) {
		dim++;
		cents-=10;
		}
	while (cents>=5) {
		nic++;
		cents-=5;
	}
	console.log ("Bills: " + bill + " Quarters: " + quar + " Dimes: " + dim + " Nickles: " + nic + " Pennies: " + cents);
}
getChange(377);