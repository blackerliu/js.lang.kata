function object(o) {

	function F() { }

	F.prototype = o;

	return new F();
}

var Chinese = {
	nation: "Ch",
}

var Doctor = object(Chinese);

Doctor.Career = "Doc";
