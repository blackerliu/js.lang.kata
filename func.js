function printprop(o){
	for(var p in arguments){
		print(p + ": " + arguments[p] + "\n");
	}
	print(arguments.callee)
}

printprop(this,this,"hello");
printprop(1,2,3);
print(this)
