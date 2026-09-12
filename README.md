# MagicPaper Web Sitesi

Wix'ten VS Code'a taşınan, sıfırdan kurulmuş temiz kod yapısı.

## Klasör yapısı

- `index.html`, `hakkimizda.html`, vs. — her biri ayrı bir sayfa
- `css/` — her dosya kendi amacına ait stil kuralı:
  - `variables.css` — renkler, fontlar, boşluk değerleri (marka rengini değiştirmek istersen buraya bak)
  - `reset.css` — tarayıcı varsayılanlarını sıfırlar
  - `layout.css` — genel container/section düzeni
  - `header.css` — üst şerit + menü
  - `hero.css` — ana sayfadaki büyük giriş bölümü
  - `buttons.css` — butonlar
  - `footer.css` — alt bilgi
- `js/nav.js` — mobil menü aç/kapa davranışı
- `images/` — görseller buraya (henüz boş)

## Yapılacaklar

1. `images/hero-phone.png` — ana sayfadaki telefon görselini Wix'ten indirip buraya koy.
2. Logoyu gerçek görsel olarak eklemek istersen `images/logo.png` koyup `index.html`'deki `.logo` div'ini `<img>` ile değiştirebiliriz.
3. Diğer 7 sayfa (`hakkimizda.html` vb.) şu an sadece iskelet — Wix'teki gerçek içerikleri tek tek taşıyacağız.
4. Sayfayı tarayıcıda görmek için: bu klasördeki `index.html`'e çift tıkla, ya da VS Code'da sağ tık > "Open with Live Server" (Live Server eklentisini kurarsan değişiklikleri anlık görürsün).

## Sırada ne var?

VS Code'da bu klasörü açtıktan sonra, Claude Code panelinde bana (veya oradaki Claude'a) hangi sayfayı/bölümü dolduracağımızı söyle, birlikte ilerleriz.
