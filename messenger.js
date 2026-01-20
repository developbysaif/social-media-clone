function sendMessage() {
    const input = document.getElementById("msgInput");
    const chatBox = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    const msg = document.createElement("div");
    msg.className = "message sent";
    msg.textContent = input.value;

    chatBox.appendChild(msg);
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
