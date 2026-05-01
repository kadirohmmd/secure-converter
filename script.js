// ===================== جميع ترجمات الواجهة كاملة =====================
const fallbackResources = {
  ar: { translation: { title: "SecureConvert - محول الملفات الآمن 🔒", subtitle: "جميع التحويلات تتم داخل متصفحك - لا نرفع ملفاتك لأي خادم", uploadText: "اسحب ملفاتك هنا أو اضغط للاختيار", selectedFiles: "الملفات المختارة", convertTo: "حوّل إلى", convertBtn: "تحويل وتحميل", separateDownload: "تحميل كل ملف منفصل", zipDownload: "تحميل الكل كـ ZIP", zipNote: "ملاحظة: قد يظهر تحذير أمان في Windows، يمكنك تجاهله بأمان فالملفات سليمة.", noFiles: "لم تختر أي ملفات", selectTarget: "اختر صيغة الهدف أولاً", converting: "جاري التحويل...", success: "تم التحويل بنجاح! 🎉", failed: "فشل التحويل: ", unsupported: "عذرًا، تحويل هذا النوع غير مدعوم حاليًا", watchAd: "شاهد إعلاناً للتحويل", adProgress: "جاري تحميل الإعلان...", subscribeNow: "اشترك الآن", planBasic: "أساسية (100 تحويلة)", planPro: "احترافية (500 تحويلة)", planBusiness: "أعمال (2000 تحويلة)", priceBasic: "8$ شهرياً", pricePro: "24$ شهرياً", priceBusiness: "80$ شهرياً", unlimitedLocal: "تحويلات محلية غير محدودة (خصوصية كاملة)", premiumCloud: "تحويلات سحابية عالية الجودة", noAds: "بدون إعلانات", subscribeNote: "اختر خطتك وابدأ", adTitle1: "خصوصية مطلقة", adDesc1: "ملفاتك لا تغادر جهازك أبداً", adTitle2: "سرعة فائقة", adDesc2: "تحويل فوري بدون انتظار", adTitle3: "14 لغة عالمية", adDesc3: "استخدم الأداة بلغتك الأم", adTitle4: "صيغ متعددة", adDesc4: "صور، مستندات، PDF والمزيد", adTitle5: "جرب الآن مجاناً", adDesc5: "شاهد الإعلان وابدأ التحويل", adComplete: "تم، احصل على تحويلتك المجانية" } },
  en: { translation: { title: "SecureConvert - Secure File Converter 🔒", subtitle: "All conversions happen inside your browser - we never upload your files", uploadText: "Drag and drop files here or click to select", selectedFiles: "Selected files", convertTo: "Convert to", convertBtn: "Convert & Download", separateDownload: "Download each file separately", zipDownload: "Download all as ZIP", zipNote: "Note: Windows may show a security warning, you can safely ignore it.", noFiles: "No files selected", selectTarget: "Choose a target format first", converting: "Converting...", success: "Conversion successful! 🎉", failed: "Conversion failed: ", unsupported: "Sorry, this file type is not supported yet", watchAd: "Watch an ad to convert", adProgress: "Loading ad...", subscribeNow: "Subscribe Now", planBasic: "Basic (100 conversions)", planPro: "Professional (500 conversions)", planBusiness: "Business (2000 conversions)", priceBasic: "$8/month", pricePro: "$24/month", priceBusiness: "$80/month", unlimitedLocal: "Unlimited local conversions (full privacy)", premiumCloud: "High-quality cloud conversions", noAds: "No ads", subscribeNote: "Choose your plan and start", adTitle1: "Absolute Privacy", adDesc1: "Your files never leave your device", adTitle2: "Blazing Speed", adDesc2: "Instant conversion, no waiting", adTitle3: "14 Global Languages", adDesc3: "Use the tool in your native language", adTitle4: "Multiple Formats", adDesc4: "Images, documents, PDF and more", adTitle5: "Try Now for Free", adDesc5: "Watch the ad and start converting", adComplete: "Done, Get Your Free Conversion" } },
  es: { translation: { title: "SecureConvert - Conversor Seguro de Archivos 🔒", subtitle: "Todas las conversiones se realizan dentro de tu navegador - nunca subimos tus archivos a ningún servidor", uploadText: "Arrastra y suelta tus archivos aquí o haz clic para seleccionar", selectedFiles: "Archivos seleccionados:", convertTo: "Convertir a", convertBtn: "Convertir y Descargar", separateDownload: "Descargar cada archivo por separado", zipDownload: "Descargar todo como ZIP", zipNote: "Nota: Windows puede mostrar una advertencia de seguridad, puedes ignorarla con seguridad.", noFiles: "No se han seleccionado archivos", selectTarget: "Elige un formato de destino primero", converting: "Convirtiendo...", success: "¡Conversión exitosa! 🎉", failed: "Conversión fallida: ", unsupported: "Lo sentimos, este tipo de archivo aún no es compatible", watchAd: "Ver un anuncio para convertir", adProgress: "Cargando anuncio...", subscribeNow: "Suscríbete ahora", planBasic: "Básico (100 conversiones)", planPro: "Profesional (500 conversiones)", planBusiness: "Negocios (2000 conversiones)", priceBasic: "8€/mes", pricePro: "24€/mes", priceBusiness: "80€/mes", unlimitedLocal: "Conversiones locales ilimitadas (privacidad total)", premiumCloud: "Conversiones en la nube de alta calidad", noAds: "Sin anuncios", subscribeNote: "Elige tu plan y comienza", adTitle1: "Privacidad Absoluta", adDesc1: "Tus archivos nunca salen de tu dispositivo", adTitle2: "Velocidad Relámpago", adDesc2: "Conversión instantánea sin esperas", adTitle3: "14 Idiomas", adDesc3: "Usa la herramienta en tu idioma nativo", adTitle4: "Múltiples Formatos", adDesc4: "Imágenes, documentos, PDF y más", adTitle5: "Pruébalo Gratis", adDesc5: "Mira el anuncio y empieza a convertir", adComplete: "Hecho, obtén tu conversión gratuita" } },
  fr: { translation: { title: "SecureConvert - Convertisseur de Fichiers Sécurisé 🔒", subtitle: "Toutes les conversions se font dans votre navigateur - nous ne téléchargeons jamais vos fichiers sur un serveur", uploadText: "Glissez-déposez vos fichiers ici ou cliquez pour sélectionner", selectedFiles: "Fichiers sélectionnés :", convertTo: "Convertir en", convertBtn: "Convertir et Télécharger", separateDownload: "Télécharger chaque fichier séparément", zipDownload: "Télécharger tout en ZIP", zipNote: "Note : Windows peut afficher un avertissement de sécurité, vous pouvez l'ignorer en toute sécurité.", noFiles: "Aucun fichier sélectionné", selectTarget: "Choisissez d'abord un format cible", converting: "Conversion en cours...", success: "Conversion réussie ! 🎉", failed: "Échec de la conversion : ", unsupported: "Désolé, ce type de fichier n'est pas encore pris en charge", watchAd: "Regarder une publicité pour convertir", adProgress: "Chargement de la publicité...", subscribeNow: "Abonnez-vous maintenant", planBasic: "Basique (100 conversions)", planPro: "Professionnel (500 conversions)", planBusiness: "Affaires (2000 conversions)", priceBasic: "8€/mois", pricePro: "24€/mois", priceBusiness: "80€/mois", unlimitedLocal: "Conversions locales illimitées (confidentialité totale)", premiumCloud: "Conversions cloud de haute qualité", noAds: "Sans publicités", subscribeNote: "Choisissez votre plan et commencez", adTitle1: "Confidentialité Absolue", adDesc1: "Vos fichiers ne quittent jamais votre appareil", adTitle2: "Vitesse Fulgurante", adDesc2: "Conversion instantanée sans attente", adTitle3: "14 Langues Mondiales", adDesc3: "Utilisez l'outil dans votre langue maternelle", adTitle4: "Formats Multiples", adDesc4: "Images, documents, PDF et plus", adTitle5: "Essayez Gratuitement", adDesc5: "Regardez la pub et commencez à convertir", adComplete: "Terminé, obtenez votre conversion gratuite" } },
  de: { translation: { title: "SecureConvert - Sicherer Dateikonverter 🔒", subtitle: "Alle Konvertierungen finden in Ihrem Browser statt - wir laden Ihre Dateien nie auf einen Server hoch", uploadText: "Ziehen Sie Ihre Dateien hierher oder klicken Sie zum Auswählen", selectedFiles: "Ausgewählte Dateien:", convertTo: "Konvertieren in", convertBtn: "Konvertieren & Herunterladen", separateDownload: "Jede Datei einzeln herunterladen", zipDownload: "Alles als ZIP herunterladen", zipNote: "Hinweis: Windows zeigt möglicherweise eine Sicherheitswarnung an, die Sie sicher ignorieren können.", noFiles: "Keine Dateien ausgewählt", selectTarget: "Wählen Sie zuerst ein Zielformat", converting: "Konvertierung läuft...", success: "Konvertierung erfolgreich! 🎉", failed: "Konvertierung fehlgeschlagen: ", unsupported: "Entschuldigung, dieser Dateityp wird noch nicht unterstützt", watchAd: "Anzeige ansehen, um zu konvertieren", adProgress: "Anzeige wird geladen...", subscribeNow: "Jetzt abonnieren", planBasic: "Basis (100 Konvertierungen)", planPro: "Professionell (500 Konvertierungen)", planBusiness: "Business (2000 Konvertierungen)", priceBasic: "8€/Monat", pricePro: "24€/Monat", priceBusiness: "80€/Monat", unlimitedLocal: "Unbegrenzte lokale Konvertierungen (volle Privatsphäre)", premiumCloud: "Hochwertige Cloud-Konvertierungen", noAds: "Keine Werbung", subscribeNote: "Wählen Sie Ihren Plan und starten Sie", adTitle1: "Absolute Privatsphäre", adDesc1: "Ihre Dateien verlassen nie Ihr Gerät", adTitle2: "Rasante Geschwindigkeit", adDesc2: "Sofortige Konvertierung ohne Wartezeit", adTitle3: "14 Weltsprachen", adDesc3: "Nutzen Sie das Tool in Ihrer Muttersprache", adTitle4: "Viele Formate", adDesc4: "Bilder, Dokumente, PDF und mehr", adTitle5: "Jetzt kostenlos testen", adDesc5: "Anzeige ansehen und mit der Konvertierung beginnen", adComplete: "Fertig, erhalten Sie Ihre kostenlose Konvertierung" } },
  zh: { translation: { title: "SecureConvert - 安全文件转换器 🔒", subtitle: "所有转换都在您的浏览器内完成 - 我们绝不会将您的文件上传到任何服务器", uploadText: "将您的文件拖放到此处或单击选择", selectedFiles: "已选文件：", convertTo: "转换为", convertBtn: "转换并下载", separateDownload: "分别下载每个文件", zipDownload: "全部下载为 ZIP", zipNote: "注意：Windows 可能会显示安全警告，您可以安全地忽略它。", noFiles: "未选择任何文件", selectTarget: "请先选择目标格式", converting: "正在转换...", success: "转换成功！🎉", failed: "转换失败：", unsupported: "抱歉，目前尚不支持此文件类型", watchAd: "观看广告以进行转换", adProgress: "正在加载广告...", subscribeNow: "立即订阅", planBasic: "基础版（100 次转换）", planPro: "专业版（500 次转换）", planBusiness: "商业版（2000 次转换）", priceBasic: "8美元/月", pricePro: "24美元/月", priceBusiness: "80美元/月", unlimitedLocal: "无限制本地转换（完全隐私）", premiumCloud: "高质量云端转换", noAds: "无广告", subscribeNote: "选择您的方案并开始", adTitle1: "绝对隐私", adDesc1: "您的文件永不离开您的设备", adTitle2: "闪电速度", adDesc2: "即时转换，无需等待", adTitle3: "14种全球语言", adDesc3: "用您的母语使用该工具", adTitle4: "多种格式", adDesc4: "图片、文档、PDF等", adTitle5: "立即免费试用", adDesc5: "观看广告并开始转换", adComplete: "完成，获取免费转换" } },
  hi: { translation: { title: "SecureConvert - सुरक्षित फ़ाइल कनवर्टर 🔒", subtitle: "सभी रूपांतरण आपके ब्राउज़र के अंदर होते हैं - हम आपकी फ़ाइलों को कभी किसी सर्वर पर अपलोड नहीं करते हैं", uploadText: "अपनी फ़ाइलों को यहाँ खींचें और छोड़ें या चुनने के लिए क्लिक करें", selectedFiles: "चयनित फ़ाइलें:", convertTo: "में बदलें", convertBtn: "बदलें और डाउनलोड करें", separateDownload: "प्रत्येक फ़ाइल को अलग-अलग डाउनलोड करें", zipDownload: "सभी को ZIP के रूप में डाउनलोड करें", zipNote: "नोट: विंडोज एक सुरक्षा चेतावनी दिखा सकता है, आप इसे सुरक्षित रूप से अनदेखा कर सकते हैं।", noFiles: "कोई फ़ाइल चयनित नहीं", selectTarget: "पहले एक लक्ष्य प्रारूप चुनें", converting: "रूपांतरण हो रहा है...", success: "रूपांतरण सफल! 🎉", failed: "रूपांतरण विफल: ", unsupported: "क्षमा करें, यह फ़ाइल प्रकार अभी तक समर्थित नहीं है", watchAd: "बदलने के लिए एक विज्ञापन देखें", adProgress: "विज्ञापन लोड हो रहा है...", subscribeNow: "अभी सदस्यता लें", planBasic: "बेसिक (100 रूपांतरण)", planPro: "प्रोफेशनल (500 रूपांतरण)", planBusiness: "बिजनेस (2000 रूपांतरण)", priceBasic: "$8/माह", pricePro: "$24/माह", priceBusiness: "$80/माह", unlimitedLocal: "असीमित स्थानीय रूपांतरण (पूर्ण गोपनीयता)", premiumCloud: "उच्च गुणवत्ता वाले क्लाउड रूपांतरण", noAds: "कोई विज्ञापन नहीं", subscribeNote: "अपनी योजना चुनें और शुरू करें", adTitle1: "पूर्ण गोपनीयता", adDesc1: "आपकी फ़ाइलें कभी भी आपके डिवाइस से बाहर नहीं जातीं", adTitle2: "तीव्र गति", adDesc2: "त्वरित रूपांतरण, कोई प्रतीक्षा नहीं", adTitle3: "14 वैश्विक भाषाएँ", adDesc3: "उपकरण का उपयोग अपनी मूल भाषा में करें", adTitle4: "एकाधिक प्रारूप", adDesc4: "छवियाँ, दस्तावेज़, पीडीएफ और अधिक", adTitle5: "अभी मुफ़्त आज़माएँ", adDesc5: "विज्ञापन देखें और रूपांतरण शुरू करें", adComplete: "हो गया, अपना मुफ़्त रूपांतरण प्राप्त करें" } },
  ru: { translation: { title: "SecureConvert - Безопасный Конвертер Файлов 🔒", subtitle: "Все преобразования происходят внутри вашего браузера - мы никогда не загружаем ваши файлы на какой-либо сервер", uploadText: "Перетащите файлы сюда или нажмите, чтобы выбрать", selectedFiles: "Выбранные файлы:", convertTo: "Конвертировать в", convertBtn: "Конвертировать и Скачать", separateDownload: "Скачать каждый файл отдельно", zipDownload: "Скачать всё как ZIP", zipNote: "Примечание: Windows может показать предупреждение безопасности, вы можете смело его игнорировать.", noFiles: "Файлы не выбраны", selectTarget: "Сначала выберите целевой формат", converting: "Идет преобразование...", success: "Преобразование успешно! 🎉", failed: "Ошибка преобразования: ", unsupported: "Извините, этот тип файла пока не поддерживается", watchAd: "Посмотрите рекламу, чтобы конвертировать", adProgress: "Загрузка рекламы...", subscribeNow: "Подписаться сейчас", planBasic: "Базовый (100 конвертаций)", planPro: "Профессиональный (500 конвертаций)", planBusiness: "Бизнес (2000 конвертаций)", priceBasic: "8$/мес", pricePro: "24$/мес", priceBusiness: "80$/мес", unlimitedLocal: "Неограниченные локальные конвертации (полная конфиденциальность)", premiumCloud: "Высококачественные облачные конвертации", noAds: "Без рекламы", subscribeNote: "Выберите план и начните", adTitle1: "Абсолютная конфиденциальность", adDesc1: "Ваши файлы никогда не покидают ваше устройство", adTitle2: "Молниеносная скорость", adDesc2: "Мгновенная конвертация без ожидания", adTitle3: "14 мировых языков", adDesc3: "Используйте инструмент на родном языке", adTitle4: "Множество форматов", adDesc4: "Изображения, документы, PDF и другое", adTitle5: "Попробуйте бесплатно", adDesc5: "Посмотрите рекламу и начните конвертацию", adComplete: "Готово, получите бесплатную конвертацию" } },
  pt: { translation: { title: "SecureConvert - Conversor de Arquivos Seguro 🔒", subtitle: "Todas as conversões acontecem dentro do seu navegador - nunca enviamos seus arquivos para nenhum servidor", uploadText: "Arraste e solte seus arquivos aqui ou clique para selecionar", selectedFiles: "Arquivos selecionados:", convertTo: "Converter para", convertBtn: "Converter e Baixar", separateDownload: "Baixar cada arquivo separadamente", zipDownload: "Baixar tudo como ZIP", zipNote: "Nota: O Windows pode mostrar um aviso de segurança, você pode ignorá-lo com segurança.", noFiles: "Nenhum arquivo selecionado", selectTarget: "Escolha um formato de destino primeiro", converting: "Convertendo...", success: "Conversão bem-sucedida! 🎉", failed: "Falha na conversão: ", unsupported: "Desculpe, este tipo de arquivo ainda não é suportado", watchAd: "Assista a um anúncio para converter", adProgress: "Carregando anúncio...", subscribeNow: "Assine agora", planBasic: "Básico (100 conversões)", planPro: "Profissional (500 conversões)", planBusiness: "Negócios (2000 conversões)", priceBasic: "8$/mês", pricePro: "24$/mês", priceBusiness: "80$/mês", unlimitedLocal: "Conversões locais ilimitadas (privacidade total)", premiumCloud: "Conversões em nuvem de alta qualidade", noAds: "Sem anúncios", subscribeNote: "Escolha seu plano e comece", adTitle1: "Privacidade Absoluta", adDesc1: "Seus arquivos nunca saem do seu dispositivo", adTitle2: "Velocidade Relâmpago", adDesc2: "Conversão instantânea sem espera", adTitle3: "14 Idiomas Globais", adDesc3: "Use a ferramenta no seu idioma nativo", adTitle4: "Múltiplos Formatos", adDesc4: "Imagens, documentos, PDF e mais", adTitle5: "Experimente Grátis", adDesc5: "Assista ao anúncio e comece a converter", adComplete: "Pronto, obtenha sua conversão gratuita" } },
  ja: { translation: { title: "SecureConvert - 安全なファイル変換 🔒", subtitle: "すべての変換はブラウザ内で行われます - お客様のファイルをサーバーにアップロードすることは決してありません", uploadText: "ここにファイルをドラッグ＆ドロップするか、クリックして選択してください", selectedFiles: "選択されたファイル:", convertTo: "変換先", convertBtn: "変換してダウンロード", separateDownload: "各ファイルを個別にダウンロード", zipDownload: "すべてをZIPでダウンロード", zipNote: "注：Windows がセキュリティ警告を表示する場合がありますが、安全に無視できます。", noFiles: "ファイルが選択されていません", selectTarget: "最初に変換先の形式を選択してください", converting: "変換中...", success: "変換に成功しました！🎉", failed: "変換に失敗しました: ", unsupported: "申し訳ありません、このファイルタイプはまだサポートされていません", watchAd: "広告を見て変換する", adProgress: "広告を読み込み中...", subscribeNow: "今すぐ購読", planBasic: "ベーシック (100回の変換)", planPro: "プロフェッショナル (500回の変換)", planBusiness: "ビジネス (2000回の変換)", priceBasic: "8ドル/月", pricePro: "24ドル/月", priceBusiness: "80ドル/月", unlimitedLocal: "無制限のローカル変換 (完全なプライバシー)", premiumCloud: "高品質のクラウド変換", noAds: "広告なし", subscribeNote: "プランを選択して開始", adTitle1: "完全なプライバシー", adDesc1: "あなたのファイルはデバイスから出ません", adTitle2: "超高速", adDesc2: "待ち時間なしのインスタント変換", adTitle3: "14の世界言語", adDesc3: "母国語でツールを使用", adTitle4: "複数のフォーマット", adDesc4: "画像、文書、PDFなど", adTitle5: "今すぐ無料で試す", adDesc5: "広告を見て変換を開始", adComplete: "完了、無料変換を取得" } },
  ko: { translation: { title: "SecureConvert - 안전한 파일 변환기 🔒", subtitle: "모든 변환은 브라우저 내에서 이루어집니다 - 귀하의 파일을 어떤 서버에도 업로드하지 않습니다", uploadText: "파일을 여기에 끌어다 놓거나 클릭하여 선택하세요", selectedFiles: "선택한 파일:", convertTo: "변환 대상", convertBtn: "변환 및 다운로드", separateDownload: "각 파일을 개별적으로 다운로드", zipDownload: "모두 ZIP으로 다운로드", zipNote: "참고: Windows에서 보안 경고를 표시할 수 있으며, 안전하게 무시할 수 있습니다.", noFiles: "선택한 파일이 없습니다", selectTarget: "먼저 대상 형식을 선택하세요", converting: "변환 중...", success: "변환 성공! 🎉", failed: "변환 실패: ", unsupported: "죄송합니다. 이 파일 형식은 아직 지원되지 않습니다", watchAd: "변환하려면 광고 보기", adProgress: "광고 로딩 중...", subscribeNow: "지금 구독하기", planBasic: "베이직 (100회 변환)", planPro: "프로페셔널 (500회 변환)", planBusiness: "비즈니스 (2000회 변환)", priceBasic: "월 $8", pricePro: "월 $24", priceBusiness: "월 $80", unlimitedLocal: "무제한 로컬 변환 (완전한 개인정보 보호)", premiumCloud: "고품질 클라우드 변환", noAds: "광고 없음", subscribeNote: "플랜을 선택하고 시작하세요", adTitle1: "완벽한 개인정보 보호", adDesc1: "파일이 장치를 떠나지 않습니다", adTitle2: "빠른 속도", adDesc2: "기다림 없는 즉시 변환", adTitle3: "14개 세계 언어", adDesc3: "모국어로 도구 사용", adTitle4: "다양한 형식", adDesc4: "이미지, 문서, PDF 등", adTitle5: "지금 무료로 사용해 보세요", adDesc5: "광고를 보고 변환 시작", adComplete: "완료, 무료 변환 받기" } },
  bn: { translation: { title: "SecureConvert - নিরাপদ ফাইল রূপান্তরকারী 🔒", subtitle: "সমস্ত রূপান্তর আপনার ব্রাউজারের ভিতরে ঘটে - আমরা কখনই আপনার ফাইলগুলি কোনও সার্ভারে আপলোড করি না", uploadText: "আপনার ফাইলগুলি এখানে টেনে আনুন বা নির্বাচন করতে ক্লিক করুন", selectedFiles: "নির্বাচিত ফাইল:", convertTo: "রূপান্তর করুন", convertBtn: "রূপান্তর এবং ডাউনলোড", separateDownload: "প্রতিটি ফাইল আলাদাভাবে ডাউনলোড করুন", zipDownload: "সব ZIP হিসাবে ডাউনলোড করুন", zipNote: "দ্রষ্টব্য: উইন্ডোজ একটি নিরাপত্তা সতর্কতা দেখাতে পারে, আপনি নিরাপদে এটি উপেক্ষা করতে পারেন।", noFiles: "কোন ফাইল নির্বাচিত হয়নি", selectTarget: "প্রথমে একটি লক্ষ্য বিন্যাস চয়ন করুন", converting: "রূপান্তর হচ্ছে...", success: "রূপান্তর সফল! 🎉", failed: "রূপান্তর ব্যর্থ: ", unsupported: "দুঃখিত, এই ফাইলের ধরনটি এখনও সমর্থিত নয়", watchAd: "রূপান্তর করতে একটি বিজ্ঞাপন দেখুন", adProgress: "বিজ্ঞাপন লোড হচ্ছে...", subscribeNow: "এখনই সাবস্ক্রাইব করুন", planBasic: "বেসিক (100 রূপান্তর)", planPro: "প্রফেশনাল (500 রূপান্তর)", planBusiness: "বিজনেস (2000 রূপান্তর)", priceBasic: "$8/মাস", pricePro: "$24/মাস", priceBusiness: "$80/মাস", unlimitedLocal: "সীমাহীন স্থানীয় রূপান্তর (সম্পূর্ণ গোপনীয়তা)", premiumCloud: "উচ্চ মানের ক্লাউড রূপান্তর", noAds: "বিজ্ঞাপন নেই", subscribeNote: "আপনার প্ল্যান চয়ন করুন এবং শুরু করুন", adTitle1: "সম্পূর্ণ গোপনীয়তা", adDesc1: "আপনার ফাইলগুলি কখনই আপনার ডিভাইস ছেড়ে যায় না", adTitle2: "দ্রুত গতি", adDesc2: "তাত্ক্ষণিক রূপান্তর, অপেক্ষা নেই", adTitle3: "14টি বিশ্ব ভাষা", adDesc3: "আপনার মাতৃভাষায় সরঞ্জামটি ব্যবহার করুন", adTitle4: "একাধিক বিন্যাস", adDesc4: "ছবি, নথি, পিডিএফ এবং আরও অনেক কিছু", adTitle5: "এখনই বিনামূল্যে ব্যবহার করে দেখুন", adDesc5: "বিজ্ঞাপন দেখুন এবং রূপান্তর শুরু করুন", adComplete: "সম্পন্ন, আপনার বিনামূল্যের রূপান্তর পান" } },
  id: { translation: { title: "SecureConvert - Konverter File Aman 🔒", subtitle: "Semua konversi terjadi di dalam browser Anda - kami tidak pernah mengunggah file Anda ke server mana pun", uploadText: "Seret dan lepas file Anda di sini atau klik untuk memilih", selectedFiles: "File yang dipilih:", convertTo: "Konversikan ke", convertBtn: "Konversi & Unduh", separateDownload: "Unduh setiap file secara terpisah", zipDownload: "Unduh semua sebagai ZIP", zipNote: "Catatan: Windows mungkin menampilkan peringatan keamanan, Anda dapat mengabaikannya dengan aman.", noFiles: "Tidak ada file yang dipilih", selectTarget: "Pilih format target terlebih dahulu", converting: "Mengonversi...", success: "Konversi berhasil! 🎉", failed: "Konversi gagal: ", unsupported: "Maaf, jenis file ini belum didukung", watchAd: "Tonton iklan untuk mengonversi", adProgress: "Memuat iklan...", subscribeNow: "Berlangganan sekarang", planBasic: "Dasar (100 konversi)", planPro: "Profesional (500 konversi)", planBusiness: "Bisnis (2000 konversi)", priceBasic: "$8/bulan", pricePro: "$24/bulan", priceBusiness: "$80/bulan", unlimitedLocal: "Konversi lokal tanpa batas (privasi penuh)", premiumCloud: "Konversi cloud berkualitas tinggi", noAds: "Tanpa iklan", subscribeNote: "Pilih paket Anda dan mulai", adTitle1: "Privasi Mutlak", adDesc1: "File Anda tidak pernah meninggalkan perangkat Anda", adTitle2: "Kecepatan Kilat", adDesc2: "Konversi instan tanpa menunggu", adTitle3: "14 Bahasa Global", adDesc3: "Gunakan alat dalam bahasa ibu Anda", adTitle4: "Banyak Format", adDesc4: "Gambar, dokumen, PDF, dan lainnya", adTitle5: "Coba Gratis Sekarang", adDesc5: "Tonton iklan dan mulai konversi", adComplete: "Selesai, Dapatkan Konversi Gratis Anda" } },
  ur: { translation: { title: "SecureConvert - محفوظ فائل کنورٹر 🔒", subtitle: "تمام تبدیلیاں آپ کے براؤزر کے اندر ہوتی ہیں - ہم آپ کی فائلوں کو کبھی کسی سرور پر اپ لوڈ نہیں کرتے ہیں", uploadText: "اپنی فائلیں یہاں گھسیٹیں یا منتخب کرنے کے لیے کلک کریں", selectedFiles: "منتخب فائلیں:", convertTo: "میں تبدیل کریں", convertBtn: "تبدیل کریں اور ڈاؤن لوڈ کریں", separateDownload: "ہر فائل کو علیحدہ ڈاؤن لوڈ کریں", zipDownload: "سب کو ZIP کے طور پر ڈاؤن لوڈ کریں", zipNote: "نوٹ: ونڈوز ایک حفاظتی انتباہ دکھا سکتا ہے، آپ اسے محفوظ طریقے سے نظر انداز کر سکتے ہیں۔", noFiles: "کوئی فائل منتخب نہیں", selectTarget: "پہلے ایک ہدف فارمیٹ منتخب کریں", converting: "تبدیلی ہو رہی ہے...", success: "تبدیلی کامیاب! 🎉", failed: "تبدیلی ناکام: ", unsupported: "معذرت، اس فائل کی قسم ابھی تک تعاون یافتہ نہیں ہے", watchAd: "تبدیل کرنے کے لیے ایک اشتہار دیکھیں", adProgress: "اشتہار لوڈ ہو رہا ہے...", subscribeNow: "ابھی سبسکرائب کریں", planBasic: "بنیادی (100 تبدیلیاں)", planPro: "پیشہ ورانہ (500 تبدیلیاں)", planBusiness: "کاروباری (2000 تبدیلیاں)", priceBasic: "$8/ماہ", pricePro: "$24/ماہ", priceBusiness: "$80/ماہ", unlimitedLocal: "لامحدود مقامی تبدیلیاں (مکمل رازداری)", premiumCloud: "اعلیٰ معیار کی کلاؤڈ تبدیلیاں", noAds: "کوئی اشتہار نہیں", subscribeNote: "اپنا منصوبہ منتخب کریں اور شروع کریں", adTitle1: "مکمل رازداری", adDesc1: "آپ کی فائلیں کبھی بھی آپ کے آلے سے باہر نہیں جاتیں", adTitle2: "تیز رفتار", adDesc2: "فوری تبدیلی، بغیر انتظار", adTitle3: "14 عالمی زبانیں", adDesc3: "ٹول کو اپنی مادری زبان میں استعمال کریں", adTitle4: "متعدد فارمیٹس", adDesc4: "تصاویر، دستاویزات، پی ڈی ایف اور مزید", adTitle5: "ابھی مفت آزمائیں", adDesc5: "اشتہار دیکھیں اور تبدیلی شروع کریں", adComplete: "ہو گیا، اپنی مفت تبدیلی حاصل کریں" } }
};

