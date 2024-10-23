document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll("section h2"); // Select all h2 in sections

    // Function to perform the typing animation on each h2
    function typeWriter(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);  // Add one letter at a time
            index++;
            setTimeout(() => typeWriter(element, text, index), 100);  // Control typing speed
        } else {
            element.style.borderRight = 'none';  // Remove blinking cursor once typing completes
        }
    }

    // Loop through each h2 and start the typing animation
    headings.forEach(h2 => {
        const text = h2.innerHTML;  // Store original text
        h2.innerHTML = "";  // Clear current content
        typeWriter(h2, text);  // Start typing animation
    });
});


function convertToOctal() {
    const decimal = document.getElementById('decimal-input').value;
    const octal = Number(decimal).toString(8);
    document.getElementById('result').innerText = `Octal: ${octal}`;
}
document.getElementById('decimal-input').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    event.preventDefault();  // Prevent form submission
    convertToOctal();  // Call the conversion function
}
});


function convertToBinary() {
    const decimal = document.getElementById('decimal-input').value;
    const binary = Number(decimal).toString(2);
    document.getElementById('result').innerText = `Binary: ${binary}`;
}
document.getElementById('decimal-input').addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    event.preventDefault();  // Prevent form submission
    convertToBinary();  // Call the conversion function
}
});



