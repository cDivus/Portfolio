const GIST_URL = "https://gist.githubusercontent.com/cDivus/e2d057f5fefe33c77a108c0b8ddc5df1/raw/portfolio.json"; 

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const cached = localStorage.getItem('portfolio_cache');
        if (cached) render(JSON.parse(cached));
    } catch (e) {}

    if (GIST_URL) {
        try {
            const res = await fetch(GIST_URL);
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('portfolio_cache', JSON.stringify(data));
                render(data);
            }
        } catch (e) {
            console.error("Gist fetch failed:", e);
        }
    }

    // Scroll spy for navigation using IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observerOptions = {
        root: null,
        rootMargin: '-120px 0px -60% 0px',
        threshold: 0
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);
    sections.forEach(sec => observer.observe(sec));

    // Mobile navigation menu toggle
    const menuToggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && e.target !== menuToggleBtn) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Close menu when resizing past mobile threshold
        window.addEventListener('resize', () => {
            if (window.innerWidth > 480) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});

function render(data) {
    if (data.profile) {
        document.getElementById('profile-name').textContent = data.profile.name;
        document.getElementById('profile-role').textContent = data.profile.role;
        document.getElementById('profile-email').href = `mailto:${data.profile.email}`;
        document.getElementById('profile-github').href = data.profile.github;
        document.getElementById('profile-linkedin').href = data.profile.linkedin;
        if (data.profile.resume) {
            const resumeEl = document.getElementById('profile-resume');
            if (resumeEl) resumeEl.href = data.profile.resume;
        }
        const bioContainer = document.getElementById('profile-bio');
        bioContainer.innerHTML = '';
        data.profile.bio.forEach(pText => {
            const tempDiv = document.createElement('div');
            tempDiv.textContent = pText;
            let safeText = tempDiv.innerHTML;
            safeText = safeText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>');
            const p = document.createElement('p');
            p.innerHTML = safeText;
            bioContainer.appendChild(p);
        });
    }
    
    if (data.skills) {
        const container = document.getElementById('skills-container');
        const template = document.getElementById('skill-template');
        container.innerHTML = '';
        data.skills.forEach(g => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.skills-category-label').textContent = g.category;
            clone.querySelector('.skills-category-list').textContent = g.list.join(', ');
            container.appendChild(clone);
        });
    }

    if (data.projects) {
        const container = document.querySelector('.projects-grid');
        const template = document.getElementById('project-template');
        container.innerHTML = '';
        data.projects.forEach(p => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.project-title').textContent = p.title;
            
            const link = clone.querySelector('.project-code-link');
            link.href = p.codeUrl;
            link.setAttribute('aria-label', `View ${p.title} Code on GitHub`);
            
            const commentEl = clone.querySelector('.project-comment');
            if (p.comment) {
                commentEl.textContent = p.comment;
            } else {
                commentEl.remove();
            }
            
            clone.querySelector('.project-description').textContent = p.description;
            
            const tagsContainer = clone.querySelector('.project-tags');
            p.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'text-[0.7rem] font-semibold bg-bg-secondary border border-border-color text-text-muted px-2 py-1 rounded';
                tagSpan.textContent = tag;
                tagsContainer.appendChild(tagSpan);
            });
            
            container.appendChild(clone);
        });
    }
}