// ===================== عناصر DOM =====================
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileList = document.getElementById('fileList');
const convertSection = document.getElementById('convertSection');
const targetFormat = document.getElementById('targetFormat');
const convertBtn = document.getElementById('convertBtn');
const adBtn = document.getElementById('adBtn');
const statusMessage = document.getElementById('statusMessage');
const downloadModeRadios = document.getElementsByName('downloadMode');
const zipNote = document.querySelector('.zip-note');
const subscribeSection = document.getElementById('subscribeSection');
let langSelect, htmlRoot;

let selectedFiles = [];
let freeConversionsRemaining = 0;

// ===================== اللغة =====================
function updateUILanguage() {
    const lng = i18next.language;
    htmlRoot.lang = lng;
    htmlRoot.dir = (lng === 'ar' || lng === 'ur') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18next.t(key);
    });
    if (langSelect) langSelect.value = lng;
    updateZipNoteVisibility();
    updateAdButtonVisibility();
}

function changeLanguage(lang) {
    i18next.changeLanguage(lang, (err) => {
        if (!err) {
            updateUILanguage();
            localStorage.setItem('lang', lang);
        }
    });
}

// ===================== أزرار الإعلان والتحويل =====================
function isUserSubscribed() {
    return true;
}

function updateAdButtonVisibility() {
    if (isUserSubscribed()) {
        adBtn.style.display = 'none';
        convertBtn.style.display = 'block';
        convertBtn.disabled = false;
        return;
    }
    if (freeConversionsRemaining > 0) {
        adBtn.style.display = 'none';
        convertBtn.style.display = 'block';
        convertBtn.disabled = false;
    } else {
        adBtn.style.display = 'block';
        convertBtn.style.display = 'none';
    }
}

