document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Parallax Effect for Hero Background
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        // Move the background down slightly as we scroll down
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });

    // 3. Intersection Observer for Fade-In Animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 4. Language Switcher
    const translations = {
        en: {
            navProducts: "Products",
            navCompany: "Company",
            heroSubtitle: "Look for the light.",
            scroll: "Scroll",
            featuredTitles: "Featured Titles",
            date1: "Release Date: Coming Soon",
            genre1: "action-adventure platformer",
            desc1: "Beto is a curious and brave boy who embarks on an adventure inside his own home. In a food-inspired world, he faces quirky enemies and unique bosses. Each environment, like the kitchen and fridge, becomes a challenging level. The game blends humor, action, and progression in a fun, lighthearted journey.",
            btnDetails1: "View Details",
            date2: "Release Date: Coming Soon",
            genre2: "Post-Apocalyptic RPG",
            desc2: "After the Fire: The Last Brazilian is a post-apocalyptic RPG set 15 years after a global nuclear war devastated most of the world. You play as Lucas, a Brazilian survivor who awakens in a bunker with no memory and a mysterious clue about the Project Hope. Exploring the ruins of Brazil, you must survive harsh environments, face dangerous factions, and uncover the truth behind the war. Player choices shape alliances, the fate of survivors, and the future of civilization. In the end, your decisions will determine whether humanity rebuilds, collapses, or falls under a new tyranny.",
            btnDetails2: "View Details",
            aboutTitle: "About BLUE VMS",
            aboutP1: "BLUE VMS is a game studio built on one core idea: delivering fun and creativity in everything we create. We design games that are engaging, expressive, and full of personality.",
            aboutP2: "Our focus is to craft experiences that feel good to play, not just to complete. Because for us, great games are the ones that leave you smiling.",
            btnBackToTop: "Back to Top",
            footerAccess: "Access",
            footerPrivacy: "Privacy Policy",
            footerSitePolicy: "Site Policy",
            footerSitemap: "Sitemap",
            footerCopy: "© 2026 BLUE VMS, Inc. All rights reserved."
        },
        pt: {
            navProducts: "Produtos",
            navCompany: "Empresa",
            heroSubtitle: "Procure a luz.",
            scroll: "Rolar",
            featuredTitles: "Títulos em Destaque",
            date1: "Lançamento: Em breve",
            genre1: "plataforma de ação e aventura",
            desc1: "Beto é um garoto curioso e corajoso que embarca em uma aventura dentro de sua própria casa. Em um mundo inspirado em comida, ele enfrenta inimigos peculiares e chefes únicos. Cada ambiente, como a cozinha e a geladeira, se torna um nível desafiador. O jogo mistura humor, ação e progressão em uma jornada divertida e leve.",
            btnDetails1: "Ver Detalhes",
            date2: "Lançamento: Em breve",
            genre2: "RPG Pós-Apocalíptico",
            desc2: "After the Fire: The Last Brazilian é um RPG pós-apocalíptico que se passa 15 anos após uma guerra nuclear global devastar a maior parte do mundo. Você joga como Lucas, um sobrevivente brasileiro que acorda em um bunker sem memória e com uma pista misteriosa sobre o Projeto Esperança. Explorando as ruínas do Brasil, você deve sobreviver a ambientes hostis, enfrentar facções perigosas e descobrir a verdade por trás da guerra. As escolhas do jogador moldam alianças, o destino dos sobreviventes e o futuro da civilização. No final, suas decisões determinarão se a humanidade se reconstrói, entra em colapso ou cai sob uma nova tirania.",
            btnDetails2: "Ver Detalhes",
            aboutTitle: "Sobre a BLUE VMS",
            aboutP1: "A BLUE VMS é um estúdio de jogos construído sobre uma ideia central: entregar diversão e criatividade em tudo o que criamos. Nós projetamos jogos que são envolventes, expressivos e cheios de personalidade.",
            aboutP2: "Nosso foco é criar experiências que sejam boas de jogar, não apenas de zerar. Porque para nós, grandes jogos são aqueles que deixam você sorrindo.",
            btnBackToTop: "Voltar ao Topo",
            footerAccess: "Acesso",
            footerPrivacy: "Política de Privacidade",
            footerSitePolicy: "Política do Site",
            footerSitemap: "Mapa do Site",
            footerCopy: "© 2026 BLUE VMS, Inc. Todos os direitos reservados."
        }
    };

    let currentLang = 'en';
    const langToggle = document.getElementById('lang-toggle');

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            langToggle.textContent = currentLang === 'en' ? 'PT-BR' : 'EN';
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        });
    }

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
