/* =============================================================================
   Yusifə dəstək: app.js
   Static page, vanilla JS, no build step. Loaded with `defer`.

   HOW TO EDIT
   1. Bank cards   -> in index.html, section #donation. They are plain markup
                      so they show even when scripts are blocked. Holder names
                      are never translated.
   2. Copy / text  -> TRANSLATIONS below (AZ, RU, EN, TR). Decorative emoji in
                      the strings are kept as written but are not rendered on
                      the page (see display()); the share message keeps them.
   ============================================================================= */

const WHATSAPP_NUMBER = "994706605889";
const WHATSAPP_MESSAGE = "Salam, Yusifə yardım etmək istəyirəm";
const PHONE_TEL = "+994706605889";

/* =============================================================================
   TRANSLATIONS: copied verbatim from the live page (AZ default + RU/EN/TR).
   Bank numbers, cardholder name, phone, address: NOT translated.
   ============================================================================= */

const TRANSLATIONS = {
            az: {
                navCta: "Kartlara bax",
                lastUpdated: "Son yenilənmə",
                heroSubtitle: "13 yaşı var. İndi qan xərçəngi ilə döyüşür. Bu döyüşdə tək deyil — sən də onun yanında ola bilərsən.",
                heroCta: "Kartlara bax",
                heroTitle: "Yusifin <em>yaşamaq</em> uğrunda mübarizəsinə qoşul",
                heroCta2: "Sənədlərə bax",
                trust1: "✓ Sənədlər yoxlanılıb",
                trust2: "✓ Birbaşa ananın kartına",
                trust3: "✓ Ana ilə birbaşa əlaqə",
                heroNote: "\"Oğlum sağalacaq, inanıram\" — Gülər",
                scrollHint: "AŞAĞI",
                scrollIndicatorText: "Yusifin hekayəsini oxu",
                whatsappTooltip: "Anaya yaz - Gülər 💛",

                storyTitle: "Yusifin hekayəsi",
                storyLead: "\"Mən Gülər. Yusifin anası.\"",
                storyP1: "Bir ana olaraq bu sözləri yazmaq mənim üçün çox ağırdır. Amma övladımın həyatı üçün kömək istəməkdən başqa yolum qalmayıb.",
                storyP2: "Oğlum <strong>Yusif 13 yaşındadır</strong> və 2023-cü ildən bəri qan xərçəngi ilə mübarizə aparır. İlik transplantasiyası olunub, amma indi GVHD ilə döyüşür.",
                storyP3: "<strong>Həkimlər deyirlər: müalicə fasiləsiz davam etməlidir.</strong> Yarımçıq qalsa, oğlumun həyatı təhlükədədir.",
                storyP4: "Atası fəhləlik edir, mən təmizliyə gedirəm. Bütün imkanlarımız tükənib. Sizdən kömək diləyirik.",
                storySignature: "— Gülər, Yusifin anası",

                medTitle: "Tibbi vəziyyət və əlaqə",
                medSubtitle: "Yusifin diaqnozu, müalicəsi və ailəsi ilə əlaqə",
                medDiagTitle: "Diaqnoz",
                medDiag: "Kəskin limfoblast leykemiya (ALL) — qan xərçəngi. Yusif 2023-cü ildən müalicə olunur, ilik transplantasiyasından sonra isə GVHD ilə mübarizə aparır.",
                medTreatTitle: "Müalicə",
                medTreat: "Yusifin fasiləsiz dərman, müntəzəm analiz və həkim nəzarətinə ehtiyacı var — müalicə yarımçıq qalsa, həyatı təhlükəyə düşür.",
                medContactTitle: "Ailə / Əlaqə",
                medLabelParent: "Ana",
                medParent: "Gülər — Yusifin anası",
                medLabelAddress: "Ünvan",
                medAddress: "Bakı şəhəri, Yeni Ramana, Qarabağ küçəsi 104, ev 28",
                medLabelPhone: "Telefon",

                galleryTitle: "Yusifin gözündən",
                gallerySubtitle: "Xəstəxanada keçən günlər",
                galleryCaption1: "Yusif — müalicə günlərində",
                galleryCaption2: "Yusif — xəstəxanada",
                galleryCaption3: "Yusif — ümidlə",

                docsTitle: "Şəffaflıq və həqiqət",
                docsSubtitle: "Bütün məlumatlar real və yoxlanılıbdır",
                doc1Title: "Medical Park — Tibbi sənəd",
                doc2Title: "Milli Hematologiya Mərkəzi — Epikriz",
                verified: "✓ Yoxlanılıb",

                donationTitle: "Kart Hesabları",
                donationSubtitle: "Hər manat Yusifin həyatı üçün bir addımdır",
                cardHolderLabel: "Kart sahibi:",
                copyBtn: "Kopyala",
                copiedToast: "Kart nömrəsi kopyalandı",
                whatsappBtn: "Ana ilə əlaqə (WhatsApp)",

                shareTitle: "Yardım paylaşımla başlayır",
                shareSubtitle: "Hər paylaşım Yusifin yaşama şansını artırır",
                shareText: "Yusifə dəstək olaq — 13 yaşlı uşaq xərçənglə mübarizə aparır. Köməyə möhtacdır 💛",
                instagramAlert: "Link köçürüldü! İndi Instagram-da story paylaşa bilərsiniz 📷",

                footerQuote: "Allah kömək olan hər kəsdən razı olsun 🤲",
                footerContact: "📞 070 660 58 89  | 📍 Bakı şəhəri, Yeni Ramana, Qarabağ küçəsi 104, ev 28",
                footerCopyright: "Yusifə dəstək",

                floatingBtn: "Kart hesabları",

                monthNames: ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
            },
            ru: {
                navCta: "Посмотреть карты",
                lastUpdated: "Последнее обновление",
                heroSubtitle: "Ему 13 лет. Сейчас он борется с раком крови. В этой борьбе он не одинок — ты можешь быть рядом.",
                heroCta: "Посмотреть карты",
                heroTitle: "Присоединись к борьбе Юсифа за <em>жизнь</em>",
                heroCta2: "Посмотреть документы",
                trust1: "✓ Документы проверены",
                trust2: "✓ Напрямую на карту мамы",
                trust3: "✓ Прямая связь с мамой",
                heroNote: "\"Мой сын выздоровеет, я верю\" — Гюляр",
                scrollHint: "ВНИЗ",
                scrollIndicatorText: "Прочитайте историю Юсифа",
                whatsappTooltip: "Напишите маме - Гюляр 💛",

                storyTitle: "История Yusif-а",
                storyLead: "\"Я Gülər. Мама Yusif-а.\"",
                storyP1: "Как маме, мне очень тяжело писать эти слова. Но ради жизни моего сына у меня не осталось другого пути, кроме как просить о помощи.",
                storyP2: "Моему сыну <strong>Yusif-у 13 лет</strong>, и с 2023 года он борется с раком крови. Ему сделали трансплантацию костного мозга, но сейчас он борется с реакцией трансплантата против хозяина (GVHD).",
                storyP3: "<strong>Врачи говорят: лечение должно продолжаться без перерывов.</strong> Если оно прервётся, жизнь моего сына окажется в опасности.",
                storyP4: "Его отец работает подёнщиком, я хожу убирать в чужие дома. Все наши возможности исчерпаны. Просим вашей помощи.",
                storySignature: "— Gülər, мама Yusif-а",

                medTitle: "Диагноз и контакты",
                medSubtitle: "Диагноз Yusif-а, его лечение и связь с семьёй",
                medDiagTitle: "Диагноз",
                medDiag: "Острый лимфобластный лейкоз (ALL) — рак крови. Yusif лечится с 2023 года, после пересадки костного мозга борется с GVHD.",
                medTreatTitle: "Лечение",
                medTreat: "Ему необходимы непрерывные лекарства, регулярные анализы и наблюдение врачей — перерыв в лечении опасен для его жизни.",
                medContactTitle: "Семья / Контакт",
                medLabelParent: "Мама",
                medParent: "Гюляр — мама Yusif-а",
                medLabelAddress: "Адрес",
                medAddress: "г. Баку, Йени Рамана, ул. Карабах 104, кв. 28",
                medLabelPhone: "Телефон",

                galleryTitle: "Глазами Yusif-а",
                gallerySubtitle: "Дни, проведённые в больнице",
                galleryCaption1: "Yusif — в дни лечения",
                galleryCaption2: "Yusif — в больнице",
                galleryCaption3: "Yusif — с надеждой",

                docsTitle: "Прозрачность и правда",
                docsSubtitle: "Все данные реальны и проверены",
                doc1Title: "Medical Park — Медицинский документ",
                doc2Title: "Национальный гематологический центр — Эпикриз",
                verified: "✓ Проверено",

                donationTitle: "Банковские карты",
                donationSubtitle: "Каждый манат — это шаг к спасению жизни Yusif-а",
                cardHolderLabel: "Держатель карты:",
                copyBtn: "Копировать",
                copiedToast: "Номер карты скопирован",
                whatsappBtn: "Связаться с мамой (WhatsApp)",

                shareTitle: "Помощь начинается с шеринга",
                shareSubtitle: "Каждый репост увеличивает шансы Yusif-а на жизнь",
                shareText: "Поможем Yusif-у — 13-летний мальчик борется с раком. Ему нужна помощь 💛",
                instagramAlert: "Ссылка скопирована! Теперь вы можете поделиться в Instagram Stories 📷",

                footerQuote: "Пусть Аллах будет доволен каждым, кто помогает 🤲",
                footerContact: "📞 070 660 58 89  | 📍 Bakı şəhəri, Yeni Ramana, Qarabağ küçəsi 104, ev 28",
                footerCopyright: "Поддержка Yusif-а",

                floatingBtn: "Банковские карты",

                monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
            },
            en: {
                navCta: "View cards",
                lastUpdated: "Last updated",
                heroSubtitle: "He is 13. He is fighting blood cancer. He is not alone in this fight — you can stand by his side.",
                heroCta: "View cards",
                heroTitle: "Join Yusif's fight for <em>life</em>",
                heroCta2: "View documents",
                trust1: "✓ Documents verified",
                trust2: "✓ Directly to mom's card",
                trust3: "✓ Direct contact with mom",
                heroNote: "\"My son will recover, I believe\" — Gülər",
                scrollHint: "SCROLL",
                scrollIndicatorText: "Read Yusif's story",
                whatsappTooltip: "Message mom - Gülər 💛",

                storyTitle: "Yusif's Story",
                storyLead: "\"I am Gülər. Yusif's mother.\"",
                storyP1: "As a mother, writing these words is very hard for me. But for the sake of my child's life, I have no choice but to ask for help.",
                storyP2: "My son <strong>Yusif is 13 years old</strong> and has been fighting blood cancer since 2023. He underwent a bone marrow transplant, but is now fighting graft-versus-host disease (GVHD).",
                storyP3: "<strong>Doctors say: the treatment must continue without interruption.</strong> If it stops, my son's life will be in danger.",
                storyP4: "His father works as a day laborer, and I clean houses whenever I can. All our resources are exhausted. We ask for your help.",
                storySignature: "— Gülər, Yusif's mother",

                medTitle: "Medical condition & contact",
                medSubtitle: "Yusif's diagnosis, treatment and how to reach his family",
                medDiagTitle: "Diagnosis",
                medDiag: "Acute lymphoblastic leukemia (ALL) — blood cancer. Yusif has been in treatment since 2023 and is now fighting GVHD after a bone marrow transplant.",
                medTreatTitle: "Treatment",
                medTreat: "He needs uninterrupted medication, regular tests and constant medical supervision — pausing the treatment puts his life at risk.",
                medContactTitle: "Family / Contact",
                medLabelParent: "Mother",
                medParent: "Gülər — Yusif's mother",
                medLabelAddress: "Address",
                medAddress: "Baku, Yeni Ramana, Qarabağ str. 104, apt. 28",
                medLabelPhone: "Phone",

                galleryTitle: "Through Yusif's Eyes",
                gallerySubtitle: "Days spent at the hospital",
                galleryCaption1: "Yusif — during treatment days",
                galleryCaption2: "Yusif — at the hospital",
                galleryCaption3: "Yusif — with hope",

                docsTitle: "Transparency and Truth",
                docsSubtitle: "All information is real and verified",
                doc1Title: "Medical Park — Medical document",
                doc2Title: "National Hematology Center — Epicrisis",
                verified: "✓ Verified",

                donationTitle: "Bank Cards",
                donationSubtitle: "Every manat is a step toward saving Yusif's life",
                cardHolderLabel: "Cardholder:",
                copyBtn: "Copy",
                copiedToast: "Card number copied",
                whatsappBtn: "Contact mother (WhatsApp)",

                shareTitle: "Help Starts with Sharing",
                shareSubtitle: "Every share increases Yusif's chance of survival",
                shareText: "Let's support Yusif — an 13-year-old boy fighting cancer. He needs your help 💛",
                instagramAlert: "Link copied! Now you can share on Instagram Stories 📷",

                footerQuote: "May Allah bless everyone who helps 🤲",
                footerContact: "📞 070 660 58 89  | 📍 Bakı, Yeni Ramana, Qarabağ str. 104, apt. 28",
                footerCopyright: "Support Yusif",

                floatingBtn: "Bank Cards",

                monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"]
            },
            tr: {
                navCta: "Kartlara bak",
                lastUpdated: "Son güncelleme",
                heroSubtitle: "13 yaşında. Şu an kan kanseri ile mücadele ediyor. Bu mücadelede yalnız değil — sen de yanında olabilirsin.",
                heroCta: "Kartlara bak",
                heroTitle: "Yusif'in <em>yaşam</em> mücadelesine katıl",
                heroCta2: "Belgelere bak",
                trust1: "✓ Belgeler doğrulandı",
                trust2: "✓ Doğrudan annenin kartına",
                trust3: "✓ Anneyle doğrudan iletişim",
                heroNote: "\"Oğlum iyileşecek, inanıyorum\" — Gülər",
                scrollHint: "AŞAĞI",
                scrollIndicatorText: "Yusif'in hikâyesini oku",
                whatsappTooltip: "Anneye yaz - Gülər 💛",

                storyTitle: "Yusif'in hikâyesi",
                storyLead: "\"Ben Gülər. Yusif'in annesiyim.\"",
                storyP1: "Bir anne olarak bu sözleri yazmak benim için çok ağır. Ama çocuğumun hayatı için yardım istemekten başka çarem kalmadı.",
                storyP2: "Oğlum <strong>Yusif 13 yaşında</strong> ve 2023 yılından beri kan kanseri ile mücadele ediyor. Kemik iliği nakli oldu, ama şu an GVHD ile savaşıyor.",
                storyP3: "<strong>Doktorlar diyor ki: tedavi kesintisiz devam etmelidir.</strong> Yarıda kalırsa, oğlumun hayatı tehlikededir.",
                storyP4: "Babası gündelikçi olarak çalışıyor, ben evlerde temizliğe gidiyorum. Tüm imkânlarımız tükendi. Sizden yardım diliyoruz.",
                storySignature: "— Gülər, Yusif'in annesi",

                medTitle: "Tıbbi durum ve iletişim",
                medSubtitle: "Yusif'in teşhisi, tedavisi ve ailesiyle iletişim",
                medDiagTitle: "Teşhis",
                medDiag: "Akut lenfoblastik lösemi (ALL) — kan kanseri. Yusif 2023'ten beri tedavi görüyor, ilik nakli sonrası GVHD ile mücadele ediyor.",
                medTreatTitle: "Tedavi",
                medTreat: "Kesintisiz ilaç, düzenli tahlil ve doktor takibine ihtiyacı var — tedavinin yarıda kalması hayatını tehlikeye atıyor.",
                medContactTitle: "Aile / İletişim",
                medLabelParent: "Anne",
                medParent: "Gülər — Yusif'in annesi",
                medLabelAddress: "Adres",
                medAddress: "Bakü, Yeni Ramana, Karabağ sokağı 104, daire 28",
                medLabelPhone: "Telefon",

                galleryTitle: "Yusif'in gözünden",
                gallerySubtitle: "Hastanede geçen günler",
                galleryCaption1: "Yusif — tedavi günlerinde",
                galleryCaption2: "Yusif — hastanede",
                galleryCaption3: "Yusif — umutla",

                docsTitle: "Şeffaflık ve gerçek",
                docsSubtitle: "Tüm bilgiler gerçek ve doğrulanmıştır",
                doc1Title: "Medical Park — Tıbbi belge",
                doc2Title: "Milli Hematoloji Merkezi — Epikriz",
                verified: "✓ Doğrulandı",

                donationTitle: "Banka Kartları",
                donationSubtitle: "Her manat Yusif'in hayatı için bir adımdır",
                cardHolderLabel: "Kart sahibi:",
                copyBtn: "Kopyala",
                copiedToast: "Kart numarası kopyalandı",
                whatsappBtn: "Anneyle iletişim (WhatsApp)",

                shareTitle: "Yardım paylaşımla başlar",
                shareSubtitle: "Her paylaşım Yusif'in yaşama şansını artırır",
                shareText: "Yusif'e destek olalım — 13 yaşında bir çocuk kanserle mücadele ediyor. Yardıma ihtiyacı var 💛",
                instagramAlert: "Bağlantı kopyalandı! Şimdi Instagram hikâyesinde paylaşabilirsiniz 📷",

                footerQuote: "Allah yardım eden herkesten razı olsun 🤲",
                footerContact: "📞 070 660 58 89  | 📍 Bakü, Yeni Ramana, Karabağ sokağı 104, daire 28",
                footerCopyright: "Yusif'e destek",

                floatingBtn: "Banka Kartları",

                monthNames: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
            }
        };