// ===================== الإعلان التعريفي المنبثق =====================
let adTimerInterval = null;
let adSecondsLeft = 30;

function watchAdForConversion() {
    const overlay = document.getElementById('adModalOverlay');
    const timerEl = document.getElementById('adTimer');
    const slides = document.querySelectorAll('.ad-slide');
    const completeBtn = document.getElementById('adCompleteBtn');
    
    if (!overlay) return;
    
    adSecondsLeft = 30;
    timerEl.textContent = adSecondsLeft;
    slides.forEach(s => s.classList.remove('active'));
    if (slides.length > 0) slides[0].classList.add('active');
    completeBtn.disabled = true;
    completeBtn.textContent = i18next.t('adComplete');
    overlay.style.display = 'flex';
    
    adTimerInterval = setInterval(() => {
        adSecondsLeft--;
        timerEl.textContent = adSecondsLeft;
        
        const currentSlide = Math.floor((30 - adSecondsLeft) / 6);
        if (currentSlide < slides.length) {
            slides.forEach(s => s.classList.remove('active'));
            slides[currentSlide].classList.add('active');
        }
        
        if (adSecondsLeft <= 0) {
            clearInterval(adTimerInterval);
            timerEl.textContent = '✓';
            completeBtn.disabled = false;
            completeBtn.textContent = i18next.t('adComplete');
        }
    }, 1000);
    
    completeBtn.onclick = () => {
        clearInterval(adTimerInterval);
        overlay.style.display = 'none';
        freeConversionsRemaining += 1;
        showStatus(i18next.t('success'), 'success');
        updateAdButtonVisibility();
    };
}

