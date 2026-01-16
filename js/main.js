document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HAMBURGER MENU
    const hamburger = document.querySelector('.hamburger');
    const navButtons = document.querySelector('.nav-buttons');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navButtons.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 2. HEADER SCROLL
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. FILTROVÁNÍ
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });

    // 4. NOVÝ LIGHTBOX (CAROUSEL)
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        const lbImg = lightbox.querySelector('.lightbox-img');
        const lbTitle = document.getElementById('lb-title');
        const lbDesc = document.getElementById('lb-desc');
        const lbCounter = document.getElementById('lb-counter');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lb-prev');
        const nextBtn = lightbox.querySelector('.lb-next');

        let currentImages = []; 
        let currentIndex = 0;   

        // Funkce: Ukáže fotku podle čísla
        const showImage = (index) => {
            if (index < 0) index = currentImages.length - 1; 
            if (index >= currentImages.length) index = 0;    
            
            currentIndex = index;
            lbImg.src = currentImages[currentIndex].trim();
            
            // Počítadlo a šipky
            if (currentImages.length > 1) {
                lbCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
            } else {
                lbCounter.textContent = "";
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
            }
        };

        // Kliknutí na projekt v galerii
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imagesAttr = item.getAttribute('data-images');
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');

                if (imagesAttr) {
                    // Rozseká seznam fotek podle čárky
                    currentImages = imagesAttr.split(',');
                } else {
                    // Záloha, kdyby tam byl jen jeden obrázek bez seznamu
                    const imgTag = item.querySelector('img');
                    currentImages = [imgTag.src];
                }

                if(lbTitle) lbTitle.textContent = title;
                if(lbDesc) lbDesc.textContent = desc;
                
                showImage(0); // Otevře první fotku
                lightbox.classList.add('open');
            });
        });

        // Tlačítka
        prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
        nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

        // Zavírání
        const closeLightbox = () => { lightbox.classList.remove('open'); };
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

        // Klávesnice (Šipky)
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        });
    }

    // ... (zde končí tvůj kód pro lightbox) ...

    // 5. AUTOMATICKÉ OTEVŘENÍ PROJEKTU Z ODKAZU
    // Získáme parametry z URL adresy (to za otazníkem)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('open');

    // Pokud adresa obsahuje parametr "open"
    if (projectId) {
        const projectToOpen = document.getElementById(projectId);
        
        // Pokud takový projekt na stránce existuje
        if (projectToOpen) {
            // Počkáme zlomek vteřiny, než se vše načte, a pak na něj "klikneme"
            setTimeout(() => {
                projectToOpen.click();
                // Volitelné: Scrollne stránku k projektu (pod lightbox)
                projectToOpen.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }

});