/* Interface labels the live copy has no key for, from the earlier site version */
const UI_LABELS = {
  az: { skipLink: "Əsas məzmuna keç", langLabel: "Dil", lightboxClose: "Bağla", lightboxPrev: "Əvvəlki şəkil", lightboxNext: "Növbəti şəkil", waAria: "WhatsApp ilə əlaqə" },
  ru: { skipLink: "Перейти к содержанию", langLabel: "Язык", lightboxClose: "Закрыть", lightboxPrev: "Предыдущее фото", lightboxNext: "Следующее фото", waAria: "Связаться через WhatsApp" },
  en: { skipLink: "Skip to main content", langLabel: "Language", lightboxClose: "Close", lightboxPrev: "Previous photo", lightboxNext: "Next photo", waAria: "Contact via WhatsApp" },
  tr: { skipLink: "Ana içeriğe geç", langLabel: "Dil", lightboxClose: "Kapat", lightboxPrev: "Önceki fotoğraf", lightboxNext: "Sonraki fotoğraf", waAria: "WhatsApp ile iletişim" }
};

const LANGS = ['az', 'ru', 'en', 'tr'];
const COPY_RESET_MS = 2400;
const TOAST_MS = 2400;
const REVEAL_FAILSAFE_MS = 2000;
const FLOAT_WA_DELAY_MS = 2000;
const INSTAGRAM_OPEN_DELAY_MS = 600;
const SWIPE_MIN = 48;
const DOCK_BAND_PCT_INV = 85;   // the dock covers roughly the bottom 15% of the screen

