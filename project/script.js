// Career data with expanded details, AI insights, and customizable roadmaps
const careers = [
    {
        id: 1,
        title: "Data Scientist",
        skills: ["python", "data analysis", "machine learning", "statistics"],
        interests: ["data", "technology"],
        trend: "high-growth",
        description: "Analyze complex data sets to help organizations make better decisions.",
        salary: "₹66,40,000 - ₹1,24,50,000",
        outlook: "Growing rapidly due to increasing data generation",
        education: "Bachelor's in Data Science, Statistics, or related field",
        aiInsight: "AI predicts high demand for data scientists skilled in machine learning and big data analytics.",
        roadmap: {
            beginner: [
                "Learn Python basics and data structures",
                "Study statistics and probability",
                "Practice data manipulation with Pandas",
                "Complete online courses like Coursera's Data Science specialization"
            ],
            intermediate: [
                "Master machine learning algorithms",
                "Learn SQL and database management",
                "Build projects with real datasets",
                "Obtain certifications like Google Data Analytics"
            ],
            advanced: [
                "Deep dive into deep learning and neural networks",
                "Learn cloud platforms (AWS, GCP) for big data",
                "Contribute to open-source data science projects",
                "Pursue advanced degrees or PhD in Data Science"
            ]
        }
    },
    {
        id: 2,
        title: "UX/UI Designer",
        skills: ["design", "user research", "prototyping", "figma"],
        interests: ["design"],
        trend: "stable",
        description: "Create intuitive and visually appealing user interfaces for digital products.",
        salary: "₹49,80,000 - ₹99,60,000",
        outlook: "Stable demand as digital products continue to grow",
        education: "Bachelor's in Design, HCI, or related field",
        aiInsight: "AI tools are enhancing design processes, increasing efficiency for UX/UI designers.",
        roadmap: {
            beginner: [
                "Learn design principles and color theory",
                "Master Figma or Adobe XD basics",
                "Study user-centered design fundamentals",
                "Create simple wireframes and mockups"
            ],
            intermediate: [
                "Conduct user research and usability testing",
                "Learn prototyping and interaction design",
                "Build a portfolio of design projects",
                "Study accessibility and inclusive design"
            ],
            advanced: [
                "Master advanced design systems and component libraries",
                "Learn design leadership and team management",
                "Explore emerging technologies like AR/VR design",
                "Pursue certifications like Certified Usability Analyst"
            ]
        }
    },
    {
        id: 3,
        title: "Software Developer",
        skills: ["javascript", "python", "java", "web development"],
        interests: ["technology"],
        trend: "high-growth",
        description: "Build and maintain software applications and systems.",
        salary: "₹58,10,000 - ₹1,16,20,000",
        outlook: "Strong growth driven by digital transformation",
        education: "Bachelor's in Computer Science or related field",
        aiInsight: "AI-assisted coding tools are revolutionizing software development productivity.",
        roadmap: {
            beginner: [
                "Learn a programming language (JavaScript or Python)",
                "Study HTML, CSS, and basic web development",
                "Understand version control with Git",
                "Build simple projects and solve coding challenges"
            ],
            intermediate: [
                "Master data structures and algorithms",
                "Learn frameworks like React or Django",
                "Practice full-stack development",
                "Contribute to open-source projects"
            ],
            advanced: [
                "Specialize in areas like cloud computing or DevOps",
                "Learn system design and architecture",
                "Mentor junior developers and lead projects",
                "Pursue advanced certifications or degrees"
            ]
        }
    },
    {
        id: 4,
        title: "Business Analyst",
        skills: ["data analysis", "excel", "sql", "communication"],
        interests: ["business"],
        trend: "stable",
        description: "Analyze business needs and help implement solutions to improve efficiency.",
        salary: "₹53,90,000 - ₹91,30,000",
        outlook: "Stable demand in various industries",
        education: "Bachelor's in Business, Finance, or related field",
        aiInsight: "AI is automating data analysis tasks, allowing analysts to focus on strategic insights.",
        roadmap: {
            beginner: [
                "Master Excel and basic data analysis",
                "Learn SQL for database querying",
                "Study business process modeling",
                "Develop communication and presentation skills"
            ],
            intermediate: [
                "Learn requirements gathering and analysis",
                "Practice creating reports and dashboards",
                "Study project management fundamentals",
                "Obtain certifications like CBAP"
            ],
            advanced: [
                "Master advanced analytics and data visualization",
                "Learn enterprise architecture concepts",
                "Lead business transformation projects",
                "Pursue MBA or advanced business certifications"
            ]
        }
    },
    {
        id: 5,
        title: "AI Engineer",
        skills: ["python", "machine learning", "deep learning", "neural networks"],
        interests: ["technology", "data"],
        trend: "emerging",
        description: "Develop and deploy artificial intelligence systems and models.",
        salary: "₹74,70,000 - ₹1,49,40,000",
        outlook: "Explosive growth as AI adoption increases",
        education: "Master's in AI, Machine Learning, or Computer Science",
        aiInsight: "As an AI engineer, you'll be at the forefront of technological advancement.",
        roadmap: {
            beginner: [
                "Master Python and linear algebra",
                "Learn machine learning fundamentals",
                "Practice with scikit-learn library",
                "Complete Andrew Ng's Machine Learning course"
            ],
            intermediate: [
                "Study deep learning with TensorFlow or PyTorch",
                "Learn computer vision and NLP basics",
                "Build and deploy ML models",
                "Obtain AWS Machine Learning certifications"
            ],
            advanced: [
                "Specialize in advanced AI areas like reinforcement learning",
                "Learn MLOps and model deployment at scale",
                "Contribute to AI research and publications",
                "Pursue PhD in AI or related fields"
            ]
        }
    },
    {
        id: 6,
        title: "Healthcare Administrator",
        skills: ["management", "communication", "healthcare knowledge", "data analysis"],
        interests: ["healthcare", "business"],
        trend: "stable",
        description: "Manage healthcare facilities and ensure efficient operations.",
        salary: "₹58,10,000 - ₹1,07,90,000",
        outlook: "Stable demand due to aging population",
        education: "Bachelor's or Master's in Healthcare Administration",
        aiInsight: "AI is improving healthcare administration through predictive analytics and automation.",
        roadmap: {
            beginner: [
                "Earn degree in healthcare administration",
                "Learn healthcare regulations and compliance",
                "Develop basic management and communication skills",
                "Gain entry-level experience in healthcare settings"
            ],
            intermediate: [
                "Study healthcare finance and budgeting",
                "Learn about electronic health records systems",
                "Practice leadership and team management",
                "Obtain certifications like CMPE"
            ],
            advanced: [
                "Master strategic planning and policy development",
                "Learn advanced healthcare analytics",
                "Lead large healthcare organizations",
                "Pursue executive education or advanced degrees"
            ]
        }
    },
    {
        id: 7,
        title: "Blockchain Developer",
        skills: ["javascript", "solidity", "cryptography", "smart contracts"],
        interests: ["technology"],
        trend: "emerging",
        description: "Develop decentralized applications and smart contracts on blockchain platforms.",
        salary: "₹70,55,000 - ₹1,32,80,000",
        outlook: "Growing as blockchain adoption expands",
        education: "Bachelor's in Computer Science or related field",
        aiInsight: "AI and blockchain convergence is creating new opportunities for innovative applications.",
        roadmap: {
            beginner: [
                "Learn programming fundamentals (JavaScript)",
                "Study blockchain basics and cryptography",
                "Understand decentralized systems concepts",
                "Complete blockchain development courses"
            ],
            intermediate: [
                "Master Solidity for smart contract development",
                "Learn web3.js and Ethereum development",
                "Build decentralized applications (dApps)",
                "Practice security best practices"
            ],
            advanced: [
                "Explore advanced blockchain platforms (Hyperledger, etc.)",
                "Learn consensus algorithms and scalability solutions",
                "Contribute to blockchain research and development",
                "Pursue specialized certifications"
            ]
        }
    },
    {
        id: 8,
        title: "Educator/Teacher",
        skills: ["communication", "subject expertise", "teaching methods", "patience"],
        interests: ["education"],
        trend: "stable",
        description: "Inspire and educate students in various subjects and age groups.",
        salary: "₹37,35,000 - ₹74,70,000",
        outlook: "Stable demand in education sector",
        education: "Bachelor's in Education or subject area, teaching certification",
        aiInsight: "AI-powered educational tools are enhancing personalized learning experiences.",
        roadmap: {
            beginner: [
                "Earn teaching degree and certification",
                "Learn classroom management techniques",
                "Develop lesson planning skills",
                "Gain experience through student teaching"
            ],
            intermediate: [
                "Master subject-specific teaching methods",
                "Learn about diverse learning needs",
                "Incorporate technology in teaching",
                "Pursue advanced certifications"
            ],
            advanced: [
                "Develop curriculum and educational programs",
                "Engage in educational research and innovation",
                "Take on leadership roles in education",
                "Pursue master's or doctoral degrees in education"
            ]
        }
    }
];

