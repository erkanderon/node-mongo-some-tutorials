var argv = require('yargs')
			.usage('Usage: node $0 --l=[num] --b=[num]')
			.demand(['l','b'])
			.argv;

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

solveRect(argv.l, argv.b);