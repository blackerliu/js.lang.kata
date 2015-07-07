Number.prototype.add = function (x) {
	  return this + x;
};

Number.prototype.subtract = function (x) {
	  return this - x;
};


Number.prototype.iterate = function () {
	  var result = [];
	    for (var i = 0; i <= this; i++) {
			    result.push(i);
				  }
		  return result;
};


Number.prototype = Object.defineProperty(
		  Number.prototype, "double", {
		      get: function (){return (this + this)} 
			    }
		);

Number.prototype =  Object.defineProperty(
		  Number.prototype, "square", {
		      get: function (){return (this * this)} 
			    }
		);

print("8+2: " + (8).add(2))
print("array :" + (8).iterate())
print("8^2*2: " + (8).square.double)
print("(8*2)^2: " + (8).double.square)
