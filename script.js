// DOM elementi seçici fonksiyonu
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Uygulama başlatma
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Varsayılan değerleri ayarla
    setDefaultValues();
    
    // Event listener'ları ekle
    setupEventListeners();
    
    // İlk önizlemeyi güncelle
    updatePreview();
}

function setDefaultValues() {
    // Bugünün tarihini ayarla
    const today = new Date().toISOString().split('T')[0];
    $('#date-input').value = today;
    
    // Varsayılan KDV oranını ayarla
    $('#kdv-amount').value = 18;
    
    // Varsayılan şirket bilgileri
    $('#company-name').value = 'Cafe Latte';
    $('#company-address').value = 'Bağdat Caddesi No: 123, Kadıköy/İstanbul';
    $('#company-phone').value = '0216 123 45 67';
    $('#company-email').value = 'info@cafelatte.com';
    $('#company-tax-number').value = '1234567890';
    
    // Varsayılan footer metni
    $('#footer-text').value =
        'İyi günler, teşekkür ederiz.\nBizi tercih ettiğiniz için minnettarız.';
    
    // Varsayılan adisyon içeriği
    $('#receipt-content').value = `Ice Latte Mocha 90 x 2
Cappuccino 75 x 1
Cheesecake 65 x 1
Servis Ücreti 25 x 1`;
    
    // Varsayılan ara toplam (örnek hesaplama)
    $('#subtotal').value = 345;
    
    // Varsayılan font boyutları
    $('#company-font-size').value = 24;
    $('#address-font-size').value = 12;
    $('#phone-font-size').value = 12;
    $('#email-font-size').value = 12;
    $('#tax-number-font-size').value = 12;
    $('#date-font-size').value = 14;
    $('#content-font-size').value = 14;
    $('#kdv-font-size').value = 14;
    $('#footer-font-size').value = 12;
    
    // Varsayılan logoyu yükle
    loadDefaultLogo();
}

function loadDefaultLogo() {
    // SVG logo content
    const logoSvg = `<svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
  <!-- Kahve fincanı -->
  <g transform="translate(20, 15)">
    <!-- Fincan gövdesi -->
    <path d="M10 20 Q10 15 15 15 L55 15 Q60 15 60 20 L58 45 Q58 50 53 50 L17 50 Q12 50 12 45 Z" 
          fill="#8B4513" stroke="#654321" stroke-width="1"/>
    
    <!-- Fincan içi (kahve) -->
    <ellipse cx="35" cy="18" rx="22" ry="3" fill="#3E2723"/>
    
    <!-- Fincan kulpu -->
    <path d="M60 25 Q70 25 70 35 Q70 40 65 40 Q62 40 60 38" 
          fill="none" stroke="#654321" stroke-width="2"/>
    
    <!-- Tabak -->
    <ellipse cx="35" cy="55" rx="30" ry="5" fill="#D2B48C" stroke="#8B7355" stroke-width="1"/>
    
    <!-- Steam (buhar) -->
    <path d="M25 12 Q27 8 25 4 Q23 8 25 12" fill="#E0E0E0" opacity="0.7"/>
    <path d="M35 10 Q37 6 35 2 Q33 6 35 10" fill="#E0E0E0" opacity="0.7"/>
    <path d="M45 12 Q47 8 45 4 Q43 8 45 12" fill="#E0E0E0" opacity="0.7"/>
  </g>
  
  <!-- Cafe yazısı -->
  <text x="85" y="35" font-family="serif" font-size="14" font-weight="bold" fill="#8B4513">Cafe</text>
  <text x="85" y="50" font-family="serif" font-size="12" fill="#8B4513">Latte</text>
</svg>`;
    
    // Editor panelindeki önizleme
    const logoPreview = $('#logo-preview');
    logoPreview.innerHTML = logoSvg;
    
    // Receipt önizlemesindeki logo
    const previewLogo = $('#preview-logo');
    previewLogo.innerHTML = logoSvg;
}

