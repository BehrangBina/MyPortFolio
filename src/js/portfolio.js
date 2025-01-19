let myArray = [  "Developer", "Automation Engineer", "Photographer" , "Musician", "Sience Lover"];
document.addEventListener("DOMContentLoaded", function() {
    var span = document.querySelector('.typed');
    var index = 0;

    function updateText() {
        span.textContent = myArray[index];
        index = (index + 1) % myArray.length;
    }

    updateText(); // Initial call to set the first value
    setInterval(updateText, 1700); // Update every 2 seconds
});
document.addEventListener("DOMContentLoaded", function() {
     
    var element = document.getElementById('name');
    var text = element.textContent;
    element.textContent = '';
    var index = 0;

    function typeLetter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Adjust the speed by changing the timeout value
        }
    }

    typeLetter(); // Initial call to start typing
});
document.addEventListener("DOMContentLoaded", function() {
    var progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(progressBar) {
        var targetWidth = parseFloat(progressBar.getAttribute('data-width')); // Convert the data-width attribute to a number
        progressBar.style.width = '0%';
        var currentWidth = 0;
        var interval = 10; // Interval in milliseconds
        var duration = 1000; // Duration of the animation in milliseconds
        var step = targetWidth / (duration / interval); // Step size for each interval

        setTimeout(function() {
            var intervalId = setInterval(function() {
                currentWidth += step;
                progressBar.style.width = currentWidth + '%';

                if (currentWidth >= targetWidth) {
                    clearInterval(intervalId);
                    progressBar.style.width = targetWidth + '%'; // Ensure it reaches the exact target width
                }
            }, interval);
        }, 100); // Adjust the delay before the animation starts
    });
});
