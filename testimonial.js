const testimonialsData = [
  {
    img: "./assets/images/avatar-1.png",
    name: "Mr. Sachine Londhe",
    alt: "Mr. Sachine Londhe",
    desc: "Click Laundry has transformed into a seamless and efficient service thanks to their web and app development. The digital marketing strategies they implemented skyrocketed our customer base. Truly impressed by their expertise!",
  },
  {
    img: "./assets/images/avatar-2.png",
    name: "Mr. Jaivel",
    alt: "Mr. Jaivel",
    desc: "Their dedication to building a robust web and app solution for Tech Empight exceeded our expectations. The interface is intuitive, and the performance is outstanding. Highly recommend their services!",
  },
  {
    img: "./assets/images/avatar-3.png",
    name: "Mr. Karthick",
    alt: "Mr. Karthick",
    desc: "The website they developed for Our Life is visually stunning and user-friendly. Their attention to detail and creative approach brought our vision to life perfectly.",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Ashok Kumar",
    alt: "Mr. Ashok Kumar",
    desc: "Boss Go Run’s website is now a vibrant and engaging platform, thanks to their exceptional work. The team was professional, timely, and went above and beyond to meet our needs.",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Murali",
    alt: "Henry william",
    desc: "Their poster designs for our brands were absolutely stunning and captured our message perfectly. The creativity and precision they brought to the project were unmatched!",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Milton Raja",
    alt: "Henry william",
    desc: "The poster design for Dremerz was eye-catching and dynamic. It perfectly captured the brand's energy, and we received positive feedback from our audience. The team's creativity truly brought our vision to life!",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Surya Kumar",
    alt: "Henry william",
    desc: "We loved the poster design for Mymazuma. It was professional, modern, and aligned perfectly with our branding. The design stood out in our marketing campaigns, helping us make a lasting impression",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Arun Kumar",
    alt: "Henry william",
    desc: "The posters designed for Gamejet were vibrant and engaging. The design team understood our target audience and created visuals that resonated well with gamers. A truly impactful design experience!",
  },
  {
    img: "./assets/images/avatar-4.png",
    name: "Mr. Jason",
    alt: "Henry william",
    desc: "The poster design for Dremerz was eye-catching and dynamic. It perfectly captured the brand's energy, and we received positive feedback from our audience. The team's creativity truly brought our vision to life!",
  },
];

function generateTestimonialHTML({ img, name, alt, desc }) {
  return `
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img src="${img}" alt="${alt}" width="60" data-testimonials-avatar />
          </figure>
          <h3 class="h4 testimonials-item-title" data-testimonials-title>
            ${name} 
          </h3>
          <div class="testimonials-text" data-testimonials-text>
            <p>${desc}</p>
          </div>
        </div>
      </li>
    `;
}

function renderTestimonials() {
  const testimonialsList = document.getElementById("testimonials-list");
  testimonialsData.forEach((testimonial) => {
    const testimonialHTML = generateTestimonialHTML(testimonial);
    testimonialsList.innerHTML += testimonialHTML;
  });
}

// Call the renderTestimonials function to load the testimonials
renderTestimonials();