function setupEventListeners() {
    // Text input değişiklikleri
    $('#company-name').addEventListener('input', updatePreview);
    $('#company-address').addEventListener('input', updatePreview);
    $('#company-phone').addEventListener('input', updatePreview);
    $('#company-email').addEventListener('input', updatePreview);
    $('#company-tax-number').addEventListener('input', updatePreview);
    $('#date-input').addEventListener('change', updatePreview);
    $('#receipt-content').addEventListener('input', updatePreview);
    $('#kdv-amount').addEventListener('input', updatePreview);
    $('#subtotal').addEventListener('input', updatePreview);
    $('#footer-text').addEventListener('input', updatePreview);
    
    // Font seçici değişiklikleri
    $('#company-font').addEventListener('change', updatePreview);
    $('#company-font-size').addEventListener('input', updatePreview);
    $('#company-font-weight').addEventListener('change', updatePreview);
    
    $('#address-font').addEventListener('change', updatePreview);
    $('#address-font-size').addEventListener('input', updatePreview);
    $('#address-font-weight').addEventListener('change', updatePreview);
    
    $('#phone-font').addEventListener('change', updatePreview);
    $('#phone-font-size').addEventListener('input', updatePreview);
    $('#phone-font-weight').addEventListener('change', updatePreview);
    
    $('#email-font').addEventListener('change', updatePreview);
    $('#email-font-size').addEventListener('input', updatePreview);
    $('#email-font-weight').addEventListener('change', updatePreview);
    
    $('#tax-number-font').addEventListener('change', updatePreview);
    $('#tax-number-font-size').addEventListener('input', updatePreview);
    $('#tax-number-font-weight').addEventListener('change', updatePreview);
    
    $('#date-font').addEventListener('change', updatePreview);
    $('#date-font-size').addEventListener('input', updatePreview);
    $('#date-font-weight').addEventListener('change', updatePreview);
    
    $('#content-font').addEventListener('change', updatePreview);
    $('#content-font-size').addEventListener('input', updatePreview);
    $('#content-font-weight').addEventListener('change', updatePreview);
    
    $('#kdv-font').addEventListener('change', updatePreview);
    $('#kdv-font-size').addEventListener('input', updatePreview);
    $('#kdv-font-weight').addEventListener('change', updatePreview);
    
    $('#footer-font').addEventListener('change', updatePreview);
    $('#footer-font-size').addEventListener('input', updatePreview);
    $('#footer-font-weight').addEventListener('change', updatePreview);
    
    // Görünürlük toggle'ları
    $('#logo-visibility').addEventListener('change', updateVisibility);
    $('#company-name-visibility').addEventListener('change', updateVisibility);
    $('#address-visibility').addEventListener('change', updateVisibility);
    $('#phone-visibility').addEventListener('change', updateVisibility);
    $('#email-visibility').addEventListener('change', updateVisibility);
    $('#tax-number-visibility').addEventListener('change', updateVisibility);
    $('#date-visibility').addEventListener('change', updateVisibility);
    $('#content-visibility').addEventListener('change', updateVisibility);
    $('#kdv-visibility').addEventListener('change', updateVisibility);
    $('#footer-visibility').addEventListener('change', updateVisibility);
    
    // Logo upload
    $('#logo-upload').addEventListener('change', handleLogoUpload);
    
    // Yazdırma butonu
    $('#print-btn').addEventListener('click', printReceipt);
}

function updatePreview() {
    updateCompanyName();
    updateCompanyInfo();
    updateDate();
    updateContent();
    updateTotals();
    updateFooter();
    updateFonts();
    updateVisibility();
}

    function updateCompanyName() {
    const companyName = $('#company-name').value || 'Şirket Adı';
    $('#preview-company').textContent = companyName;
    }

    function updateCompanyInfo() {
    const address = $('#company-address').value;
    const phone = $('#company-phone').value;
    const email = $('#company-email').value;
    const taxNumber = $('#company-tax-number').value;
    
    $('#preview-address').textContent = address ? `Adres: ${address}` : '';
    $('#preview-phone').textContent = phone ? `Tel: ${phone}` : '';
    $('#preview-email').textContent = email ? `E-mail: ${email}` : '';
    $('#preview-tax-number').textContent = taxNumber ? `Vergi No: ${taxNumber}` : '';
    }

function updateDate() {
    const dateValue = $('#date-input').value;
    if (dateValue) {
        const formattedDate = new Date(dateValue).toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        $('#preview-date').textContent = `Tarih: ${formattedDate}`;
    } else {
        $('#preview-date').textContent = 'Tarih: ';
    }
}

