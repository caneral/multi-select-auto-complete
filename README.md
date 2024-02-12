# React Multi-Select Autocomplete Component with Rick and Morty API

Bu proje, Next.js ve TypeScript kullanılarak geliştirilmiş bir multi-select autocomplete bileşenini içermektedir. Bileşen, "Rick and Morty" API'sinden karakterleri aramak ve seçmek için tasarlanmıştır.

## Özellikler

- Multi-select autocomplete bileşeni
- Input alanına yazılan sorgu ile API sorgulaması yapma ve sonuçları bir popup içinde listeleme
- Listelenen sonuçlarda her bir karakter için karakter resmi, isim ve oynadığı bölüm sayısı bilgisini gösterme
- Arama sorgusu için vurgulama
- Seçilen sonuçların input alanına eklenmesi ve kaldırılması
- Klavye gezinme desteği (yön tuşları ve tab kullanarak)
- Loading durumu gösterimi
- Arayüzde exception handling ve hata durumlarının gösterimi
- Tailwind CSS ve Redux Toolkit Query kullanımı

## Kurulum

1. Proje klasörünü yerel makinenize klonlayın.
2. Terminal veya komut istemcisini açın ve proje klasörüne gidin.
3. Gerekli bağımlılıkları yüklemek için `yarn` komutunu çalıştırın.
4. Projeyi başlatmak için `yarn dev` komutunu çalıştırın.

## Kullanım

1. Tarayıcıda proje açıldığında, multi-select autocomplete bileşeni görüntülenecektir.
2. Input alanına istediğiniz karakterin adını yazarak arama yapabilirsiniz.
3. Sonuçlar arasında gezinmek için yön tuşlarını veya fareyi kullanabilirsiniz.
4. Seçmek istediğiniz karaktere gelip Enter tuşuna basarak seçebilirsiniz.
5. Seçilen karakterler input alanında listelenecektir. İstediğiniz karakteri kaldırmak için 'x' düğmesine tıklayabilirsiniz.

## Mimari

- **Components**: React bileşenlerini içerir.
- **Redux**: Redux store ve slice'ları içerir.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
