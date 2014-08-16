/*jslint node: true */
'use strict';
 
module.exports = {
	goto: function (currentFloor, nextFloor){

		if (currentFloor < 4) {

			if (parseInt(nextFloor) < 4) {

			var newDestination = parseInt(nextFloor) - currentFloor;
	 
			return parseInt(newDestination);

			} else {

				return 0

			}

		} else {

			return 0

		}

	}

};
