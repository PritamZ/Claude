// scripts.js

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    let valid = true;
    const email = form.querySelector('input[type="email"]').value;
    const name = form.querySelector('input[name="name"]').value;
    
    if (!email || !email.includes('@')) {
        valid = false;
        alert('Invalid email!');
    }
    if (!name) {
        valid = false;
        alert('Name is required!');
    }
    
    if (!valid) {
        e.preventDefault();
    }
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href*="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animated Counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Notification System
const notifyBtn = document.getElementById('notify-btn');
const notification = document.getElementById('notification');

notifyBtn.addEventListener('click', () => {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});