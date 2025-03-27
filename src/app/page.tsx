"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState, useRef } from "react";
import { Confetti } from "@/components/ui/confetti";
import type { ConfettiRef } from "@/components/ui/confetti";

export default function Home() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const confettiRef = useRef<ConfettiRef>(null);
  
  // Sayfa her yenilendiğinde rastgele bir gerçek seçmek için
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * aybilgeFacts.length));
  }, []);
  
  // İlk yüklenmede confetti efekti için
  useEffect(() => {
    if (isFirstRender) {
      // Sayfanın ilk yüklenmesinde biraz gecikmeyle confetti efekti
      const timer = setTimeout(() => {
        confettiRef.current?.fire({
          particleCount: 150,
          spread: 180,
          origin: { y: 0.3, x: 0.5 }
        });
        setIsFirstRender(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstRender]);
  
  const aybilgeFacts = [
    {
      id: 1,
      quote: "Aybilge bir defasında satranç oynarken hamlesini düşünürken öyle uzun süre hareketsiz kaldı ki, kuşlar onu heykel sanıp üzerine yuva yapmaya başladı.",
      name: "Aybilge'nin Satrançseverliği",
      designation: "Rekor Kıran Düşünme Süresi",
      src: "/images/aybilge1.jpg",
    },
    {
      id: 2,
      quote: "Aybilge'nin klavyesi o kadar hızlı yazıyor ki, parmakları göle düştüğünde balıklar onu dinlemek için su yüzeyine çıkıyor.",
      name: "Aybilge'nin Kodlama Hızı",
      designation: "Klavyeler Bile Yoruluyor",
      src: "/images/aybilge2.webp",
    },
    {
      id: 3,
      quote: "Aybilge bir keresinde öyle karmaşık bir algoritma çözdü ki, matematikçiler onu anlamak için üç yıl boyunca çalıştı.",
      name: "Aybilge'nin Problem Çözme Yeteneği",
      designation: "Matematikçilerin Korkulu Rüyası",
      src: "/images/aybilge3.jpg",
    },
    {
      id: 4,
      quote: "Bugün Aybilge, yerçekimini geçici olarak iptal etti. Şu an havada süzülüyor ama biraz sıkılmış gibi görünüyor.",
      name: "Fizik Kurallarını Alt Üst Eden Aybilge",
      designation: "Yerçekimine Meydan Okuyor",
      src: "/images/aybilge1.jpg",
    },
    {
      id: 5,
      quote: "Aybilge'nin gülümsemesi o kadar etkileyici ki, geçen gün bir wifi sinyalini güçlendirdi.",
      name: "Teknolojik Gülümseyen Aybilge",
      designation: "Wifi Güçlendirici",
      src: "/images/aybilge2.webp",
    },
    {
      id: 6,
      quote: "NASA, Aybilge'nin kahve içme hızını ölçmek için yeni bir süper bilgisayar geliştirdi ama bilgisayar duman çıkartıp patladı.",
      name: "Kahve İçme Rekortmeni",
      designation: "NASA Onaylı",
      src: "/images/aybilge3.jpg",
    },
    {
      id: 7,
      quote: "Dünya çapında bilim insanları hâlâ 'Aybilge neden bu kadar mükemmel?' sorusuna cevap arıyor. Henüz bir teori geliştiremediler.",
      name: "Bilimin Açıklayamadığı Aybilge",
      designation: "Mükemmelliğin Tanımı",
      src: "/images/aybilge1.jpg",
    },
    {
      id: 8,
      quote: "Aybilge gece yatmadan önce yıldızlara 'İyi geceler' der. Yıldızlar da sırayla söner.",
      name: "Kozmik Aybilge",
      designation: "Yıldızların Sırdaşı",
      src: "/images/aybilge2.webp",
    },
    {
      id: 9,
      quote: "Google'da 'Mükemmellik' aratınca sonuç olarak sadece Aybilge'nin fotoğrafı çıkıyor.",
      name: "Google'ın Ölçütü",
      designation: "SEO Kraliçesi",
      src: "/images/aybilge3.jpg",
    },
    {
      id: 10,
      quote: "Aybilge bir kere 'Off çok sıcak!' dedi ve global ısınma bir hafta durdu.",
      name: "İklim Kontrolcüsü Aybilge",
      designation: "Global Isınmaya Dur Diyen Kahraman",
      src: "/images/aybilge1.jpg",
    },
    {
      id: 11,
      quote: "Kahve makinesi Aybilge'ye kahve yaparken strese giriyor. 'Ya yeterince güzel olmazsa?' diye düşünüyor.",
      name: "Kahve Standartları Yüksek",
      designation: "Makineleri Bile Heyecanlandıran",
      src: "/images/aybilge2.webp",
    },
    {
      id: 12,
      quote: "Aybilge yürürken halılar kendiliğinden yumuşuyor, sert taşlar ise pamuklaşıyor.",
      name: "Moleküler Dönüştürücü",
      designation: "Fiziksel Dünyayı İyileştiren",
      src: "/images/aybilge3.jpg",
    },
    {
      id: 13,
      quote: "Sabah alarmı Aybilge'yi uyandıramadı. Şimdi terapide ve özgüvenini geri kazanmaya çalışıyor.",
      name: "Derin Uykucu",
      designation: "Alarmları Üzen Kadın",
      src: "/images/aybilge2.webp",
    },  
    {
      id: 14,
      quote: "Aybilge'ye bir kere 'Biraz yavaş ol' dediler. O gün zaman yavaşladı.",
      name: "Zaman Bükücü",
      designation: "Einstein'ın Bile Açıklayamadığı Fenomen",
      src: "/images/aybilge1.jpg",
    },
  ];

  // Bugünün rastgele Aybilge gerçeği için
  const todaysFact = aybilgeFacts[randomIndex];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-b from-background to-muted overflow-hidden">
      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-10 w-full h-full pointer-events-none"
        manualstart={true}
      />
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mt-10 mb-2 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 pb-2">
          Aybilge Daily
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-6">
          Her gün yeni bir Aybilge gerçeği keşfedin
        </p>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Tüm Aybilge Gerçekleri</h3>
        <AnimatedTestimonials testimonials={aybilgeFacts} autoplay={true} className="mb-12" />
        
        <div className="mb-10 p-6 border border-border rounded-xl bg-card shadow-lg relative group hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-2 text-3xl">🌟</span> Bugünün Aybilge Gerçeği
          </h2>
          <p className="text-lg italic mb-4 text-card-foreground">{todaysFact.quote}</p>
          <div className="flex justify-end">
            <p className="text-sm text-muted-foreground">#{randomIndex + 1}</p>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aybilge Daily - Her gün Aybilge ile daha eğlenceli!</p>
        </div>
      </div>
    </main>
  );
}