function updateContent() {
    const defaultContent = `Ice Latte Mocha 90 x 2
Cappuccino 75 x 1
Cheesecake 65 x 1
Servis Ücreti 25 x 1`;
    
    const content = $('#receipt-content').value || defaultContent;
    
    // Adisyon içeriğini satır satır işle ve format düzenle
    const lines = content.split('\n').filter(line => line.trim() !== '');
    const formattedContent = lines.map(line => {
        // Satırları ürün adı ve fiyat x miktar olarak ayır
        const trimmedLine = line.trim();
        if (trimmedLine === '') return '';
        
        // Son kısmı bul (fiyat x miktar)
        const matches = trimmedLine.match(/^(.+?)\s+(\d+\s*x\s*\d+)$/);
        if (matches) {
            const productName = matches[1].trim();
            const priceQuantity = matches[2];
            return `<div class="receipt-line"><span class="product-name">${productName}</span><span class="price-quantity">${priceQuantity}</span></div>`;
        } else {
            // Eğer format uymazsa olduğu gibi göster
            return `<div class="receipt-line"><span class="product-name">${trimmedLine}</span></div>`;
        }
    }).join('');
    
    $('#preview-content').innerHTML = formattedContent;
    
    // Adisyon içeriği stilini her zaman uygula
    $('#preview-content').style.fontFamily = 'Courier New, monospace';
    $('#preview-content').style.background = '#fafafa';
    $('#preview-content').style.padding = '15px';
    $('#preview-content').style.borderRadius = '5px';
    $('#preview-content').style.border = '1px solid #eee';
    $('#preview-content').style.letterSpacing = '0.5px';
    $('#preview-content').style.lineHeight = '1.8';
}

function updateTotals() {
    const subtotal = parseFloat($('#subtotal').value) || 0;
    const kdvRate = parseFloat($('#kdv-amount').value) || 0;
    
    const kdvAmount = (subtotal * kdvRate) / 100;
    const total = subtotal + kdvAmount;
    
    $('#preview-subtotal').textContent = `${subtotal.toFixed(2)} ₺`;
    $('#preview-kdv-rate').textContent = kdvRate.toFixed(1);
    $('#preview-kdv-amount').textContent = `${kdvAmount.toFixed(2)} ₺`;
    $('#preview-total').textContent = `${total.toFixed(2)} ₺`;
}

function updateFooter() {
    const footerText = $('#footer-text').value || 'İyi günler, teşekkür ederiz.';
    $('#preview-footer').textContent = footerText;
}

function updateFonts() {
    // Şirket adı font
    applyFontStyles('#preview-company', '#company-font', '#company-font-size', '#company-font-weight');
    
    // Şirket bilgileri fontları
    applyFontStyles('#preview-address', '#address-font', '#address-font-size', '#address-font-weight');
    applyFontStyles('#preview-phone', '#phone-font', '#phone-font-size', '#phone-font-weight');
    applyFontStyles('#preview-email', '#email-font', '#email-font-size', '#email-font-weight');
    applyFontStyles('#preview-tax-number', '#tax-number-font', '#tax-number-font-size', '#tax-number-font-weight');
    
    // Tarih font
    applyFontStyles('#preview-date', '#date-font', '#date-font-size', '#date-font-weight');
    
    // İçerik font
    applyFontStyles('#preview-content', '#content-font', '#content-font-size', '#content-font-weight');
    
    // Adisyon içeriği özel stili (font seçiminden sonra uygulanır)
    // Her zaman Courier New font kullan
    $('#preview-content').style.fontFamily = 'Courier New, monospace';
    
    // KDV/Toplam font - tüm child elementlere uygula
    const kdvFont = $('#kdv-font').value;
    const kdvSize = $('#kdv-font-size').value || '14';
    const kdvWeight = $('#kdv-font-weight').value;
    
    const receiptTotals = $('.receipt-totals');
    receiptTotals.style.fontFamily = `'${kdvFont}', sans-serif`;
    receiptTotals.style.fontSize = `${kdvSize}px`;
    receiptTotals.style.fontWeight = kdvWeight;
    
    // Footer font
    applyFontStyles('#preview-footer', '#footer-font', '#footer-font-size', '#footer-font-weight');
}