/* =============================================================================
   State and helpers
   ============================================================================= */

let currentLang = 'az';
try {
  const stored = localStorage.getItem('yusif-lang');
  if (stored && LANGS.indexOf(stored) !== -1) currentLang = stored;
} catch (e) { /* storage blocked in some in-app WebViews: stay on AZ */ }

const t = () => TRANSLATIONS[currentLang];
const ui = () => UI_LABELS[currentLang];
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isDesktop = () => window.matchMedia && window.matchMedia('(min-width: 64rem)').matches;

const waHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_MESSAGE);

// Decorative pictographs (check marks, hearts, phone/pin symbols) are kept in
// the strings but not rendered: the page uses line icons instead.
const DECOR = /[☀-➿\u{1F000}-\u{1FAFF}️]/gu;
function display(s) {
  return String(s).replace(DECOR, '').replace(/\s+/g, ' ').trim();
}

// "Son yenilənmə" shows today's date in the current language (as on the live site)
function todayLabel(lang) {
  const d = new Date();
  return d.getDate() + ' ' + TRANSLATIONS[lang].monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

/* =============================================================================
   Clipboard
   execCommand first, on purpose: navigator.clipboard.writeText() makes Android
   show its system clipboard overlay on top of our own toast. The async API is
   the fallback for browsers where execCommand is gone or refuses.
   ============================================================================= */

function execCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.className = 'copy-buffer';
  ta.setAttribute('readonly', '');     // stops the mobile keyboard opening
  ta.setAttribute('aria-hidden', 'true');
  ta.tabIndex = -1;
  document.body.appendChild(ta);

  const prevFocus = document.activeElement;
  const prevScrollY = window.scrollY;

  ta.focus({ preventScroll: true });
  ta.select();
  ta.setSelectionRange(0, text.length); // iOS Safari

  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }

  document.body.removeChild(ta);
  if (prevFocus && typeof prevFocus.focus === 'function') prevFocus.focus({ preventScroll: true });
  if (window.scrollY !== prevScrollY) window.scrollTo(0, prevScrollY);
  return ok;
}

