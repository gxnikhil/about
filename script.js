// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0
    });
    gsap.to(follower, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3
    });
});

// GSAP Register
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from('.hero-bg', {
    scale: 1.5,
    duration: 2,
    ease: 'power3.out'
});

gsap.from('.hero h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'power4.out',
    skewY: 10
});

gsap.from('.hero-subtext', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: 'power3.out'
});

// Reveal Sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section.querySelectorAll('.section-title, p, .skill-card, .project-item, .gallery-item'), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
});

// Parallax Image
gsap.to('.parallax-img', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Magnetic effect for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = link.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        
        gsap.to(link, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.3
        });
    });
});
