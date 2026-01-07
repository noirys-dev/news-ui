// Haber detayları için veri
const newsData = {
    1: {
        title: "Yapay Zeka Devrimi: 2026'da Hayatımızı Nasıl Değiştirecek?",
        date: "8 Ocak 2026",
        author: "AI Uzmanı",
        image: "https://picsum.photos/800/400?random=1",
        content: `
            <p>Yapay zeka teknolojileri, sağlık, eğitim ve iş dünyasında devrim yaratmaya hazırlanıyor. Uzmanlar, 2026'nın AI'nin altın yılı olacağını öngörüyor.</p>
            <p>Gelişmiş makine öğrenmesi algoritmaları sayesinde, tıbbi teşhislerde doğruluk oranları artıyor. Eğitimde kişiselleştirilmiş öğrenme deneyimleri sunuluyor.</p>
            <p>İş dünyasında ise otomasyon ve veri analizi, verimliliği artırıyor. Ancak etik kullanım ve iş gücü üzerindeki etkileri tartışılıyor.</p>
            <p>2026'da AI'nin günlük hayatımıza entegrasyonu hızlanacak. Akıllı evler, otonom araçlar ve kişiselleştirilmiş sağlık hizmetleri yaygınlaşacak.</p>
        `
    },
    2: {
        title: "Futbol Şampiyonası Finali Heyecanı",
        date: "8 Ocak 2026",
        author: "Spor Yazarı",
        image: "https://picsum.photos/800/400?random=2",
        content: `
            <p>Milli takım, zorlu maçta galibiyet alarak finale yükseldi. Taraftarlar büyük sevinç yaşıyor.</p>
            <p>Maç boyunca gösterilen performans, takımın potansiyelini ortaya koydu. Teknik direktörün stratejisi başarılı oldu.</p>
            <p>Final maçı, ülkenin en büyük stadyumunda oynanacak. Binlerce taraftarın katılımı bekleniyor.</p>
            <p>Bu zafer, genç oyuncuların motivasyonunu artıracak ve gelecek turnuvalar için umut verici.</p>
        `
    },
    3: {
        title: "Ekonomide Yeni Dönem: Dolar Kuru Düşüşe Geçti",
        date: "8 Ocak 2026",
        author: "Ekonomi Muhabiri",
        image: "https://picsum.photos/800/400?random=3",
        content: `
            <p>Merkez Bankası'nın aldığı tedbirler sonrası döviz kurlarında istikrar sağlandı. Yatırımcılar olumlu tepki verdi.</p>
            <p>Enflasyon oranlarındaki düşüş, ekonomik güveni artırıyor. Uzmanlar, sürdürülebilir büyüme öngörüyor.</p>
            <p>Yabancı yatırımcıların ilgisi artıyor. Borsada yükseliş trendi devam ediyor.</p>
            <p>Gelecek dönemde, istihdam oranlarının artması ve refah seviyesinin yükselmesi bekleniyor.</p>
        `
    },
    4: {
        title: "İklim Değişikliği Zirvesi Sonuçlandı",
        date: "8 Ocak 2026",
        author: "Çevre Yazarı",
        image: "https://picsum.photos/800/400?random=4",
        content: `
            <p>Dünya liderleri, karbon emisyonlarını azaltmak için yeni anlaşmalara imza attı. Gelecek nesiller için umut verici adımlar atıldı.</p>
            <p>Zirvede, yenilenebilir enerji kaynaklarına geçiş hızlandırılacak. Fosil yakıt kullanımının azaltılması planlandı.</p>
            <p>Gelişmekte olan ülkeler için finansal destek paketleri hazırlandı. Teknoloji transferi teşvik edilecek.</p>
            <p>Uzmanlar, bu anlaşmaların küresel ısınmayı 1.5 derece ile sınırlama hedefini desteklediğini belirtiyor.</p>
        `
    },
    5: {
        title: "Yeni Akıllı Telefon Modelleri Piyasaya Sürüldü",
        date: "8 Ocak 2026",
        author: "Teknoloji Editörü",
        image: "https://picsum.photos/800/400?random=5",
        content: `
            <p>Önde gelen teknoloji firmaları, gelişmiş kamera ve pil ömrü ile donatılmış yeni modellerini tanıttı.</p>
            <p>Yeni modellerde yapay zeka destekli kamera sistemleri, gece çekimlerinde mükemmel sonuçlar veriyor.</p>
            <p>Pil ömrü, önceki modellere göre %30 artış gösterdi. Hızlı şarj teknolojisi ile dakikalar içinde tam dolum sağlanıyor.</p>
            <p>Güvenlik özellikleri geliştirildi. Biyometrik kimlik doğrulama ve şifreleme teknolojileri entegre edildi.</p>
        `
    }
};

// URL'den haber ID'sini al
function getNewsId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Haber detaylarını yükle
function loadNewsDetail() {
    const id = getNewsId();
    const news = newsData[id];

    if (news) {
        document.getElementById('news-title').textContent = news.title;
        document.getElementById('news-date').textContent = news.date;
        document.getElementById('news-author').textContent = `Yazar: ${news.author}`;
        document.getElementById('news-image').src = news.image;
        document.getElementById('news-content').innerHTML = news.content;

        // Sayfa başlığını ve URL'yi güncelle
        const slug = createSlug(news.title);
        document.title = news.title + ' - News UI';
        history.pushState(null, news.title, `/haber/${slug}`);
    } else {
        document.getElementById('news-title').textContent = "Haber Bulunamadı";
        document.getElementById('news-content').innerHTML = "<p>Üzgünüz, bu haber bulunamadı.</p>";
        document.title = "Haber Bulunamadı - News UI";
    }
}

// Türkçe karakterleri ASCII'ye çeviren slug oluşturma fonksiyonu
function createSlug(text) {
    const turkishMap = {
        'ç': 'c', 'Ç': 'C',
        'ğ': 'g', 'Ğ': 'G',
        'ı': 'i', 'İ': 'I',
        'ö': 'o', 'Ö': 'O',
        'ş': 's', 'Ş': 'S',
        'ü': 'u', 'Ü': 'U'
    };

    return text
        .split('')
        .map(char => turkishMap[char] || char)
        .join('')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Sayfa yüklenince haber detaylarını yükle
document.addEventListener('DOMContentLoaded', loadNewsDetail);