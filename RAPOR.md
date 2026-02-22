# Personal Website Oluşturma Raporu

**Son düzenlenme tarihi:** Şubat 22, 2026
**Oluşturan:** Ceyda Akın

---

## Giriş

Bu rapor, Web ve Altyapı Ekibi için hazırlanan 1. Alım Görevi kapsamında gerçekleştirilen kişisel website projesini açıklamaktadır. Proje sürecinde modern web teknolojileri kullanılarak bir React uygulaması geliştirilmiş, CI/CD süreçleri kurulmuş ve domain yönetimi gerçekleştirilmiştir.

---

## 1. Proje Yapısı (Project Structure)

Vite kullanılarak oluşturulan React projesinin dosya ve dizin yapısı aşağıdaki gibidir:

| Dosya/Klasör | Açıklama |
|--------------|----------|
| `src/` | Kaynak kodların bulunduğu ana klasör |
| `src/main.jsx` | Uygulamanın giriş noktası - React'ı DOM'a render eder |
| `src/App.jsx` | Ana komponent - React Router yapılandırmasını içerir |
| `src/components/` | Yeniden kullanılabilir UI komponentleri (Navbar, Footer) |
| `src/pages/` | Sayfa komponentleri (Home, About, Contact) |
| `src/assets/` | Vite tarafından işlenen statik dosyalar |
| `public/` | Doğrudan sunulan statik dosyalar (robots.txt, sitemap.xml) |
| `dist/` | Build çıktısı - production için derlenmiş dosyalar |
| `package.json` | Proje bağımlılıkları ve npm scriptleri |
| `vite.config.js` | Vite yapılandırma dosyası |

### Kullanılan Teknolojiler ve Kütüphaneler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 19.2.0 | UI kütüphanesi |
| React DOM | 19.2.0 | React DOM rendering |
| React Router DOM | 7.13.0 | Sayfa yönlendirme |
| Vite | 7.3.1 | Build tool ve dev server |
| ESLint | 9.39.1 | Kod kalitesi kontrolü |

---

## 2. DNS ve Domain Yönetimi

### DNS Nedir?

DNS (Domain Name System), insan tarafından okunabilir domain adlarını (örn: `ceydaakin.com`) bilgisayarların iletişim için kullandığı IP adreslerine (örn: `104.21.234.56`) çeviren sistemdir.

### DNS Kayıt Türleri

| Kayıt Türü | Açıklama | Örnek Kullanım |
|------------|----------|----------------|
| **A Record** | Domain'i IPv4 adresine yönlendirir | `ceydaakin.com → 104.21.234.56` |
| **AAAA Record** | Domain'i IPv6 adresine yönlendirir | `ceydaakin.com → 2606:4700::1` |
| **CNAME Record** | Domain'i başka bir domain'e yönlendirir (alias) | `www.ceydaakin.com → ceydaakin.pages.dev` |
| **TXT Record** | Metin verisi saklar (doğrulama, SPF vb.) | Domain sahipliği doğrulama |
| **MX Record** | E-posta sunucularını belirtir | `ceydaakin.com → mail.ceydaakin.com` |

### A Record (Address Record)
- Domain'i doğrudan bir IP adresine eşler
- Tarayıcıya `ceydaakin.com` yazıldığında, DNS A kaydına bakar ve ilgili IP adresini bulur
- Root domain için kullanılır

### CNAME Record (Canonical Name)
- Bir domain'i başka bir domain'e yönlendiren alias oluşturur
- CloudFlare Pages bu yöntemi kullanır: `www.ceydaakin.com → personal-website.pages.dev`
- Root domain'de (@ veya naked domain) kullanılamaz

### TXT Record (Text Record)
- Rastgele metin verisi saklar
- Yaygın kullanımlar:
  - SPF (e-posta kimlik doğrulama)
  - Domain doğrulama (Google, Apple vb.)
  - DKIM (e-posta imzalama)

### MX Record (Mail Exchange)
- Domain için hangi sunucunun e-posta işleyeceğini belirtir
- Öncelik değeri vardır (düşük sayı = yüksek öncelik)
- iCloud+ için örnek:
  ```
  MX 10 mx1.mail.icloud.com
  MX 10 mx2.mail.icloud.com
  ```

---

## 3. SSL/HTTPS Protokolleri

### SSL Sertifikası Nedir?

SSL (Secure Sockets Layer) sertifikası, tarayıcı ile sunucu arasındaki veri iletişimini şifreleyen dijital sertifikadır.

### HTTP vs HTTPS Karşılaştırması

| Özellik | HTTP | HTTPS |
|---------|------|-------|
| Şifreleme | Yok - veri düz metin olarak gönderilir | Var - SSL/TLS ile şifrelenir |
| Güvenlik | Güvensiz | Güvenli |
| Port | 80 | 443 |
| SEO | Dezavantajlı | Avantajlı |
| Tarayıcı Göstergesi | "Güvenli Değil" uyarısı | Kilit simgesi |

CloudFlare, ücretsiz SSL sertifikası sağlar ve HTTPS'i otomatik olarak etkinleştirir.

---

## 4. Client-Side vs Server-Side Rendering

### Client-Side Rendering (CSR)

Tarayıcı JavaScript'i indirir ve sayfayı istemci tarafında render eder.