function applyFontStyles(targetSelector, fontSelector, sizeSelector, weightSelector) {
    const element = $(targetSelector);
    if (!element) return;
    
    const fontFamily = $(fontSelector).value;
    const fontSize = $(sizeSelector).value;
    const fontWeight = $(weightSelector).value;
    
    element.style.fontFamily = `'${fontFamily}', sans-serif`;
    if (fontSize) {
        element.style.fontSize = `${fontSize}px`;
    }
    element.style.fontWeight = fontWeight;
}

function updateVisibility() {
    // Logo görünürlüğü
    const logoVisible = $('#logo-visibility').checked;
    $('#preview-logo').style.display = logoVisible ? 'flex' : 'none';
    
    // Şirket adı görünürlüğü
    const companyNameVisible = $('#company-name-visibility').checked;
    $('#preview-company').style.display = companyNameVisible ? 'block' : 'none';
    
    // Adres görünürlüğü
    const addressVisible = $('#address-visibility').checked;
    $('#preview-address').style.display = addressVisible ? 'block' : 'none';
    
    // Telefon görünürlüğü
    const phoneVisible = $('#phone-visibility').checked;
    $('#preview-phone').style.display = phoneVisible ? 'block' : 'none';
    
    // Email görünürlüğü
    const emailVisible = $('#email-visibility').checked;
    $('#preview-email').style.display = emailVisible ? 'block' : 'none';
    
    // Vergi numarası görünürlüğü
    const taxNumberVisible = $('#tax-number-visibility').checked;
    $('#preview-tax-number').style.display = taxNumberVisible ? 'block' : 'none';
    
    // Tarih görünürlüğü
    const dateVisible = $('#date-visibility').checked;
    $('#preview-date').style.display = dateVisible ? 'block' : 'none';
    
    // İçerik görünürlüğü
    const contentVisible = $('#content-visibility').checked;
    $('#preview-content').style.display = contentVisible ? 'block' : 'none';
    
    // KDV görünürlüğü
    const kdvVisible = $('#kdv-visibility').checked;
    $('.receipt-totals').style.display = kdvVisible ? 'block' : 'none';
    
    // Footer görünürlüğü
    const footerVisible = $('#footer-visibility').checked;
    $('#preview-footer').style.display = footerVisible ? 'block' : 'none';
    
    // Company details container'ını kontrol et
    updateCompanyDetailsVisibility();
}

function updateCompanyDetailsVisibility() {
    const addressVisible = $('#address-visibility').checked;
    const phoneVisible = $('#phone-visibility').checked;
    const taxNumberVisible = $('#tax-number-visibility').checked;
    const dateVisible = $('#date-visibility').checked;
    
    // Sol ve sağ taraftaki alanların görünürlüğünü kontrol et
    const leftSideVisible = addressVisible || taxNumberVisible;
    const rightSideVisible = phoneVisible || dateVisible;
    
    // Eğer hiçbir alan görünür değilse container'ı gizle
    const companyDetails = document.querySelector('.company-details');
    if (companyDetails) {
        companyDetails.style.display = (leftSideVisible || rightSideVisible) ? 'flex' : 'none';
    }
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Dosya türü kontrolü
        if (!file.type.startsWith('image/')) {
            alert('Lütfen geçerli bir resim dosyası seçin.');
            return;
        }
        
        // Dosya boyutu kontrolü (2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('Dosya boyutu 2MB\'dan küçük olmalıdır.');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '80px';
            img.style.objectFit = 'contain';
            
            // Editor panelindeki önizleme
            const logoPreview = $('#logo-preview');
            logoPreview.innerHTML = '';
            logoPreview.appendChild(img.cloneNode());
            
            // Receipt önizlemesindeki logo
            const previewLogo = $('#preview-logo');
            previewLogo.innerHTML = '';
            previewLogo.appendChild(img.cloneNode());
            
            // Logo bilgisini localStorage'a kaydet
            localStorage.setItem('customLogo', e.target.result);
        };
        
        reader.readAsDataURL(file);
    }
}

    function printReceipt() {
    // Yazdırma öncesi optimizasyon
    const originalTitle = document.title;
    document.title = 'Adiyon - ' + ($('#company-name').value || 'Şirket');
    
    // Print dialog'ını aç
    window.print();
    
    // Title'ı eski haline döndür
    document.title = originalTitle;
}

    // Klavye kısayolları
   document.addEventListener('keydown', function(e) {
    // Ctrl+P ile yazdırma
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printReceipt();
    }
    
    // Esc ile input alanlarının focus'unu kaldır
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
});

