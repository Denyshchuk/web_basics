document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('more-info').addEventListener('click', function() {
          alert('Дякуємо за ваш інтерес! Додаткова інформація скоро з\'явиться на сайті.');
      });
  
      const newsItems = document.querySelectorAll('.news-item h3');
      newsItems.forEach(item => {
          item.addEventListener('click', function() {
              const content = this.nextElementSibling;
              if (content.style.display === 'none' || content.style.display === '') {
                  content.style.display = 'block';
              } else {
                  content.style.display = 'none';
              }
          });
      });
  
      const teamItems = document.querySelectorAll('.team-item');
      teamItems.forEach(item => {
          item.addEventListener('mouseover', function() {
              this.style.transform = 'scale(1.1)';
          });
          item.addEventListener('mouseout', function() {
              this.style.transform = 'scale(1)';
          });
      });
  
      document.querySelector('form').addEventListener('submit', function(event) {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          if (name === '' || email === '') {
              alert('Будь ласка, заповніть всі поля форми.');
              event.preventDefault();
          } else {
              alert('Дякуємо за ваш запит!');
          }
      });
  
      document.querySelectorAll('nav ul li a').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              const targetId = this.getAttribute('href').substring(1);
              document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
          });
      });
  });
  