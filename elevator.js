/*jslint node: true */
'use strict';
 
module.exports = {
	goto: function (currentFloor, nextFloor){
		
		var newDestination = parseInt(nextFloor) - currentFloor;
 
		return parseInt(newDestination);

	}

};