// Sayfa yüklenirken scroll pozisyonunu sıfırla
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Responsive font ayarları
function adjustFontSizes() {
    const receipt = $('#receipt-preview');
    const containerWidth = receipt.offsetWidth;
    
    if (containerWidth < 350) {
        receipt.style.fontSize = '12px';
    } else if (containerWidth < 400) {
        receipt.style.fontSize = '13px';
    } else {
        receipt.style.fontSize = '14px';
    }

}

// Pencere yeniden boyutlandığında font boyutlarını ayarla
window.addEventListener('resize', adjustFontSizes);

// Form validasyonu
function validateForm() {
    const subtotal = parseFloat($('#subtotal').value);
    const kdvRate = parseFloat($('#kdv-amount').value);
    
    if (subtotal < 0) {
        $('#subtotal').value = 0;
        updatePreview();
    }
    
    if (kdvRate < 0 || kdvRate > 100) {
        $('#kdv-amount').value = Math.max(0, Math.min(100, kdvRate));
        updatePreview();
    }
}

// Input validasyonu event listener'ları
$('#subtotal').addEventListener('blur', validateForm);
$('#kdv-amount').addEventListener('blur', validateForm);

// Otomatik kaydetme (localStorage)
function saveToLocalStorage() {
    const formData = {
        companyName: $('#company-name').value,
        companyAddress: $('#company-address').value,
        companyPhone: $('#company-phone').value,
        companyEmail: $('#company-email').value,
        companyTaxNumber: $('#company-tax-number').value,
        date: $('#date-input').value,
        content: $('#receipt-content').value,
        kdvAmount: $('#kdv-amount').value,
        subtotal: $('#subtotal').value,
        footer: $('#footer-text').value,
        fonts: {
            company: $('#company-font').value,
            companySize: $('#company-font-size').value,
            companyWeight: $('#company-font-weight').value,
            address: $('#address-font').value,
            addressSize: $('#address-font-size').value,
            addressWeight: $('#address-font-weight').value,
            phone: $('#phone-font').value,
            phoneSize: $('#phone-font-size').value,
            phoneWeight: $('#phone-font-weight').value,
            email: $('#email-font').value,
            emailSize: $('#email-font-size').value,
            emailWeight: $('#email-font-weight').value,
            taxNumber: $('#tax-number-font').value,
            taxNumberSize: $('#tax-number-font-size').value,
            taxNumberWeight: $('#tax-number-font-weight').value,
            date: $('#date-font').value,
            dateSize: $('#date-font-size').value,
            dateWeight: $('#date-font-weight').value,
            content: $('#content-font').value,
            contentSize: $('#content-font-size').value,
            contentWeight: $('#content-font-weight').value,
            kdv: $('#kdv-font').value,
            kdvSize: $('#kdv-font-size').value,
            kdvWeight: $('#kdv-font-weight').value,
            footer: $('#footer-font').value,
            footerSize: $('#footer-font-size').value,
            footerWeight: $('#footer-font-weight').value
        },
        visibility: {
            logo: $('#logo-visibility').checked,
            companyName: $('#company-name-visibility').checked,
            address: $('#address-visibility').checked,
            phone: $('#phone-visibility').checked,
            email: $('#email-visibility').checked,
            taxNumber: $('#tax-number-visibility').checked,
            date: $('#date-visibility').checked,
            content: $('#content-visibility').checked,
            kdv: $('#kdv-visibility').checked,
            footer: $('#footer-visibility').checked
        }
    };
    
    localStorage.setItem('adiyonTemplate', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('adiyonTemplate');
    
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            $('#company-name').value = data.companyName || '';
            $('#company-address').value = data.companyAddress || '';
            $('#company-phone').value = data.companyPhone || '';
            $('#company-email').value = data.companyEmail || '';
            $('#company-tax-number').value = data.companyTaxNumber || '';
            $('#date-input').value = data.date || '';
            $('#receipt-content').value = data.content || '';
            $('#kdv-amount').value = data.kdvAmount || 18;
            $('#subtotal').value = data.subtotal || '';
            $('#footer-text').value = data.footer || '';
            
            if (data.fonts) {
                $('#company-font').value = data.fonts.company || 'Roboto';
                $('#company-font-size').value = data.fonts.companySize || '24';
                $('#company-font-weight').value = data.fonts.companyWeight || 'normal';
                
                $('#address-font').value = data.fonts.address || 'Roboto';
                $('#address-font-size').value = data.fonts.addressSize || '12';
                $('#address-font-weight').value = data.fonts.addressWeight || 'normal';
                
                $('#phone-font').value = data.fonts.phone || 'Roboto';
                $('#phone-font-size').value = data.fonts.phoneSize || '12';
                $('#phone-font-weight').value = data.fonts.phoneWeight || 'normal';
                
                $('#email-font').value = data.fonts.email || 'Roboto';
                $('#email-font-size').value = data.fonts.emailSize || '12';
                $('#email-font-weight').value = data.fonts.emailWeight || 'normal';
                
                $('#tax-number-font').value = data.fonts.taxNumber || 'Roboto';
                $('#tax-number-font-size').value = data.fonts.taxNumberSize || '12';
                $('#tax-number-font-weight').value = data.fonts.taxNumberWeight || 'normal';
                
                $('#date-font').value = data.fonts.date || 'Roboto';
                $('#date-font-size').value = data.fonts.dateSize || '14';
                $('#date-font-weight').value = data.fonts.dateWeight || 'normal';
                
                $('#content-font').value = data.fonts.content || 'Roboto';
                $('#content-font-size').value = data.fonts.contentSize || '14';
                $('#content-font-weight').value = data.fonts.contentWeight || 'normal';
                
                $('#kdv-font').value = data.fonts.kdv || 'Roboto';
                $('#kdv-font-size').value = data.fonts.kdvSize || '14';
                $('#kdv-font-weight').value = data.fonts.kdvWeight || 'normal';
                
                $('#footer-font').value = data.fonts.footer || 'Roboto';
                $('#footer-font-size').value = data.fonts.footerSize || '12';
                $('#footer-font-weight').value = data.fonts.footerWeight || 'normal';
            }
            
            if (data.visibility) {
                $('#logo-visibility').checked = data.visibility.logo !== false;
                $('#company-name-visibility').checked = data.visibility.companyName !== false;
                $('#address-visibility').checked = data.visibility.address !== false;
                $('#phone-visibility').checked = data.visibility.phone !== false;
                $('#email-visibility').checked = data.visibility.email !== false;
                $('#tax-number-visibility').checked = data.visibility.taxNumber !== false;
                $('#date-visibility').checked = data.visibility.date !== false;
                $('#content-visibility').checked = data.visibility.content !== false;
                $('#kdv-visibility').checked = data.visibility.kdv !== false;
                $('#footer-visibility').checked = data.visibility.footer !== false;
            }
            
            updatePreview();
        } catch (e) {
            console.warn('Kaydedilen veri yüklenemedi:', e);
        }
    }
    
    // Custom logo varsa onu yükle, yoksa default logoyu kullan
    loadSavedLogo();
}

function loadSavedLogo() {
    const savedLogo = localStorage.getItem('customLogo');
    
    if (savedLogo) {
        // Kaydedilmiş custom logo varsa onu yükle
        const img = document.createElement('img');
        img.src = savedLogo;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '80px';
        img.style.objectFit = 'contain';
        
        // Editor panelindeki önizleme
        const logoPreview = $('#logo-preview');
        logoPreview.innerHTML = '';
        logoPreview.appendChild(img.cloneNode());
        
        // Receipt önizlemesindeki logo
        const previewLogo = $('#preview-logo');
        previewLogo.innerHTML = '';
        previewLogo.appendChild(img.cloneNode());
    } else {
        // Custom logo yoksa default logoyu yükle
        loadDefaultLogo();
    }
}

// Auto-save her 5 saniyede bir
setInterval(saveToLocalStorage, 5000);

// Sayfa yüklendiğinde kaydedilen verileri yükle
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(loadFromLocalStorage, 100);
}); 