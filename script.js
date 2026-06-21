/* ==========================================================================
   THE ROYAL SHOWCASE GALLERY - JAVASCRIPT
   Implements Language Switcher, Video Modals, Lightbox, Share, and Scroll Effects
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Translation System Data
// --------------------------------------------------------------------------
const translations = {
  en: {
    "logo": "Shrouk Gallery",
    "nav-home": "Home",
    "nav-journey": "Journey",
    "nav-gallery": "Gallery",
    "hero-title": "Watch My Journey",
    "hero-subtitle": "Class of 2026 • Executive Graduation Portfolio",
    "scroll-text": "Discover Gallery",
    "journey-header": "A Royal Milestone",
    "journey-p1": "Stepping into a future forged with dedication, brilliance, and royal standards. This showcase commemorates a journey of academic excellence, capturing moments that represent the pinnacle of achievement and transition into leadership.",
    "journey-p2": "Every portrait tells a story of late nights, deep focus, and final triumph. Walk through the gallery below to share these moments of pride and elegance.",
    "gallery-header": "The Royal Portfolio",
    "gallery-subtitle": "A collection of moments captured in high definition",
    "cat-portrait": "Portrait",
    "cat-moment": "Moment",
    "cat-candid": "Candid",
    "btn-share-moment": "Share Moment",
    "footer-copyright": "© 2026 Shrouk Gallery. Crafted with Excellence.",
    "share-title": "Share the Moment",
    "share-desc": "Select a platform to share this royal graduation gallery.",
    "share-copy-btn": "Copy Link",
    "toast-copied": "Link copied to clipboard!",
    
    // Pictures
    "pic-1-title": "The Sovereign Smile",
    "pic-2-title": "Reflective Triumph",
    "pic-3-title": "Academic Honor",
    "pic-4-title": "Golden Horizon",
    "pic-5-title": "Prestigious Stature",
    "pic-6-title": "The Crown of Success",
    "pic-7-title": "Gaze of Pride",
    "pic-8-title": "Empowered Vision",
    "pic-9-title": "Elegance Unveiled",
    "pic-10-title": "The Royal Portrait I",
    "pic-11-title": "The Royal Portrait II",
    "pic-12-title": "The Royal Portrait III",
    "pic-13-title": "The Royal Portrait IV",
    "pic-14-title": "The Royal Portrait V",
    "pic-15-title": "The Royal Portrait VI",
    "pic-16-title": "The Royal Portrait VII"
  },
  ar: {
    "logo": "معرض شروق",
    "nav-home": "الرئيسية",
    "nav-journey": "مسيرتي",
    "nav-gallery": "المعرض",
    "hero-title": "شاهد رحلتي",
    "hero-subtitle": "دفعة 2026 • معرض التخرج التنفيذي",
    "scroll-text": "اكتشف المعرض",
    "journey-header": "مرحلة ملكية فارقة",
    "journey-p1": "خطوات واثقة نحو مستقبل مصاغ بالتفاني، والتميز، والمعايير الملكية. يوثق هذا المعرض مسيرة حافلة بالنجاح الأكاديمي، مجسداً ذروة الإنجازات والتحول نحو القيادة والتميز التنفيذي.",
    "journey-p2": "كل صورة تروي فصلاً من فصول العمل الجاد، والتركيز العميق، والانتصار النهائي. ندعوكم لتصفح المعرض ومشاركتنا هذه اللحظات الاستثنائية المفعمة بالفخر والأناقة.",
    "gallery-header": "معرض شروق",
    "gallery-subtitle": "مجموعة من اللحظات الخالدة الموثقة بدقة متناهية وبراعة فنية",
    "cat-portrait": "بورتريه",
    "cat-moment": "لحظة تاريخية",
    "cat-candid": "لقطة عفوية",
    "btn-share-moment": "مشاركة اللحظة",
    "footer-copyright": "© 2026 معرض شروق. صُمم بامتياز وفخامة.",
    "share-title": "شارك هذه اللحظة",
    "share-desc": "اختر المنصة المناسبة لمشاركة هذا المعرض الملكي للتخرج مع عائلتك وأصدقائك.",
    "share-copy-btn": "نسخ الرابط",
    "toast-copied": "تم نسخ رابط المعرض إلى الحافظة بنجاح!",
    
    // Pictures
    "pic-1-title": "الابتسامة السيادية",
    "pic-2-title": "تأمل الانتصار",
    "pic-3-title": "وسام الأكاديمية",
    "pic-4-title": "الأفق الذهبي",
    "pic-5-title": "الهيبة والوقار",
    "pic-6-title": "تاج النجاح والتفوق",
    "pic-7-title": "نظرة الفخر الطموحة",
    "pic-8-title": "الرؤية الممكنة",
    "pic-9-title": "الأناقة الملكية",
    "pic-10-title": "البورتريه الملكي الأول",
    "pic-11-title": "البورتريه الملكي الثاني",
    "pic-12-title": "البورتريه الملكي الثالث",
    "pic-13-title": "البورتريه الملكي الرابع",
    "pic-14-title": "البورتريه الملكي الخامس",
    "pic-15-title": "البورتريه الملكي السادس",
    "pic-16-title": "البورتريه الملكي السابع"
  }
};

let currentLang = 'en';

// --------------------------------------------------------------------------
// 2. DOM Elements Selection
// --------------------------------------------------------------------------
const langSwitchBtn = document.getElementById('lang-switch-btn');
const langText = langSwitchBtn.querySelector('.lang-text');
const header = document.querySelector('.royal-header');
const navLinks = document.querySelectorAll('.nav-link');
const backgroundVideo = document.getElementById('hero-bg-video');
const bgMusic = document.getElementById('bg-music');
const musicToggleBtn = document.getElementById('music-toggle-btn');

// Modals
const videoModal = document.getElementById('video-modal');
const lightboxModal = document.getElementById('lightbox-modal');
const shareModal = document.getElementById('share-modal');

// Modal Trigger Buttons
const openVideoBtn = document.getElementById('open-video-btn');
const headerShareBtn = document.getElementById('header-share-btn');
const mobileShareBtn = document.getElementById('mobile-share-btn');

// Modal Close Buttons
const closeVideoModalBtn = document.getElementById('close-video-modal');
const closeLightboxBtn = document.getElementById('close-lightbox-btn');
const closeShareModalBtn = document.getElementById('close-share-modal');

// Lightbox Navigation
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Share sheet buttons
const shareWhatsappBtn = document.getElementById('share-whatsapp');
const shareXBtn = document.getElementById('share-x');
const shareFacebookBtn = document.getElementById('share-facebook');
const shareCopyBtn = document.getElementById('share-copy');
const copyToast = document.getElementById('copy-toast');

// Gallery Items
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
let activeGalleryIndex = 0;

// --------------------------------------------------------------------------
// 3. Language & Translation Logic
// --------------------------------------------------------------------------
function setLanguage(lang) {
  currentLang = lang;
  
  // Update document language and direction
  if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.body.classList.add('rtl-mode');
    langText.textContent = 'English';
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('rtl-mode');
    langText.textContent = 'العربية';
  }

  // Update DOM Elements that have data-key attributes
  const translatableElements = document.querySelectorAll('[data-key]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Re-sync active lightbox caption if it is currently open
  if (lightboxModal.classList.contains('active')) {
    updateLightboxContent(activeGalleryIndex);
  }
}

langSwitchBtn.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  setLanguage(newLang);
});

// Initialize with default (or saved preference)
setLanguage(currentLang);

// --------------------------------------------------------------------------
// 4. Scroll & Viewport Effects
// --------------------------------------------------------------------------
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Highlight active link in navigation on scroll
  let currentActive = 'hero';
  const sections = ['hero', 'journey', 'gallery'];
  
  sections.forEach(secId => {
    const sec = document.getElementById(secId);
    if (sec) {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        currentActive = secId;
      }
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
});

// Lazy load & entrance animations for gallery items (Fade up as user scrolls)
const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

galleryItems.forEach(item => {
  // Set initial hidden styles
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px)';
  item.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.8s ease';
  revealOnScrollObserver.observe(item);
});

// --------------------------------------------------------------------------
// 5. Cinematic Video Modal Functions
// --------------------------------------------------------------------------
const modalVideoPlayer = document.getElementById('modal-video-player');

function openVideoModal() {
  videoModal.classList.add('active');
  modalVideoPlayer.play().catch(error => {
    console.log("Auto-play blocked inside modal: ", error);
  });
  if (backgroundVideo) {
    backgroundVideo.pause();
  }
  // Pause background music when video starts
  if (bgMusic && !bgMusic.paused) {
    bgMusic.pause();
    musicToggleBtn.classList.remove('playing');
  }
}

function closeVideoModal() {
  videoModal.classList.remove('active');
  modalVideoPlayer.pause();
  modalVideoPlayer.currentTime = 0;
  if (backgroundVideo) {
    backgroundVideo.play().catch(() => {});
  }
}

openVideoBtn.addEventListener('click', openVideoModal);
closeVideoModalBtn.addEventListener('click', closeVideoModal);
videoModal.querySelector('.modal-bg-blur').addEventListener('click', closeVideoModal);

// --------------------------------------------------------------------------
// 6. Interactive Lightbox Functions
// --------------------------------------------------------------------------
function updateLightboxContent(index) {
  const item = galleryItems[index];
  if (!item) return;

  const imgSrc = item.getAttribute('data-src');
  const catKey = item.querySelector('.item-category').getAttribute('data-key');
  const titleKey = item.querySelector('.item-title').getAttribute('data-key');

  // Update content
  lightboxImage.src = imgSrc;
  lightboxCategory.textContent = translations[currentLang][catKey];
  lightboxTitle.textContent = translations[currentLang][titleKey];
}

function openLightbox(index) {
  activeGalleryIndex = index;
  updateLightboxContent(index);
  lightboxModal.classList.add('active');
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
}

function navigateLightbox(dir) {
  let nextIndex = activeGalleryIndex + dir;
  if (nextIndex < 0) {
    nextIndex = galleryItems.length - 1;
  } else if (nextIndex >= galleryItems.length) {
    nextIndex = 0;
  }
  activeGalleryIndex = nextIndex;
  updateLightboxContent(nextIndex);
}

// Bind Click handlers to each gallery item
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    openLightbox(index);
  });
});

closeLightboxBtn.addEventListener('click', closeLightbox);
lightboxModal.querySelector('.modal-bg-blur').addEventListener('click', closeLightbox);

lightboxPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  navigateLightbox(-1);
});

lightboxNext.addEventListener('click', (e) => {
  e.stopPropagation();
  navigateLightbox(1);
});

// Keyboard Accessibility for Lightbox
window.addEventListener('keydown', (e) => {
  if (!lightboxModal.classList.contains('active')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    // If layout direction is RTL, swap navigation direction keys
    const dir = document.documentElement.dir === 'rtl' ? 1 : -1;
    navigateLightbox(dir);
  } else if (e.key === 'ArrowRight') {
    const dir = document.documentElement.dir === 'rtl' ? -1 : 1;
    navigateLightbox(dir);
  }
});

// --------------------------------------------------------------------------
// 7. Royal Share Sheet Functionality
// --------------------------------------------------------------------------
function openShareModal() {
  shareModal.classList.add('active');
}

function closeShareModal() {
  shareModal.classList.remove('active');
}

// Share triggers
headerShareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openShareModal();
});

mobileShareBtn.addEventListener('click', openShareModal);
closeShareModalBtn.addEventListener('click', closeShareModal);
shareModal.querySelector('.modal-bg-blur').addEventListener('click', closeShareModal);

// Native Share or Social Fallbacks
const pageUrl = window.location.href;
const shareText = "Check out this royal graduation portfolio gallery!";

shareWhatsappBtn.addEventListener('click', () => {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`;
  window.open(url, '_blank');
});

shareXBtn.addEventListener('click', () => {
  const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
});

shareFacebookBtn.addEventListener('click', () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  window.open(url, '_blank');
});

// Copy link to clipboard with premium toast alert
shareCopyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(pageUrl).then(() => {
    // Show toast notification
    copyToast.classList.add('show');
    
    // Hide toast after 2 seconds
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy link: ", err);
  });
});

// --------------------------------------------------------------------------
// 8. Background Music Control
// --------------------------------------------------------------------------
function attemptAutoplay() {
  if (!bgMusic) return;
  
  // Attempt playing audio directly
  bgMusic.play().then(() => {
    musicToggleBtn.classList.add('playing');
  }).catch(() => {
    console.log("Autoplay blocked. Registering interaction listeners.");
    
    // Setup event listeners for first interaction
    const playOnInteraction = () => {
      bgMusic.play().then(() => {
        musicToggleBtn.classList.add('playing');
      }).catch(() => {});
      
      // Remove listeners immediately
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('scroll', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
    };
    
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('scroll', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
  });
}

// Toggle play/pause state when button is clicked
if (musicToggleBtn && bgMusic) {
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicToggleBtn.classList.add('playing');
      }).catch(err => console.log("Playback failed: ", err));
    } else {
      bgMusic.pause();
      musicToggleBtn.classList.remove('playing');
    }
  });
  
  // Run autoplay check when page is ready
  if (document.readyState === 'complete') {
    attemptAutoplay();
  } else {
    window.addEventListener('load', attemptAutoplay);
  }
}