// ===================== رفع الملفات =====================
uploadZone.addEventListener('click', () => fileInput.click());
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.style.background = '#f0edff'; });
uploadZone.addEventListener('dragleave', () => { uploadZone.style.background = ''; });
uploadZone.addEventListener('drop', e => { e.preventDefault(); uploadZone.style.background = ''; handleFiles(e.dataTransfer.files); });
fileInput.addEventListener('change', e => handleFiles(e.target.files));

function handleFiles(files) {
    selectedFiles = Array.from(files || []);
    if (selectedFiles.length === 0) {
        fileInfo.style.display = 'none';
        convertSection.style.display = 'none';
        return;
    }
    updateFileList();
    updateTargetOptions();
    fileInfo.style.display = 'block';
    convertSection.style.display = 'block';
    statusMessage.className = 'status';
    statusMessage.style.display = 'none';
}

function updateFileList() {
    fileList.innerHTML = '';
    const fmt = {
        'image/jpeg': 'JPEG', 'image/png': 'PNG', 'image/webp': 'WebP',
        'text/plain': 'TXT', 'text/html': 'HTML', 'application/json': 'JSON',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
        'application/pdf': 'PDF'
    };
    selectedFiles.forEach(file => {
        const li = document.createElement('li');
        const fname = fmt[file.type] || file.type.split('/')[1] || 'ملف';
        li.textContent = `${file.name} (${fname})`;
        fileList.appendChild(li);
    });
}

