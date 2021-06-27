const input = document.getElementById("userInput");
const sendButton = document.getElementById("addButton");
const listToAppend = document.getElementById("task-wrapper");

sendButton.addEventListener("click", () => {
	const userIn = input.value;
	if (userIn === null || userIn === "") return;
	const div = document.createElement("div");
	const h1 = document.createElement("h1");
	const h1Text = document.createTextNode(userIn);
	const removeButton = document.createElement("button");
	const removeButtonText = document.createTextNode("X");
	removeButton.appendChild(removeButtonText);
	h1.appendChild(h1Text);
	div.appendChild(h1);
	div.appendChild(removeButton);
	div.classList.add("task");
	listToAppend.appendChild(div);
	input.value = "";
	removeButton.addEventListener("click", () => {
		listToAppend.removeChild(div);
	});
});