**Avantajları:**
- İlk yüklemeden sonra hızlı sayfa geçişleri
- Zengin interaktivite
- Sunucu yükü az

**Dezavantajları:**
- İlk yükleme yavaş (JS indirmesi gerekli)
- SEO için ek çalışma gerekebilir
- JavaScript devre dışıysa çalışmaz

### Server-Side Rendering (SSR)

Sunucu HTML'i oluşturur ve hazır olarak tarayıcıya gönderir.

**Avantajları:**
- Hızlı ilk yükleme
- SEO dostu
- JavaScript olmadan da içerik görüntülenebilir

**Dezavantajları:**
- Sunucu yükü fazla
- Sayfa geçişlerinde tam yenileme gerekebilir

### Karşılaştırma Tablosu

| Özellik | Client-Side (CSR) | Server-Side (SSR) |
|---------|-------------------|-------------------|
| İlk Yükleme | Yavaş | Hızlı |
| Sonraki Navigasyon | Hızlı | Yavaş |
| SEO | Zor | Kolay |
| Sunucu Yükü | Düşük | Yüksek |
| Örnek Framework | React, Vue, Angular | Next.js, Nuxt, PHP |

**Bu proje Client-Side Rendering (CSR) kullanmaktadır.**

---

## 5. Build Süreci ve dist/ Klasörü

### Build Komutu
```bash
npm run build
```

### dist/ Klasör Yapısı

| Dosya | Boyut | Açıklama |
|-------|-------|----------|
| `index.html` | 463 bytes | Tek HTML giriş noktası |
| `assets/index-*.js` | ~239 KB | Tüm JavaScript kodu (bundled) |
| `assets/index-*.css` | ~10 KB | Tüm CSS stilleri (bundled) |
| `robots.txt` | 218 bytes | Arama motoru talimatları |
| `sitemap.xml` | 587 bytes | Site haritası |
| `_redirects` | 190 bytes | SPA routing kuralları |

### Tek HTML + JS Nasıl Tüm Siteyi Çalıştırır?

1. Tarayıcı sunucudan `index.html` dosyasını ister
2. `index.html` içinde boş bir `<div id="root"></div>` ve JS bundle referansı bulunur
3. JavaScript bundle indirilir ve çalıştırılır
4. React, `#root` elementini "hydrate" eder ve tüm uygulamayı render eder
5. Kullanıcı `/about` sayfasına gittiğinde, React Router bunu tarayıcıda işler (sunucuya istek gitmez)

Bu yöntem **Single Page Application (SPA)** olarak adlandırılır.

---

## 6. CI/CD Süreci

### CI/CD Nedir?

- **CI (Continuous Integration):** Kod değişikliklerinin otomatik olarak test edilmesi ve birleştirilmesi
- **CD (Continuous Deployment):** Onaylanan değişikliklerin otomatik olarak canlıya alınması

### CloudFlare Pages ile CI/CD Akışı

```
Local Değişiklik → git commit → git push → GitHub → CloudFlare Pages → Otomatik Build → Canlı Site
```

### Adımlar:

1. Localinizde kod değişikliği yapın
2. `git add .` ile değişiklikleri stage edin
3. `git commit -m "mesaj"` ile commit oluşturun
4. `git push` ile GitHub'a gönderin
5. CloudFlare Pages otomatik olarak:
   - Yeni commit'i algılar
   - `npm run build` komutunu çalıştırır
   - `dist/` klasörünü deploy eder
6. Değişiklikler canlı sitede görünür

### _redirects Dosyası

SPA uygulamalarında tüm route'lar aynı `index.html` dosyasına yönlendirilmelidir:

```
/*    /index.html   200
```

Bu olmadan `/about` sayfasına doğrudan gidildiğinde 404 hatası alınır.

---

## 7. robots.txt ve sitemap.xml

### robots.txt

Arama motoru botlarına hangi sayfaları tarayabileceklerini söyler:

```
User-agent: *
Allow: /
Disallow:
Sitemap: https://ceydaakin.com/sitemap.xml
```

### sitemap.xml

Sitenin tüm sayfalarını listeler, arama motorlarının indekslemesine yardımcı olur:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ceydaakin.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ceydaakin.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ceydaakin.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 8. Kurulum Adımları Özeti

### Domain Satın Alma (Natro)
1. natro.com hesabı oluştur
2. Domain ara ve satın al
3. Nameserver ayarlarını not al

### CloudFlare DNS Kurulumu
1. cloudflare.com hesabı oluştur
2. Domain ekle
3. CloudFlare nameserver'larını al
4. Natro'da nameserver'ları CloudFlare'e yönlendir
5. DNS propagasyonu bekle (1-24 saat)

### CloudFlare Pages Deployment
1. Workers & Pages → Create Application
2. GitHub reposunu bağla
3. Build ayarları:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy et
5. Custom domain ekle

---

## Sonuç

Bu proje kapsamında:

- React + Vite ile modern bir web uygulaması geliştirildi
- 3 sayfa (Home, About, Contact) ile responsive tasarım oluşturuldu
- Git/GitHub ile versiyon kontrolü sağlandı
- DNS ve domain yönetimi öğrenildi
- CloudFlare Pages ile CI/CD süreci kuruldu
- SEO için robots.txt ve sitemap.xml eklendi

Proje GitHub'da barındırılmaktadır: https://github.com/ceydaakin/personal-website

---

**Teşekkürler**