function copyText(text) {
  if (execCopy(text)) return Promise.resolve(true);
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true, () => false);
  }
  return Promise.resolve(false);
}

/* =============================================================================
   Toast (role="status", so screen readers hear every message)
   ============================================================================= */

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  const text = $('#toastText');
  if (!toast || !text) return;
  text.textContent = '';
  // next frame, so an identical repeated message is still announced
  requestAnimationFrame(() => {
    text.textContent = display(message);
    toast.classList.add('is-visible');
  });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), TOAST_MS);
}

/* =============================================================================
   Analytics: Meta Pixel + TikTok Pixel (both optional, never throw)
   ============================================================================= */

function trackCardCopy(digits) {
  const id = digits.substring(0, 4);
  try {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        content_name: 'Bank Card Copy',
        content_category: 'Donation',
        content_ids: [id],
        value: 0,
        currency: 'AZN'
      });
    }
    if (typeof ttq !== 'undefined') {
      ttq.track('AddToCart', {
        content_id: id,
        content_name: 'Bank Card Copy',
        content_type: 'product',
        content_category: 'Donation',
        value: 0,
        currency: 'AZN'
      });
    }
  } catch (e) { /* analytics must never break the copy */ }
}

function trackContact(where) {
  try {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { content_name: where, content_category: 'Donation Contact' });
    }
    if (typeof ttq !== 'undefined') {
      ttq.track('Contact', { content_name: where, content_category: 'Donation Contact' });
    }
  } catch (e) {}
}

