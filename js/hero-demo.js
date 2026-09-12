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

  const themeData = {
    uzay: {
      suffix: "'nin Yıldızlar Yolculuğu",
      badge: "🚀 Uzay & Galaksi",
      sub: "Kozmik gezegenlerde kaybolan ışık taşını bulabilecek mi?",
      bg: "radial-gradient(circle at 50% 30%, #3b0764 0%, #0f172a 100%)",
      coverEmoji: "🚀✨"
    },
    deniz: {
      suffix: " ve Gizemli Mercan Krallığı",
      badge: "🌊 Deniz Altı Macerası",
      sub: "Yunus dostuyla birlikte okyanusun derinliklerindeki şarkıyı arıyor.",
      bg: "radial-gradient(circle at 50% 30%, #0369a1 0%, #082f49 100%)",
      coverEmoji: "🐬🌊"
    },
    dinozor: {
      suffix: " ve Sevimli Dinozor Vadisi",
      badge: "🦕 Antik Doğa Çağı",
      sub: "Yavru Brontozor ile ormanda eğlenceli bir meyve avı başlıyor!",
      bg: "radial-gradient(circle at 50% 30%, #15803d 0%, #052e16 100%)",
      coverEmoji: "🦕🌿"
    },
    masal: {
      suffix: " ve Büyülü Şato Muhafızı",
      badge: "🏰 Efsanevi Masal",
      sub: "Işıldayan kristal kalede tüm krallığa neşe getirecek sihirli anahtar!",
      bg: "radial-gradient(circle at 50% 30%, #be185d 0%, #4a044e 100%)",
      coverEmoji: "🏰✨"
    }
  };

  let currentTheme = 'uzay';

  function updateLiveStory() {
    const rawName = childNameInput ? childNameInput.value.trim() : '';
    const childName = rawName || 'Defne';
    const themeInfo = themeData[currentTheme] || themeData.uzay;

    if (phoneTitle) {
      phoneTitle.style.opacity = '0';
      phoneTitle.style.transform = 'translateY(6px)';
      
      setTimeout(() => {
        phoneTitle.textContent = `${childName}${themeInfo.suffix}`;
        phoneTitle.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        phoneTitle.style.opacity = '1';
        phoneTitle.style.transform = 'translateY(0)';
      }, 120);
    }

    if (phoneSub) {
      phoneSub.textContent = themeInfo.sub;
    }

    if (phoneBadge) {
      phoneBadge.textContent = themeInfo.badge;
    }

    if (phoneBg) {
      phoneBg.style.background = themeInfo.bg;
    }
  }

  if (childNameInput) {
    childNameInput.addEventListener('input', updateLiveStory);
  }

  themeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      themeChips.forEach(c => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
      currentTheme = chip.getAttribute('data-theme') || 'uzay';
      updateLiveStory();
    });
  });

  // İlk açılışta tetikle
  updateLiveStory();

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
});
