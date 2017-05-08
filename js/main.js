var input,
	active = false,
	regexOperators = new RegExp(/[^a-zA-Z\d\s:]/g),
	number = function(num){
		input = active ? "0" : document.getElementById('input').value;
		var count = regexCheck(input);
		if(num == "."){
			if(input.slice(-1) == "."){
				return;
			}
		}

		if(operatorCheck(input)){
			if(input != "0"){
				document.getElementById('input').value = input + " " + num;
			} else {
				document.getElementById('input').value = num;
			}
		} else {
			if(input != "0"){
				document.getElementById('input').value = input + num;
			} else {
				document.getElementById('input').value = num;
			}
		}
	},
	addition = function(){
		input = document.getElementById('input').value;
		var count = regexCheck(input);
		if(count < 1){
			if(active){
				active = false; 
			}

			if(input.slice(-1) == "-" || input.slice(-1) == "/" || input.slice(-1) == "*"){
				if(input.slice(-1) != "+"){
					return document.getElementById('input').value = input.slice(0,input.length - 1) + "+"; 
				} 
			}

			if(input.slice(-1) != "+"){
				return document.getElementById('input').value = input + " +"; 
			}
		} else{
			equals();
			active = false;
			return document.getElementById('input').value = input + " +"; 
		}
		return;
	},
	subtraction = function(){
		input = document.getElementById('input').value;
		var count = regexCheck(input);
		if(count < 1){
			if(active){
				active = false; 
			}

			if(input.slice(-1) == "+" || input.slice(-1) == "/" || input.slice(-1) == "*"){
				if(input.slice(-1) != "-"){
					return document.getElementById('input').value = input.slice(0,input.length - 1) + "-"; 
				} 
			}

			if(input.slice(-1) != "-"){
				return document.getElementById('input').value = input + " -"; 
			}
		}  else{
			equals();
			active = false;
			return document.getElementById('input').value = input + " -"; 
		}
		return;
	},
	multiplication = function(){
		input = document.getElementById('input').value;
		var count = regexCheck(input);
		if(count < 1){
			if(active){
				active = false; 
			}

			if(input.slice(-1) == "-" || input.slice(-1) == "/" || input.slice(-1) == "+"){
				if(input.slice(-1) != "*"){
					return document.getElementById('input').value = input.slice(0,input.length - 1) + "*"; 
				} 
			}

			if(input.slice(-1) != "*"){
				return document.getElementById('input').value = input + " *"; 
			}
		}  else{
			equals();
			active = false;
			return document.getElementById('input').value = input + " *"; 
		}
		return;
	},
	division = function(){
		input = document.getElementById('input').value;
		var count = regexCheck(input);
		if(count < 1){
			if(active){
				active = false; 
			}

			if(input.slice(-1) == "-" || input.slice(-1) == "+" || input.slice(-1) == "*"){
				if(input.slice(-1) != "/"){
					return document.getElementById('input').value = input.slice(0,input.length - 1) + "/"; 
				} 
			}

			if(input.slice(-1) != "/"){
				return document.getElementById('input').value = input + " /"; 
			}
		}  else{
			equals();
			active = false;
			return document.getElementById('input').value = input + " /"; 
		}
		return;
	},
	equals = function() {
		active = true;
		input = eval(document.getElementById("input").value);
		return document.getElementById("input").value = input;
	},
	clearNumbers = function(){
		document.getElementById("input").value = 0;
	},
	operatorCheck = function(inputValue){
		console.log(inputValue)
		active = false;

		if(inputValue.slice(-1) == "-" || inputValue.slice(-1) == "+" || inputValue.slice(-1) == "*" || inputValue.slice(-1) == "/"){
			return true;
		} else {
			return false;
		}
	},
	regexCheck = function(inputValue){
		var splitString = inputValue.split(''),
			i = 0;
		splitString.forEach(function(e){
			if(regexOperators.test(e)){
				i++;
			}
		});
		return i;
	}; 