/* =============================================================================
   Donation cards: the markup is in index.html, this only wires the copy button
   ============================================================================= */

// Same wording the live site used for the confirmed state
function copiedLabel() {
  const c = t().copyBtn;
  return c === 'Copy' ? 'Copied' : c === 'Копировать' ? 'Скопировано' : 'Kopyalandı';
}

function selectNumber(card) {
  const numberEl = card && $('.card__number', card);
  if (!numberEl || !window.getSelection) return;
  const range = document.createRange();
  range.selectNodeContents(numberEl);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function setCopyState(button, copied) {
  const label = $('.copy__label', button);
  const use = $('.copy__icon use', button);
  button.classList.toggle('is-copied', copied);
  if (label) label.textContent = copied ? copiedLabel() : display(t().copyBtn);
  if (use) use.setAttribute('href', copied ? '#i-check' : '#i-copy');
}

function copyCard(button) {
  const digits = button.dataset.digits;
  const card = button.closest('.card');

  copyText(digits).then(ok => {
    if (!ok) {
      // Clipboard refused: leave the number selected so the system copy menu is one tap away
      selectNumber(card);
      return;
    }
    setCopyState(button, true);
    trackCardCopy(digits);
    showToast(t().copiedToast);

    clearTimeout(button._resetTimer);
    button._resetTimer = setTimeout(() => setCopyState(button, false), COPY_RESET_MS);
  });
}

function setupCards() {
  $$('.copy[data-digits]').forEach(button => {
    button.addEventListener('click', () => copyCard(button));
  });
}

/* =============================================================================
   Language
   ============================================================================= */

function applyLanguage(lang) {
  if (LANGS.indexOf(lang) === -1) lang = 'az';
  currentLang = lang;
  try { localStorage.setItem('yusif-lang', lang); } catch (e) {}

  document.documentElement.lang = lang;
  const tr = t();

  $$('[data-i18n]').forEach(el => {
    let value = tr[el.dataset.i18n];
    if (value === undefined) return;
    if (el.dataset.i18nPart !== undefined) value = String(value).split('|')[+el.dataset.i18nPart] || '';
    value = display(value);
    if (/<[a-z]/i.test(value)) el.innerHTML = value;
    else el.textContent = value;
  });

  $$('[data-i18n-aria]').forEach(el => {
    const value = tr[el.dataset.i18nAria];
    if (value === undefined) return;
    el.setAttribute('aria-label', display(value));
    el.setAttribute('title', display(value));
  });

  const labels = ui();
  $$('[data-ui]').forEach(el => { if (labels[el.dataset.ui]) el.textContent = labels[el.dataset.ui]; });
  $$('[data-ui-aria]').forEach(el => { if (labels[el.dataset.uiAria]) el.setAttribute('aria-label', labels[el.dataset.uiAria]); });

  $$('.lang__btn').forEach(btn => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  const current = $('#langCurrent');
  if (current) current.textContent = lang.toUpperCase();

  const dateEl = $('#lastUpdatedDate');
  if (dateEl) {
    const d = new Date();
    dateEl.textContent = todayLabel(lang);
    dateEl.setAttribute('datetime', d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'));
  }

  // copy buttons that are mid-confirmation keep their state in the new language
  $$('.copy.is-copied').forEach(b => setCopyState(b, true));

  updateShareLinks();
  if (lightbox.isOpen()) lightbox.refreshCaption();
}

function setupLanguageMenu() {
  const toggle = $('#langToggle');
  const menu = $('#langMenu');
  const root = $('#lang');
  if (!toggle || !menu || !root) return;

  const setOpen = open => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      const active = $('.lang__btn[aria-pressed="true"]', menu) || $('.lang__btn', menu);
      if (active) active.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(menu.hidden));

  $$('.lang__btn', menu).forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
      setOpen(false);
      toggle.focus();
    });
  });

  menu.addEventListener('keydown', e => {
    const items = $$('.lang__btn', menu);
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = (i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next].focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      toggle.focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  });

  document.addEventListener('click', e => {
    if (!menu.hidden && !root.contains(e.target)) setOpen(false);
  });
}

