const words = ["дешёвый", "безопасный", "надёжный", "простой"];
        let i = 0;
        let j = 0;
        let currentWord = '';
        let isDeleting = false;
        const speed = 150;
        const eraseSpeed = 100;
        const delay = 2000;
        const longDelay = 4000;
        const target = document.getElementById('typewriter');

        function typeEffect() {
            if (!isDeleting && j < words[i].replace(/<[^>]*>/g, '').length) {
                currentWord += words[i].replace(/<[^>]*>/g, '')[j];
                j++;
                if (words[i].includes('vlez') && j === words[i].replace(/<[^>]*>/g, '').length) {
                    target.innerHTML = words[i];
                } else {
                    target.innerHTML = currentWord;
                }
                setTimeout(typeEffect, speed);
            } else if (isDeleting && j > 0) {
                currentWord = currentWord.slice(0, -1);
                j--;
                target.textContent = currentWord;
                setTimeout(typeEffect, eraseSpeed);
            } else if (!isDeleting && j === words[i].replace(/<[^>]*>/g, '').length) {
                isDeleting = true;
                const pause = words[i].includes('vlez') ? longDelay : delay;
                setTimeout(typeEffect, pause);
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                setTimeout(typeEffect, speed);
            }
        }

        typeEffect();