// Function to analyze user inputs and suggest careers
function analyzeCareer(userSkills, userInterest, userTrend) {
    const skillKeywords = userSkills.toLowerCase().split(',').map(skill => skill.trim());

    const matches = careers.filter(career => {
        const skillMatch = skillKeywords.some(skill =>
            career.skills.some(careerSkill => careerSkill.includes(skill) || skill.includes(careerSkill))
        );
        const interestMatch = career.interests.includes(userInterest);
        const trendMatch = career.trend === userTrend;

        return skillMatch && interestMatch && trendMatch;
    });

    // If no exact matches, find partial matches
    if (matches.length === 0) {
        return careers.filter(career => {
            const skillMatch = skillKeywords.some(skill =>
                career.skills.some(careerSkill => careerSkill.includes(skill) || skill.includes(careerSkill))
            );
            const interestMatch = career.interests.includes(userInterest);

            return skillMatch || interestMatch;
        }).slice(0, 3); // Return top 3 partial matches
    }

    return matches.slice(0, 3); // Return top 3 matches
}

// Function to save user data to localStorage
function saveUserData(skills, interest, trend, experience, education, location) {
    const userData = { skills, interest, trend, experience, education, location };
    localStorage.setItem('careerPredictorData', JSON.stringify(userData));
}

