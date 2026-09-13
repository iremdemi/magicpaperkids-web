/* ==========================================================================
   MagicPaper İnteraktif Deneyim Scripti
   - Canlı Hikaye Simülatörü
   - FAQ Açılır/Kapanır Akordiyon
   - Mikro Etkileşimler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. CANLI HİKAYE SİMÜLATÖRÜ
  const childNameInput = document.getElementById('childNameInput');
  const themeChips = document.querySelectorAll('.theme-chip');
  const phoneTitle = document.getElementById('phoneStoryTitle');
  const phoneSub = document.getElementById('phoneStorySub');
  const phoneBadge = document.getElementById('phoneStoryBadge');
  const phoneBg = document.getElementById('phoneScreenBg');
  const phoneLoader = document.getElementById('phoneGeneratingLoader');
  const phoneScreen = document.querySelector('.phone-screen-content');

  const themeData = {
    uzay: {
      suffix: "'nin Yıldızlar Yolculuğu",
      badge: "Uzay & Galaksi",
      duration: "5 dk okuma",
      sub: "Kozmik gezegenlerde kaybolan ışık taşını bulabilecek mi?",
      bg: "radial-gradient(circle at 50% 30%, #3b0764 0%, #0f172a 100%)"
    },
    deniz: {
      suffix: " ve Gizemli Mercan Krallığı",
      badge: "Deniz Altı Macerası",
      duration: "4 dk okuma",
      sub: "Yunus dostuyla birlikte okyanusun derinliklerindeki şarkıyı arıyor.",
      bg: "radial-gradient(circle at 50% 30%, #0369a1 0%, #082f49 100%)"
    },
    dinozor: {
      suffix: " ve Sevimli Dinozor Vadisi",
      badge: "Antik Doğa Çağı",
      duration: "6 dk okuma",
      sub: "Yavru Brontozor ile ormanda eğlenceli bir meyve avı başlıyor!",
      bg: "radial-gradient(circle at 50% 30%, #15803d 0%, #052e16 100%)"
    },
    masal: {
      suffix: " ve Büyülü Şato Muhafızı",
      badge: "Efsanevi Masal",
      duration: "5 dk okuma",
      sub: "Işıldayan kristal kalede tüm krallığa neşe getirecek sihirli anahtar!",
      bg: "radial-gradient(circle at 50% 30%, #be185d 0%, #4a044e 100%)"
    }
  };

  let currentTheme = 'uzay';
  let generateTimer = null;
  let inputDebounce = null;

  function renderPhoneContent() {
    const rawName = childNameInput ? childNameInput.value.trim() : '';
    const childName = rawName || 'Defne';
    const themeInfo = themeData[currentTheme] || themeData.uzay;

    if (phoneTitle) {
      phoneTitle.textContent = `${childName}${themeInfo.suffix}`;
    }

    if (phoneSub) {
      phoneSub.textContent = themeInfo.sub;
    }

    if (phoneBadge) {
      phoneBadge.textContent = themeInfo.badge;
    }

    const phoneDuration = document.getElementById('phoneStoryDuration');
    if (phoneDuration) {
      phoneDuration.textContent = themeInfo.duration;
    }

    if (phoneBg) {
      phoneBg.style.background = themeInfo.bg;
    }
  }

  function triggerGenerating(duration = 460) {
    if (!phoneLoader) {
      renderPhoneContent();
      return;
    }

    // Yükleme animasyonunu başlat
    phoneLoader.classList.add('is-active');
    if (phoneScreen) {
      phoneScreen.classList.add('is-generating');
    }

    if (generateTimer) {
      clearTimeout(generateTimer);
    }

    generateTimer = setTimeout(() => {
      renderPhoneContent();
      phoneLoader.classList.remove('is-active');
      if (phoneScreen) {
        phoneScreen.classList.remove('is-generating');
      }
      generateTimer = null;
    }, duration);
  }

  // İsim kutusu değiştiğinde tetikleme
  if (childNameInput) {
    childNameInput.addEventListener('input', () => {
      if (phoneLoader) {
        phoneLoader.classList.add('is-active');
      }
      if (phoneScreen) {
        phoneScreen.classList.add('is-generating');
      }

      if (inputDebounce) {
        clearTimeout(inputDebounce);
      }

      inputDebounce = setTimeout(() => {
        renderPhoneContent();
        if (phoneLoader) {
          phoneLoader.classList.remove('is-active');
        }
        if (phoneScreen) {
          phoneScreen.classList.remove('is-generating');
        }
        inputDebounce = null;
      }, 420);
    });
  }

  // Tema seçildiğinde tetikleme
  themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      themeChips.forEach(c => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      currentTheme = chip.getAttribute('data-theme') || 'uzay';
      triggerGenerating(480);
    });
  });

  // İlk açılışta doğrudan içeriği doldur (yükleme göstermeden)
  renderPhoneContent();

  // 2. FAQ AÇILIR/KAPANIR AKORDİYON
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        // Diğerlerini kapat
        faqItems.forEach(i => i.classList.remove('is-open'));
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    }
  });

  // 3. SCROLL-TRIGGERED FADE-IN (Steps & Features Bölümleri)
  const scrollFadeElements = document.querySelectorAll('.scroll-fade-in');

  if ('IntersectionObserver' in window) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    scrollFadeElements.forEach(el => scrollObserver.observe(el));
  } else {
    // Fallback desteği
    scrollFadeElements.forEach(el => el.classList.add('is-visible'));
  }
});

