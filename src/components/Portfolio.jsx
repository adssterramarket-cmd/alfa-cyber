import React, { useState } from 'react';
import { portfolioData, submitContactForm } from '../mockData';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import Spline from '@splinetool/react-spline';
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  Target,
  User,
  Send,
  Info,
  Globe,
  MessageCircle
} from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(contactForm);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <div className="logo-section">
            <Shield className="logo-icon" />
            <span className="logo-text">Alfaz Hossain</span>
          </div>
          <nav className="dark-nav">
            <a href="#about" className="dark-nav-link">About</a>
            <a href="#skills" className="dark-nav-link">Skills</a>
            <a href="#experience" className="dark-nav-link">Experience</a>
            <a href="#projects" className="dark-nav-link">Projects</a>
            <a href="#certifications" className="dark-nav-link">Certifications</a>
            <a href="#contact" className="dark-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <div className="hero-name-section">
                <h1 className="hero-name">{portfolioData.personal.name}</h1>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="personal-info-btn">
                      <Info size={20} />
                      Personal Info
                    </button>
                  </DialogTrigger>
                  <DialogContent className="personal-info-modal">
                    <DialogHeader>
                      <DialogTitle className="modal-title">Personal Information</DialogTitle>
                    </DialogHeader>
                    <div className="personal-info-content">
                      <div className="personal-photo-section">
                        <img 
                          src={portfolioData.personal.photo} 
                          alt="Alfaz Hossain" 
                          className="personal-photo"
                        />
                        <h3 className="personal-name">{portfolioData.personal.name}</h3>
                      </div>
                      <div className="personal-details">
                        <div className="personal-item">
                          <Mail className="personal-icon" />
                          <div>
                            <span className="personal-label">Email</span>
                            <span className="personal-value">{portfolioData.personal.email}</span>
                          </div>
                        </div>
                        <div className="personal-item">
                          <MessageCircle className="personal-icon" />
                          <div>
                            <span className="personal-label">Skype</span>
                            <span className="personal-value">{portfolioData.personal.skype}</span>
                          </div>
                        </div>
                        <div className="personal-item">
                          <MapPin className="personal-icon" />
                          <div>
                            <span className="personal-label">Location</span>
                            <span className="personal-value">{portfolioData.personal.location}</span>
                          </div>
                        </div>
                        <div className="personal-item">
                          <Globe className="personal-icon" />
                          <div>
                            <span className="personal-label">Languages</span>
                            <span className="personal-value">{portfolioData.personal.languages.join(', ')}</span>
                          </div>
                        </div>
                        <div className="personal-item">
                          <Briefcase className="personal-icon" />
                          <div>
                            <span className="personal-label">Availability</span>
                            <span className="personal-value">{portfolioData.personal.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <h2 className="hero-title">{portfolioData.personal.title}</h2>
              <p className="hero-description">{portfolioData.objective}</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">
                  Get In Touch <Send size={20} />
                </a>
                <a href="#projects" className="btn-secondary">
                  View Projects <ExternalLink size={20} />
                </a>
              </div>
              <div className="social-links">
                <a href={portfolioData.personal.socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href={portfolioData.personal.socialLinks.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href={portfolioData.personal.socialLinks.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-content">
          <div className="section-header">
            <User className="section-icon" />
            <h2 className="section-title">Objective</h2>
          </div>
          <div className="about-content">
            <p className="about-text">{portfolioData.objective}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-content">
          <div className="section-header">
            <Target className="section-icon" />
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="skills-grid">
            {portfolioData.skills.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{skillCategory.category}</h3>
                <div className="skill-items">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="section">
        <div className="section-content">
          <div className="section-header">
            <Code className="section-icon" />
            <h2 className="section-title">Technologies</h2>
          </div>
          <div className="technologies-grid">
            {portfolioData.technologies.map((techCategory, index) => (
              <div key={index} className="tech-category">
                <h3 className="tech-category-title">{techCategory.category}</h3>
                <div className="tech-items">
                  {techCategory.items.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-content">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-period">{exp.period}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="section">
  <div className="section-content">
    <div className="section-header">
      <Shield className="section-icon" />
      <h2 className="section-title">Projects</h2>
    </div>
    <div className="projects-grid">
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="project-tech">{tech}</span>
            ))}
          </div>
          <p className="project-impact">{project.impact}</p>

          {/* 🔹 See More button */}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-3 bg-alfaz hover:bg-alfaz/80 text-black font-semibold px-4 py-2 rounded transition"
          >
            See More
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Certifications Section */}
<section id="certifications" className="section">
  <div className="section-content">
    <div className="section-header">
      <Award className="section-icon" />
      <h2 className="section-title">Certifications</h2>
    </div>
    <div className="certifications-grid">
      {portfolioData.certifications.map((cert, index) => (
        <div key={index} className="certification-card">
          <div className="cert-icon">
            <Award size={32} />
          </div>
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
          <p className="cert-year">{cert.year}</p>
          <p className="cert-id">ID: {cert.credentialId}</p>

          {/* See More Button with Popup */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="see-more-btn mt-2 px-3 py-1 bg-blue-400 text-white text-sm rounded hover:bg-blue-700">
                See More
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{cert.name}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-64 h-auto rounded border"
                />
                <p className="text-sm text-gray-600">
                  Issued by: {cert.issuer} ({cert.year})
                </p>
                <p className="text-xs text-gray-500">
                  Credential ID: {cert.credentialId}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <div className="section-header">
            <Mail className="section-icon" />
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>{portfolioData.personal.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary form-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Alfaz Hossain. All rights reserved.</p>
          <div className="footer-social">
            <a href={portfolioData.personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.personal.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href={portfolioData.personal.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
};

export default Portfolio;
