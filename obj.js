   　　var Animal = {

    　　　　createNew: function(){

    　　　　　　var animal = {};

    　　　　　　animal.sleep = function(){ alert("睡懒觉"); };

    　　　　　　return animal;

    　　　　}

    　　};


    　　var Cat = {

			sound : "喵喵喵",
    　　　　createNew: function(){

    　　　　　　var cat = Animal.createNew();


    　　　　　　cat.name = "大毛";

    　　　　　　cat.makeSound = function(){ alert(Cat.sound); };
				cat.changeSound = function(x){ Cat.sound = x;}

    　　　　　　return cat;

    　　　　}

    　　};