function updateTargetOptions() {
    const convMap = {
        'image/jpeg': ['image/png', 'image/webp', 'application/pdf'],
        'image/png': ['image/jpeg', 'image/webp', 'application/pdf'],
        'image/webp': ['image/jpeg', 'image/png', 'application/pdf'],
        'text/plain': ['text/html', 'application/pdf'],
        'text/html': ['text/plain', 'application/pdf'],
        'application/json': ['text/plain', 'application/pdf'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['text/plain', 'text/html', 'application/pdf'],
        'application/pdf': ['text/plain', 'text/html']
    };
    targetFormat.innerHTML = '<option value="">-- اختيار --</option>';
    let commonTargets = null;
    selectedFiles.forEach(file => {
        const targets = convMap[file.type] || [];
        if (commonTargets === null) commonTargets = targets;
        else commonTargets = commonTargets.filter(t => targets.includes(t));
    });
    if (!commonTargets || commonTargets.length === 0) {
        showStatus(i18next.t('unsupported'), 'error');
        convertSection.style.display = 'none';
        return;
    }
    const fn = {
        'image/jpeg': 'JPEG', 'image/png': 'PNG', 'image/webp': 'WebP',
        'text/plain': 'TXT', 'text/html': 'HTML', 'application/json': 'JSON',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
        'application/pdf': 'PDF'
    };
    commonTargets.forEach(format => {
        const opt = document.createElement('option');
        opt.value = format;
        opt.textContent = fn[format] || format.split('/')[1];
        targetFormat.appendChild(opt);
    });
}

// ===================== تنفيذ التحويل =====================
convertBtn.addEventListener('click', executeConversion);
adBtn.addEventListener('click', watchAdForConversion);

async function executeConversion() {
    const target = targetFormat.value;
    if (!target || selectedFiles.length === 0) {
        showStatus(i18next.t('selectTarget'), 'error');
        return;
    }
    if (!isUserSubscribed() && freeConversionsRemaining <= 0) {
        showStatus('يجب مشاهدة إعلان أو الاشتراك للتحويل', 'error');
        return;
    }
    const mode = getDownloadMode();
    showStatus(i18next.t('converting'), 'success');
    try {
        if (mode === 'separate' || selectedFiles.length === 1) {
            await downloadSeparately(selectedFiles, target);
        } else {
            await downloadAsZip(selectedFiles, target);
        }
        if (!isUserSubscribed() && freeConversionsRemaining > 0) freeConversionsRemaining--;
        updateAdButtonVisibility();
        showStatus(i18next.t('success'), 'success');
    } catch (err) {
        showStatus(i18next.t('failed') + err.message, 'error');
    }
}

async function downloadSeparately(files, targetType) {
    for (const file of files) {
        const blob = await convertFile(file, targetType);
        const newName = changeExtension(file.name, targetType);
        saveAs(blob, newName);
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}

async function downloadAsZip(files, targetType) {
    const zip = new JSZip();
    for (const file of files) {
        const blob = await convertFile(file, targetType);
        const newName = changeExtension(file.name, targetType);
        zip.file(newName, blob);
    }
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'converted_files.zip');
}

// ===================== محرك التحويل =====================
async function convertFile(file, targetType) {
    if (file.type.startsWith('image/')) {
        if (targetType.startsWith('image/')) return convertImage(file, targetType);
        if (targetType === 'application/pdf') return imageToPdf(file);
    }
    if (['text/plain','text/html','application/json'].includes(file.type)) {
        if (targetType.startsWith('text/') || targetType === 'application/json') return convertText(file, targetType);
        if (targetType === 'application/pdf') return textToPdf(file);
    }
    if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        if (targetType === 'text/plain') return docxToText(file);
        if (targetType === 'text/html') return docxToHtml(file);
        if (targetType === 'application/pdf') {
            const htmlBlob = await docxToHtml(file);
            return htmlToPdf(htmlBlob);
        }
    }
    throw new Error('نوع التحويل غير مدعوم');
}

