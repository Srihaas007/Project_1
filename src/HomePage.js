import React from 'react';

const HomePage = () => (
  <div className="home-container">
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    {/* Welcome Section */}
    <section className="hero-section">
      
      <div className="hero-text">
      
        <h1>Welcome to Project_1</h1>
        <p>
          Project_1 is dedicated to pioneering the next generation of chatbot solutions powered by LLaMA 3, an advanced open-source language model developed by Facebook. We specialize in integrating cutting-edge natural language processing (NLP) technologies into Retrieval-Augmented Generation (RAG) pipelines, enabling our chatbots to deliver intelligent and context-aware responses.
        </p>
        <p>
          Founded by a passionate team of three recent graduates in Computer Science, Project_1 embodies our collective enthusiasm for cutting-edge technology and its transformative potential. What began as a shared interest in artificial intelligence and natural language processing has evolved into a mission to revolutionize digital interactions through innovative chatbot solutions.
        </p>
        <a href="#about-us" className="read-more-btn">Read More</a>
      </div>
    </section>
    
    {/* About Us Section */}
    <section id="about-us" className="about-us-section">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We are a team of three recent graduates in Computer Science with a shared passion for artificial intelligence and natural language processing. Our journey began during our bachelor's program, where we explored various technologies and developed a keen interest in creating intelligent solutions using advanced NLP models like LLaMA 3.
        </p>
        <p>
          At Project_1, we combine our academic knowledge with practical skills to innovate and deliver cutting-edge chatbot solutions. Our goal is to transform digital interactions by integrating sophisticated technologies into our projects.
        </p>
      </div>
    </section>
    
    {/* Our Approach Section */}
    <section className="approach-section">
      <div className="approach-text">
        <h2>Our Approach</h2>
        <p>
          At Project_1, our approach revolves around leveraging the power of LLaMA 3 for natural language processing. We integrate this advanced model into Retrieval-Augmented Generation (RAG) pipelines to enhance our chatbots' ability to understand and respond contextually. This approach ensures that our solutions are not only intelligent but also adaptive and responsive to user needs.
        </p>
      </div>
    </section>
    
    {/* Technological Stack Section */}
    <section className="technology-stack">
      <div className="stack-text">
        <h2>Technology Stack</h2>
        <ul>
          <li>LLaMA 3 (Facebook's open-source language model)</li>
          <li>React for front-end development</li>
          <li>React Native for mobile app development</li>
          <li>Node.js and Express for backend development</li>
          <li>AWS for hosting and infrastructure</li>
          <li>Git for version control and collaboration</li>
        </ul>
      </div>
    </section>
    
    {/* Why Choose Us Section */}
    <section className="why-choose-us">
      <div className="choose-us-text">
        <h2>Why Choose Us?</h2>
        <p>
          Project_1 stands out because of our commitment to innovation and quality. By leveraging state-of-the-art technologies like LLaMA 3 and AWS, we ensure that our chatbot solutions are scalable, reliable, and capable of delivering superior performance. Our team's dedication to pushing the boundaries of what's possible in AI-driven applications makes us the ideal choice for your next project.
        </p>
      </div>
    </section>
    
    {/* Get Started Section */}
    <section className="get-started">
      <div className="started-text">
        <h2>Get Started</h2>
        <p>
          Ready to transform your digital interactions with our advanced chatbot solutions? Contact us today to discuss your project requirements or schedule a demo. Let Project_1 empower your business with cutting-edge technology and personalized support.
        </p>
      </div>
    </section>
    
    {/* Contact Us Section */}
    <section className="contact-section">
      <div className="contact-text">
        <h2>Contact Us</h2>
        <p>For inquiries or collaborations, please contact us at:</p>
        <p>Email: contact@project1.com</p>
        <p>Phone: +44 7788760133</p>
      </div>
    </section>
  </div>
);

export default HomePage;
