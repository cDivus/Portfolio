document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Skills Data & Injection
    // ==========================================================================
    const SKILLS_DATA = [
        {
            category: "LANGUAGES",
            list: ["Python", "C", "Java", "JavaScript", "PHP"]
        },
        {
            category: "FRAMEWORKS",
            list: ["FastAPI", "Node.js", "Laravel", "PyTorch", "Flask"]
        },
        {
            category: "CLOUD / INFRA",
            list: ["Docker", "Git", "Vercel", "Railway", "Linux", "AWS S3"]
        },
        {
            category: "DATABASES",
            list: ["PostgreSQL", "Supabase", "Redis", "MySQL", "SQLite", "MongoDB"]
        }
    ];

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        SKILLS_DATA.forEach(group => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'skills-category-row flex items-start gap-8 mb-5 last:mb-0 max-[640px]:flex-col max-[640px]:gap-1.5 max-[640px]:mb-6';
            
            const labelDiv = document.createElement('div');
            labelDiv.className = 'skills-category-label font-mono text-[0.8rem] font-semibold text-text-muted tracking-[1.5px] uppercase w-[150px] shrink-0 pt-[0.2rem] max-[640px]:w-auto max-[640px]:pt-0';
            labelDiv.textContent = group.category;
            rowDiv.appendChild(labelDiv);
            
            const listDiv = document.createElement('div');
            listDiv.className = 'skills-category-list font-body text-[1.05rem] font-normal text-text-primary leading-[1.6] tracking-[0.2px]';
            listDiv.textContent = group.list.join(', ');
            rowDiv.appendChild(listDiv);
            
            skillsContainer.appendChild(rowDiv);
        });
    }

    // ==========================================================================
    // Projects Data & Injection
    // ==========================================================================
    const PROJECTS_DATA = [
        {
            title: "SkillCheck",
            comment: "Backend Developer",
            description: "An online examination system curated for efficient student assessment and convenient exam creation.",
            codeUrl: "https://github.com/CupNoodlez/skillcheck",
            tags: ["Laravel", "PHP", "TailwindCSS", "Alpine.js", "MySQL"]
        },
        {
            title: "Polymart",
            comment: "Backend Developer",
            description: "An E-Commerce Web App built for students in Polytechnic University of the Philippines.",
            codeUrl: "https://github.com/CupNoodlez/Polymart",
            tags: ["FastAPI", "Supabase", "AWS S3", "Docker"]
        },
        {
            title: "BicolaNER",
            comment: "Research Project",
            description: "Named Entity Recognition for Central Bikol using mDeBERTaV3-CRF.",
            codeUrl: "https://github.com/CupNoodlez/BicolaNER",
            tags: ["NLP", "Machine Learning", "PyTorch", "Hugging face", "Prodigy"]
        },

        {
            title: "Web-Blocker",
            comment: "Personal Project",
            description: "A browser extension that blocks distracting websites and tracks usage time.",
            codeUrl: "https://github.com/cDivus/Web-Blocker",
            tags: ["Vanilla JS"]
        },
        {
            title: "MoolaTrack",
            comment: "Personal Project",
            description: "A CLI-based expense tracker that integrates Cowsay to display fun commentary on your spending habits.",
            codeUrl: "https://github.com/cDivus/MoolaTrack",
            tags: ["Python", "Cowsay", "CLI"]
        }
    ];

    const projectsContainer = document.querySelector('.projects-grid');
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        
        PROJECTS_DATA.forEach(project => {
            const article = document.createElement('article');
            article.className = 'project-card bg-white border border-border-color rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary flex flex-col';
            
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'project-details p-7 flex flex-col flex-grow';
            
            const headerDiv = document.createElement('div');
            headerDiv.className = 'project-header flex justify-between items-start gap-4 mb-3';
            
            const title = document.createElement('h3');
            title.className = 'project-title font-heading text-[1.35rem] font-bold mb-0 text-text-primary';
            title.textContent = project.title;
            
            const codeLink = document.createElement('a');
            codeLink.href = project.codeUrl;
            codeLink.target = '_blank';
            codeLink.rel = 'noopener noreferrer';
            codeLink.className = 'project-code-link inline-flex items-center justify-center transition-all duration-300 hover:scale-110 p-0.5 mt-0.5';
            codeLink.setAttribute('aria-label', `View ${project.title} Code on GitHub`);
            codeLink.setAttribute('title', 'View Code on GitHub');
            codeLink.innerHTML = `
                <img src="assets/icons/github.svg" alt="GitHub" class="project-code-icon w-5 h-5 transition-colors filter invert-[49%] sepia-[9%] saturate-[1018%] hue-rotate-[176deg] brightness-[93%] contrast-[89%]">
            `;
            
            headerDiv.appendChild(title);
            headerDiv.appendChild(codeLink);
            
            const desc = document.createElement('p');
            desc.className = 'project-description text-[0.925rem] text-text-secondary mb-5 flex-grow';
            desc.textContent = project.description;
            
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'project-tags flex flex-wrap gap-[0.45rem] mt-auto';
            project.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'text-[0.7rem] font-semibold bg-bg-secondary border border-border-color text-text-muted px-2 py-1 rounded';
                tagSpan.textContent = tag;
                tagsDiv.appendChild(tagSpan);
            });
            
            detailsDiv.appendChild(headerDiv);
            
            if (project.comment) {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'project-comment font-mono text-[0.8rem] text-text-muted mb-3';
                commentDiv.textContent = project.comment;
                detailsDiv.appendChild(commentDiv);
            }
            detailsDiv.appendChild(desc);
            detailsDiv.appendChild(tagsDiv);
            
            article.appendChild(detailsDiv);
            projectsContainer.appendChild(article);
        });
    }

    // ==========================================================================
    // Active Nav Highlight on Scroll
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Offset for sticky header
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
});