function convertImage(file, targetType) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                canvas.toBlob(resolve, targetType, 0.9);
            };
            img.onerror = () => reject(new Error('فشل تحميل الصورة'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsDataURL(file);
    });
}

function convertText(file, targetType) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            let content = e.target.result;
            if (file.type === 'application/json' && targetType === 'text/plain') {
                try {
                    content = JSON.stringify(JSON.parse(content), null, 2);
                } catch (err) {
                    reject(new Error('ملف JSON غير صالح'));
                    return;
                }
            }
            resolve(new Blob([content], { type: targetType }));
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsText(file);
    });
}

function imageToPdf(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                let imgWidth = pageWidth - 20;
                let imgHeight = (img.height * imgWidth) / img.width;
                if (imgHeight > pageHeight - 20) {
                    imgHeight = pageHeight - 20;
                    imgWidth = (img.width * imgHeight) / img.height;
                }
                pdf.addImage(img, 'JPEG', 10, 10, imgWidth, imgHeight);
                resolve(pdf.output('blob'));
            };
            img.onerror = () => reject(new Error('فشل تحميل الصورة'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsDataURL(file);
    });
}

function textToPdf(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
            const splitText = pdf.splitTextToSize(e.target.result, 180);
            pdf.text(splitText, 15, 15);
            resolve(pdf.output('blob'));
        };
        reader.onerror = () => reject(new Error('فشل قراءة الملف'));
        reader.readAsText(file);
    });
}

