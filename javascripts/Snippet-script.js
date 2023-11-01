// the script for code snippets -----------------------------------------
var copyButtons = document.querySelectorAll(".copy-code");

copyButtons.forEach(function (copyButton, index) {
    copyButton.addEventListener("click", function () {
        var codeBlocks = document.querySelectorAll(".code-block");
        var code = codeBlocks[index].textContent;
        navigator.clipboard.writeText(code).then(function () {
            // Code successfully copied
            copyButton.textContent = "Copied!";
        }).catch(function (error) {
            // Handle clipboard write error
            console.error("Error copying code: " + error);
        });

        // Reset the button text after 3 seconds
        setTimeout(function () {
            copyButton.textContent = "Copy";
        }, 2000); // 2000 milliseconds = 2 seconds
    });
});