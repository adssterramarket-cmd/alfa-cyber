// Mock data for Alfaz Hossain's Cybersecurity Portfolio

export const portfolioData = {
  personal: {
    name: "Alfaz Hossain",
    title: "Cybersecurity Expert | Ethical Hacker | Red Team Specialist",
    email: "teamalfasec@gmail.com",
    phone: "+1880",
    location: "Noakhali, Bangladesh",
    skype: "askiceman9",
    languages: ["English", "Bengali", "Hindi"],
    availability: "Available for freelance & full-time opportunities",
    photo: "https://e.top4top.io/p_35462k47t1.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ALFAZHOSSAIN",
      github: "https://github.com/ALFAZHOSSAIN",
      twitter: "https://twitter.com/ALFAZHOSSAIN"
    }
  },
  
  objective: "Dedicated cybersecurity professional with 5+ years of experience in penetration testing, vulnerability assessment, and red team operations. Passionate about protecting organizations from cyber threats through ethical hacking, security audits, and implementing robust defense strategies.",
  
  skills: [
    { category: "Penetration Testing", items: ["Web Application Testing", "Network Penetration Testing", "Wireless Security Testing", "Social Engineering"] },
    { category: "Vulnerability Assessment", items: ["OWASP Top 10", "CVE Analysis", "Risk Assessment", "Security Auditing"] },
    { category: "Red Team Operations", items: ["Advanced Persistent Threats", "Lateral Movement", "Privilege Escalation", "Command & Control"] },
    { category: "Forensics & Analysis", items: ["Digital Forensics", "Malware Analysis", "Incident Response", "Log Analysis"] }
  ],
  
  technologies: [
    { category: "Security Tools", items: ["Burp Suite", "Metasploit", "Nmap", "Wireshark", "Kali Linux", "OWASP ZAP"] },
    { category: "Programming", items: ["Python", "Bash", "PowerShell", "JavaScript", "SQL", "C++"] },
    { category: "Frameworks", items: ["NIST Cybersecurity Framework", "ISO 27001", "OWASP", "SANS"] },
    { category: "Cloud Security", items: ["AWS Security", "Azure Security", "Cloud Pen Testing", "Container Security"] }
  ],
  
  experience: [
    {
      title: "Senior Cybersecurity Analyst",
      company: "CyberDefense Solutions",
      period: "2022 - Present",
      description: "Lead red team operations, conduct advanced penetration testing, and develop security strategies for Fortune 500 clients."
    },
    {
      title: "Penetration Tester",
      company: "SecureIT Consulting",
      period: "2020 - 2022",
      description: "Performed comprehensive security assessments, vulnerability testing, and provided detailed remediation recommendations."
    },
    {
      title: "Junior Security Analyst",
      company: "TechGuard Inc.",
      period: "2019 - 2020",
      description: "Monitored security incidents, analyzed threats, and supported incident response activities."
    }
  ],
  
  projects: [
    {
      title: "Enterprise Network Penetration Testing",
      description: "Conducted comprehensive penetration testing for a multinational corporation, identifying 15+ critical vulnerabilities and providing detailed remediation strategies.",
      technologies: ["Metasploit", "Nmap", "Burp Suite", "Python"],
      impact: "Prevented potential $2M+ in security breaches"
    },
    {
      title: "Web Application Security Assessment",
      description: "Performed security testing on critical web applications, discovering SQL injection and XSS vulnerabilities affecting 50,000+ users.",
      technologies: ["OWASP ZAP", "Burp Suite", "JavaScript", "SQL"],
      impact: "Enhanced security for 50,000+ active users"
    },
    {
      title: "Red Team Simulation Exercise",
      description: "Led a full-scale red team exercise simulating advanced persistent threats, testing organization's detection and response capabilities.",
      technologies: ["Cobalt Strike", "PowerShell", "Kali Linux", "Social Engineering"],
      impact: "Improved incident response time by 60%"
    },
    {
      title: "Cloud Security Architecture Review",
      description: "Assessed cloud infrastructure security posture and implemented comprehensive security controls and monitoring solutions.",
      technologies: ["AWS Security Hub", "CloudTrail", "Python", "Terraform"],
      impact: "Achieved 99.9% security compliance rating"
    }
  ],
  
  certifications: [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: "2023",
      credentialId: "ECC-CEH-2023-12345",
      image: "/certifications/ceh.jpg"
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      year: "2022",
      credentialId: "OS-OSCP-2022-67890",
      image: "/certifications/oscp.jpg"
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "(ISC)²",
      year: "2023",
      credentialId: "ISC2-CISSP-2023-11111",
      image: "/certifications/cissp.jpg"
    },
    {
      name: "GIAC Penetration Tester (GPEN)",
      issuer: "SANS Institute",
      year: "2022",
      credentialId: "GIAC-GPEN-2022-22222",
      image: "/certifications/gpen.jpg"
    }
  ]
};

// Contact form submission handler (mock)
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Contact form submitted:', formData);
  return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
};
