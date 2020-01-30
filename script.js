var objPeople = [
	{ // Object @ 0 index
		username: "media",
		password: "codify"
	},
	{ // Object @ 1 index
		username: "groire",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "boazi",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('form-username').value
	var password = document.getElementById('form-password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}