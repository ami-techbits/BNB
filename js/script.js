document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal Effect
    const sections = document.querySelectorAll(".fade-in");
    
    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load

    // Parallax Effect for Hero Image
    const hero = document.querySelector(".about-hero img");
    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY / 3;
        hero.style.transform = `translateY(${scrollValue}px)`;
    });

    // Counter Animation for Achievements
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Speed of animation

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger counters when in view
    const counterSection = document.querySelector(".about-growth");
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect(); // Stop observing after triggering animation once
        }
    }, { threshold: 0.5 });

    observer.observe(counterSection);
});



const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });