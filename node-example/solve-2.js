var rect = require('./rectangle2');

function solveRect(l , b){

	console.log("Solving the rectange with l = "+l+" and b = "+b);

	rect(l, b , function(err,rectangle){

		if(err){
			console.log(err);
		}else{
			console.log("The area of the rectangle of dimensions length = "+l+" and breadth = "+b+ " is " + rectangle.area(l,b));
			console.log("The perimeter of the rectangle of dimensions length = "+l+" and breadth = "+b+ " is " + rectangle.perimeter(l,b));
		}
	})
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);