// Function to get user data from localStorage
function getUserData() {
    const data = localStorage.getItem('careerPredictorData');
    return data ? JSON.parse(data) : null;
}

// Function to display results with links to details
function displayResults(suggestions) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (suggestions.length === 0) {
        resultsDiv.innerHTML = '<p>No matching career paths found. Try adjusting your inputs.</p>';
        return;
    }

    suggestions.forEach(career => {
        const careerCard = document.createElement('div');
        careerCard.className = 'career-card';

        careerCard.innerHTML = `
            <h3>${career.title}</h3>
            <p><strong>Description:</strong> ${career.description}</p>
            <p><strong>Salary Range:</strong> ${career.salary}</p>
            <p><strong>Job Outlook:</strong> ${career.outlook}</p>
            <p><strong>AI Insight:</strong> ${career.aiInsight}</p>
            <a href="detail.html?id=${career.id}" class="detail-link">View Full Details & Roadmap</a>
        `;

        resultsDiv.appendChild(careerCard);
    });
}

// Function to display career details with customizable roadmap
function displayCareerDetail(careerId, level = 'beginner') {
    const career = careers.find(c => c.id == careerId);
    if (!career) return;

    const detailDiv = document.getElementById('career-detail');
    const roadmapDiv = document.getElementById('roadmap');

    detailDiv.innerHTML = `
        <h2>${career.title}</h2>
        <p><strong>Description:</strong> ${career.description}</p>
        <p><strong>Key Skills:</strong> ${career.skills.join(', ')}</p>
        <p><strong>Salary Range:</strong> ${career.salary}</p>
        <p><strong>Job Outlook:</strong> ${career.outlook}</p>
        <p><strong>Education Requirements:</strong> ${career.education}</p>
        <p><strong>AI Insight:</strong> ${career.aiInsight}</p>
    `;

    updateRoadmap(career, level);
}

// Function to update roadmap based on level
function updateRoadmap(career, level) {
    const roadmapDiv = document.getElementById('roadmap');
    const steps = career.roadmap[level];

    roadmapDiv.innerHTML = `
        <h3>Learning Roadmap (${level.charAt(0).toUpperCase() + level.slice(1)} Level)</h3>
        <ol>
            ${steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

// Event listener for form submission
document.getElementById('career-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const skills = document.getElementById('skills').value;
    const interests = document.getElementById('interests').value;
    const marketTrend = document.getElementById('market-trend').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const location = document.getElementById('location').value;

    if (!skills || !interests || !marketTrend) {
        alert('Please fill in all required fields.');
        return;
    }

    saveUserData(skills, interests, marketTrend, experience, education, location);
    const suggestions = analyzeCareer(skills, interests, marketTrend);
    displayResults(suggestions);

    // Scroll to results
    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
});

// Event listener for roadmap level change
document.getElementById('roadmap-level')?.addEventListener('change', function(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const careerId = urlParams.get('id');
    if (careerId) {
        updateRoadmap(careers.find(c => c.id == careerId), e.target.value);
    }
});

// Load career detail on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const careerId = urlParams.get('id');
    if (careerId) {
        displayCareerDetail(careerId);
    }
});