/* =============================================================================
   Share: WhatsApp / Facebook links, Instagram = copy link + open Instagram
   (Instagram has no web share URL)
   ============================================================================= */

function updateShareLinks() {
  const tr = t();
  const url = window.location.href;
  const text = tr.shareText + ' ' + url;
  const wa = $('#shareWhatsApp');
  const fb = $('#shareFacebook');
  if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(text);
  if (fb) fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
}

function setupShare() {
  const ig = $('#shareInstagram');
  if (!ig) return;
  ig.addEventListener('click', e => {
    e.preventDefault();
    copyText(window.location.href).then(() => {
      showToast(t().instagramAlert);
      setTimeout(() => window.open('https://www.instagram.com/', '_blank'), INSTAGRAM_OPEN_DELAY_MS);
    });
  });
}

/* =============================================================================
   Lightbox: native <dialog> (inert page behind, Esc closes), focus kept inside,
   prev/next per group (story, gallery, documents), swipe, arrow keys, and the
   Android back button closes it instead of leaving the page.
   ============================================================================= */

const lightbox = (() => {
  const box = $('#lightbox');
  const img = $('#lightboxImg');
  const caption = $('#lightboxCaption');
  const count = $('#lightboxCount');
  const btnPrev = $('#lightboxPrev');
  const btnNext = $('#lightboxNext');
  const btnClose = $('#lightboxClose');
  const native = !!(box && typeof box.showModal === 'function');

  let items = [];
  let index = 0;
  let opener = null;
  let open = false;
  let pushedState = false;
  let ignorePop = false;

  function itemData(trigger) {
    const figure = trigger.closest('figure');
    const capEl = figure ? $('figcaption', figure) : $('.doc__title', trigger);
    const thumb = $('img', trigger);
    return {
      src: trigger.dataset.lightbox,
      alt: thumb ? thumb.alt : '',
      caption: capEl ? capEl.textContent : ''
    };
  }

  function render(direction) {
    const item = itemData(items[index]);
    const apply = () => {
      img.src = item.src;
      img.alt = item.alt;
      caption.textContent = item.caption;
      count.textContent = items.length > 1 ? (index + 1) + ' / ' + items.length : '';
      img.classList.remove('is-swapping');
    };
    const single = items.length < 2;
    btnPrev.hidden = single;
    btnNext.hidden = single;

    if (!direction || reducedMotion()) { apply(); return; }
    img.classList.add('is-swapping');
    setTimeout(apply, 120);
  }

  function step(delta) {
    if (items.length < 2) return;
    index = (index + delta + items.length) % items.length;
    render(delta);
  }

  function show(trigger) {
    const group = trigger.dataset.group;
    items = $$('[data-lightbox]').filter(el => !group || el.dataset.group === group);
    index = Math.max(0, items.indexOf(trigger));
    opener = trigger;
    render(0);

    if (native) box.showModal();
    else box.setAttribute('open', '');
    open = true;
    document.documentElement.classList.add('has-lightbox');
    btnClose.focus();

    try {
      history.pushState({ lightbox: true }, '');
      pushedState = true;
    } catch (e) { pushedState = false; }
  }

  // Tear down without touching history
  function finalize() {
    if (!open) return;
    open = false;
    if (native && box.open) box.close();
    else box.removeAttribute('open');
    document.documentElement.classList.remove('has-lightbox');
    if (opener) opener.focus({ preventScroll: true });
  }

  // Close right away, then drop the history entry we pushed on open
  function requestClose() {
    if (!open) return;
    finalize();
    if (pushedState) {
      pushedState = false;
      ignorePop = true;        // the popstate from our own back() is not a user "back"
      history.back();
    }
  }

  function setup() {
    if (!box) return;

    $$('[data-lightbox]').forEach(trigger => {
      trigger.addEventListener('click', () => show(trigger));
    });

    btnClose.addEventListener('click', requestClose);
    btnPrev.addEventListener('click', () => step(-1));
    btnNext.addEventListener('click', () => step(1));

    // Esc: the dialog fires "cancel"; route it through requestClose so history stays in sync
    box.addEventListener('cancel', e => { e.preventDefault(); requestClose(); });
    box.addEventListener('close', () => { if (open) finalize(); });

    // Tap on the dark area (not the image or a control) closes
    box.addEventListener('click', e => {
      if (e.target === box || e.target === $('#lightboxStage')) requestClose();
    });

    box.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'Escape' && !native) { e.preventDefault(); requestClose(); }
      else if (e.key === 'Tab') {
        // keep focus on the visible controls
        const focusables = [btnPrev, btnClose, btnNext].filter(b => !b.hidden);
        const i = focusables.indexOf(document.activeElement);
        e.preventDefault();
        const next = e.shiftKey ? (i <= 0 ? focusables.length - 1 : i - 1) : (i + 1) % focusables.length;
        focusables[next].focus();
      }
    });

    // Swipe: horizontal changes the image, a clear downward swipe closes
    let startX = 0, startY = 0, tracking = false;
    box.addEventListener('touchstart', e => {
      if (e.touches.length !== 1) { tracking = false; return; }
      tracking = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener('touchend', e => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
      else if (dy > SWIPE_MIN * 2 && Math.abs(dy) > Math.abs(dx) * 1.5) requestClose();
    }, { passive: true });

    // Android back button / browser back while open: close instead of leaving
    window.addEventListener('popstate', () => {
      if (ignorePop) { ignorePop = false; return; }
      if (open) { pushedState = false; finalize(); }
    });
  }

  return {
    setup,
    isOpen: () => open,
    refreshCaption: () => { if (open) render(0); }
  };
})();