function htmlToPdf(htmlBlob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = e.target.result;
            const text = tempDiv.textContent || '';
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF();
            const split = pdf.splitTextToSize(text, 180);
            pdf.text(split, 15, 15);
            resolve(pdf.output('blob'));
        };
        reader.onerror = () => reject(new Error('فشل قراءة HTML'));
        reader.readAsText(htmlBlob);
    });
}

function docxToText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const result = await mammoth.extractRawText({ arrayBuffer: e.target.result });
                resolve(new Blob([result.value], { type: 'text/plain' }));
            } catch (err) { reject(err); }
        };
        reader.onerror = () => reject(new Error('فشل قراءة ملف DOCX'));
        reader.readAsArrayBuffer(file);
    });
}

function docxToHtml(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const result = await mammoth.convertToHtml({ arrayBuffer: e.target.result });
                resolve(new Blob([result.value], { type: 'text/html' }));
            } catch (err) { reject(err); }
        };
        reader.onerror = () => reject(new Error('فشل قراءة ملف DOCX'));
        reader.readAsArrayBuffer(file);
    });
}

// ===================== دوال مساعدة =====================
function changeExtension(filename, targetType) {
    const base = filename.replace(/\.[^/.]+$/, '');
    const extMap = {
        'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp',
        'text/plain': 'txt', 'text/html': 'html', 'application/json': 'json',
        'application/pdf': 'pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx'
    };
    const ext = extMap[targetType] || targetType.split('/')[1];
    return base + '_converted.' + ext;
}

function getDownloadMode() {
    for (const radio of downloadModeRadios) {
        if (radio.checked) return radio.value;
    }
    return 'separate';
}

function updateZipNoteVisibility() {
    if (zipNote) {
        const mode = getDownloadMode();
        zipNote.style.display = (mode === 'zip') ? 'inline-block' : 'none';
    }
}

function showStatus(msg, type) {
    if (statusMessage) {
        statusMessage.textContent = msg;
        statusMessage.className = `status ${type}`;
        statusMessage.style.display = 'block';
    }
}

// ===================== بدء تشغيل i18next =====================
i18next.init({
    lng: localStorage.getItem('lang') || 'ar',
    fallbackLng: 'en',
    resources: fallbackResources,
    interpolation: { escapeValue: false }
}, () => {
    langSelect = document.getElementById('langSelect');
    htmlRoot = document.getElementById('htmlRoot');
    updateUILanguage();
    if (subscribeSection) subscribeSection.style.display = 'none';
    updateAdButtonVisibility();
});

i18next.on('languageChanged', updateUILanguage);

if (downloadModeRadios) {
    downloadModeRadios.forEach(radio => radio.addEventListener('change', updateZipNoteVisibility));
    updateZipNoteVisibility();
}