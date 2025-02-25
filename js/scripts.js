// ini Javascripts External

        let index = 0;
        function autoSlide() {
            const slider = document.getElementById("slider");
            index++;
            if (index > 2) {
                index = 0;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(autoSlide, 3000);