/* =============================================================================
   Gallery dots (mobile carousel only; hidden by CSS on wider screens)
   ============================================================================= */

function setupGalleryDots() {
  const track = $('#galleryTrack');
  const dotsWrap = $('#galleryDots');
  if (!track || !dotsWrap) return;
  const shots = $$('.shot', track);
  if (shots.length < 2) return;

  dotsWrap.innerHTML = shots.map(() => '<span></span>').join('');
  const dots = $$('span', dotsWrap);

  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    let active = 0;
    if (max > 0) {
      // nearest shot to the snap edge; the last dot lights up at the very end
      const left = track.getBoundingClientRect().left;
      const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft || 0);
      let best = Infinity;
      shots.forEach((s, i) => {
        const d = Math.abs(s.getBoundingClientRect().left - left - pad);
        if (d < best) { best = d; active = i; }
      });
      if (track.scrollLeft >= max - 2) active = shots.length - 1;
    }
    dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
  };

  let raf = 0;
  track.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { raf = 0; update(); });
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}

/* =============================================================================
   Header state + floating dock
   Phones: the dock (cards CTA + WhatsApp) appears once the hero's buttons have
   scrolled away. Desktop: only the WhatsApp button, from 2s after load (as on
   the live site). Both hide only while the card blocks are under them (in
   the bottom band of the screen the dock occupies), so they never cover a
   card number or copy button. The header CTA stays visible the whole time.
   ============================================================================= */

