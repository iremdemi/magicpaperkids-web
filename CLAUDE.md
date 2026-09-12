# MagicPaper Web Sitesi — Proje Bağlamı

Bu dosyayı Claude Code otomatik okuyor, senin tekrar anlatmana gerek yok.

## Ne yapıyoruz

MagicPaper, çocuklara özel kişiselleştirilmiş masal kitabı oluşturan bir iOS
uygulaması (SwiftUI). Bu klasördeki iş, uygulamanın **tanıtım web sitesini**
Wix'ten çıkarıp temiz, düzenli kod (basit HTML/CSS/JS) olarak yeniden kurmak.

Wix'in ürettiği kodu almadık — sıfırdan, ekran görüntülerini referans alarak
kuruyoruz. Framework/build aracı YOK, bilerek basit tutuluyor (her sayfa ayrı
.html, ortak header/footer her sayfaya kopyalanıyor).

## Kurallar / prensipler

- Her CSS dosyası tek bir amaca hizmet ediyor (header.css sadece header, vs.)
  Yeni bir bölüm eklerken yeni bir CSS dosyası aç, mevcut dosyalara alakasız
  şey ekleme.
- Marka rengi/font gibi değerler SADECE `css/variables.css`'te tanımlı,
  başka yerde renk hex kodu hardcode etme.
- Tasarım dili: referans bir kreş/anaokulu sitesinden (Bilingvo) ilham
  aldık — kıvrımlı (scallop) bölüm geçişleri, yumuşak pastel zemin renkleri,
  "yırtık kağıt" görünümlü kartlar, top yuvarlak (pill) buton/menü, Baloo 2
  başlık fontu. Bunların hepsi `css/shapes.css` içinde reusable class olarak
  var: `.scallop-bottom`, `.bg-teal` / `.bg-cream` / `.bg-pink` / `.bg-coral`,
  `.paper-card`, `.pill-badge`. O illüstrasyonların kendisini (çizim
  karakterler vs.) KOPYALAMIYORUZ, sadece yapısal dili kullanıyoruz.

## Şu ana kadar tamamlanan

- Klasör iskeleti: 8 sayfa (index.html + hakkimizda, nasil-calisir,
  multimedya, haberler-ve-etkinlikler, erisilebilirlik-bildirimi, iletisim,
  gizlilik-politikasi)
- Paylaşılan CSS sistemi kuruldu (reset, variables, layout, shapes, header,
  hero, buttons, footer)
- `index.html` yeni tasarım diliyle tamamlandı: hero bölümü + 4 kartlık
  özellikler bölümü + kıvrımlı footer

## Sırada ne var (öncelik sırasıyla)

1. `images/hero-phone.png` eksik — gerçek bir telefon mockup görseli
   eklenmeli (şu an kırık görsel placeholder).
2. Diğer 7 sayfa şu an sadece iskelet (başlık + "içerik eklenmedi" yazısı).
   Wix'teki gerçek içerikleri tek tek bu sayfalara taşımak gerekiyor.
3. Yeni tasarım dili (scallop/paper-card/pill) sadece index.html'de var,
   diğer sayfalara da uygulanmalı.
4. Logo şu an sadece metin (`<div class="logo">`), gerçek logo görseli
   eklenebilir.
5. Mobil menü (`.nav-toggle` / `js/nav.js`) şu an sadece açılıp kapanan
   class ekliyor, açılan menünün görünür CSS'i (`.main-nav.is-open`)
   henüz yazılmadı — mobilde menü butonu tıklandığında hiçbir şey
   görünmüyor, bunu tamamlamak lazım.

## Nasıl önizlersin

`index.html`'e çift tıkla ya da VS Code'da Live Server eklentisiyle aç.
