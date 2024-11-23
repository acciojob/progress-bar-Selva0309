//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentCircle = 0;

        nextButton.addEventListener('click', function() {
            if (currentCircle < circles.length - 1) {
                circles[currentCircle].classList.add('active');
                currentCircle++;
                circles[currentCircle].classList.add('active');
                prevButton.disabled = false;
                if (currentCircle === circles.length - 1) {
                    nextButton.disabled = true;
                }
            }
        });

        prevButton.addEventListener('click', function() {
            if (currentCircle > 0) {
                circles[currentCircle].classList.remove('active');
                currentCircle--;
                circles[currentCircle].classList.add('active');
                nextButton.disabled = false;
                if (currentCircle === 0) {
                    prevButton.disabled = true;
                }
            }
        });