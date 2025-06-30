# 🧾 Adisyon Template Uygulaması

Modern ve kullanıcı dostu bir adisyon/fiş template oluşturucu uygulaması. HTML, CSS ve JavaScript teknolojileri kullanılarak geliştirilmiştir.

## ✨ Özellikler

### 🏢 Şirket Bilgileri
- **Logo yükleme** - Custom logo veya varsayılan logo kullanımı
- **Şirket adı** - Özelleştirilebilir font, boyut ve kalınlık
- **İletişim bilgileri** - Adres, telefon, email, vergi numarası
- **Düzenli layout** - Sol/sağ taraf düzeni ile profesyonel görünüm

### 🎨 Font Kontrolü
- **5 farklı font ailesi** - Roboto, Open Sans, Lato, Montserrat, Poppins
- **Font boyutu** - 8px-72px arası ayarlanabilir
- **Font kalınlığı** - Normal veya kalın seçenekleri
- **Her alan için ayrı** - Bağımsız font kontrolleri

### 👁️ Görünürlük Kontrolleri
- **Toggle switchler** - Her alan için açma/kapama
- **Canlı önizleme** - Anında görünüm değişikliği
- **Akıllı layout** - Gizlenen alanlar otomatik ayarlanır

### 📄 Adisyon İçeriği
- **Tablo formatı** - Düzenli ürün listesi
- **Monospace font** - Kolay okunabilir dizilim
- **Örnek veriler** - Hazır template içeriği
- **Özelleştirilebilir** - İstediğiniz içerik ekleyebilirsiniz

### 💰 Finansal Hesaplamalar
- **Ara toplam** - Manuel giriş
- **KDV hesaplama** - Otomatik %18 veya özel oran
- **Genel toplam** - Otomatik hesaplama
- **Türk Lirası** - TL sembolü ile gösterim

### 💾 Otomatik Kayıt
- **LocalStorage** - Tüm ayarlar otomatik kaydedilir
- **Sayfa yenileme** - Veriler korunur
- **5 saniyede bir** - Otomatik kaydetme

### 🖨️ Yazdırma & Export
- **Print fonksiyonu** - Ctrl+P veya buton ile
- **PDF export** - Tarayıcı print to PDF
- **Responsive** - Tüm cihazlarda uyumlu

## 🚀 Kullanım

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/[username]/adisyon-template.git
   cd adisyon-template
   ```

2. **Tarayıcıda açın:**
   ```bash
   # Basitçe index.html dosyasını tarayıcıda açın
   start index.html  # Windows
   open index.html   # macOS
   ```

3. **Şirket bilgilerini doldurun**
4. **Adisyon içeriğini düzenleyin**
5. **Font ve görünürlük ayarlarını yapın**
6. **Yazdır butonuna tıklayın**

## 📁 Proje Yapısı

```
adisyon-template/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript işlevselliği
└── README.md           # Proje dokümantasyonu
```

## 🛠️ Teknolojiler

- **HTML5** - Modern markup
- **CSS3** - Flexbox, Grid, Responsive Design
- **JavaScript (ES6+)** - DOM manipulation, LocalStorage
- **SVG** - Vektörel logo grafikleri
- **Google Fonts** - Zengin font kütüphanesi

## 🎯 Kullanım Alanları

- ☕ **Kafeler & Restoranlar** - Adisyon/fiş oluşturma
- 🛒 **Perakende** - Satış makbuzu
- 🏢 **Küçük işletmeler** - Fatura template'i
- 📋 **Hizmet sektörü** - Hizmet makbuzu
- 💼 **Freelancers** - İş faturaları

## 📱 Responsive Tasarım

- **Desktop** - İki panel görünüm (editor + preview)
- **Tablet** - Uyumlu tek sütun layout
- **Mobile** - Kompakt dikey düzenleme

## 🔧 Geliştirici Notları

### Font Sistemi
```javascript
// Font uygulama fonksiyonu
applyFontStyles(targetSelector, fontSelector, sizeSelector, weightSelector)
```

### Görünürlük Kontrolü
```javascript
// Toggle switch event handlers
$('#logo-visibility').addEventListener('change', updateVisibility);
```

### LocalStorage Schema
```javascript
{
  companyName: string,
  fonts: { company: string, companySize: string, ... },
  visibility: { logo: boolean, companyName: boolean, ... }
}
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**Tuna** - *Initial work*

## 🙏 Teşekkürler

- Google Fonts - Font kütüphanesi için
- SVG community - Logo tasarım inspirasyonu için

---

⭐ **Bu projeyi beğendiyseniz yıldızlamayı unutmayın!** 