function setupChrome() {
  const header = $('#siteHeader');
  const dock = $('#floatingActions');
  const heroActions = $('.hero__actions');
  const blockers = [$('#bankList')].filter(Boolean);

  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (dock) {
    let pastHero = false;
    let waDelayDone = false;
    const blocking = new Set();
    const sync = () => {
      const desktop = isDesktop();
      const show = blocking.size === 0 && (desktop ? waDelayDone : pastHero);
      dock.classList.toggle('is-visible', show);
      // hidden dock must not be reachable by Tab or a screen reader
      if (show) dock.removeAttribute('inert'); else dock.setAttribute('inert', '');
      dock.setAttribute('aria-hidden', show ? 'false' : 'true');
    };
    setTimeout(() => { waDelayDone = true; sync(); }, FLOAT_WA_DELAY_MS);

    if ('IntersectionObserver' in window && heroActions) {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        });
        sync();
      }).observe(heroActions);

      // root shrunk to the bottom 15% of the viewport: the band the dock sits in
      const blockObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) blocking.add(entry.target);
          else blocking.delete(entry.target);
        });
        sync();
      }, { rootMargin: '-' + DOCK_BAND_PCT_INV + '% 0% 0% 0%' });
      blockers.forEach(el => blockObserver.observe(el));
    } else {
      // Old WebViews: plain scroll maths
      const fallback = () => {
        const vh = window.innerHeight;
        pastHero = window.scrollY > vh * 0.6;
        blocking.clear();
        blockers.forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < vh && r.bottom > vh * (DOCK_BAND_PCT_INV / 100)) blocking.add(el);
        });
        sync();
      };
      window.addEventListener('scroll', fallback, { passive: true });
      fallback();
    }
    window.addEventListener('resize', sync, { passive: true });
    sync();
  }

  // Contact events: the floating button keeps the name the live site sends
  const floatWa = $('#floatWhatsapp');
  if (floatWa) floatWa.addEventListener('click', () => trackContact('WhatsApp Float Button'));
  $$('[data-track-contact]').forEach(el => {
    el.addEventListener('click', () => trackContact(el.dataset.trackContact));
  });
}

/* =============================================================================
   Scroll reveal
   Where CSS scroll-driven animations exist (animation-timeline: view()), CSS
   does all of it and nothing here runs. Elsewhere, four failsafe layers,
   because most visitors arrive inside Instagram/TikTok in-app WebViews where
   IntersectionObserver is unreliable:
     1. <html class="js"> is set in the document head, before the stylesheet
        parses, so without JS nothing is ever hidden.
     2. feature-detect IntersectionObserver; reveal immediately when missing.
     3. a hard timeout reveals anything still hidden.
     4. the first scroll event reveals everything.
   ============================================================================= */

const cssReveal = !!(window.CSS && CSS.supports && CSS.supports('animation-timeline: view()'));
const supportsIO = 'IntersectionObserver' in window;

const revealObserver = !cssReveal && supportsIO
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0% 0% -6% 0%' })
  : null;

function observeReveal(el) {
  if (revealObserver) revealObserver.observe(el);
  else el.classList.add('is-revealed');
}

function revealEverything() {
  $$('[data-reveal]:not(.is-revealed)').forEach(el => el.classList.add('is-revealed'));
}

/* =============================================================================
   Init
   ============================================================================= */

function init() {
  // WhatsApp destinations, built from one constant
  $$('[data-whatsapp]').forEach(el => { el.href = waHref; });

  setupLanguageMenu();
  setupCards();
  setupChrome();
  setupShare();
  setupGalleryDots();
  lightbox.setup();

  applyLanguage(currentLang);   // also sets today's date and the share links

  $$('[data-reveal]').forEach(observeReveal);
  if (!cssReveal) {
    setTimeout(revealEverything, REVEAL_FAILSAFE_MS);
    window.addEventListener('scroll', revealEverything, { passive: true, once: true });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
