/* ============================================================
   ÇEVIRI / TRANSLATION SYSTEM
   ============================================================ */
const translations = {
  tr: {
    // Login
    login_title:          'Giriş Yap',
    login_sub:            'Şifrenizi girerek devam edin',
    login_btn:            '🔓 Giriş Yap',
    password_placeholder: '••••••',
    username_placeholder: 'Kullanıcı adı (admin için boş bırakın)',
    server_active:        'Sunucu doğrulaması aktif',
    cancel:               'İptal',
    nav_user_mgmt:        'Kullanıcı Yönetimi',
    logout_btn:           'Çıkış Yap',
    change_my_pw:         '✏️ Şifremi Değiştir',

    // Top bar
    how_it_works:         'ℹ️ Nasıl Çalışır',
    klasman:              'Klasman',

    // Sidebar nav
    nav_home:             'Ana Sayfa',
    nav_dashboard:        'Dashboard',
    nav_management:       'Yönetim',
    nav_klasman_mgmt:     'Klasman Yönetimi',
    nav_analysis:         'Analiz',
    nav_klasman_analysis: 'Klasman Analizi',
    nav_perf_analysis:    'Performans Analizi',
    nav_display:          'Görüntüleme',
    nav_live:             'Canlı Gösterim',

    // Dashboard page
    dash_title:           'Inspector Performans Dashboard',
    dash_sub:             'Tüm inspectörlerin performans durumunu tek ekranda izleyin',
    pull_from_sheets:     '📥 Sheets\'ten Çek',
    clear:                '🗑️ Temizle',
    export_excel:         '📊 Excel\'e Aktar',

    // Summary stats
    stat_total_inspector: 'Toplam Inspector',
    stat_excellent:       'Mükemmel (≥95%)',
    stat_good:            'İyi (85-94%)',
    stat_average:         'Orta (70-84%)',
    stat_poor:            'Düşük (<70%)',
    stat_avg_perf:        '📅 Ortalama Performans',
    stat_avg_days:        '⏰ Ortalama Çalışma Günü',
    stat_total_product:   '📦 Toplam Ürün',

    // Filters
    filter_perf:          'Performans Filtresi:',
    filter_all:           'Tümü',
    filter_klasman:       'Klasman Filtresi:',
    filter_all_klasman:   'Tüm Klasmanlar',
    filter_search:        'Inspector Ara:',
    inspector_search_ph:  'Inspector adı...',
    filter_sort:          'Sıralama:',
    sort_perf_desc:       'Performans (Yüksek→Düşük)',
    sort_perf_asc:        'Performans (Düşük→Yüksek)',
    sort_name_asc:        'İsim (A→Z)',
    sort_name_desc:       'İsim (Z→A)',
    sort_qty_desc:        'Adet (Çok→Az)',
    sort_qty_asc:         'Adet (Az→Çok)',

    // Empty state
    no_data_yet:          'Henüz performans verisi yok',
    no_data_sub:          'Performans Analizi sayfasından Excel yükleyip analiz yapın',

    // Pagination
    prev:                 '‹ Önceki',
    next:                 'Sonraki ›',

    // Login dynamic states (JS ile üretilen)
    verifying:            '⏳ Doğrulanıyor...',
    connecting:           'Sunucuya bağlanılıyor...',
    verified:             'Doğrulandı ✓',
    error_label:          'Hata',
    pw_empty:             '❌ Şifre boş olamaz',
    pw_wrong:             '❌ Yanlış şifre, tekrar deneyin',
    pw_no_server_cache:   '⚠️ Sunucuya bağlanılamadı ve önbellek bulunamadı. İnternet bağlantınızı kontrol edin.',
    pw_offline:           'Çevrimdışı doğrulama (önbellek)',
    pw_no_sheets_pw:      'Sheets\'te şifre bulunamadı',
    pw_unreachable:       'Sunucuya ulaşılamadı',
    pw_wrong_klasman:     'Yanlış şifre!',
    pw_overlay_title:     'Giriş Yap',
    pw_overlay_sub:       'Devam etmek için şifrenizi girin',
    pw_klasman_title:     'Klasman Yönetimi',
    pw_klasman_sub:       'Bu bölüme erişmek için şifre gereklidir',
    // Dynamic JS strings
    sending:              '⏳ Gönderiliyor...',
    pulling:              '⏳ Çekiliyor...',
    no_data_js:           'Veri yok',
    no_data_js_hint:      'Önce Performans Analizi sayfasından Excel yükleyin',
    data_not_found:       'Veri bulunamadı',
    days_suffix:          'gün',
    filter_none:          '— Filtre yok (tüm satırlar) —',
    detailed_perf:        'Detaylı Performans',
    loading_records:      'Kayıt detayları yükleniyor...',
    sampling_desc:        '<span data-i18n="sampling_off">Off: actual quantity used.</span> <strong data-i18n="one_below">One Below</strong> / <strong data-i18n="two_below">Two Below</strong>: <span data-i18n="sampling_desc_end">quantity converted by sampling table.</span>',
    target_below_100:     'hedef → performans',
    target_above_100:     'hedef → performans',
    start_slideshow:      'Gösterimi Başlat',
    stop_slideshow:       '⏸ Durdur',
    no_perf_alert:        'Henüz performans verisi yok! Önce Performans Analizi sayfasından veri yükleyin.',
    records_summary:      'kayıt · ',
    units_summary:        'adet · ',
    analyzing:            'Analiz ediliyor...',
    col_overtime_label:   '⏰ Mesai Süresi',
    // Card & JS dynamic labels
    working:              'gün çalışma',
    units_short:          'adet',
    klasman_word:         'klasman',
    efficiency_label:     'verimlilik',
    above_target:         'hedeften hızlı',
    below_target:         'hedeften yavaş',
    overtime_over:        'mesai üstü',
    detailed_analysis:    'Detaylı Analiz',
    perf_excellent:       'Mükemmel',
    perf_good:            'İyi',
    perf_average:         'Orta',
    perf_poor:            'Düşük',
    stat_total_product2:  'TOPLAM ADET',
    std_duration_label:   'STANDART SÜRE',
    adj_perf_label_upper: 'DÜZ. PERFORMANS',
    best_inspector_month: 'Ayın En İyi Inspector\'ü',
    // Final remaining keys
    excel_cols_hint:      'Excel dosyanızda A Klasman, R BakilacakMiktar, K BaşlamaTarihi, L BitişTarihi sütunları bulunmalıdır.',
    overtime_col_hint:    'Mesai sütunu seçilmezse günlük 7.5s × gün bazında hesaplanır.',
    col_t_label:          'Sütun (T)',
    blank_rows_hint:      'Seçilirse boş satırlar hesaplamaya dahil edilmez.',
    security_warning:     'Güvenlik Uyarısı:',
    try_other_model:      'Hata alırsan farklı model dene',
    default_opt:          'Varsayılan',
    sort_by_date:         'Tarihe Göre ↑',
    sampling_off:         'Kapalı: gerçek adet kullanılır.',
    one_below:            'Bir Alttan',
    sampling_desc_end:    'adet örnekleme tablosuna göre dönüştürülür.',
    // New dynamic keys
    closed_label:         'Kapalı',
    open_label:           'Açık',
    hide_label:           'Gizle',
    raw_avg:              'Ham Ort.:',
    perf_formula:         'Standart Süre ÷ (Gün × 7.5s) × 100',
    adj_formula:          'Ham Perf × (100÷${hedef})',
    records_word:         'kayıt',
    days_x_formula:       'gün × 7.5s = {h}s mesai bazlı',
    avg_perf_plain:       'Ortalama Performans',
    stat_avg_perf_plain:  'Ortalama Performans',
    ai_overtime_prompt:   'Mesai süresi ve mesai üstü durumunu analiz et. Yoğunluk ne zaman en yüksek? Mesai yönetimi nasıl?',
    waiting_best_inspector: 'Ayın En İyi Inspector\'ü bekleniyor...',
    // Extended i18n keys
    actual_duration_th:    'Gerçekleşen Süre',
    actual_label:          '⏱ Gerçekleşen',
    actual_per_unit:       'Gerçekleşen/Adet',
    actual_vs_std:         'Gerçekleşen / Standart oranı',
    add_first_station:     'Bu klasmanı tanımlamaya başlamak için ilk istasyonu ekleyin',
    add_station:           '＋ İstasyon Ekle',
    adj_avg_perf:          'Düz. Ort. Performans:',
    adj_avg_short:         '⚡ Düz. Ort.:',
    adj_perf_label:        'Düz. Performans',
    ai_custom_q:           '💬 Özel Soru Sor',
    ai_general:            '📊 Genel Performans Değerlendirmesi',
    ai_improve:            '💡 İyileştirme Önerileri',
    ai_klasman_compare:    '👔 Klasmana Göre Karşılaştırma',
    ai_overtime:           '🌙 Mesai & Yoğunluk Analizi',
    ai_panel_hint:         'AI destekli detaylı analiz · Açmak için tıklayın',
    ai_strengths:          '💪 Güçlü/Zayıf Yönler',
    all_btn:               'Tümü',
    all_inspectors:        'Tüm Inspectorler',
    api_key_warning:       '⚠️ Anahtarınızı başkalarıyla paylaşmayın.',
    api_token_hint:        '(Apps Script\'teki API_TOKEN değeriyle eşleşmeli)',
    apiscript_match_hint:  'Apps Script dosyasındaki değerle eşleşmeli',
    app_subtitle:          'Inspection Kontrol',
    avg_work_days:         '📆 Ort. Çalışma:',
    awaiting_results:      'Analiz sonuçları bekleniyor',
    broadcast_settings:    'Yayın Ayarları',
    broadcast_settings_hint: 'Gösterimi başlatmadan önce ayarlayın',
    cancel_btn:            'İptal',
    change_klasman_pw:     '✏️ Klasman Şifresini Değiştir',
    change_pw:             '✏️ Şifreyi Değiştir',
    change_search:         'Arama kriterlerini değiştirin',
    col_auto_derive:       '— K/L sütunlarından otomatik türet —',
    col_end_date:          'Bitiş Tarihi (L)',
    col_inspector:         'Inspector Sütunu',
    col_klasman:           'Klasman Sütunu (A)',
    col_mapping_title:     '🔗 Sütun Eşleştirme',
    col_start_date:        'Başlangıç Tarihi (K)',
    completed_btn:         '✅ Tamamlandı',
    current_pw:            'Mevcut şifre:',
    current_time:          'Şu Anki Saat',
    // Kullanıcı Yönetimi
    user_mgmt_title:       '👥 Kullanıcı Yönetimi',
    user_mgmt_sub:         'Kullanıcı ekleyin, düzenleyin ve hangi sekmeleri görebileceklerini belirleyin',
    refresh:               'Yenile',
    add_user:              'Yeni Kullanıcı',
    user_list:             'Kullanıcılar',
    username_col:          'Kullanıcı Adı',
    tabs_col:              'Görebileceği Sekmeler',
    actions_col:           'İşlemler',
    loading:               'Yükleniyor…',
    user_mgmt_hint:        'Kullanıcılar admin şifresi yerine kendi kullanıcı adı/şifresi ile giriş yapar. Burada verilen sekmeler dışındaki bölümleri göremezler. Dashboard her kullanıcıya açıktır.',
    user_modal_hint:       'Kullanıcı adı, şifre ve görebileceği sekmeleri belirleyin',
    username_label:        'Kullanıcı Adı',
    password_label:        'Şifre',
    password_hint:         'En az 4 karakter',
    password_hint_edit:    'Değiştirmek istemiyorsanız boş bırakın',
    select_tabs:           'Görebileceği Sekmeler',
    save_btn:              '💾 Kaydet',
    edit_btn:              '✏️ Düzenle',
    delete_btn:            '🗑️ Sil',
    no_users:              'Henüz kullanıcı eklenmemiş',
    admin_row_note:        'Tüm sekmelere erişebilir',
    // Ekip Yönetimi (Dashboard)
    my_team_title:         '👥 Ekibim',
    manage_team:           'Ekibi Düzenle',
    team_member_count:     'Ekip Üyesi',
    team_avg_perf:         'Ekip Ort. Performans',
    team_total_product:    'Ekip Toplam Ürün',
    team_avg_days:         'Ekip Ort. Çalışma Günü',
    team_empty_hint:       'Henüz ekibinize inspector eklemediniz. "Ekibi Düzenle" butonuyla başlayın.',
    remove_from_team:      'Ekipten çıkar',
    team_modal_title:      '👥 Ekibimi Düzenle',
    team_modal_sub:        'Takip etmek istediğiniz inspectorleri seçin',
    team_search_ph:        'Inspector ara...',
    team_no_result:        'Sonuç bulunamadı',
    team_only_filter:      '👥 Sadece Ekibim',
    team_remove_confirm:   'ekipten çıkarılsın mı?',
    team_managers_label:   'Ekip Yöneticileri',
    team_manager_prefix:   'Ekip Yöneticisi',
    team_manager_member_count: 'Çalışan Sayısı',
    team_manager_total_qty:    'Kontrol Edilen Adet',
    team_manager_avg_perf:     'Performans Ortalaması',
    team_manager_no_members:   'Bu ekibe henüz inspector eklenmemiş.',
    nav_ekip_analiz:       'Ekibim Analizi',
    ekip_analiz_title:     '🧑‍🤝‍🧑 Ekibim Analizi',
    ekip_analiz_sub:       'Ekip üyelerinizin performansını klasman bazında karşılaştırın',
    ekip_analiz_top_producer:     'En Çok Üretim',
    ekip_analiz_general_ranking:  'Genel Performans Sıralaması',
    ekip_analiz_col_name:         'Inspector',
    ekip_analiz_col_perf:         'Performans',
    ekip_analiz_col_qty:          'Toplam Adet',
    ekip_analiz_col_klasman_count: 'Klasman Sayısı',
    ekip_analiz_dist_title:       'Performans Dağılımı',
    ekip_analiz_gelisim_title:    'Gelişim Alanları (En Yavaş Klasmanlar)',
    ekip_analiz_col_klasman:      'Klasman',
    ekip_analiz_col_avg_perf:     'Ortalama Performans',
    ekip_analiz_col_member_count: 'Çalışan Sayısı',
    ekip_analiz_no_klasman_data:  'Klasman verisi bulunamadı.',
    general_status_label:  'Genel Durum',
    display_not_started:   'Gösterim başlamadı',
    download_excel:        '📊 Excel İndir',
    end_date_th:           'Bitiş',
    excel_upload_title:    '📁 Excel Yükle',
    file_drop:             'Dosya seçin veya sürükleyin',
    file_format:           '.xlsx / .xls formatı',
    filter_no_result:      'Filtre sonucu bulunamadı',
    filter_no_result_hint: 'Filtre kriterlerini değiştirmeyi deneyin',
    gemini_8b:             'gemini-1.5-flash-8b (En Hızlı)',
    gemini_api_key:        'Gemini API Anahtarı',
    gemini_flash:          'gemini-2.5-flash (Önerilen)',
    gemini_lite:           'gemini-2.0-flash-lite (Ücretsiz / Hızlı)',
    gemini_pro:            'gemini-2.5-pro (En Güçlü)',
    how_to_setup:          'Nasıl kurulur? ℹ️',
    icon_modal_hint:       'Bir isim girin ve bir ikon seçin',
    inspector_detail_sub:  'Klasman bazında detaylı performans analizi',
    inspector_detail_title:'Inspector Detayları',
    klasman_analiz_overlay_sub:   'Klasman bazında detaylı performans analizi',
    klasman_analiz_overlay_title: 'Klasman Analizi — Sheets\'ten Çekildi',
    klasman_analiz_sub:    'Klasman bazında standart ve gerçekleşen birim muayene sürelerini karşılaştırın',
    klasman_analiz_title:  '🎯 Klasmana Göre Gerçekleşen Süre Analizi',
    klasman_count:         'Klasmanlar',
    klasman_details:       '📋 Klasman Detayları',
    klasman_filter_empty:  'Filtreyle eşleşen klasman bulunamadı',
    klasman_pw_hint:       'Bu sayfa için erişim şifresi:',
    klasman_pw_label:      '🔑 Klasman Yönetimi Şifresi:',
    live_h2_sub:           'Inspector performansını canlı takip edin',
    live_h2_title:         'Canlı Performans Gösterimi',
    live_page_sub:         'Inspector performanslarını büyük ekranda yayınlayın · HD video dışa aktarımı',
    live_page_title:       'Canlı Performans Gösterimi',
    login_klasman_sub:     'Bu bölüme erişmek için yönetici şifresi gereklidir',
    login_klasman_title:   'Klasman Yönetimi',
    no_data_hint:          'Analizi görmek için Excel yükleyin ve klasman tanımlarını tamamlayın',
    no_data_live:          'Henüz veri yok',
    no_perf_data:          'Performans Verisi Bulunamadı',
    no_perf_data_hint:     'Önce Performans Analizi sayfasından Excel yükleyin',
    no_records_found:      'Filtreyle eşleşen kayıt bulunamadı.',
    not_found:             'Bulunamadı',
    one_unit_check:        '1 adet muayene',
    open_link:             '🔗 Aç',
    open_link_hint:        'Tabloyu tarayıcıda açmak için kullanılır',
    opt_excellent:         'Mükemmel (≥95%)',
    opt_good:              'İyi (≥85%)',
    overtime_duration:     'Mesai Süresi',
    page_klasman_sub:      'Ürün klasmanlarını tanımlayın ve istasyon sürelerini ayarlayın',
    page_klasman_title:    'Klasman Yönetimi',
    perf_how_sub:          'Hesaplama mantığı, formüller ve Google Sheets entegrasyonu',
    perf_how_title:        '📊 Performans Analizi — Nasıl Çalışır?',
    perf_page_sub:         'Excel dosyası yükleyin ve inspector bazında performansı ölçün',
    perf_page_title:       'Performans Analizi',
    print_btn:             '🖨️ Yazdır',
    pull:                  '📥 Çek',
    pw_settings:           '🔒 Şifre Ayarları:',
    quick_analyses:        '⚡ Hızlı Analizler',
    record_count:          'Kayıt Sayısı',
    reset:                 '↺ Sıfırla',
    sampling_mode:         'Örnekleme Modu',
    sampling_date_toggle:  '📅 Tarihe Göre Farklı Seviyeler Kullan',
    sampling_date_hint:    'Aktif edildiğinde, başlangıç tarihi belirlenen aralıklara denk gelen kayıtlar o döneme ait örnekleme moduna göre hesaplanır. Aralık dışında kalan kayıtlar için yukarıdaki varsayılan mod kullanılır.',
    sampling_period_add:   '+ Dönem Ekle',
    sampling_period_max:   'En fazla 3 dönem ekleyebilirsiniz',
    sampling_period_start: 'Başlangıç',
    sampling_period_end:   'Bitiş',
    sampling_period_mode:  'Mod',
    sampling_period_remove:'Dönemi kaldır',
    sampling_default_label:'Varsayılan (aralık dışı kayıtlar)',
    mode_kapali:           'Kapalı',
    mode_bir:              'Bir Alttan',
    mode_iki:              'İki Alttan',
    see_details:           'Detayları Gör',
    select_icon:           'İkon Seç',
    select_icon_btn:       'İkon Seç',
    select_klasman:        'Bir klasman seçin',
    select_klasman_hint:   'İstasyon sürelerini düzenlemek için soldan bir klasman seçin',
    selected_icon:         'Seçilen ikon',
    send:                  '📤 Gönder',
    send_btn:              'Gönder ↵',
    send_hint:             'Ctrl+Enter ile de gönderebilirsiniz',
    sheets_conn_sub:       'Klasman verilerini Google Sheets ile senkronize edin — farklı bilgisayarlardan erişin',
    sheets_conn_title:     'Google Sheets Bağlantısı',
    sheets_help_intro:     'Klasman verilerini Google Sheets ile senkronize etmek için',
    sheets_settings_title: '🔗 Google Sheets Bağlantı Ayarları',
    sheets_table_label:    'Google Sheets Tablo Bağlantısı (Görüntüle)',
    sheets_url_label:      'Google Apps Script Web App URL\'si (Veri Gönder/Al)',
    slide_duration:        '⏱ Slayt Süresi',
    slide_flip:            'Çevirme',
    slide_slide:           'Kaydırma',
    slide_zoom:            'Yakınlaştırma',
    sort_diff_best:        'Fark ↑ (En İyi)',
    sort_diff_worst:       'Fark ↓ (En Kötü)',
    sort_label:            'Sırala:',
    start_date_th:         'Başlangıç',
    station_count:         'İstasyon Sayısı',
    status_high:           '🔴 Yüksek',
    status_near:           '⚠️ Yakın',
    std_duration:          'Standart Süre',
    std_duration_th:       'Standart Süre',
    top5:                  'İlk 10',
    total_duration_label:  'Toplam Süre (sn)',
    total_product:         'Toplam Ürün',
    total_qty:             'Toplam Adet',
    transition_effect:     '✨ Geçiş Efekti',
    two_below:             'İki Alttan',
    unit_check_duration:   '1 Birim Muayene Süresi',
    unit_check_hint:       'Ürün başına harcanan standart süre',
    view_mode:             '👁 Görüntüleme Modu',
    waiting_data:          'Veri bekleniyor',
    waiting_data_sub:      'Performans analizi çalıştırıldıktan sonra burası otomatik dolacak',
    no_overtime_data:      'Mesai verisi yok',
    gkey_empty:            '⚠️ Boş bırakmayın.',
    gkey_invalid:          '⚠️ Geçersiz format. API anahtarı çok kısa.',
    gkey_saving:           '✅ Kaydedildi! Sheets\'e gönderiliyor...',
    gkey_saved_sheets:     '✅ Anahtar kaydedildi ve Sheets\'e gönderildi!',
    gkey_saved_local:      '✅ Yerel kaydedildi (Sheets bağlantısı yok).',
    gkey_save_fail:        '❌ Kayıt başarısız: ',
    gkey_deleted:          '🗑 Anahtar silindi. Sheets\'ten temizleniyor...',
    gkey_ask_question:     'Lütfen bir soru girin.',
    gkey_no_key:           'Lütfen önce Gemini API anahtarınızı girin ve kaydedin.',
    gkey_empty_response:   'Gemini boş yanıt döndürdü.',
    gkey_api_error:        'API Hatası: ',
    gkey_check_key:        ' — API anahtarınızı kontrol edin.',
    date_filter_with:      'Tarihi Olanlar',
    date_filter_without:   'Tarihi Olmayanlar',
    analysis_result:       'Analiz Sonucu',
    clear_btn:             '✕ Temizle',
    gemini_analyzing:      'Gemini analiz ediyor...',
    custom_analysis:       '💬 Özel Analiz',
    clearing:              '⏳ Temizleniyor...',
    clear_confirm:         '⚠️ Tüm performans verileri silinecek!\n\nBu işlem:\n• Dashboard verilerini temizler\n• Google Sheets\'teki İşlem Geçmişi, Performans Verileri, PerformansRaw ve InspectorKayitlar sekmelerini siler\n\nDevam etmek istiyor musunuz?',
    clear_ok_sheets:       '✅ Veriler temizlendi! (Local + Sheets)',
    clear_ok_local_err:    '✅ Local veriler temizlendi. Sheets bağlantı hatası: ',
    clear_ok_local:        '✅ Local veriler temizlendi. (Sheets bağlantısı yapılandırılmamış)',
    clear_status:          '🗑️ Tüm performans verileri temizlendi',
    klasman_actual_analysis: 'Klasman Bazında Gerçekleşen Süre Analizi',
    total_units_summary:   'toplam adet',
    on_target:             'Hedefte',
    near_target:           'Yakın',
    high_label:            'Yüksek',
    no_std:                'Std Yok',
    std_duration_sn:       '🕐 Standart Süre (sn)',
    actual_duration_sn:    '⏱ Fiili/Mesai Süresi (sn)',
    perf_formula_inline:   '(Standart Süre ÷ Mesai Süresi) × 100',
    file_uploading:        '⏳ Dosya yükleniyor...',
    file_empty:            '❌ Dosya boş görünüyor.',
    file_loaded:           '✅ satır başarıyla yüklendi — ',
    file_error:            '❌ Hata: ',
    col_select_warning:    '⚠️ Lütfen en az Klasman, Inspector ve Adet sütunlarını seçin',
    no_data_processable:   '❌ İşlenebilir veri bulunamadı',
    analysis_done:         ' inspector başarıyla analiz edildi',
    hd_recording:          '🔴 HD Video kaydediliyor (1920×1080)...',
    // Sheets sync messages
    sheets_sent_klasman:   '✅ klasman Google Sheets\'e gönderildi!',
    sheets_updated_count:  '✅ klasman + performans verisi Sheets\'ten güncellendi!',
    sheets_loaded_perf:    '✅ inspector verisi Sheets\'ten yüklendi!',
    sheets_no_perf:        'ℹ️ Sheets\'te henüz performans verisi yok.',
    sheets_sent_perf:      '✅ inspector verisi Google Sheets\'e gönderildi!',
    sheets_loaded_to_perf: '✅ inspector verisi Sheets\'ten Performans Analizi\'ne yüklendi!',
    sheets_klasman_sync:   '☁️ Klasman değişikliği Sheets\'e senkronize edildi',
    sheets_perf_updated:   '✅ Sheets\'ten inspector verisi güncellendi',
    sheets_analiz_sent:    '✅ Klasman analizi güncellendi ve Sheets\'e gönderildi!',
    sheets_analiz_loaded:  '✅ klasman analizi Sheets\'ten yüklendi!',
    // PWA
    pwa_install:           'Uygulamayı Yükle',
    pwa_install_full:      'Uygulamayı Yükle — Kısayol Oluştur',
    pwa_install_hint:      'Masaüstüne veya ana ekrana ekleyin, uygulama gibi açılır',
    pwa_installed:         '✅ Uygulama yüklendi!',
    pwa_installing:        '⏳ Yükleniyor...',
  },

  en: {
    // Login
    login_title:          'Sign In',
    login_sub:            'Enter your password to continue',
    login_btn:            '🔓 Sign In',
    password_placeholder: '••••••',
    username_placeholder: 'Username (leave empty for admin)',
    server_active:        'Server verification active',
    cancel:               'Cancel',
    nav_user_mgmt:        'User Management',
    logout_btn:           'Log Out',
    change_my_pw:         '✏️ Change My Password',

    // Top bar
    how_it_works:         'ℹ️ How It Works',
    klasman:              'Classification',

    // Sidebar nav
    nav_home:             'Home',
    nav_dashboard:        'Dashboard',
    nav_management:       'Management',
    nav_klasman_mgmt:     'Classification Mgmt',
    nav_analysis:         'Analysis',
    nav_klasman_analysis: 'Classification Analysis',
    nav_perf_analysis:    'Performance Analysis',
    nav_display:          'Display',
    nav_live:             'Live View',

    // Dashboard page
    dash_title:           'Inspector Performance Dashboard',
    dash_sub:             'Monitor all inspectors\' performance on a single screen',
    pull_from_sheets:     '📥 Pull from Sheets',
    clear:                '🗑️ Clear',
    export_excel:         '📊 Export to Excel',

    // Summary stats
    stat_total_inspector: 'Total Inspectors',
    stat_excellent:       'Excellent (≥95%)',
    stat_good:            'Good (85-94%)',
    stat_average:         'Average (70-84%)',
    stat_poor:            'Poor (<70%)',
    stat_avg_perf:        '📅 Avg Performance',
    stat_avg_days:        '⏰ Avg Working Days',
    stat_total_product:   '📦 Total Products',

    // Filters
    filter_perf:          'Performance Filter:',
    filter_all:           'All',
    filter_klasman:       'Classification Filter:',
    filter_all_klasman:   'All Classifications',
    filter_search:        'Search Inspector:',
    inspector_search_ph:  'Inspector name...',
    filter_sort:          'Sort By:',
    sort_perf_desc:       'Performance (High→Low)',
    sort_perf_asc:        'Performance (Low→High)',
    sort_name_asc:        'Name (A→Z)',
    sort_name_desc:       'Name (Z→A)',
    sort_qty_desc:        'Quantity (Most→Least)',
    sort_qty_asc:         'Quantity (Least→Most)',

    // Empty state
    no_data_yet:          'No performance data yet',
    no_data_sub:          'Upload an Excel file from the Performance Analysis page to get started',

    // Pagination
    prev:                 '‹ Previous',
    next:                 'Next ›',

    // Login dynamic states
    verifying:            '⏳ Verifying...',
    connecting:           'Connecting to server...',
    verified:             'Verified ✓',
    error_label:          'Error',
    pw_empty:             '❌ Password cannot be empty',
    pw_wrong:             '❌ Wrong password, please try again',
    pw_no_server_cache:   '⚠️ Could not connect to server and no cache found. Check your internet connection.',
    pw_offline:           'Offline verification (cache)',
    pw_no_sheets_pw:      'No password found in Sheets',
    pw_unreachable:       'Server unreachable',
    pw_wrong_klasman:     'Wrong password!',
    pw_overlay_title:     'Sign In',
    pw_overlay_sub:       'Enter your password to continue',
    pw_klasman_title:     'Classification Management',
    pw_klasman_sub:       'A password is required to access this section',
    // Dynamic JS strings
    sending:              '⏳ Sending...',
    pulling:              '⏳ Pulling...',
    no_data_js:           'No data',
    no_data_js_hint:      'First upload an Excel file from the Performance Analysis page',
    data_not_found:       'Data not found',
    days_suffix:          'days',
    filter_none:          '— No filter (all rows) —',
    detailed_perf:        'Detailed Performance',
    loading_records:      'Loading record details...',
    sampling_desc:        'Off: actual quantity used. <strong>One Below</strong> / <strong>Two Below</strong>: quantity converted by sampling table.',
    target_below_100:     'target → performance increases by',
    target_above_100:     'target → performance decreases by',
    start_slideshow:      'Start Display',
    stop_slideshow:       '⏸ Stop',
    no_perf_alert:        'No performance data yet! First load data from the Performance Analysis page.',
    records_summary:      'records · ',
    units_summary:        'units · ',
    analyzing:            'Analyzing...',
    col_overtime_label:   '⏰ Overtime Duration',
    // Card & JS dynamic labels
    working:              'working days',
    units_short:          'units',
    klasman_word:         'classifications',
    efficiency_label:     'efficiency',
    above_target:         'above target',
    below_target:         'below target',
    overtime_over:        'overtime+',
    detailed_analysis:    'Detailed Analysis',
    perf_excellent:       'Excellent',
    perf_good:            'Good',
    perf_average:         'Average',
    perf_poor:            'Poor',
    stat_total_product2:  'TOTAL QTY',
    std_duration_label:   'STD DURATION',
    adj_perf_label_upper: 'ADJ. PERFORMANCE',
    best_inspector_month: 'Best Inspector of the Month',
    // Final remaining keys
    excel_cols_hint:      'Your Excel must contain Col A: Classification, Col R: Quantity, Col K: Start Date, Col L: End Date.',
    overtime_col_hint:    'Without an overtime column, calculated as daily 7.5h × working days.',
    col_t_label:          'Column (T)',
    blank_rows_hint:      'If selected, blank rows are excluded from the calculation.',
    security_warning:     'Security Warning:',
    try_other_model:      'If you get an error, try a different model',
    default_opt:          'Default',
    sort_by_date:         'By Date ↑',
    sampling_off:         'Off: actual quantity used.',
    one_below:            'One Below',
    sampling_desc_end:    'quantity converted by sampling table.',
    // New dynamic keys
    closed_label:         'Closed',
    open_label:           'Open',
    hide_label:           'Hide',
    raw_avg:              'Raw Avg.:',
    perf_formula:         'Std Duration ÷ (Days × 7.5h) × 100',
    adj_formula:          'Raw Perf × (100÷${hedef})',
    records_word:         'records',
    days_x_formula:       'days × 7.5h = {h}h working',
    avg_perf_plain:       'Average Performance',
    stat_avg_perf_plain:  'Average Performance',
    ai_overtime_prompt:   'Analyze overtime and overwork status. When is intensity highest? How is overtime managed?',
    waiting_best_inspector: 'Best Inspector of the Month awaited...',
    // Extended i18n keys
    actual_duration_th:    'Actual Duration',
    actual_label:          '⏱ Actual',
    actual_per_unit:       'Actual/Unit',
    actual_vs_std:         'Actual / Standard ratio',
    add_first_station:     'Add the first station to start defining this classification',
    add_station:           '＋ Add Station',
    adj_avg_perf:          'Adjusted Avg. Performance:',
    adj_avg_short:         '⚡ Adj. Avg.:',
    adj_perf_label:        'Adj. Performance',
    ai_custom_q:           '💬 Ask a Custom Question',
    ai_general:            '📊 General Performance Evaluation',
    ai_improve:            '💡 Improvement Suggestions',
    ai_klasman_compare:    '👔 Comparison by Classification',
    ai_overtime:           '🌙 Overtime & Intensity Analysis',
    ai_panel_hint:         'AI-powered detailed analysis · Click to open',
    ai_strengths:          '💪 Strengths/Weaknesses',
    all_btn:               'All',
    all_inspectors:        'All Inspectors',
    api_key_warning:       '⚠️ Do not share your key with others.',
    api_token_hint:        '(Must match the API_TOKEN in Apps Script)',
    apiscript_match_hint:  'Must match value in Apps Script file',
    app_subtitle:          'Inspection Control',
    avg_work_days:         '📆 Avg. Working:',
    awaiting_results:      'Awaiting analysis results',
    broadcast_settings:    'Broadcast Settings',
    broadcast_settings_hint: 'Configure before starting the display',
    cancel_btn:            'Cancel',
    change_klasman_pw:     '✏️ Change Classification Password',
    change_pw:             '✏️ Change Password',
    change_search:         'Change the search criteria',
    col_auto_derive:       '— Auto-derive from K/L columns —',
    col_end_date:          'End Date (L)',
    col_inspector:         'Inspector Column',
    col_klasman:           'Classification Column (A)',
    col_mapping_title:     '🔗 Column Mapping',
    col_start_date:        'Start Date (K)',
    completed_btn:         '✅ Completed',
    current_pw:            'Current password:',
    current_time:          'Current Time',
    // User Management
    user_mgmt_title:       '👥 User Management',
    user_mgmt_sub:         'Add, edit users and choose which tabs they can see',
    refresh:               'Refresh',
    add_user:              'New User',
    user_list:             'Users',
    username_col:          'Username',
    tabs_col:              'Visible Tabs',
    actions_col:           'Actions',
    loading:               'Loading…',
    user_mgmt_hint:        'Users log in with their own username/password instead of the admin password. They cannot see sections other than the tabs assigned here. Dashboard is open to everyone.',
    user_modal_hint:       'Set the username, password, and which tabs they can see',
    username_label:        'Username',
    password_label:        'Password',
    password_hint:         'At least 4 characters',
    password_hint_edit:    'Leave empty to keep the current password',
    select_tabs:           'Visible Tabs',
    save_btn:              '💾 Save',
    edit_btn:              '✏️ Edit',
    delete_btn:            '🗑️ Delete',
    no_users:              'No users have been added yet',
    admin_row_note:        'Has access to all tabs',
    // Team Management (Dashboard)
    my_team_title:         '👥 My Team',
    manage_team:           'Manage Team',
    team_member_count:     'Team Members',
    team_avg_perf:         'Team Avg. Performance',
    team_total_product:    'Team Total Quantity',
    team_avg_days:         'Team Avg. Working Days',
    team_empty_hint:       "You haven't added any inspectors to your team yet. Click \"Manage Team\" to get started.",
    remove_from_team:      'Remove from team',
    team_modal_title:      '👥 Manage My Team',
    team_modal_sub:        'Select the inspectors you want to track',
    team_search_ph:        'Search inspector...',
    team_no_result:        'No results found',
    team_only_filter:      '👥 My Team Only',
    team_remove_confirm:   'remove from team?',
    team_managers_label:   'Team Managers',
    team_manager_prefix:   'Team Manager',
    team_manager_member_count: 'Number of Employees',
    team_manager_total_qty:    'Inspected Quantity',
    team_manager_avg_perf:     'Average Performance',
    team_manager_no_members:   'No inspectors have been added to this team yet.',
    nav_ekip_analiz:       'My Team Analysis',
    ekip_analiz_title:     '🧑‍🤝‍🧑 My Team Analysis',
    ekip_analiz_sub:       'Compare your team members\' performance by classification',
    ekip_analiz_top_producer:     'Top Producer',
    ekip_analiz_general_ranking:  'Overall Performance Ranking',
    ekip_analiz_col_name:         'Inspector',
    ekip_analiz_col_perf:         'Performance',
    ekip_analiz_col_qty:          'Total Quantity',
    ekip_analiz_col_klasman_count: 'Classification Count',
    ekip_analiz_dist_title:       'Performance Distribution',
    ekip_analiz_gelisim_title:    'Improvement Areas (Slowest Classifications)',
    ekip_analiz_col_klasman:      'Classification',
    ekip_analiz_col_avg_perf:     'Average Performance',
    ekip_analiz_col_member_count: 'Employee Count',
    ekip_analiz_no_klasman_data:  'No classification data found.',
    general_status_label:  'General Status',
    display_not_started:   'Display not started',
    download_excel:        '📊 Download Excel',
    end_date_th:           'End',
    excel_upload_title:    '📁 Upload Excel',
    file_drop:             'Select or drag a file',
    file_format:           '.xlsx / .xls format',
    filter_no_result:      'No filter results found',
    filter_no_result_hint: 'Try changing the filter criteria',
    gemini_8b:             'gemini-1.5-flash-8b (Fastest)',
    gemini_api_key:        'Gemini API Key',
    gemini_flash:          'gemini-2.5-flash (Recommended)',
    gemini_lite:           'gemini-2.0-flash-lite (Free / Fast)',
    gemini_pro:            'gemini-2.5-pro (Most Powerful)',
    how_to_setup:          'How to set up? ℹ️',
    icon_modal_hint:       'Enter a name and select an icon',
    inspector_detail_sub:  'Detailed performance analysis by classification',
    inspector_detail_title:'Inspector Details',
    klasman_analiz_overlay_sub:   'Detailed performance analysis by classification',
    klasman_analiz_overlay_title: 'Classification Analysis — Fetched from Sheets',
    klasman_analiz_sub:    'Compare standard and actual per-unit inspection durations by classification',
    klasman_analiz_title:  '🎯 Actual Duration Analysis by Classification',
    klasman_count:         'Classifications',
    klasman_details:       '📋 Classification Details',
    klasman_filter_empty:  'No classification found matching the filter',
    klasman_pw_hint:       'Access password for this page:',
    klasman_pw_label:      '🔑 Classification Management Password:',
    live_h2_sub:           'Track inspector performance live',
    live_h2_title:         'Live Performance Display',
    live_page_sub:         'Broadcast inspector performances on a large screen · HD video export',
    live_page_title:       'Live Performance Display',
    login_klasman_sub:     'Admin password required to access this section',
    login_klasman_title:   'Classification Management',
    no_data_hint:          'Upload an Excel file and complete classification definitions to see the analysis',
    no_data_live:          'No data yet',
    no_perf_data:          'No Performance Data Found',
    no_perf_data_hint:     'First upload an Excel file from the Performance Analysis page',
    no_records_found:      'No records found matching the filter.',
    not_found:             'Not Found',
    one_unit_check:        '1 unit inspection',
    open_link:             '🔗 Open',
    open_link_hint:        'Used to open the table in a browser',
    opt_excellent:         'Excellent (≥95%)',
    opt_good:              'Good (≥85%)',
    overtime_duration:     'Overtime Duration',
    page_klasman_sub:      'Define product classifications and adjust station durations',
    page_klasman_title:    'Classification Management',
    perf_how_sub:          'Calculation logic, formulas, and Google Sheets integration',
    perf_how_title:        '📊 Performance Analysis — How Does It Work?',
    perf_page_sub:         'Upload an Excel file and measure performance by inspector',
    perf_page_title:       'Performance Analysis',
    print_btn:             '🖨️ Print',
    pull:                  '📥 Pull',
    pw_settings:           '🔒 Password Settings:',
    quick_analyses:        '⚡ Quick Analyses',
    record_count:          'Record Count',
    reset:                 '↺ Reset',
    sampling_mode:         'Sampling Mode',
    sampling_date_toggle:  '📅 Use Different Levels by Date',
    sampling_date_hint:    "When enabled, rows whose start date falls within a defined period are calculated using that period's sampling mode. Rows outside all periods use the default mode above.",
    sampling_period_add:   '+ Add Period',
    sampling_period_max:   'You can add up to 3 periods',
    sampling_period_start: 'Start',
    sampling_period_end:   'End',
    sampling_period_mode:  'Mode',
    sampling_period_remove:'Remove period',
    sampling_default_label:'Default (rows outside all periods)',
    mode_kapali:           'Off',
    mode_bir:              'One Below',
    mode_iki:              'Two Below',
    see_details:           'See Details',
    select_icon:           'Select Icon',
    select_icon_btn:       'Select Icon',
    select_klasman:        'Select a classification',
    select_klasman_hint:   'Select a classification on the left to edit station durations',
    selected_icon:         'Selected icon',
    send:                  '📤 Send',
    send_btn:              'Send ↵',
    send_hint:             'You can also send with Ctrl+Enter',
    sheets_conn_sub:       'Sync classification data with Google Sheets — access from different computers',
    sheets_conn_title:     'Google Sheets Connection',
    sheets_help_intro:     'To sync classification data with Google Sheets',
    sheets_settings_title: '🔗 Google Sheets Connection Settings',
    sheets_table_label:    'Google Sheets Table Link (View)',
    sheets_url_label:      'Google Apps Script Web App URL (Send/Receive Data)',
    slide_duration:        '⏱ Slide Duration',
    slide_flip:            'Flip',
    slide_slide:           'Slide',
    slide_zoom:            'Zoom',
    sort_diff_best:        'Diff ↑ (Best)',
    sort_diff_worst:       'Diff ↓ (Worst)',
    sort_label:            'Sort:',
    start_date_th:         'Start',
    station_count:         'Station Count',
    status_high:           '🔴 High',
    status_near:           '⚠️ Near',
    std_duration:          'Standard Duration',
    std_duration_th:       'Standard Duration',
    top5:                  'Top 10',
    total_duration_label:  'Total Duration (s)',
    total_product:         'Total Products',
    total_qty:             'Total Quantity',
    transition_effect:     '✨ Transition Effect',
    two_below:             'Two Below',
    unit_check_duration:   '1-Unit Inspection Duration',
    unit_check_hint:       'Standard time spent per product',
    view_mode:             '👁 View Mode',
    waiting_data:          'Awaiting data',
    waiting_data_sub:      'This will populate automatically after a performance analysis is run',
    no_overtime_data:      'No overtime data',
    gkey_empty:            '⚠️ Please enter a key.',
    gkey_invalid:          '⚠️ Invalid format. API key is too short.',
    gkey_saving:           '✅ Saved! Sending to Sheets...',
    gkey_saved_sheets:     '✅ Key saved and sent to Sheets!',
    gkey_saved_local:      '✅ Saved locally (no Sheets connection).',
    gkey_save_fail:        '❌ Save failed: ',
    gkey_deleted:          '🗑 Key deleted. Removing from Sheets...',
    gkey_ask_question:     'Please enter a question.',
    gkey_no_key:           'Please enter and save your Gemini API key first.',
    gkey_empty_response:   'Gemini returned an empty response.',
    gkey_api_error:        'API Error: ',
    gkey_check_key:        ' — Please check your API key.',
    date_filter_with:      'With Date',
    date_filter_without:   'Without Date',
    analysis_result:       'Analysis Result',
    clear_btn:             '✕ Clear',
    gemini_analyzing:      'Gemini analyzing...',
    custom_analysis:       '💬 Custom Analysis',
    clearing:              '⏳ Clearing...',
    clear_confirm:         '⚠️ All performance data will be deleted!\n\nThis action will:\n• Clear dashboard data\n• Delete the History, Performance Data, PerformanceRaw and InspectorRecords sheets in Google Sheets\n\nDo you want to continue?',
    clear_ok_sheets:       '✅ Data cleared! (Local + Sheets)',
    clear_ok_local_err:    '✅ Local data cleared. Sheets connection error: ',
    clear_ok_local:        '✅ Local data cleared. (Sheets connection not configured)',
    clear_status:          '🗑️ All performance data cleared',
    klasman_actual_analysis: 'Actual Duration Analysis by Classification',
    total_units_summary:   'total units',
    on_target:             'On Target',
    near_target:           'Near',
    high_label:            'High',
    no_std:                'No Std',
    std_duration_sn:       '🕐 Standard Duration (s)',
    actual_duration_sn:    '⏱ Actual/Working Duration (s)',
    perf_formula_inline:   '(Standard Duration ÷ Working Duration) × 100',
    file_uploading:        '⏳ Uploading file...',
    file_empty:            '❌ File appears to be empty.',
    file_loaded:           '✅ rows successfully loaded — ',
    file_error:            '❌ Error: ',
    col_select_warning:    '⚠️ Please select at least Classification, Inspector and Quantity columns',
    no_data_processable:   '❌ No processable data found',
    analysis_done:         ' inspector(s) successfully analyzed',
    hd_recording:          '🔴 Recording HD Video (1920×1080)...',
    // Sheets sync messages
    sheets_sent_klasman:   '✅ classifications sent to Google Sheets!',
    sheets_updated_count:  '✅ classifications + performance data updated from Sheets!',
    sheets_loaded_perf:    '✅ inspector records loaded from Sheets!',
    sheets_no_perf:        'ℹ️ No performance data in Sheets yet.',
    sheets_sent_perf:      '✅ inspector records sent to Google Sheets!',
    sheets_loaded_to_perf: '✅ inspector records loaded from Sheets into Performance Analysis!',
    sheets_klasman_sync:   '☁️ Classification change synced to Sheets',
    sheets_perf_updated:   '✅ Inspector data updated from Sheets',
    sheets_analiz_sent:    '✅ Classification analysis updated and sent to Sheets!',
    sheets_analiz_loaded:  '✅ classification analyses loaded from Sheets!',
    // PWA
    pwa_install:           'Install App',
    pwa_install_full:      'Install App — Create Shortcut',
    pwa_install_hint:      'Add to desktop or home screen, opens like a native app',
    pwa_installed:         '✅ App installed!',
    pwa_installing:        '⏳ Installing...',
  }
};

let currentLang = localStorage.getItem('panelLang') || 'tr';

// i18n yardımcısı: belirli bir DOM kökü altındaki tüm [data-i18n] ve [data-i18n-placeholder] elementlerini çevirir
function applyI18nToNewNodes(root) {
  const lang = currentLang;
  const t = translations[lang] || translations.tr;
  (root || document).querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  (root || document).querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('panelLang', lang);

  // Update lang-btn active states (both pw-overlay and topbar)
  document.querySelectorAll('.lang-btn, .topbar-lang-btn').forEach(btn => btn.classList.remove('active'));
  // pw-overlay buttons
  const pwBtn = document.getElementById('pw-lang-btn-' + lang);
  if (pwBtn) pwBtn.classList.add('active');
  // topbar buttons
  const tbBtn = document.getElementById('lang-btn-' + lang);
  if (tbBtn) tbBtn.classList.add('active');

  // Translate all [data-i18n] and [data-i18n-placeholder] elements in the whole document
  applyI18nToNewNodes(document);

  // Select <option> elemanlarını çevir (data-i18n attribute'u varsa)
  document.querySelectorAll('select option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = (translations[lang]||translations.tr)[key];
    if (val !== undefined) el.text = val;
  });

  // Update <html lang="...">
  document.documentElement.lang = lang;

  // Re-render JS-generated content that uses translations
  try { if (typeof updateSidebar === 'function') updateSidebar(); } catch(e) {}
  try { if (typeof renderDashboard === 'function' && performansData && performansData.length) renderDashboard(); } catch(e) {}
}

// Apply saved / default language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// GLOBAL DEĞİŞKENLER VE SABITLER
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

// ────────────────────────────
// TEMEL AYARLAR
// ────────────────────────────
const PER_PAGE = 10;
const DASHBOARD_PER_PAGE = 12;
const GUNLUK_CALISMA_SANIYE = 7.5 * 3600; // 7.5 saat = 27000 saniye

// ────────────────────────────
// VERI YAPILARI
// ────────────────────────────
let klasmanlar = [];
let nextId = 1;
let secilenId = null;
let sayfa = 1;
let aramaStr = '';

// Excel ve Performans
let excelRows = [];
let excelCols = [];
let performansData = [];

// Dashboard
let filteredInspectors = [];
let currentDashboardPage = 1;

// Inspector Detay
let selectedInspectorDetail = null;

// ────────────────────────────
// SLIDESHOW DEĞİŞKENLERİ
// ────────────────────────────
let slideshowActive = false;
let slideshowInspectors = [];
let currentSlideIndex = 0;
let slideshowInterval = null;
let progressInterval = null;

// Slideshow Ayarları
let slideDuration = 5000; // 5 saniye
let displayMode = 'all'; // all, top5, excellent, good
let animationEffect = 'slide'; // slide, fade, zoom, flip

// ────────────────────────────
// APP CONFIG (Tüm Ayarlar)
// ────────────────────────────
const APP_CONFIG_KEY = 'lc_inspection_config';
const DEFAULT_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzzG03IqdhP-0igDsPNGP443FMA_hnhCWl78hHBO8hWqAl_VUz6uAwA2uXuxQYQcXSg/exec';
const DEFAULT_API_TOKEN  = 'lcw-secret-2024';
let appConfig = {
  password: '',          // Panel admin şifresi — Sheets Config'ten yüklenir, kodda saklanmaz
  sheetsWebAppUrl: DEFAULT_SHEETS_URL,
  sheetsViewUrl: '',
  sheetsApiToken: DEFAULT_API_TOKEN
};

// ────────────────────────────
// KULLANICI / YETKİ SİSTEMİ
// ────────────────────────────
// currentUser: { username, isAdmin, tabs: [...] }
// Admin: appConfig.password ile giriş yapar, tüm sekmelere erişir.
// Normal kullanıcı: Users sekmesindeki kullanıcı adı + kendi şifresiyle giriş yapar,
// sadece admin tarafından verilen sekmelere erişir.
const CURRENT_USER_KEY = 'lc_current_user';
let currentUser = null;
try {
  const cu = localStorage.getItem(CURRENT_USER_KEY);
  if (cu) currentUser = JSON.parse(cu);
} catch(e) { currentUser = null; }

// Yönetilebilir sekmeler (Kullanıcı Yönetimi sayfasında checkbox olarak gösterilir)
const ASSIGNABLE_TABS = [
  { id: 'dashboard',      label: 'Dashboard' },
  { id: 'klasman-analiz', label: 'Klasman Analizi' },
  { id: 'performans',     label: 'Performans Analizi' },
  { id: 'canli',          label: 'Canlı Gösterim' }
];

// Yeni bilgisayar tespiti: localStorage'da config hiç yoksa
const _isNewDevice = !localStorage.getItem(APP_CONFIG_KEY);

// ─── CONFIG SHEETS ENTEGRASYONU ───
// Şifre ve ayarları Sheets'teki "Config" sekmesine push/pull eder
async function pushConfigToSheets() {
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;
  try {
    let geminiKey = '';
    try { geminiKey = localStorage.getItem('gemini_api_key_perf_panel') || ''; } catch(e) {}
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'setConfig',
        token: token,
        config: {
          password: appConfig.password,
          geminiApiKey: geminiKey
        }
      }),
      mode: 'no-cors'
    });
    console.log('✅ Config (şifre + Gemini key) Sheets\'e gönderildi');
  } catch(e) { console.warn('Config push hatası:', e.message); }
}

// ─── GOOGLE SHEETS VERİ ÇEKME YARDIMCISI ───
// iframe + postMessage yöntemi (v5.1)
// JSONP ve fetch/redirect yaklaşımları Apps Script'in
// script.google.com → script.googleusercontent.com redirect'i nedeniyle
// GitHub Pages'ten çalışmıyordu. iframe redirect'i sorunsuz takip eder,
// içindeki <script> postMessage ile veriyi üst pencereye iletir.
function jsonpFetch(url, params) {
  const action = params.action || '';
  const token  = params.token  || '';
  return new Promise((resolve, reject) => {
    // action ve token dışındaki tüm parametreleri de URL'e ekle
    let iframeUrl = url + '?action=' + encodeURIComponent(action) +
                          '&token='  + encodeURIComponent(token);
    Object.entries(params).forEach(([k, v]) => {
      if (k !== 'action' && k !== 'token') {
        iframeUrl += '&' + encodeURIComponent(k) + '=' + encodeURIComponent(String(v).normalize('NFC'));
      }
    });

    const iframe = document.createElement('iframe');
    iframe.src = iframeUrl;
    iframe.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;border:none;';
    document.body.appendChild(iframe);

    const timer = setTimeout(() => {
      window.removeEventListener('message', handler);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      reject(new Error(
        'Bağlantı başarısız (zaman aşımı).\n\n' +
        '🔧 Apps Script Kontrol Listesi:\n' +
        '1. Dağıtım → "Erişimi olan: Herkes" seçili mi?\n' +
        '2. Apps Script kodu v5.1 ile güncellendi ve YENİ dağıtım yapıldı mı?\n' +
        '3. Paneldeki URL doğru mu?'
      ));
    }, 8000);

    function handler(event) {
      // Sadece Apps Script kaynaklarından gelen mesajları kabul et
      const trusted = ['googleusercontent.com', 'script.google.com'];
      if (!trusted.some(o => event.origin.includes(o))) return;
      clearTimeout(timer);
      window.removeEventListener('message', handler);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      console.log('✅ iframe/postMessage başarılı — action:', action);
      resolve(event.data);
    }

    window.addEventListener('message', handler);
  });
}

async function pullConfigFromSheets() {
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return false;
  try {
    const data = await jsonpFetch(url, { action: 'getConfig', token });
    if (data.status === 'ok' && data.config) {
      if (data.config.password)        appConfig.password        = data.config.password;
      // Gemini API key varsa localStorage'a yaz ve input'a doldur
      if (data.config.geminiApiKey) {
        try { localStorage.setItem('gemini_api_key_perf_panel', data.config.geminiApiKey); } catch(e) {}
        const keyInput = document.getElementById('ao-gkey');
        if (keyInput) keyInput.value = data.config.geminiApiKey;
        console.log('✅ Gemini API anahtarı Sheets\'ten yüklendi');
      }
      localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
      console.log('✅ Config Sheets\'ten çekildi');
      return true;
    }
  } catch(e) { console.warn('Config pull hatası:', e.message); }
  return false;
}

// ─── İLK AÇILIŞTA OTOMATİK VERİ ÇEK ───
async function autoFetchOnStartup() {
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;

  // Config (şifre) çek
  await pullConfigFromSheets();

  // Ekip yöneticisi ise ekip listesini Sheets'ten taze çek (başka cihazdan
  // değişmiş olabilir) ve "Ekibim" kartını güncelle
  if (currentUser && !currentUser.isAdmin) {
    try {
      const teamData = await jsonpFetch(url, { action: 'getUserTeam', token, username: currentUser.username });
      if (teamData.status === 'ok' && Array.isArray(teamData.team)) {
        currentUser.team = teamData.team;
        try { localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); } catch(e) {}
        renderTeamSection();
      }
    } catch(e) { console.warn('Ekip senkronizasyon hatası:', e.message); }
  }

  // Eğer daha önce hiç veri çekilmemişse (klasmanlar boş veya varsayılan 3'lü) Sheets'ten çek
  const isDefault = klasmanlar.length === 3 &&
    klasmanlar.every((k,i) => ['Pantolon','Ceket','Mont'][i] === k.ad);
  const hasNoKlasman = klasmanlar.length === 0;

  showStartupBanner('📥 Sheets\u2019ten veriler çekiliyor...');

  // ── Klasmanları çek (boşsa veya varsayılan 3'lüyse) ──
  if (isDefault || hasNoKlasman) {
    console.log('🔄 İlk açılış: Sheets\u2019ten klasmanlar otomatik çekiliyor...');
    try {
      const data = await jsonpFetch(url, { action: 'getKlasmanlar', token });
      if (data.status === 'ok' && Array.isArray(data.klasmanlar) && data.klasmanlar.length > 0) {
        klasmanlar = data.klasmanlar;
        nextId = Math.max(1, ...klasmanlar.map(k => k.id || 0)) + 1;
        renderListe();
        renderEditor();
        updateKlasmanFilter();
        console.log('✅ Klasmanlar yüklendi:', klasmanlar.length);
      }
    } catch(e) {
      console.warn('Klasman otomatik çekme hatası:', e.message);
    }
  }

  // ── Performans verisini her zaman çek (tüm kullanıcılar güncel görsün) ──
let perfData = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      perfData = await jsonpFetch(url, { action: 'getPerformansRaw', token });
      if (perfData?.status === 'ok' && perfData?.performansData?.length > 0) break;
      await new Promise(r => setTimeout(r, 2000));
    } catch(e) { await new Promise(r => setTimeout(r, 2000)); }
  }
  try {
    if (perfData && perfData.status === 'ok' && Array.isArray(perfData.performansData) && perfData.performansData.length > 0) {
      performansData = fixVerimlilikPerf(restorePerformansDateObjects(perfData.performansData));
      console.log('✅ Performans verisi yüklendi:', performansData.length, 'inspector');
      // verimlilikPerf hedefVerimlilik'e göre yeniden hesaplandı
    }
  } catch(e) {
    console.warn('Performans otomatik çekme hatası:', e.message);
  }

  // ── Tümünü kaydet ve render et ──
  saveData();
  updateSidebar();
  renderDashboard();
  renderPerfTabloFromData();
  renderTopInspectors();
  showStartupBanner(`✅ Sheets senkronizasyonu tamamlandı (${klasmanlar.length} klasman, ${performansData.length} inspector)`, 'success');
  console.log('✅ Otomatik yükleme tamamlandı');
}

function showStartupBanner(msg, type) {
  let banner = document.getElementById('startup-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'startup-banner';
    banner.style.cssText = 'position:fixed;top:64px;left:50%;transform:translateX(-50%);z-index:999;padding:10px 22px;border-radius:9px;font-size:13px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.2);transition:all .3s;white-space:nowrap';
    document.body.appendChild(banner);
  }
  if (type === 'success')     banner.style.background = 'var(--green)';
  else if (type === 'error')  banner.style.background = 'var(--red)';
  else if (type === 'info')   banner.style.background = 'var(--amber)';
  else                        banner.style.background = 'var(--blue2)';
  banner.style.color = '#fff';
  banner.textContent = msg;
  banner.style.display = 'block';
  if (type === 'success') setTimeout(hideStartupBanner, 4000);
}

function hideStartupBanner() {
  const banner = document.getElementById('startup-banner');
  if (banner) banner.style.display = 'none';
}

function loadConfig() {
  try {
    const saved = localStorage.getItem(APP_CONFIG_KEY);
    if (saved) {
      const cfg = JSON.parse(saved);
      appConfig = { ...appConfig, ...cfg };
    }
  } catch(e) {}
  // URL her zaman sabit kalır — localStorage'daki eski değer görmezden gelinir (v5.2)
  const OLD_URLS = [
    'https://script.google.com/macros/s/AKfycbylHwcu3q2CnNwmNUQIyjkuhyAcapnxabPmAGrKW70GU-IVWhq_55KHwk2NBQ3pGhaOgQ/exec',
    'https://script.google.com/macros/s/AKfycbwdM7izL7cwHzYNIAG_N0wZ1_NpKM_AyBp0wrpgRtnoLHa_WnMh-JQZfeRJhdq6BPzg7Q/exec',
    'https://script.google.com/macros/s/AKfycbzXFslNKDL3LlWEQPi8suFqSw5iqm65r2-KamgptTK1tXUY6Fpl25C8ok5zhoUGW1bSAg/exec'
  ];
  // Her zaman HTML içindeki sabit URL kullan (farklı bilgisayarda da değişmez)
  appConfig.sheetsWebAppUrl = DEFAULT_SHEETS_URL;
  if (!appConfig.sheetsApiToken) appConfig.sheetsApiToken = DEFAULT_API_TOKEN;
  // UI'ya yansıt
  const wuEl = document.getElementById('sheets-webapp-url');
  const vuEl = document.getElementById('sheets-view-url');
  const tkEl = document.getElementById('sheets-api-token');
  if (wuEl) wuEl.value = appConfig.sheetsWebAppUrl || '';
  if (vuEl) vuEl.value = appConfig.sheetsViewUrl || '';
  if (tkEl) tkEl.value = appConfig.sheetsApiToken || '';
  updateSheetsViewLink();
}

function saveConfig() {
  // sheetsWebAppUrl her zaman HTML'e gömülü sabit değeri kullanır (v5.2)
  appConfig.sheetsWebAppUrl  = DEFAULT_SHEETS_URL;
  appConfig.sheetsViewUrl    = document.getElementById('sheets-view-url')?.value?.trim()   || '';
  appConfig.sheetsApiToken   = document.getElementById('sheets-api-token')?.value?.trim()  || '';
  localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
  updateSheetsViewLink();
  // URL+token doluysa Sheets Config sekmesine şifreyi de yaz (debounced)
  clearTimeout(window._configPushTimer);
  window._configPushTimer = setTimeout(() => pushConfigToSheets(), 2000);
}

function toggleTokenVisibility() {
  const inp = document.getElementById('sheets-api-token');
  const btn = document.getElementById('token-eye-btn');
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.textContent = inp.type === 'password' ? '👁️' : '🙈';
}

function updateSheetsViewLink() {
  const link = document.getElementById('sheets-view-link');
  if (!link) return;
  const url = appConfig.sheetsViewUrl;
  link.href = url || '#';
  link.style.opacity = url ? '1' : '0.5';
}

// ────────────────────────────
// ŞİFRE KONTROLÜ
// ────────────────────────────
// sessionStorage ile çalışır: sekme açık olduğu sürece bir kez şifre yeter.
// Sekme kapatılınca sıfırlanır, yeni açılışta tekrar sorar.
const SESSION_KEY = 'lc_session_unlocked';
let klasmanUnlocked = sessionStorage.getItem(SESSION_KEY) === '1';
let pendingNavEl = null;

// Sayfa ilk açılışında şifre sor (henüz unlock olmadıysa)
function initPasswordGate() {
  if (!klasmanUnlocked) {
    let remembered = null;
    try { remembered = JSON.parse(localStorage.getItem('lc_remembered_creds') || 'null'); } catch(e) {}

    if (remembered && remembered.password) {
      klasmanUnlocked = true;
      sessionStorage.setItem(SESSION_KEY, '1');
      if (!currentUser) {
        currentUser = remembered.username && remembered.username.toLowerCase() !== 'admin'
          ? { username: remembered.username, isAdmin: false, tabs: [], team: [] }
          : { username: 'admin', isAdmin: true, tabs: 'all' };
      }
      const shell = document.getElementById('app-shell');
      if (shell) shell.style.display = 'block';
      applyUserPermissions();
      setTimeout(() => autoFetchOnStartup(), 600);
      _verifyRememberedCredsInBackground(remembered);
      return;
    }

    document.getElementById('pw-overlay').style.display = 'flex';
  } else {
    const shell = document.getElementById('app-shell');
    if (shell) shell.style.display = 'block';
    applyUserPermissions();
    setTimeout(() => autoFetchOnStartup(), 600);
  }
}

// Hatırlanan giriş bilgilerini arka planda doğrular; geçersizse oturumu kapatır.
async function _verifyRememberedCredsInBackground(remembered) {
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;
  const isAdminUser = !remembered.username || remembered.username.toLowerCase() === 'admin';
  try {
    if (isAdminUser) {
      const data = await jsonpFetch(url, { action: 'getConfig', token });
      if (data.status === 'ok' && data.config && data.config.password) {
        appConfig.password = data.config.password;
        localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
        if (remembered.password !== data.config.password) {
          logoutUser('⚠️ Şifre değişti, lütfen yeni şifre ile giriş yapın');
        }
      }
    } else {
      const data = await jsonpFetch(url, { action: 'login', token, username: remembered.username, password: remembered.password });
      if (data.status === 'ok' && data.user) {
        currentUser = { username: data.user.username, isAdmin: false, tabs: data.user.tabs || [], team: data.user.team || [] };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
        applyUserPermissions();
        if (document.getElementById('page-dashboard')?.classList.contains('active')) renderTeamSection();
      } else {
        logoutUser('⚠️ Kullanıcı bilgileriniz geçersiz, lütfen tekrar giriş yapın');
      }
    }
  } catch(e) {}
}

// Oturumu kapatır ve giriş ekranına döner.
function logoutUser(msg) {
  try {
    localStorage.removeItem('lc_remembered_creds');
    localStorage.removeItem(CURRENT_USER_KEY);
  } catch(e) {}
  currentUser = null;
  klasmanUnlocked = false;
  sessionStorage.removeItem(SESSION_KEY);
  const shell = document.getElementById('app-shell');
  if (shell) shell.style.display = 'none';
  document.getElementById('pw-overlay').style.display = 'flex';
  const errEl = document.getElementById('pw-err');
  if (errEl) errEl.textContent = msg || '';
  const userEl = document.getElementById('pw-username');
  if (userEl) userEl.value = '';
  const passEl = document.getElementById('pw-input');
  if (passEl) { passEl.value = ''; passEl.focus(); }
}

// Giriş yapan kullanıcıya göre sidebar sekmelerini gösterir/gizler.
function applyUserPermissions() {
  const isAdmin = !currentUser || currentUser.isAdmin;
  const navKlasman = document.getElementById('nav-klasmanlar');
  const navUsers   = document.getElementById('nav-kullanicilar');
  if (navKlasman) navKlasman.style.display = isAdmin ? '' : 'none';
  if (navUsers)   navUsers.style.display   = isAdmin ? '' : 'none';

  ASSIGNABLE_TABS.forEach(t => {
    if (t.id === 'dashboard') return; // herkes görebilir
    const allowed = isAdmin || (currentUser.tabs || []).includes(t.id);
    document.querySelectorAll('.nav-item').forEach(el => {
      const onclick = el.getAttribute('onclick') || '';
      if (onclick.indexOf("showPage('" + t.id + "'") !== -1) {
        el.style.display = allowed ? '' : 'none';
      }
    });
  });

  const unameEl = document.getElementById('current-username-label');
  if (unameEl) unameEl.textContent = (currentUser && !currentUser.isAdmin) ? currentUser.username : 'admin';

  // Ekip yönetimi UI'ları sadece ekip yöneticisi (admin olmayan) kullanıcılara gösterilir
  const teamCard   = document.getElementById('my-team-card');
  const teamFilter = document.getElementById('team-only-filter-group');
  const genelLabel = document.getElementById('general-status-label');
  const showTeamUi = currentUser && !currentUser.isAdmin;
  if (teamCard)   teamCard.style.display   = showTeamUi ? '' : 'none';
  if (teamFilter) teamFilter.style.display = showTeamUi ? '' : 'none';
  if (genelLabel) genelLabel.style.display = showTeamUi ? 'flex' : 'none';

  // Ekip yöneticileri özet kartları sadece admin'e gösterilir
  const teamManagersSection = document.getElementById('team-managers-section');
  if (teamManagersSection && showTeamUi) teamManagersSection.style.display = 'none';

  // "Ekibim Analizi" sekmesi: yalnızca atanmış ekibi olan kullanıcılara gösterilir
  const navEkipAnaliz = document.getElementById('nav-ekip-analiz');
  if (navEkipAnaliz) {
    const hasTeam = showTeamUi && (currentUser.team || []).length > 0;
    navEkipAnaliz.style.display = hasTeam ? '' : 'none';
  }

  // "Temizle" butonu sadece admin tarafından görülebilir
  const temizleBtn = document.getElementById('btn-temizle');
  if (temizleBtn) temizleBtn.style.display = (!currentUser || currentUser.isAdmin) ? '' : 'none';
}

// Geriye dönük uyumluluk: bazı eski nav öğeleri requirePassword çağırabilir.
function requirePassword(navEl) {
  showPage('klasmanlar', navEl);
}

function closePwModal() {
  // Giriş ekranı her zaman zorunludur, modal kapatılamaz.
}

async function checkPassword() {
  const usernameEl = document.getElementById('pw-username');
  const userVal = usernameEl ? usernameEl.value.trim() : '';
  const val   = document.getElementById('pw-input').value.trim();
  const errEl = document.getElementById('pw-err');
  const btnEl = document.querySelector('.pw-btn');
  const dotEl   = document.getElementById('pw-dot');
  const labelEl = document.getElementById('pw-server-label');

  if (!val) { errEl.textContent = '❌ Şifre boş olamaz'; return; }

  // Buton kilitle
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = (translations[currentLang]||translations.tr).verifying; }
  errEl.textContent = '';
  if (dotEl)   dotEl.style.background = 'var(--amber)';
  if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).connecting;

  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;

  function _unlock(user) {
    currentUser = user;
    try { localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); } catch(e) {}
    klasmanUnlocked = true;
    sessionStorage.setItem(SESSION_KEY, '1');
    try {
      const rem = document.getElementById('pw-remember');
      if (rem && rem.checked) localStorage.setItem('lc_remembered_creds', JSON.stringify({ username: userVal, password: val }));
      else localStorage.removeItem('lc_remembered_creds');
    } catch(e) {}
    if (dotEl)   dotEl.style.background = 'var(--green)';
    if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).verified;
    const shell = document.getElementById('app-shell');
    if (shell) shell.style.display = 'block';
    document.getElementById('pw-overlay').style.display = 'none';
    applyUserPermissions();
    setTimeout(() => autoFetchOnStartup(), 300);
    pendingNavEl = null;
  }

  function _fail(msg) {
    errEl.textContent = msg;
    if (dotEl)   dotEl.style.background = 'var(--red)';
    if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).error_label;
    if (btnEl) { btnEl.disabled = false; btnEl.textContent = (translations[currentLang]||translations.tr).login_btn; }
  }

  // ── Kullanıcı adı girildiyse (admin dışı) → normal kullanıcı girişi ──
  if (userVal && userVal.toLowerCase() !== 'admin') {
    if (!url || !token) {
      _fail('⚠️ Sunucu bağlantısı yapılandırılmamış.');
      return;
    }
    try {
      const data = await jsonpFetch(url, { action: 'login', token, username: userVal, password: val });
      if (data.status === 'ok' && data.user) {
        _unlock({ username: data.user.username, isAdmin: false, tabs: data.user.tabs || [], team: data.user.team || [] });
        return;
      }
      _fail((translations[currentLang]||translations.tr).pw_wrong);
      document.getElementById('pw-input').value = '';
      document.getElementById('pw-input').focus();
      return;
    } catch(e) {
      _fail((translations[currentLang]||translations.tr).pw_unreachable);
      return;
    }
  }

  // ── Admin girişi (tek admin şifresi) ──
  const adminUser = { username: 'admin', isAdmin: true, tabs: 'all' };

  // ── 1. Sheets'ten şifreyi çekmeye çalış (20s timeout) ──
  if (url && token) {
    try {
      const data = await jsonpFetch(url, { action: 'getConfig', token });
      if (data.status === 'ok' && data.config && data.config.password) {
        const sheetsPassword = data.config.password;
        // Cache'e yaz
        appConfig.password = sheetsPassword;
        localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
        if (val === sheetsPassword) { _unlock(adminUser); return; }
        else { _fail((translations[currentLang]||translations.tr).pw_wrong); document.getElementById('pw-input').value=''; document.getElementById('pw-input').focus(); return; }
      }
      // Sheets'te şifre yok ama bağlantı kuruldu
      if (dotEl) dotEl.style.background = 'var(--amber)';
      if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).pw_no_sheets_pw;
    } catch(e) {
      // Zaman aşımı veya bağlantı hatası
      console.warn('Sheets bağlantı hatası:', e.message);
      if (dotEl)   dotEl.style.background = 'var(--amber)';
      if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).pw_unreachable;
    }
  }

  // ── 2. Sheets'e ulaşılamazsa cache'deki şifreyi kullan ──
  const cachedPw = appConfig.password;
  if (cachedPw && val === cachedPw) {
    if (labelEl) labelEl.textContent = (translations[currentLang]||translations.tr).pw_offline;
    _unlock(adminUser);
    return;
  }

  // ── 3. Her iki yöntem de başarısız ──
  if (!cachedPw) {
    _fail((translations[currentLang]||translations.tr).pw_no_server_cache);
  } else {
    _fail((translations[currentLang]||translations.tr).pw_wrong);
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }
}

async function _firstRunSync() {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) { hideStartupBanner(); return; }

  showStartupBanner('📥 Sheets\'ten klasmanlar çekiliyor...');

  try {
    const data = await jsonpFetch(url, { action: 'getKlasmanlar', token });
    if (data.status === 'error') throw new Error(data.message || 'Sunucu hata döndürdü');

    if (data.status === 'ok' && Array.isArray(data.klasmanlar) && data.klasmanlar.length > 0) {
      klasmanlar = data.klasmanlar;
      nextId = Math.max(1, ...klasmanlar.map(k => k.id || 0)) + 1;
      saveData();
      renderListe();
      renderEditor();
      updateSidebar();
      updateKlasmanFilter();
      renderDashboard();
      showStartupBanner(`✅ ${klasmanlar.length} klasman senkronize edildi!`, 'success');
    } else {
      showStartupBanner('ℹ️ Sheets\'te henüz klasman verisi yok', 'info');
      setTimeout(hideStartupBanner, 3000);
    }
  } catch(e) {
    console.warn('_firstRunSync hata:', e.message);
    showStartupBanner('⚠️ Senkronizasyon hatası: ' + e.message, 'error');
    setTimeout(hideStartupBanner, 5000);
  }
}

function changePwPrompt() {
  const current = prompt('Mevcut şifreyi girin:');
  if (current !== appConfig.password) { alert('Yanlış şifre!'); return; }
  const newPw = prompt('Yeni şifreyi girin:');
  if (!newPw || newPw.length < 4) { alert('Şifre en az 4 karakter olmalı!'); return; }
  const confirm = prompt('Yeni şifreyi tekrar girin:');
  if (newPw !== confirm) { alert('Şifreler eşleşmiyor!'); return; }
  appConfig.password = newPw;
  localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
  // Sheets Config sekmesine de gönder
  pushConfigToSheets().then(() => {
    alert('✅ Şifre değiştirildi ve Sheets\'e senkronize edildi!');
  }).catch(() => {
    alert('✅ Şifre değiştirildi! (Sheets senkronizasyonu başarısız oldu)');
  });
}

// Giriş yapmış olan kullanıcı kendi şifresini değiştirir.
// Admin için ortak admin şifresi (changePwPrompt), normal kullanıcı için
// kendi Users sekmesindeki şifresi güncellenir.
function changeMyPasswordPrompt() {
  if (!currentUser || currentUser.isAdmin) { changePwPrompt(); return; }

  const current = prompt('Mevcut şifrenizi girin:');
  if (!current) return;
  const newPw = prompt('Yeni şifrenizi girin:');
  if (!newPw || newPw.length < 4) { alert('Şifre en az 4 karakter olmalı!'); return; }
  const conf = prompt('Yeni şifreyi tekrar girin:');
  if (newPw !== conf) { alert('Şifreler eşleşmiyor!'); return; }

  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) { alert('⚠️ Sunucu bağlantısı yapılandırılmamış.'); return; }

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      action: 'changeUserPassword',
      token: token,
      username: currentUser.username,
      oldPassword: current,
      newPassword: newPw
    }),
    mode: 'no-cors'
  }).then(() => {
    // Hatırlanan giriş bilgisi varsa güncelle
    try {
      const rem = JSON.parse(localStorage.getItem('lc_remembered_creds') || 'null');
      if (rem && rem.username && rem.username.toLowerCase() === currentUser.username.toLowerCase()) {
        localStorage.setItem('lc_remembered_creds', JSON.stringify({ username: rem.username, password: newPw }));
      }
    } catch(e) {}
    alert('✅ Şifre değişiklik isteği gönderildi. Eğer mevcut şifreniz doğruysa şifreniz güncellendi.');
  }).catch(() => {
    alert('❌ İşlem başarısız. İnternet bağlantınızı kontrol edin.');
  });
}

// ────────────────────────────
// GOOGLE SHEETS ENTEGRASYONU
// ────────────────────────────
async function pushToSheets() {
  const url = appConfig.sheetsWebAppUrl;
  if (!url) {
    alert('⚠️ Önce Google Apps Script Web App URL\'ini girin!\n\nKlasman Yönetimi → Bağlantı Ayarları bölümüne URL yapıştırın.');
    return;
  }
  const token = appConfig.sheetsApiToken;
  if (!token) {
    alert('⚠️ API Token girilmemiş!\n\nBağlantı Ayarları → API Token alanını doldurun.\nApps Script dosyasındaki API_TOKEN değeriyle aynı olmalı.');
    return;
  }
  const btn = event?.target;
  const origText = btn?.textContent || '';
  if (btn) { btn.textContent = (translations[currentLang]||translations.tr).sending; btn.disabled = true; }
  try {
    const payload = {
      action: 'setKlasmanlar',
      token: token,
      klasmanlar: klasmanlar,
      savedAt: new Date().toISOString()
    };
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    });
 

function renderKlasmanAnaliz() {
  const el = document.getElementById('klasman-analiz-icerik');
  if (!el) return;

  if (!performansData || !performansData.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🎯</div><h3>${(translations[currentLang]||translations.tr).no_data_js}</h3><p>${(translations[currentLang]||translations.tr).no_data_js_hint}</p></div>';
    return;
  }

  const klasmanMap = {};
  performansData.forEach(inspector => {
    Object.entries(inspector.klasmanlar || {}).forEach(([klasmanAd, kd]) => {
      if (!klasmanMap[klasmanAd]) {
        klasmanMap[klasmanAd] = {
          ad: klasmanAd,
          toplamAdet: 0,
          toplamFiiliSure: 0,
          toplamStandartSure: 0,
          inspectorSayisi: 0,
          standartKontrolSure: null,
          istasyonSure: null
        };
      }
      klasmanMap[klasmanAd].toplamAdet        += kd.adet || 0;
      klasmanMap[klasmanAd].toplamFiiliSure   += kd.kayitFiiliSure || 0;
      klasmanMap[klasmanAd].toplamStandartSure += kd.standartSure || 0;
      klasmanMap[klasmanAd].inspectorSayisi   += 1;
    });
  });

  klasmanlar.forEach(k => {
    if (klasmanMap[k.ad]) {
      klasmanMap[k.ad].standartKontrolSure = parseFloat(k.urunKontrolSuresi) || 0;
      klasmanMap[k.ad].istasyonSure = k.istasyonlar.reduce((s, i) => s + (parseFloat(i.sure) || 0), 0);
    }
  });

  const liste = Object.values(klasmanMap)
    .filter(k => k.toplamAdet > 0)
    .sort((a, b) => b.toplamAdet - a.toplamAdet);

  if (!liste.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><h3>${(translations[currentLang]||translations.tr).data_not_found}</h3></div>';
    return;
  }

  const kartlar = liste.map(k => {
    const standart = k.toplamAdet > 0 && k.toplamStandartSure > 0
  ? k.toplamStandartSure / k.toplamAdet
  : (k.standartKontrolSure || 0);
    const istasyon       = k.istasyonSure || 0;
    const gerceklesenOrt = k.toplamAdet > 0 && k.toplamFiiliSure > 0
      ? k.toplamFiiliSure / k.toplamAdet : null;
    const fark = gerceklesenOrt !== null && standart > 0
      ? gerceklesenOrt - standart : null;
    const yuzdeFark = fark !== null && standart > 0
      ? Math.round((fark / standart) * 100) : null;
    const barGenislik = gerceklesenOrt !== null && standart > 0
      ? Math.min(200, Math.round((gerceklesenOrt / standart) * 100)) : 0;
    const barRenk = fark === null ? 'var(--muted2)'
      : fark <= 0 ? '#00897B'
      : fark <= standart * 0.2 ? '#F57F17' : '#C62828';
    const farkIkon = standart === 0 ? '⚠️ Standart süre girilmemiş'
      : fark === null ? '—'
      : fark <= 0 ? '▼ Hedef Altında ✓' : '▲ Hedef Üstünde';

    return `
    <div style="background:#fff;border:1.5px solid var(--border2);border-radius:14px;padding:20px;box-shadow:var(--shadow);position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,${barRenk},${barRenk}88);border-radius:14px 14px 0 0;"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--navy);">${k.ad}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${k.toplamAdet.toLocaleString('tr-TR')} adet · ${k.inspectorSayisi} inspector</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:22px;font-weight:800;color:${barRenk};font-family:'DM Mono',monospace;line-height:1;">${gerceklesenOrt !== null ? gerceklesenOrt.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-top:2px;" data-i18n="actual_per_unit">Actual/Unit</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--lblue3);border:1px solid var(--border2);border-radius:10px;padding:12px 14px;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">📐 Standart</div>
          <div style="font-size:18px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace;">${standart > 0 ? standart.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:10px;color:var(--muted2);margin-top:3px;" data-i18n="one_unit_check">1 unit inspection</div>
          ${istasyon > 0 ? `<div style="font-size:10px;color:var(--muted2);margin-top:1px;">+ ${istasyon.toFixed(2)}sn istasyon</div>` : ''}
        </div>
        <div style="background:${fark!==null&&fark<=0?'var(--lgreen)':standart===0?'var(--lamber)':'var(--lred)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':standart===0?'#FFE082':'#FFCDD2'};border-radius:10px;padding:12px 14px;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;" data-i18n="actual_label">⏱ Actual</div>
          <div style="font-size:18px;font-weight:700;color:${barRenk};font-family:'DM Mono',monospace;">${gerceklesenOrt !== null ? gerceklesenOrt.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:10px;color:${barRenk};margin-top:3px;font-weight:600;">
            ${fark !== null ? (fark>0?'+':'')+fark.toFixed(2)+'sn fark' : 'Standart girilmemiş'}
            ${yuzdeFark !== null ? ` (${fark>0?'+':''}${yuzdeFark}%)` : ''}
          </div>
        </div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-bottom:4px;">
          <span data-i18n="actual_vs_std">Actual / Standard ratio</span>
          <span style="font-weight:600;color:${barRenk}">${barGenislik}%</span>
        </div>
        <div style="height:8px;background:var(--border2);border-radius:4px;overflow:hidden;">
          <div style="width:${Math.min(100,barGenislik)}%;height:100%;background:${barRenk};border-radius:4px;"></div>
        </div>
      </div>
      <div style="text-align:center;padding:6px 12px;border-radius:8px;background:${fark!==null&&fark<=0?'var(--lgreen)':standart===0?'var(--lamber)':'var(--lred)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':standart===0?'#FFE082':'#FFCDD2'};">
        <span style="font-size:11px;font-weight:700;color:${barRenk};">${farkIkon}</span>
      </div>
    </div>`;
  }).join('');

  pushKlasmanAnalizToSheets(liste);

  el.innerHTML = `
    <div style="background:linear-gradient(135deg,var(--navy) 0%,var(--blue) 100%);border-radius:12px;padding:16px 22px;margin-bottom:20px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      <div style="font-size:28px;">🎯</div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:700;color:#fff;">${(translations[currentLang]||translations.tr).klasman_actual_analysis}</div>
        <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:3px;">${liste.length} ${(translations[currentLang]||translations.tr).klasman_word} · ${liste.reduce((s,k)=>s+k.toplamAdet,0).toLocaleString('tr-TR')} ${(translations[currentLang]||translations.tr).total_units_summary}</div>
      </div>
      ${[
        ['✅',(translations[currentLang]||translations.tr).on_target,  liste.filter(k=>{const g=k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null;return g!==null&&k.standartKontrolSure>0&&g<=k.standartKontrolSure;}).length,'#4CAF50'],
        ['⚠️',(translations[currentLang]||translations.tr).near_target, liste.filter(k=>{const g=k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null;const s=k.standartKontrolSure;return g!==null&&s>0&&g>s&&g<=s*1.2;}).length,'#FFB74D'],
        ['🔴',(translations[currentLang]||translations.tr).high_label,  liste.filter(k=>{const g=k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null;const s=k.standartKontrolSure;return g!==null&&s>0&&g>s*1.2;}).length,'#EF9A9A'],
        ['➖',(translations[currentLang]||translations.tr).no_std,       liste.filter(k=>!k.standartKontrolSure||k.standartKontrolSure===0).length,'rgba(255,255,255,.5)']
      ].map(([ic,lb,cnt,col])=>`
        <div style="text-align:center;background:rgba(255,255,255,.1);border-radius:10px;padding:10px 16px;min-width:80px;">
          <div style="font-size:16px;">${ic}</div>
          <div style="font-size:20px;font-weight:800;color:${col};font-family:'DM Mono',monospace;line-height:1.2;">${cnt}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.5px;">${lb}</div>
        </div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">
      ${kartlar}
    </div>
  `;
}
showSuccessMessage('✅ ' + klasmanlar.length + ' ' + (translations[currentLang]||translations.tr).sheets_sent_klasman);
  } catch(err) {
    alert('❌ Gönderme hatası: ' + err.message);
  } finally {
    if (btn) { btn.textContent = origText; btn.disabled = false; }
  }
}

// ── KLASMAN ANALİZ STATE ──
let _klAnalizPage = 1;
const _KL_ANALIZ_PER_PAGE = 12;
let _klAnalizFiltre = '';
let _klAnalizSiralama = 'adet-desc';
let _klAnalizTumListe = [];

function _klAnalizUygula() {
  _klAnalizPage = 1;
  const el = document.getElementById('klasman-analiz-icerik');
  if (el) _renderKlAnalizUI(el);
}

function _klAnalizGoTo(p) {
  _klAnalizPage = p;
  const el = document.getElementById('klasman-analiz-icerik');
  if (el) _renderKlAnalizUI(el);
}

function renderKlasmanAnaliz() {
  const el = document.getElementById('klasman-analiz-icerik');
  if (!el) return;

  if (!performansData || !performansData.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🎯</div><h3>${(translations[currentLang]||translations.tr).no_data_js}</h3><p>${(translations[currentLang]||translations.tr).no_data_js_hint}</p></div>';
    return;
  }

  const klasmanMap = {};
  performansData.forEach(inspector => {
    Object.entries(inspector.klasmanlar || {}).forEach(([klasmanAd, kd]) => {
      if (!klasmanMap[klasmanAd]) {
        klasmanMap[klasmanAd] = {
          ad: klasmanAd, toplamAdet: 0, toplamFiiliSure: 0,
          toplamStandartSure: 0, inspectorSayisi: 0,
          standartKontrolSure: null, istasyonSure: null
        };
      }
      klasmanMap[klasmanAd].toplamAdet         += kd.adet || 0;
      klasmanMap[klasmanAd].toplamFiiliSure    += kd.kayitFiiliSure || 0;
      klasmanMap[klasmanAd].toplamStandartSure += kd.standartSure || 0;
      klasmanMap[klasmanAd].inspectorSayisi    += 1;
    });
  });

  klasmanlar.forEach(k => {
    if (klasmanMap[k.ad]) {
      klasmanMap[k.ad].standartKontrolSure = parseFloat(k.urunKontrolSuresi) || 0;
      klasmanMap[k.ad].istasyonSure = k.istasyonlar.reduce((s, i) => s + (parseFloat(i.sure) || 0), 0);
    }
  });

  _klAnalizTumListe = Object.values(klasmanMap)
    .filter(k => k.toplamAdet > 0)
    .sort((a, b) => b.toplamAdet - a.toplamAdet);

  if (!_klAnalizTumListe.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><h3>${(translations[currentLang]||translations.tr).data_not_found}</h3></div>';
    return;
  }

  pushKlasmanAnalizToSheets(_klAnalizTumListe);
  _klAnalizPage = 1;
  _klAnalizFiltre = '';
  _klAnalizSiralama = 'adet-desc';
  _renderKlAnalizUI(el);
}

function _klAnalizFiltrele() {
  let liste = [..._klAnalizTumListe];

  if (_klAnalizFiltre.trim()) {
    const q = _klAnalizFiltre.trim().toLowerCase();
    liste = liste.filter(k => k.ad.toLowerCase().includes(q));
  }

  const durumFiltre = document.getElementById('kla-durum-filtre')?.value || '';
  if (durumFiltre === 'hedefte') {
    liste = liste.filter(k => {
      const g = k.toplamAdet > 0 && k.toplamFiiliSure > 0 ? k.toplamFiiliSure / k.toplamAdet : null;
      return g !== null && k.standartKontrolSure > 0 && g <= k.standartKontrolSure;
    });
  } else if (durumFiltre === 'yakin') {
    liste = liste.filter(k => {
      const g = k.toplamAdet > 0 && k.toplamFiiliSure > 0 ? k.toplamFiiliSure / k.toplamAdet : null;
      const s = k.standartKontrolSure;
      return g !== null && s > 0 && g > s && g <= s * 1.2;
    });
  } else if (durumFiltre === 'yuksek') {
    liste = liste.filter(k => {
      const g = k.toplamAdet > 0 && k.toplamFiiliSure > 0 ? k.toplamFiiliSure / k.toplamAdet : null;
      const s = k.standartKontrolSure;
      return g !== null && s > 0 && g > s * 1.2;
    });
  } else if (durumFiltre === 'stdyok') {
    liste = liste.filter(k => !k.standartKontrolSure || k.standartKontrolSure === 0);
  }

  switch (_klAnalizSiralama) {
    case 'adet-desc':  liste.sort((a, b) => b.toplamAdet - a.toplamAdet); break;
    case 'adet-asc':   liste.sort((a, b) => a.toplamAdet - b.toplamAdet); break;
    case 'ad-asc':     liste.sort((a, b) => a.ad.localeCompare(b.ad, 'tr')); break;
    case 'ad-desc':    liste.sort((a, b) => b.ad.localeCompare(a.ad, 'tr')); break;
    case 'fark-desc':  liste.sort((a, b) => {
      const ga = a.toplamAdet > 0 && a.toplamFiiliSure > 0 ? a.toplamFiiliSure / a.toplamAdet - (a.standartKontrolSure || 0) : -Infinity;
      const gb = b.toplamAdet > 0 && b.toplamFiiliSure > 0 ? b.toplamFiiliSure / b.toplamAdet - (b.standartKontrolSure || 0) : -Infinity;
      return gb - ga;
    }); break;
    case 'fark-asc':   liste.sort((a, b) => {
      const ga = a.toplamAdet > 0 && a.toplamFiiliSure > 0 ? a.toplamFiiliSure / a.toplamAdet - (a.standartKontrolSure || 0) : Infinity;
      const gb = b.toplamAdet > 0 && b.toplamFiiliSure > 0 ? b.toplamFiiliSure / b.toplamAdet - (b.standartKontrolSure || 0) : Infinity;
      return ga - gb;
    }); break;
  }

  return liste;
}

function _renderKlAnalizUI(el) {
  const tumListe   = _klAnalizFiltrele();
  const totalPages = Math.max(1, Math.ceil(tumListe.length / _KL_ANALIZ_PER_PAGE));
  if (_klAnalizPage > totalPages) _klAnalizPage = totalPages;
  if (_klAnalizPage < 1) _klAnalizPage = 1;

  const startIdx   = (_klAnalizPage - 1) * _KL_ANALIZ_PER_PAGE;
  const sayfaListe = tumListe.slice(startIdx, startIdx + _KL_ANALIZ_PER_PAGE);
  const orijinal   = _klAnalizTumListe;

  const hedefte = orijinal.filter(k => { const g = k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null; return g!==null&&k.standartKontrolSure>0&&g<=k.standartKontrolSure; }).length;
  const yakin   = orijinal.filter(k => { const g = k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null; const s=k.standartKontrolSure; return g!==null&&s>0&&g>s&&g<=s*1.2; }).length;
  const yuksek  = orijinal.filter(k => { const g = k.toplamAdet>0&&k.toplamFiiliSure>0?k.toplamFiiliSure/k.toplamAdet:null; const s=k.standartKontrolSure; return g!==null&&s>0&&g>s*1.2; }).length;
  const stdYok  = orijinal.filter(k => !k.standartKontrolSure||k.standartKontrolSure===0).length;

  const kartlar = sayfaListe.map(k => {
    const standart = k.toplamAdet > 0 && k.toplamStandartSure > 0
  ? k.toplamStandartSure / k.toplamAdet
  : (k.standartKontrolSure || 0);
    const istasyon       = k.istasyonSure || 0;
    const gerceklesenOrt = k.toplamAdet > 0 && k.toplamFiiliSure > 0 ? k.toplamFiiliSure / k.toplamAdet : null;
    const fark           = gerceklesenOrt !== null && standart > 0 ? gerceklesenOrt - standart : null;
    const yuzdeFark      = fark !== null && standart > 0 ? Math.round((fark / standart) * 100) : null;
    const barGenislik    = gerceklesenOrt !== null && standart > 0 ? Math.min(200, Math.round((gerceklesenOrt / standart) * 100)) : 0;
    const barRenk        = fark === null ? 'var(--muted2)' : fark <= 0 ? '#00897B' : fark <= standart * 0.2 ? '#F57F17' : '#C62828';
    const farkIkon       = standart === 0 ? '⚠️ Standart süre girilmemiş' : fark === null ? '—' : fark <= 0 ? '▼ Hedef Altında ✓' : '▲ Hedef Üstünde';

    return `
    <div style="background:#fff;border:1.5px solid var(--border2);border-radius:14px;padding:20px;box-shadow:var(--shadow);position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,${barRenk},${barRenk}88);border-radius:14px 14px 0 0;"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--navy);">${k.ad}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px;">${k.toplamAdet.toLocaleString('tr-TR')} adet · ${k.inspectorSayisi} inspector</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:22px;font-weight:800;color:${barRenk};font-family:'DM Mono',monospace;line-height:1;">${gerceklesenOrt !== null ? gerceklesenOrt.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-top:2px;">Gerçekleşen/Adet</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="background:var(--lblue3);border:1px solid var(--border2);border-radius:10px;padding:12px 14px;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">📐 Standart</div>
          <div style="font-size:18px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace;">${standart > 0 ? standart.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:10px;color:var(--muted2);margin-top:3px;">1 adet ürün kontrol</div>
          ${istasyon > 0 ? `<div style="font-size:10px;color:var(--muted2);margin-top:1px;">+ ${istasyon.toFixed(2)}sn istasyon</div>` : ''}
        </div>
        <div style="background:${fark!==null&&fark<=0?'var(--lgreen)':standart===0?'var(--lamber)':'var(--lred)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':standart===0?'#FFE082':'#FFCDD2'};border-radius:10px;padding:12px 14px;">
          <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">⏱ Gerçekleşen</div>
          <div style="font-size:18px;font-weight:700;color:${barRenk};font-family:'DM Mono',monospace;">${gerceklesenOrt !== null ? gerceklesenOrt.toFixed(2)+'sn' : '—'}</div>
          <div style="font-size:10px;color:${barRenk};margin-top:3px;font-weight:600;">
            ${fark !== null ? (fark>0?'+':'')+fark.toFixed(2)+'sn fark' : 'Standart girilmemiş'}
            ${yuzdeFark !== null ? ` (${fark>0?'+':''}${yuzdeFark}%)` : ''}
          </div>
        </div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-bottom:4px;">
          <span>Gerçekleşen / Standart oranı</span>
          <span style="font-weight:600;color:${barRenk}">${barGenislik}%</span>
        </div>
        <div style="height:8px;background:var(--border2);border-radius:4px;overflow:hidden;">
          <div style="width:${Math.min(100,barGenislik)}%;height:100%;background:${barRenk};border-radius:4px;"></div>
        </div>
      </div>
      <div style="text-align:center;padding:6px 12px;border-radius:8px;background:${fark!==null&&fark<=0?'var(--lgreen)':standart===0?'var(--lamber)':'var(--lred)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':standart===0?'#FFE082':'#FFCDD2'};">
        <span style="font-size:11px;font-weight:700;color:${barRenk};">${farkIkon}</span>
      </div>
    </div>`;
  }).join('');

  // Sayfalama butonları
  const pageBtns = (() => {
    let html = '';
    let pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages = [1];
      if (_klAnalizPage > 3) pages.push('...');
      for (let i = Math.max(2, _klAnalizPage - 1); i <= Math.min(totalPages - 1, _klAnalizPage + 1); i++) pages.push(i);
      if (_klAnalizPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    pages.forEach(p => {
      if (p === '...') {
        html += `<span style="padding:0 4px;color:var(--muted);line-height:32px;">…</span>`;
      } else {
        const active = p === _klAnalizPage;
        html += `<button onclick="_klAnalizGoTo(${p})"
          style="min-width:32px;height:32px;border-radius:7px;border:1px solid ${active?'var(--blue2)':'var(--border)'};
          background:${active?'var(--blue2)':'var(--white)'};color:${active?'#fff':'var(--navy)'};
          cursor:pointer;font-size:12px;font-weight:${active?'700':'500'};padding:0 8px;
          font-family:'DM Sans',sans-serif;transition:all .12s;">${p}</button>`;
      }
    });
    return html;
  })();

  const mevcut_filtre  = document.getElementById('kla-durum-filtre')?.value || '';
  const mevcut_siralama = _klAnalizSiralama;

  el.innerHTML = `
    <!-- ÖZET BAŞLIK -->
    <div style="background:linear-gradient(135deg,var(--navy) 0%,var(--blue) 100%);border-radius:12px;padding:16px 22px;margin-bottom:16px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      <div style="font-size:28px;">🎯</div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:700;color:#fff;">${(translations[currentLang]||translations.tr).klasman_actual_analysis}</div>
        <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:3px;">${orijinal.length} ${(translations[currentLang]||translations.tr).klasman_word} · ${orijinal.reduce((s,k)=>s+k.toplamAdet,0).toLocaleString('tr-TR')} ${(translations[currentLang]||translations.tr).total_units_summary}</div>
      </div>
      ${[
        ['✅',(translations[currentLang]||translations.tr).on_target,'hedefte',hedefte,'#4CAF50'],
        ['⚠️',(translations[currentLang]||translations.tr).near_target,'yakin',yakin,'#FFB74D'],
        ['🔴',(translations[currentLang]||translations.tr).high_label,'yuksek',yuksek,'#EF9A9A'],
        ['➖',(translations[currentLang]||translations.tr).no_std,'stdyok',stdYok,'rgba(255,255,255,.5)']
      ].map(([ic,lb,val,cnt,col])=>`
        <div onclick="document.getElementById('kla-durum-filtre').value='${val}';_klAnalizUygula()"
          style="text-align:center;background:rgba(255,255,255,.1);border-radius:10px;padding:10px 16px;min-width:80px;cursor:pointer;transition:background .15s;"
          onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.1)'">
          <div style="font-size:16px;">${ic}</div>
          <div style="font-size:20px;font-weight:800;color:${col};font-family:'DM Mono',monospace;line-height:1.2;">${cnt}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.5px;">${lb}</div>
        </div>`).join('')}
    </div>

    <!-- FİLTRE & ARAMA ÇUBUĞU -->
    <div style="background:var(--white);border:1px solid var(--border2);border-radius:10px;padding:14px 18px;margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;box-shadow:var(--shadow);">
      <div style="position:relative;flex:1;min-width:180px;">
        <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:13px;color:var(--muted2);">🔍</span>
        <input type="text" id="kla-arama" placeholder="${(translations[currentLang]||translations.tr).select_klasman}…" value="${_klAnalizFiltre}"
          oninput="_klAnalizFiltre=this.value;_klAnalizUygula()"
          style="width:100%;padding:8px 12px 8px 32px;border:1px solid var(--border);border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;">
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:11px;color:var(--muted);white-space:nowrap;margin:0;">${(translations[currentLang]||translations.tr).filter_perf.replace(':','')}: </label>
        <select id="kla-durum-filtre" onchange="_klAnalizUygula()"
          style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;font-family:'DM Sans',sans-serif;background:var(--white);color:var(--navy);">
          <option value="" ${mevcut_filtre===''?'selected':''}>${(translations[currentLang]||translations.tr).filter_all}</option>
          <option value="hedefte" ${mevcut_filtre==='hedefte'?'selected':''}>✅ ${(translations[currentLang]||translations.tr).on_target}</option>
          <option value="yakin" ${mevcut_filtre==='yakin'?'selected':''}>${(translations[currentLang]||translations.tr).status_near}</option>
          <option value="yuksek" ${mevcut_filtre==='yuksek'?'selected':''}>${(translations[currentLang]||translations.tr).status_high}</option>
          <option value="stdyok" ${mevcut_filtre==='stdyok'?'selected':''}>➖ ${(translations[currentLang]||translations.tr).no_std}</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <label style="font-size:11px;color:var(--muted);white-space:nowrap;margin:0;">${(translations[currentLang]||translations.tr).sort_label}</label>
        <select onchange="_klAnalizSiralama=this.value;_klAnalizUygula()"
          style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;font-size:12px;font-family:'DM Sans',sans-serif;background:var(--white);color:var(--navy);">
          <option value="adet-desc" ${mevcut_siralama==='adet-desc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_qty_desc}</option>
          <option value="adet-asc"  ${mevcut_siralama==='adet-asc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_qty_asc}</option>
          <option value="ad-asc"    ${mevcut_siralama==='ad-asc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_name_asc}</option>
          <option value="ad-desc"   ${mevcut_siralama==='ad-desc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_name_desc}</option>
          <option value="fark-desc" ${mevcut_siralama==='fark-desc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_diff_worst}</option>
          <option value="fark-asc"  ${mevcut_siralama==='fark-asc'?'selected':''}>${(translations[currentLang]||translations.tr).sort_diff_best}</option>
        </select>
      </div>
      <button onclick="_klAnalizFiltre='';_klAnalizSiralama='adet-desc';document.getElementById('kla-durum-filtre').value='';_klAnalizUygula()"
        style="padding:7px 14px;border:1px solid var(--border);border-radius:8px;font-size:12px;background:var(--white);cursor:pointer;color:var(--muted);font-family:'DM Sans',sans-serif;transition:all .15s;"
        onmouseover="this.style.background='var(--lblue3)'" onmouseout="this.style.background='var(--white)'">${(translations[currentLang]||translations.tr).reset}</button>
      <span style="font-size:11px;color:var(--muted);font-family:'DM Mono',monospace;margin-left:auto;">
        ${tumListe.length} / ${orijinal.length} klasman · Sayfa ${_klAnalizPage}/${totalPages}
      </span>
    </div>

    <!-- KARTLAR -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-bottom:20px;">
      ${kartlar || '<div style="grid-column:1/-1;padding:48px;text-align:center;color:var(--muted2);"><div style="font-size:32px;margin-bottom:12px;">🔍</div><h3 style="font-weight:500;color:var(--muted);" data-i18n="klasman_filter_empty">No classification found matching the filter</h3></div>'}
    </div>

    <!-- SAYFALAMA -->
    ${totalPages > 1 ? `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-top:1px solid var(--border2);margin-top:4px;">
      <button onclick="_klAnalizGoTo(${_klAnalizPage - 1})" ${_klAnalizPage<=1?'disabled':''}
        style="padding:8px 16px;border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer;
        background:var(--white);color:var(--navy);font-family:'DM Sans',sans-serif;font-weight:500;
        opacity:${_klAnalizPage<=1?'.4':'1'};transition:all .15s;">‹ Önceki</button>
      <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;justify-content:center;">
        ${pageBtns}
      </div>
      <button onclick="_klAnalizGoTo(${_klAnalizPage + 1})" ${_klAnalizPage>=totalPages?'disabled':''}
        style="padding:8px 16px;border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer;
        background:var(--white);color:var(--navy);font-family:'DM Sans',sans-serif;font-weight:500;
        opacity:${_klAnalizPage>=totalPages?'.4':'1'};transition:all .15s;">Sonraki ›</button>
    </div>` : ''}
  `;
}

async function pullFromSheets() {
  const url = appConfig.sheetsWebAppUrl;
  if (!url) {
    alert('⚠️ Önce Google Apps Script Web App URL\'ini girin!');
    return;
  }
  const token = appConfig.sheetsApiToken;
  if (!token) {
    alert('⚠️ API Token girilmemiş!\n\nBağlantı Ayarları → API Token alanını doldurun.');
    return;
  }
  const btn = event?.target;
  const origText = btn?.textContent || '';
  if (btn) { btn.textContent = (translations[currentLang]||translations.tr).pulling; btn.disabled = true; }

  // iframe/postMessage ile veri çek (v5.1 - GitHub Pages CORS çözümü)
  async function gsFetch(action, extraParams) {
    const params = { action, token, ...(extraParams || {}) };
    const data = await jsonpFetch(url, params);
    return data;
  }

  try {
    const data = await gsFetch('getKlasmanlar');

    if (data.status === 'error') {
      throw new Error(data.message || 'Sunucu hata döndürdü');
    }

    if (data && data.klasmanlar && Array.isArray(data.klasmanlar)) {
      const count = data.klasmanlar.length;
      const savedAt = data.savedAt ? new Date(data.savedAt).toLocaleString('tr-TR') : '—';
      if (!confirm(`📥 ${count} klasman bulundu.\nSon kayıt: ${savedAt}\n\nMevcut verilerin üzerine yazılsın mı?`)) return;
      klasmanlar = data.klasmanlar;
      nextId = Math.max(1, ...klasmanlar.map(k => k.id || 0)) + 1;
      secilenId = null;
      sayfa = 1;
      saveData();
      renderListe();
      renderEditor();
      updateSidebar();
      updateKlasmanFilter();   // dashboard klasman filtresi dropdown'ı güncelle

      // Performans verisini de Sheets'ten çek
      try {
        const perfData = await gsFetch('getPerformansRaw');
        if (perfData.status === 'ok' && Array.isArray(perfData.performansData) && perfData.performansData.length > 0) {
          performansData = fixVerimlilikPerf(restorePerformansDateObjects(perfData.performansData));
          saveData();
          console.log('✅ Performans verisi Sheets\'ten çekildi:', performansData.length, 'inspector');
        }
      } catch(perfErr) {
        console.warn('Performans çekme hatası (önemsiz):', perfErr.message);
      }

      renderDashboard();       // inspector kartlarını performans verisiyle yeniden çiz
      showSuccessMessage(`✅ ${count} ` + (translations[currentLang]||translations.tr).sheets_updated_count);
    } else {
      alert('❌ Geçersiz veri formatı döndü.\nApps Script doğru yapılandırıldı mı?');
    }
  } catch(err) {
    alert('❌ Veri çekilemedi: ' + err.message + '\n\n🔧 Kontrol listesi:\n• Web App URL doğru mu?\n• API Token eşleşiyor mu?\n• "Erişimi olan: Herkes" seçili mi?\n• En son dağıtım versiyonu mu kullanılıyor?');
  } finally {
    if (btn) { btn.textContent = origText; btn.disabled = false; }
  }
}

// ─────────────────────────────────────────────
// PERFORMANS VERİSİNİ SHEETS'E GÖNDER
// Excel yüklendiğinde otomatik çağrılır
// ─────────────────────────────────────────────
async function pushPerformansToSheets(liste) {
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return; // Bağlantı ayarı yapılmamışsa sessizce çık

  try {
    // performansData'yı düz tablo formatına çevir (Sheets için okunabilir)
    const rows = liste.map(row => ({
      ins: row.ins,
      adet: row.adet,
      kayit: row.kayit,
      gunSayisi: row.gunSayisi || 0,
      standartSureDk: row.standartSure ? Math.round(row.standartSure / 60) : 0,
      mesaiSureDk: row.mesaiSure ? Math.round(row.mesaiSure / 60) : 0,
      genelHizPerf: row.genelHizPerf,
      verimlilikPerf: row.verimlilikPerf,
      klasmanOzet: Object.entries(row.klasmanlar || {})
        .map(([k,v]) => `${k}:${v.adet}adet(${v.hizPerf}%)`)
        .join(' | ')
    }));

    const payload = {
      action: 'setPerformans',
      token: token,
      performans: rows,
      savedAt: new Date().toISOString()
    };

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    });

    console.log('✅ Performans verisi Sheets\'e gönderildi:', rows.length, 'inspector');
  } catch(err) {
    console.warn('Performans Sheets gönderme hatası:', err.message);
  }
}

// ─────────────────────────────────────────────
// PERFORMANS HAM VERİSİNİ SHEETS'E GÖNDER
// Tam JSON — farklı bilgisayarlardan çekilebilir
// ─────────────────────────────────────────────
async function pushPerformansRawToSheets(liste) {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;
  try {
    // kayitlar dizisi olmadan gönder — boyut sınırını aşmamak için
    // (kayitlar ayrıca setInspectorKayitlar ile gönderilir)
    // YENİ
const _pushHedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
const _pushOrneklemeMod = document.querySelector('input[name="ornekleme-mod"]:checked')?.value || 'kapali';
const _pushOrneklemeTarihliAktif = document.getElementById('ornekleme-tarihli-aktif')?.checked || false;
const listeTemiz = liste.map(inspector => {
  const klasmanlarTemiz = {};
  Object.entries(inspector.klasmanlar || {}).forEach(([k, v]) => {
    klasmanlarTemiz[k] = {
      adet: v.adet, standartSure: v.standartSure,
      kayitFiiliSure: v.kayitFiiliSure, hizPerf: v.hizPerf, hacimPerf: v.hacimPerf
    };
  });
  return {
    ...inspector,
    klasmanlar: klasmanlarTemiz,
    toplamMesaistiSaniye: inspector.toplamMesaistiSaniye || 0,
    gunlukOvertimeDetay: inspector.gunlukOvertimeDetay || {},
    hedefVerimlilik: _pushHedef,
    verimlilikPerf: inspector.genelHizPerf != null ? Math.round(inspector.genelHizPerf * (100 / _pushHedef)) : inspector.verimlilikPerf,
    orneklemeMod: _pushOrneklemeMod,
    orneklemeTarihliAktif: _pushOrneklemeTarihliAktif,
    orneklemeDonemleri: _pushOrneklemeTarihliAktif ? orneklemeDonemleri : []
  };
});

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        action: 'setPerformansRaw',
        token: token,
        performansData: listeTemiz,
        savedAt: new Date().toISOString()
      }),
      mode: 'no-cors'
    });
    console.log('✅ Ham performans verisi Sheets\'e gönderildi:', liste.length, 'inspector');

    // Her inspector'ın kayitlar verisini ayrı sekmeye gönder
    await pushInspectorKayitlarToSheets(liste, url, token);

  } catch(err) {
    console.warn('Ham performans push hatası:', err.message);
  }
}

// ─────────────────────────────────────────────
// HER INSPECTOR'IN KAYITLARINI AYRI SEKMEYE GÖNDER
// Google Sheets > InspectorKayitlar sekmesi (v5.3)
// ─────────────────────────────────────────────
async function pushInspectorKayitlarToSheets(liste, url, token) {
  if (!url || !token || !liste || !liste.length) return;
  let gonderilen = 0;
  for (const inspector of liste) {
    // Temizle butonuna basıldıysa yüklemeyi tamamen durdur
    if (window._uploadAborted) {
      console.warn('⛔ Yükleme Temizle ile durduruldu:', gonderilen, '/', liste.length, 'inspector gönderildi');
      break;
    }
    try {
      const kayitlar = {};
      Object.entries(inspector.klasmanlar || {}).forEach(([k, v]) => {
        if (Array.isArray(v.kayitlar) && v.kayitlar.length > 0) {
          kayitlar[k] = v.kayitlar.map(r => ({
            adet: r.adet,
            talepNo: r.talepNo || '',
            kontrolAdetSuresi: r.kontrolAdetSuresi,
            istasyonSuresi: r.istasyonSuresi,
            standartSure: r.standartSure,
            kayitFiiliSure: r.kayitFiiliSure,
            baslangic: r.baslangic ? (r.baslangic instanceof Date ? r.baslangic.toISOString() : r.baslangic) : null,
            bitis: r.bitis ? (r.bitis instanceof Date ? r.bitis.toISOString() : r.bitis) : null,
            tarihGecerli: r.tarihGecerli || false
          }));
        }
      });

      // Kayıt yoksa bu inspector'ı atla — gereksiz istek gönderme
      if (Object.keys(kayitlar).length === 0) continue;

      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          action: 'setInspectorKayitlar',
          token: token,
          inspectorAdi: inspector.ins,
          kayitlar: kayitlar
        }),
        mode: 'no-cors'
      });

      gonderilen++;

      // Google Apps Script rate limit aşımını önlemek için 300ms bekle
      await new Promise(r => setTimeout(r, 300));

    } catch(err) {
      console.warn('Inspector kayıt push hatası (' + inspector.ins + '):', err.message);
    }
  }
  console.log('✅ Inspector kayıtları Sheets\'e gönderildi:', gonderilen, '/', liste.length, 'inspector');
}
// ─────────────────────────────────────────────
// PERFORMANS VERİSİNİ SHEETS'TEN ÇEK
// Dashboard "📥 Sheets'ten Çek" butonu + otomatik açılış
// ─────────────────────────────────────────────
async function pullPerformansFromSheets(silent = false) {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) {
    if (!silent) alert('⚠️ Sheets bağlantısı yapılandırılmamış.');
    return false;
  }

  const btn = document.getElementById('dash-pull-btn');
  const origText = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = (translations[currentLang]||translations.tr).pulling; btn.disabled = true; }

  try {
    const data = await jsonpFetch(url, { action: 'getPerformansRaw', token });
    console.log('📥 getPerformansRaw yanıtı:', JSON.stringify(data).substring(0, 300));
    if (data.status === 'ok' && Array.isArray(data.performansData) && data.performansData.length > 0) {
      performansData = fixVerimlilikPerf(restorePerformansDateObjects(data.performansData));
      // verimlilikPerf hedefVerimlilik'e göre yeniden hesaplandı
      saveData();
      renderDashboard();
      updateSidebar();
      renderTopInspectors();
      if (!silent) showSuccessMessage(`✅ ${performansData.length} ` + (translations[currentLang]||translations.tr).sheets_loaded_perf);
      else showStartupBanner(`✅ ${performansData.length} inspector verisi güncellendi`, 'success');
      console.log('✅ Performans verisi Sheets\u2019ten çekildi:', performansData.length, 'inspector');
      return true;
    } else {
      const _detay = data.status !== 'ok'
        ? ' (status: ' + (data.status || 'bilinmiyor') + ')'
        : (Array.isArray(data.performansData) ? ' (kayıt: ' + data.performansData.length + ')' : ' (performansData alanı yok)');
      if (!silent) showSuccessMessage((translations[currentLang]||translations.tr).sheets_no_perf + _detay);
      console.warn('\u26a0\ufe0f getPerformansRaw boş/hatalı yanıt:', JSON.stringify(data).substring(0, 200));
      return false;
    }
  } catch(err) {
    if (!silent) alert('❌ Performans verisi çekilemedi: ' + err.message);
    else console.warn('Performans otomatik çekme hatası:', err.message);
    return false;
  } finally {
    if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  }
}

function showSheetsHelp() {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(11,31,58,.7);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:28px 32px;width:min(90vw,680px);max-height:85vh;overflow-y:auto;box-shadow:0 24px 60px rgba(11,31,58,.35);border:1px solid var(--border2)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">
        <div>
          <h2 style="font-size:18px;font-weight:700;color:var(--navy);margin-bottom:4px">📋 Google Apps Script Kurulum Rehberi</h2>
          <p style="font-size:12px;color:var(--muted)" data-i18n="sheets_help_intro">To sync classification data with Google Sheets</p>
        </div>
        <button onclick="this.closest('[style*=fixed]').remove()" style="width:32px;height:32px;border:1px solid var(--border);background:var(--offwhite);border-radius:8px;cursor:pointer;font-size:16px">✕</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px">

        <div style="background:var(--lblue3);border:1px solid var(--lblue);border-radius:10px;padding:14px 16px">
          <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:8px">📥 Adım 1 — Apps Script Dosyasını İndirin</div>
          <p style="font-size:11px;color:var(--muted);margin-bottom:10px">Panelle birlikte gelen <strong>LCW_Klasman_Script.gs</strong> dosyasını indirin ve içeriğini kullanın.</p>
          <div style="background:var(--navy);color:#adf;font-family:'DM Mono',monospace;font-size:10px;padding:10px 12px;border-radius:6px;white-space:pre-wrap">API_TOKEN = 'lcw-secret-2024'  ← Bunu değiştirin ve panele de girin
SHEET_NAME = 'Klasmanlar'      ← Sekme adı (değiştirmeye gerek yok)</div>
        </div>

        <div style="background:var(--lgreen);border:1px solid #B2DFDB;border-radius:10px;padding:14px 16px">
          <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:8px">⚙️ Adım 2 — Apps Script'e Yapıştırın</div>
          <ol style="font-size:11px;color:var(--muted);line-height:2;padding-left:18px">
            <li>Google Sheets dosyanızı açın (yoksa yeni oluşturun)</li>
            <li>Üst menü: <strong>Uzantılar → Apps Script</strong></li>
            <li>Açılan editörde mevcut kodu <strong>tamamen silin</strong></li>
            <li><strong>LCW_Klasman_Script.gs</strong> içeriğini yapıştırın</li>
            <li><strong>API_TOKEN</strong> değerini istediğiniz şifreyle değiştirin</li>
            <li>Kaydet (Ctrl+S)</li>
          </ol>
        </div>

        <div style="background:var(--lamber);border:1px solid #FFE082;border-radius:10px;padding:14px 16px">
          <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:8px">🚀 Adım 3 — Web App Olarak Yayınlayın</div>
          <ol style="font-size:11px;color:var(--muted);line-height:2;padding-left:18px">
            <li>Apps Script editöründe: <strong>Dağıt → Yeni Dağıtım</strong></li>
            <li>Tür: <strong>Web uygulaması</strong></li>
            <li>Açıklama: <em>Ürün Klasman Sync v1</em></li>
            <li>Farklı çalıştır: <strong>Ben (hesabınız)</strong></li>
            <li>Erişimi olan: <strong>Herkes</strong></li>
            <li><strong>Dağıt</strong>'a tıklayın → Google hesabı izni isteyecek, onaylayın</li>
            <li>Oluşan <strong>Web uygulaması URL'ini kopyalayın</strong></li>
          </ol>
        </div>

        <div style="background:#f3e5f5;border:1px solid #ce93d8;border-radius:10px;padding:14px 16px">
          <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:8px">🔗 Adım 4 — Panele Bağlayın</div>
          <ol style="font-size:11px;color:var(--muted);line-height:2;padding-left:18px">
            <li>Kopyaladığınız URL'i <strong>Web App URL</strong> alanına yapıştırın</li>
            <li>Apps Script'teki <strong>API_TOKEN</strong> değerini <strong>API Token</strong> alanına girin</li>
            <li>Google Sheets dosyasının linkini <strong>Tablo Linki</strong> alanına yapıştırın</li>
            <li><strong>📤 Sheets'e Gönder</strong> ile test edin</li>
          </ol>
        </div>

        <div style="background:var(--lred);border:1px solid #FFCDD2;border-radius:10px;padding:12px 14px">
          <div style="font-size:11px;font-weight:600;color:var(--red);margin-bottom:4px">⚠️ Önemli Notlar</div>
          <ul style="font-size:11px;color:var(--muted);line-height:1.8;padding-left:16px">
            <li>Gönderme (📤) işlemi <em>no-cors</em> modunda çalışır — yanıt göremezsiniz ama veri gider</li>
            <li>Çekme (📥) işlemi CORS gerektirir — Apps Script "Herkes" erişimine açık olmalı</li>
            <li>Script kodu değiştirilirse <strong>yeni bir dağıtım</strong> oluşturulmalı (eski URL değişmez)</li>
            <li>Farklı bilgisayarlarda aynı URL ve Token kullanılmalı</li>
          </ul>
        </div>

      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target === modal) modal.remove(); });
}

// ────────────────────────────────────────────────────────────────────────────
// PERFORMANS ANALİZİ — MANİFEST GÖNDER (manuel buton)
// ────────────────────────────────────────────────────────────────────────────
async function pushPerformansManual(ev) {
  window._uploadAborted = false;
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;

  if (!url || !token) {
    alert('⚠️ Google Sheets bağlantısı yapılandırılmamış!\n\nKlasman Yönetimi → Bağlantı Ayarları bölümünden\nWeb App URL ve API Token girin.');
    return;
  }

  if (!performansData || performansData.length === 0) {
    alert('⚠️ Gönderilecek performans verisi yok.\nÖnce Excel dosyası yükleyin ve analizi tamamlayın.');
    return;
  }

  const btn = document.getElementById('perf-push-btn');
  const orig = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = (translations[currentLang]||translations.tr).sending; btn.disabled = true; }

  try {
    const _rowsHedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
    // 1) Okunabilir tablo satırlarını gönder (Sheets'te Performans sekmesi)
    const rows = performansData.map(row => ({
      ins: row.ins,
      adet: row.adet,
      kayit: row.kayit,
      gunSayisi: row.gunSayisi || 0,
      standartSureDk: row.standartSure ? Math.round(row.standartSure / 60) : 0,
      mesaiSureDk:    row.mesaiSure    ? Math.round(row.mesaiSure / 60)    : 0,
      genelHizPerf:   row.genelHizPerf,
      verimlilikPerf: row.genelHizPerf != null ? Math.round(row.genelHizPerf * (100 / _rowsHedef)) : row.verimlilikPerf,
      hedefVerimlilik: _rowsHedef,
      klasmanOzet: Object.entries(row.klasmanlar || {})
        .map(([k,v]) => `${k}:${v.adet || 0}adet(${Math.round(v.hizPerf) || 0}%)`)
        .join(' | ')
    }));

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setPerformans', token, performans: rows, savedAt: new Date().toISOString() }),
      mode: 'no-cors'
    });

    // 2) Ham JSON'u gönder — kayitlar olmadan (boyut sınırı aşılmasın)
    // Not: kayitlar ayrıca pushInspectorKayitlarToSheets ile gönderilecek
    const _manualHedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
    const _manualOrneklemeMod = document.querySelector('input[name="ornekleme-mod"]:checked')?.value || 'kapali';
    const _manualOrneklemeTarihliAktif = document.getElementById('ornekleme-tarihli-aktif')?.checked || false;
    const performansDataTemiz = performansData.map(inspector => {
  const klasmanlarTemiz = {};
  Object.entries(inspector.klasmanlar || {}).forEach(([k, v]) => {
    klasmanlarTemiz[k] = {
      adet: v.adet, standartSure: v.standartSure,
      kayitFiiliSure: v.kayitFiiliSure, hizPerf: v.hizPerf, hacimPerf: v.hacimPerf
    };
  });
  return {
    ...inspector,
    klasmanlar: klasmanlarTemiz,
    toplamMesaistiSaniye: inspector.toplamMesaistiSaniye || 0,
    gunlukOvertimeDetay: inspector.gunlukOvertimeDetay || {},
    hedefVerimlilik: _manualHedef,
    verimlilikPerf: inspector.genelHizPerf != null ? Math.round(inspector.genelHizPerf * (100 / _manualHedef)) : inspector.verimlilikPerf,
    orneklemeMod: _manualOrneklemeMod,
    orneklemeTarihliAktif: _manualOrneklemeTarihliAktif,
    orneklemeDonemleri: _manualOrneklemeTarihliAktif ? orneklemeDonemleri : []
  };
});
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setPerformansRaw', token, performansData: performansDataTemiz, savedAt: new Date().toISOString() }),
      mode: 'no-cors'
    });

    // 3) Her inspector'ın ham kayıtlarını ayrı sekmeye gönder
    await pushInspectorKayitlarToSheets(performansData, url, token);

    showSuccessMessage(`✅ ${performansData.length} ` + (translations[currentLang]||translations.tr).sheets_sent_perf);
  } catch(err) {
    alert('❌ Gönderme hatası: ' + err.message);
  } finally {
    if (btn) { btn.innerHTML = orig; btn.disabled = false; }
  }
}

// ────────────────────────────────────────────────────────────────────────────
// PERFORMANS ANALİZİ — SHEETS'TEN ÇEK (manuel buton)
// ────────────────────────────────────────────────────────────────────────────
async function pullPerformansFromSheetsManual(ev) {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;

  if (!url || !token) {
    alert('⚠️ Google Sheets bağlantısı yapılandırılmamış!\n\nKlasman Yönetimi → Bağlantı Ayarları bölümünden\nWeb App URL ve API Token girin.');
    return;
  }

  const btn = document.getElementById('perf-pull-btn');
  const orig = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = (translations[currentLang]||translations.tr).pulling; btn.disabled = true; }

  try {
    const data = await jsonpFetch(url, { action: 'getPerformansRaw', token });

    if (data.status === 'ok' && Array.isArray(data.performansData) && data.performansData.length > 0) {
      const count    = data.performansData.length;
      const savedAt  = data.savedAt ? new Date(data.savedAt).toLocaleString('tr-TR') : '—';

      if (!confirm(`📥 Sheets'te ${count} inspector verisi bulundu.\nSon kayıt: ${savedAt}\n\nMevcut analiz verilerinin üzerine yazılsın mı?`)) {
        if (btn) { btn.innerHTML = orig; btn.disabled = false; }
        return;
      }

      performansData = fixVerimlilikPerf(restorePerformansDateObjects(data.performansData));
      saveData();
      renderDashboard();
      updateSidebar();
      renderTopInspectors();
      // Analiz tablosunu yeniden çiz
      if (typeof renderPerformansTable === 'function') renderPerformansTable();
      showSuccessMessage(`✅ ${count} ` + (translations[currentLang]||translations.tr).sheets_loaded_to_perf);
    } else {
      const detay = data.status !== 'ok'
        ? ` (Durum: ${data.status || 'bilinmiyor'})`
        : (Array.isArray(data.performansData) ? ` (${data.performansData.length} kayıt)` : ' (veri alanı yok)');
      alert('ℹ️ Sheets\'te henüz performans verisi bulunamadı.' + detay + '\n\nÖnce bir bilgisayardan Excel yükleyip "📤 Sheets\'e Gönder" butonunu kullanın.');
    }
  } catch(err) {
    alert('❌ Veri çekilemedi: ' + err.message + '\n\n🔧 Kontrol listesi:\n• Web App URL doğru mu?\n• API Token eşleşiyor mu?\n• Apps Script "Erişimi olan: Herkes" seçili mi?');
  } finally {
    if (btn) { btn.innerHTML = orig; btn.disabled = false; }
  }
}

// ────────────────────────────────────────────────────────────────────────────
// PERFORMANS ANALİZİ — NASIL ÇALIŞIR MODALI
// ────────────────────────────────────────────────────────────────────────────
function showPerformansHowItWorks() {
  // Mevcut ortalama göster
  const toplamInsp = performansData.length;
  const ortPerf    = toplamInsp > 0
    ? Math.round(performansData.reduce((s, r) => s + (r.genelHizPerf || 0), 0) / toplamInsp)
    : null;

  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(11,31,58,.72);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:28px 32px;width:min(92vw,780px);max-height:88vh;overflow-y:auto;box-shadow:0 24px 60px rgba(11,31,58,.35);border:1px solid var(--border2)">

      <!-- Başlık -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:22px">
        <div>
          <h2 style="font-size:19px;font-weight:700;color:var(--navy);margin-bottom:4px" data-i18n="perf_how_title">📊 Performance Analysis — How Does It Work?</h2>
          <p style="font-size:12px;color:var(--muted)" data-i18n="perf_how_sub">Calculation logic, formulas, and Google Sheets integration</p>
        </div>
        <button onclick="this.closest('[style*=fixed]').remove()" style="width:34px;height:34px;border:1px solid var(--border);background:var(--offwhite);border-radius:8px;cursor:pointer;font-size:17px;flex-shrink:0">✕</button>
      </div>

      ${toplamInsp > 0 ? `
      <!-- Anlık Özet -->
      <div style="background:linear-gradient(135deg,var(--navy) 0%,var(--blue) 100%);border-radius:12px;padding:14px 18px;margin-bottom:18px;display:flex;align-items:center;gap:18px;color:#fff">
        <div style="font-size:32px">📈</div>
        <div style="flex:1">
          <div style="font-size:12px;color:rgba(255,255,255,.65);margin-bottom:2px">Şu anki analiz</div>
          <div style="font-size:15px;font-weight:700">${toplamInsp} inspector · Ort. Hız Performansı: <span style="color:#90CAF9;font-family:'DM Mono',monospace">${ortPerf}%</span></div>
        </div>
      </div>` : ''}

      <div style="display:flex;flex-direction:column;gap:14px">

        <!-- 1 - Veri akışı -->
        <div style="background:var(--lblue3);border:1px solid var(--lblue);border-radius:10px;padding:14px 16px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:8px">📂 1 — Veri Akışı</div>
          <ol style="font-size:12px;color:var(--muted);line-height:2.1;padding-left:18px;margin:0">
            <li>Excel dosyanızı <strong>Dosya Yükle</strong> alanına sürükleyin (.xlsx / .xls)</li>
            <li><strong>Sütun Eşleme</strong> panelinde doğru kolonları seçin (Klasman, Inspector, Adet, Tarihler)</li>
            <li>Tablo anında hesaplanır — her satır bir inspectörün bir klasmandaki kaydıdır</li>
            <li>İstersen <strong>📤 Sheets'e Gönder</strong> ile sonuçları buluta kaydet</li>
          </ol>
        </div>

        <!-- 2 - Temel hesaplamalar -->
        <div style="background:var(--lgreen);border:1px solid #B2DFDB;border-radius:10px;padding:14px 16px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:10px">⚙️ 2 — Temel Hesaplamalar</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">

            <div style="background:#fff;border:1px solid #B2DFDB;border-radius:8px;padding:11px 13px">
              <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px">🕐 Standart Süre (sn)</div>
              <code style="font-size:10px;background:var(--offwhite);padding:4px 7px;border-radius:4px;display:block;color:var(--navy);line-height:1.8">
                Klasman → istasyon süreleri toplamı<br>
                × BakilacakMiktar (adet)
              </code>
              <div style="font-size:10px;color:var(--muted);margin-top:6px">Bir inspektörün o miktarı <em>standart hızda</em> incelemesi için gereken teorik süre.</div>
            </div>

            <div style="background:#fff;border:1px solid #B2DFDB;border-radius:8px;padding:11px 13px">
              <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px">⏱ Fiili/Mesai Süresi (sn)</div>
              <code style="font-size:10px;background:var(--offwhite);padding:4px 7px;border-radius:4px;display:block;color:var(--navy);line-height:1.8">
                Mesai sütunu varsa → sütun değeri<br>
                Yoksa → Gün Sayısı × 7.5 saat
              </code>
              <div style="font-size:10px;color:var(--muted);margin-top:6px">İnspektörün fiilen harcadığı (veya harcaması gereken) çalışma süresi.</div>
            </div>

            <div style="background:#fff;border:1px solid #B2DFDB;border-radius:8px;padding:11px 13px">
              <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px">🏎 Hız Performansı (%)</div>
              <code style="font-size:10px;background:var(--offwhite);padding:4px 7px;border-radius:4px;display:block;color:var(--navy);line-height:1.8">
                (Standart Süre ÷ Mesai Süresi) × 100
              </code>
              <div style="font-size:10px;color:var(--muted);margin-top:6px">%100 = tam standart hızda çalıştı · %120 = standarttan %20 hızlı · %80 = %20 yavaş.</div>
            </div>

            <div style="background:#fff;border:1px solid #B2DFDB;border-radius:8px;padding:11px 13px">
              <div style="font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px">⚡ Verimlilik Performansı (%)</div>
              <code style="font-size:10px;background:var(--offwhite);padding:4px 7px;border-radius:4px;display:block;color:var(--navy);line-height:1.8">
                Hız Perf × (100 ÷ Hedef%)
              </code>
              <div style="font-size:10px;color:var(--muted);margin-top:6px">Hedef verimlilik %100'den farklıysa düzeltme katsayısı uygulanır.</div>
            </div>

          </div>
        </div>

        <!-- 3 - Gün sayısı -->
        <div style="background:var(--lamber);border:1px solid #FFE082;border-radius:10px;padding:14px 16px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:8px">📅 3 — Çalışma Gün Sayısı Nasıl Hesaplanır?</div>
          <div style="font-size:12px;color:var(--muted);line-height:1.9">
            <p style="margin-bottom:6px">Bir inspektörün <strong>birden fazla kaydı</strong> varsa her kayıttaki (Başlangıç–Bitiş) aralıklarına bakılır:</p>
            <ol style="padding-left:18px;margin:0;line-height:2.1">
              <li>Her kayıt için <em>Başlangıç Tarihi → Bitiş Tarihi</em> arasındaki fark hesaplanır</li>
              <li>Tüm tarih aralıkları birleştirilir, <strong>çakışan günler bir kez sayılır</strong></li>
              <li>Sonuç: inspektörün gerçek çalışma gün sayısı</li>
            </ol>
            <p style="margin-top:8px;font-size:11px;background:#fff8;padding:7px 10px;border-radius:6px;border-left:3px solid var(--amber)">
              ⚠️ Mesai sütunu seçilmezse gün sayısı × 7,5 saat baz alınır. Mesai sütunu seçilirse o değer doğrudan kullanılır.
            </p>
          </div>
        </div>

        <!-- 4 - Performans seviyeleri -->
        <div style="background:#f3e5f5;border:1px solid #ce93d8;border-radius:10px;padding:14px 16px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:10px">🏅 4 — Performans Seviyeleri</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
            <div style="text-align:center;padding:10px 8px;background:#E0F2F1;border-radius:8px;border:1px solid #B2DFDB">
              <div style="font-size:18px;margin-bottom:4px">⭐</div>
              <div style="font-size:13px;font-weight:700;color:#00695C">≥ 95%</div>
              <div style="font-size:10px;color:var(--muted);margin-top:2px">Mükemmel</div>
            </div>
            <div style="text-align:center;padding:10px 8px;background:var(--lblue2);border-radius:8px;border:1px solid var(--lblue)">
              <div style="font-size:18px;margin-bottom:4px">👍</div>
              <div style="font-size:13px;font-weight:700;color:var(--blue)">85–94%</div>
              <div style="font-size:10px;color:var(--muted);margin-top:2px">İyi</div>
            </div>
            <div style="text-align:center;padding:10px 8px;background:var(--lamber);border-radius:8px;border:1px solid #FFE082">
              <div style="font-size:18px;margin-bottom:4px">⚠️</div>
              <div style="font-size:13px;font-weight:700;color:var(--amber)">70–84%</div>
              <div style="font-size:10px;color:var(--muted);margin-top:2px">Orta</div>
            </div>
            <div style="text-align:center;padding:10px 8px;background:var(--lred);border-radius:8px;border:1px solid #FFCDD2">
              <div style="font-size:18px;margin-bottom:4px">🔴</div>
              <div style="font-size:13px;font-weight:700;color:var(--red)">< 70%</div>
              <div style="font-size:10px;color:var(--muted);margin-top:2px">Düşük</div>
            </div>
          </div>
        </div>

        <!-- 5 - Sheets entegrasyonu -->
        <div style="background:linear-gradient(135deg,#E8F5E9 0%,#fff 100%);border:1px solid #A5D6A7;border-radius:10px;padding:14px 16px">
          <div style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:10px">☁️ 5 — Google Sheets Entegrasyonu</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div style="background:#fff;border:1px solid #A5D6A7;border-radius:8px;padding:11px 13px">
              <div style="font-size:12px;font-weight:700;color:#2E7D32;margin-bottom:6px">📤 Sheets'e Gönder</div>
              <ul style="font-size:11px;color:var(--muted);line-height:1.9;padding-left:16px;margin:0">
                <li>Mevcut <strong>${toplamInsp} inspector</strong> verisini buluta yükler</li>
                <li>Hem okunabilir tablo hem ham JSON gönderilir</li>
                <li>Diğer bilgisayarlardan erişime açılır</li>
                <li>Otomatik tarih damgası ekler</li>
              </ul>
            </div>
            <div style="background:#fff;border:1px solid #A5D6A7;border-radius:8px;padding:11px 13px">
              <div style="font-size:12px;font-weight:700;color:#1565C0;margin-bottom:6px">📥 Sheets'ten Çek</div>
              <ul style="font-size:11px;color:var(--muted);line-height:1.9;padding-left:16px;margin:0">
                <li>Sheets'teki ham JSON verisi çekilir</li>
                <li>Onay sonrası mevcut verilerin üzerine yazar</li>
                <li>Dashboard ve Canlı Gösterim güncellenir</li>
                <li>Son kayıt tarihi gösterilir</li>
              </ul>
            </div>
          </div>
          <div style="margin-top:10px;font-size:11px;color:var(--muted);padding:8px 12px;background:rgba(255,255,255,.7);border-radius:6px;border-left:3px solid #4CAF50">
            💡 Bağlantı kurulmamışsa <strong>Klasman Yönetimi → Bağlantı Ayarları</strong> bölümünden Web App URL ve API Token girin.
          </div>
        </div>

      </div>

      <div style="display:flex;justify-content:flex-end;margin-top:18px;gap:10px">
        <button onclick="this.closest('[style*=fixed]').remove()" style="padding:8px 20px;background:var(--blue2);color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer">Tamam</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// VERI YÖNETİMİ (LOCALSTORAGE)
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

// Local Storage'dan veri yükle
function restorePerformansDateObjects(liste) {
  // JSON serialize/deserialize sonrası Date nesneleri string'e dönüşür.
  // Kayıt listesindeki baslangic/bitis alanlarını tekrar Date objesine çevir.
  if (!Array.isArray(liste)) return liste;
  liste.forEach(inspector => {
    if (!inspector.klasmanlar) return;
    Object.values(inspector.klasmanlar).forEach(kd => {
      if (!Array.isArray(kd.kayitlar)) return;
      kd.kayitlar.forEach(k => {
        if (k.baslangic && !(k.baslangic instanceof Date)) {
          const d = new Date(k.baslangic);
          k.baslangic = isNaN(d.getTime()) ? null : d;
        }
        if (k.bitis && !(k.bitis instanceof Date)) {
          const d = new Date(k.bitis);
          k.bitis = isNaN(d.getTime()) ? null : d;
        }
      });
    });
  });
  return liste;
}

// ─────────────────────────────────────────────
// PULL SONRASI verimlilikPerf DÜZELT
// Sheets'ten gelen hedefVerimlilik'i inp-verimlilik input'una yazar,
// verimlilikPerf'i de bu değere göre yeniden hesaplar.
// Böylece hangi bilgisayardan pull yapılırsa yapılsın doğru değer görünür.
// ─────────────────────────────────────────────
function fixVerimlilikPerf(liste) {
  if (!Array.isArray(liste) || liste.length === 0) return liste;

  // 1) Sheets'ten gelen hedefVerimlilik değerini bul (ilk geçerli kayıttan al)
  let sheetsHedef = null;
  for (const inspector of liste) {
    if (inspector.hedefVerimlilik && inspector.hedefVerimlilik !== 100) {
      sheetsHedef = inspector.hedefVerimlilik;
      break;
    }
  }
  // Tümü 100 ise de al (en azından tutarlı olsun)
  if (!sheetsHedef) sheetsHedef = liste[0]?.hedefVerimlilik || 100;

  // 2) inp-verimlilik input'unu ve ornekleme-mod radio'sunu güncelle
  const inputEl = document.getElementById('inp-verimlilik');
  if (inputEl) {
    inputEl.value = sheetsHedef;
    const vAciklama = document.getElementById('verimlilik-aciklama');
    if (vAciklama) {
      if (sheetsHedef === 100) vAciklama.textContent = '';
      else if (sheetsHedef < 100) vAciklama.textContent = `(%${sheetsHedef} (translations[currentLang]||translations.tr).target_below_100 ${(100/sheetsHedef).toFixed(2)}x) `;
      else vAciklama.textContent = `(%${sheetsHedef} (translations[currentLang]||translations.tr).target_above_100 ${(100/sheetsHedef).toFixed(2)}x) `;
    }
  }
  // orneklemeMod radio'sunu Sheets'ten gelen değere göre set et
  const sheetsOrneklemeMod = liste[0]?.orneklemeMod || 'kapali';
  const radioEl = document.getElementById('ornekleme-' + sheetsOrneklemeMod);
  if (radioEl) radioEl.checked = true;

  // Tarihe göre farklı seviyeler (dönemler) — Sheets'ten gelen değere göre geri yükle
  const sheetsTarihliAktif = !!liste[0]?.orneklemeTarihliAktif;
  const sheetsDonemler = Array.isArray(liste[0]?.orneklemeDonemleri) ? liste[0].orneklemeDonemleri : [];
  const tarihliCb = document.getElementById('ornekleme-tarihli-aktif');
  if (tarihliCb) tarihliCb.checked = sheetsTarihliAktif;
  orneklemeDonemleri = sheetsTarihliAktif
    ? sheetsDonemler.map(p => ({ start: p.start || '', end: p.end || '', mode: p.mode || 'kapali' }))
    : [];
  const tarihliWrap = document.getElementById('ornekleme-donemler-wrap');
  if (tarihliWrap) tarihliWrap.style.display = sheetsTarihliAktif ? 'flex' : 'none';
  const tarihliTag = document.getElementById('ornekleme-default-tag');
  if (tarihliTag) tarihliTag.style.display = sheetsTarihliAktif ? 'inline-block' : 'none';
  renderOrneklemeDonemleri();

  // 3) Her inspector'ın verimlilikPerf ve hedefVerimlilik'ini güncelle
  liste.forEach(inspector => {
    inspector.hedefVerimlilik = sheetsHedef;
    if (inspector.genelHizPerf !== null && inspector.genelHizPerf !== undefined) {
      inspector.verimlilikPerf = Math.round(inspector.genelHizPerf * (100 / sheetsHedef));
    }
  });
  return liste;
}

function loadData() {
  try {
    const saved = localStorage.getItem('lc_inspection_data');
    if (saved) {
      const data = JSON.parse(saved);
      klasmanlar = data.klasmanlar || [];
      nextId = data.nextId || 1;
      // Verimlilik hedefini ÖNCE geri yükle — fixVerimlilikPerf bu değeri referans alacak
      if (data.verimlilikHedef && document.getElementById('inp-verimlilik')) {
        document.getElementById('inp-verimlilik').value = data.verimlilikHedef;
      }
      // performansData'yı yükle ve verimlilikPerf'i güncelle
      // (fixVerimlilikPerf inp-verimlilik'e yazılmış olan localStorage hedefini kullanır)
      const rawListe = restorePerformansDateObjects(data.performansData || []);
      // localStorage'dan yüklerken Sheets'ten gelen hedef varsa kullan, yoksa localStorage hedefi
      const lsHedef = data.verimlilikHedef || 100;
      rawListe.forEach(inspector => {
        if (!inspector.hedefVerimlilik || inspector.hedefVerimlilik === 100) {
          inspector.hedefVerimlilik = lsHedef;
        }
        if (inspector.genelHizPerf !== null && inspector.genelHizPerf !== undefined) {
          inspector.verimlilikPerf = Math.round(inspector.genelHizPerf * (100 / inspector.hedefVerimlilik));
        }
      });
      performansData = rawListe;
      console.log('✅ localStorage\'dan yüklendi:', klasmanlar.length, 'klasman,', performansData.length, 'inspector');
    } else {
      // İlk kurulum - örnek veriler
      klasmanlar = [
        { id: 1, ad: 'Pantolon', urunKontrolSuresi: 90, olcuSuresi: 0, urunKabulSuresi: 0, istasyonlar: [
          {id: 1, ad: 'Ölçü Kontrol', sure: 120},
          {id: 2, ad: 'Dikiş Kalitesi', sure: 180},
          {id: 3, ad: 'Son Kontrol', sure: 90}
        ]},
        { id: 2, ad: 'Ceket', urunKontrolSuresi: 150, olcuSuresi: 0, urunKabulSuresi: 0, istasyonlar: [
          {id: 1, ad: 'Yaka Kontrolü', sure: 240},
          {id: 2, ad: 'Düğme Test', sure: 120},
          {id: 3, ad: 'Astar Kontrolü', sure: 180}
        ]},
        { id: 3, ad: 'Mont', urunKontrolSuresi: 120, olcuSuresi: 0, urunKabulSuresi: 0, istasyonlar: [
          {id: 1, ad: 'Ölçü Alma', sure: 180},
          {id: 2, ad: 'Fit Denemesi', sure: 360},
          {id: 3, ad: 'Pull Test', sure: 300}
        ]}
      ];
      nextId = 4;
    }
  } catch (err) {
    console.error('❌ localStorage okuma hatası:', err);
    klasmanlar = [];
    nextId = 1;
  }
}

// Local Storage'a veri kaydet
function saveData() {
  try {
    // kayitlar dizisi localStorage'a kaydedilmez - buyuk veri oldugu icin
    // 5MB kotasini asiyor. Kayitlar Sheets InspectorKayitlar sekmesinden cekilir.
    const performansDataTemiz = (performansData || []).map(inspector => {
      const klasmanlarTemiz = {};
      Object.entries(inspector.klasmanlar || {}).forEach(([k, v]) => {
        klasmanlarTemiz[k] = {
          adet: v.adet,
          standartSure: v.standartSure,
          kayitFiiliSure: v.kayitFiiliSure,
          hizPerf: v.hizPerf,
          hacimPerf: v.hacimPerf
        };
      });
      return { ...inspector, klasmanlar: klasmanlarTemiz };
    });
    const data = {
      klasmanlar: klasmanlar,
      nextId: nextId,
      performansData: performansDataTemiz,
      verimlilikHedef: parseFloat(document.getElementById('inp-verimlilik')?.value) || 100,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('lc_inspection_data', JSON.stringify(data));
    const notification = document.getElementById('save-notification');
    notification.classList.add('show');
    setTimeout(() => { notification.classList.remove('show'); }, 3000);
    console.log('✅ Veriler localStorage\'a kaydedildi');
  } catch (err) {
    console.error('❌ localStorage kaydetme hatası:', err);
    alert('Veriler kaydedilemedi: ' + err.message);
  }
}

function saveDashboardData() { saveData(); }

async function clearDashboardData() {
  if (!confirm((translations[currentLang]||translations.tr).clear_confirm)) return;

  // ── Devam eden veri yükleme işlemini tamamen durdur ───────────────────────
  window._uploadAborted = true;

  // ── Tüm devam eden işlemleri durdur ──────────────────────────────────────
  
  // 1) Slideshow durdur
  if (slideshowActive) {
    slideshowActive = false;
    if (slideshowInterval) { clearInterval(slideshowInterval); slideshowInterval = null; }
    if (progressInterval)  { clearInterval(progressInterval);  progressInterval  = null; }
    document.getElementById('slideshow-container').classList.remove('running');
    document.getElementById('slideshow-btn').innerHTML =
      '<svg width=14 height=14 viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px"><polygon points="5,3 19,12 5,21"/></svg> '
      + (translations[currentLang]||translations.tr).start_slideshow;
    const canliCtrl = document.getElementById('canli-controls');
    if (canliCtrl) canliCtrl.style.display = 'block';
    showWelcomeScreen();
  }

  // 2) HD Video kaydı durdur
  if (_vidRendering) {
    _vidRendering = false;
    _stopFillLoop();
    clearTimeout(_vidSlideTimer);
    if (_vidRecorder && _vidRecorder.state !== 'inactive') _vidRecorder.stop();
    if (_vidStream) { _vidStream.getTracks().forEach(t => t.stop()); _vidStream = null; }
    _hideRecordingIndicator();
    const vidBtn = document.getElementById('video-rec-btn');
    if (vidBtn) {
      vidBtn.innerHTML  = '🎥 Video Oluştur';
      vidBtn.className  = 'btn btn-success';
      vidBtn.disabled   = false;
      vidBtn.onclick    = startVideoRecording;
    }
  }

  // 3) Countdown ring durdur
  _stopCountdownRing();

  // 4) Klasman auto-push timer iptal et
  clearTimeout(_klasmanPushTimer);
  clearTimeout(window._configPushTimer);

  // 5) Başlangıç banner'ı gizle
  hideStartupBanner();

  // 6) Analiz overlay açıksa kapat
  const aoOv = document.getElementById('analiz-overlay');
  if (aoOv && aoOv.style.display !== 'none') closeAnalizOverlay();

  // 7) Tüm açık modalları kapat
  closeModal();
  closeDetailModal();
  const kpwOv = document.getElementById('klasman-pw-overlay');
  if (kpwOv) kpwOv.style.display = 'none';

  // ── Verileri sıfırla ──────────────────────────────────────────────────────
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;

  const btn = document.querySelector('button[onclick="clearDashboardData()"]');
  const origText = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = (translations[currentLang]||translations.tr).clearing; btn.disabled = true; }

  performansData         = [];
  excelRows              = [];
  excelCols              = [];
  currentDashboardPage   = 1;
  filteredInspectors     = [];
  slideshowInspectors    = [];
  currentSlideIndex      = 0;
  selectedInspectorDetail = null;

  saveData();
  renderDashboard();
  renderPerfTabloFromData();
  updateSidebar();
  renderTopInspectors();

  // ── Sheets temizle ────────────────────────────────────────────────────────
  if (url && token) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ action: 'clearPerformansData', token }),
        mode: 'no-cors'
      });
      showSuccessMessage((translations[currentLang]||translations.tr).clear_ok_sheets);
    } catch(err) {
      showSuccessMessage((translations[currentLang]||translations.tr).clear_ok_local_err + err.message);
    }
  } else {
    showSuccessMessage((translations[currentLang]||translations.tr).clear_ok_local);
  }

  if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  showFileStatus((translations[currentLang]||translations.tr).clear_status, 'var(--amber)');
}

// ────────────────────────────
// TARİH PARSE YARDIMCISI
// ────────────────────────────
function parseFlexibleDate(val) {
  if (!val) return null;
  if (val instanceof Date) return isNaN(val.getTime()) ? null : val;
  if (typeof val === 'number' && val > 40000 && val < 60000) {
    const excelEpoch = new Date(1899, 11, 30);
    const d = new Date(excelEpoch.getTime() + val * 86400000);
    return isNaN(d.getTime()) ? null : d;
  }
  const s = String(val).trim();
  if (!s) return null;
  const dmyMatch = s.match(/^(\d{2})-(\d{2})-(\d{4})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/);
  if (dmyMatch) {
    const [, dd, mm, yyyy, hh='0', min='0', ss='0'] = dmyMatch;
    const d = new Date(+yyyy, +mm - 1, +dd, +hh, +min, +ss);
    return isNaN(d.getTime()) ? null : d;
  }
  const ymdhMatch = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/);
  if (ymdhMatch) {
    const [, yyyy, mm, dd, hh='0', min='0', ss='0'] = ymdhMatch;
    const d = new Date(+yyyy, +mm - 1, +dd, +hh, +min, +ss);
    return isNaN(d.getTime()) ? null : d;
  }
  const fallback = new Date(s);
  return isNaN(fallback.getTime()) ? null : fallback;
}

// ────────────────────────────
// ÇALIŞMA SAATLERİ HESAPLAMA
// ────────────────────────────
function hesaplaGerceklesenSure(baslangicTarih, bitisTarih) {
  if (!baslangicTarih || !bitisTarih) return null;
  const baslangic = parseFlexibleDate(baslangicTarih);
  const bitis = parseFlexibleDate(bitisTarih);
  if (!baslangic || !bitis) return null;
  if (bitis <= baslangic) return null;

  // Gece yarısını geçen kayıtları dilimlere böl: her gün ayrı hesapla
  function gunDilimleriOlustur(bas, bit) {
    const dilimler = [];
    let dilimBas = new Date(bas);
    while (dilimBas < bit) {
      const dilimBit = new Date(dilimBas);
      dilimBit.setHours(23, 59, 59, 999);
      dilimler.push([new Date(dilimBas), dilimBit < bit ? new Date(dilimBit) : new Date(bit)]);
      dilimBas = new Date(dilimBit);
      dilimBas.setMilliseconds(dilimBas.getMilliseconds() + 1); // ertesi güne geç
    }
    return dilimler;
  }

  function hesaplaTekilGun(gunBas, gunBit) {
    // O günün referans tarihi
    const gunBase = new Date(gunBas);
    gunBase.setHours(0, 0, 0, 0);

    const gun8 = new Date(gunBase); gun8.setHours(8, 0, 0, 0);
    const gun2030 = new Date(gunBase); gun2030.setHours(20, 0, 0, 0);

    // Gün başlangıcı: 08:00'den önce ise 08:00'e çek
    const gercekBas = gunBas < gun8 ? gun8 : gunBas;
    // Gün bitişi: 20:00'den sonra ise 20:00'e kırp
    const gercekBit = gunBit > gun2030 ? gun2030 : gunBit;

    if (gercekBit <= gercekBas) return 0;

    let sn = (gercekBit - gercekBas) / 1000;

    // Mola saatleri
    const ogleB = new Date(gunBase); ogleB.setHours(11, 45, 0, 0);
const ogleE = new Date(gunBase); ogleE.setHours(12, 25, 0, 0); 
    const cay1B = new Date(gunBase); cay1B.setHours(10, 0, 0, 0);
    const cay1E = new Date(gunBase); cay1E.setHours(10, 15, 0, 0);
    const cay2B = new Date(gunBase); cay2B.setHours(14, 0, 0, 0);
    const cay2E = new Date(gunBase); cay2E.setHours(14, 15, 0, 0);

    function kesisimSn(mB, mE, cB, cE) {
      const start = Math.max(mB.getTime(), cB.getTime());
      const end   = Math.min(mE.getTime(), cE.getTime());
      return Math.max(0, (end - start) / 1000);
    }

    const ogleDus = kesisimSn(gercekBas, gercekBit, ogleB, ogleE);
    const cay1Dus = kesisimSn(gercekBas, gercekBit, cay1B, cay1E);
    const cay2Dus = kesisimSn(gercekBas, gercekBit, cay2B, cay2E);
    const tumMola = ogleDus + cay1Dus + cay2Dus;

    // Tüm çalışma mola saatindeyse molayı düşme (molada çalışmış sayılır)
    if (sn - tumMola > 0) {
      sn -= tumMola;
    }
    return sn;
  }

  // Gün dilimlerine böl ve her günü ayrı hesapla
  const dilimler = gunDilimleriOlustur(baslangic, bitis);
  let toplamSn = 0;
  dilimler.forEach(function(d) {
    toplamSn += hesaplaTekilGun(d[0], d[1]);
  });

  return toplamSn > 0 ? toplamSn : (bitis > baslangic ? 1 : null);

}

function hesaplaInspectorFiiliSure(kayitlar) {
  const dilimler = [];
  kayitlar.forEach(r => {
    if (!r.parsedBaslangic || !r.parsedBitis) return;
    dilimler.push([r.parsedBaslangic.getTime(), r.parsedBitis.getTime()]);
  });
  if (!dilimler.length) return null;
  dilimler.sort((a, b) => a[0] - b[0]);
  const merged = [dilimler[0]];
  for (let i = 1; i < dilimler.length; i++) {
    const last = merged[merged.length - 1];
    if (dilimler[i][0] <= last[1]) {
      last[1] = Math.max(last[1], dilimler[i][1]);
    } else {
      merged.push([...dilimler[i]]);
    }
  }
  let toplam = 0;
  merged.forEach(([ms, me]) => {
    const sn = hesaplaGerceklesenSure(new Date(ms), new Date(me));
    if (sn) toplam += sn;
  });
  return toplam > 0 ? toplam : null;
}

function hesaplaGunlukMesaiSuresi(kayitListesi) {
  if (!kayitListesi || kayitListesi.length === 0) return null;

  // Her gün için o günün en geç bitiş saatini bul
  const gunBitisSaatleri = {}; // key: toDateString(), value: en geç bitis Date

  kayitListesi.forEach(kayit => {
    if (!kayit.parsedBaslangic) return;
    const gun = kayit.parsedBaslangic.toDateString();
    const bitis = kayit.parsedBitis || null;
    if (!gunBitisSaatleri[gun]) {
      gunBitisSaatleri[gun] = bitis;
    } else if (bitis && bitis > gunBitisSaatleri[gun]) {
      gunBitisSaatleri[gun] = bitis;
    }
  });

  const gunSayisi = Object.keys(gunBitisSaatleri).length;
  let toplamMesaiSaniye = 0;
  let toplamMesaistiSaniye = 0; // 16:30 sonrası toplam overtime
  const gunlukOvertimeDetay = {}; // key: gunStr → overtime saniye

  Object.entries(gunBitisSaatleri).forEach(([gunStr, enGecBitis]) => {
    // O günün 08:00 ve sınır saatlerini oluştur
    const gunBase = new Date(gunStr);
    const baslangic = new Date(gunBase); baslangic.setHours(8, 0, 0, 0);
    const normalBitis = new Date(gunBase); normalBitis.setHours(16, 30, 0, 0);  // Normal mesai sonu
    const mesaiBitis  = new Date(gunBase); mesaiBitis.setHours(20, 0, 0, 0);   // Mesai sonu üst sınır

    let gercekBitis;
    let overtimeSn = 0; // Bu gün için mesai üstü (16:30 sonrası) saniye

    if (!enGecBitis) {
      // Bitiş tarihi yoksa normal mesai varsay
      gercekBitis = normalBitis;
    } else if (enGecBitis >= mesaiBitis) {
      // 20:00 veya sonrası → 20:00'de kes (gece sayılmaz)
      gercekBitis = mesaiBitis;
      // Overtime = 20:00 - 16:30 = 3.5 saat - öğle sonrası çay (15:00-15:15 normalBitis'ten sonra sayılmaz)
      overtimeSn = (mesaiBitis - normalBitis) / 1000; // 3.5 saat = 12600 sn
    } else if (enGecBitis > normalBitis) {
      // 16:30 ile 20:00 arasında → mesai kaldı, gerçek bitiş saati
      gercekBitis = enGecBitis;
      overtimeSn = (enGecBitis - normalBitis) / 1000;
    } else {
      // 16:30 veya öncesi → normal gün, overtime yok
      gercekBitis = normalBitis;
    }

    // Molalar: öğle 12:00-13:00, çay 10:00-10:15, çay 15:00-15:15
    let sureSn = (gercekBitis - baslangic) / 1000;
    if (sureSn <= 0) { sureSn = GUNLUK_CALISMA_SANIYE; }

    function molaDus(mB_h, mB_m, mE_h, mE_m) {
      const molaBas = new Date(gunBase); molaBas.setHours(mB_h, mB_m, 0, 0);
      const molaEnd = new Date(gunBase); molaEnd.setHours(mE_h, mE_m, 0, 0);
      const start = Math.max(baslangic.getTime(), molaBas.getTime());
      const end   = Math.min(gercekBitis.getTime(), molaEnd.getTime());
      return Math.max(0, (end - start) / 1000);
    }

    sureSn -= molaDus(12, 0, 13, 0);   // öğle molası
    sureSn -= molaDus(10, 0, 10, 15);  // sabah çayı
    sureSn -= molaDus(15, 0, 15, 15);  // öğleden sonra çayı

    toplamMesaiSaniye += Math.max(sureSn, 0);
    toplamMesaistiSaniye += Math.max(overtimeSn, 0);
    if (overtimeSn > 0) {
      gunlukOvertimeDetay[gunStr] = Math.round(overtimeSn / 60); // dakika olarak sakla
    }
  });

  return {
    gunSayisi,
    toplamMesaiSaniye,
    toplamMesaistiSaniye,   // 16:30 sonrası toplam overtime saniye
    gunlukOvertimeDetay,    // gün bazında overtime dakika
    gunlukDetay: Object.keys(gunBitisSaatleri).sort()
  };
}

function parseMesaiSuresi(val) {
  if (val === null || val === undefined || val === '') return null;
  if (typeof val === 'string') {
    const s = val.trim();
    const colonMatch = s.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
    if (colonMatch) {
      const h = parseInt(colonMatch[1]);
      const m = parseInt(colonMatch[2]);
      const sec = colonMatch[3] ? parseInt(colonMatch[3]) : 0;
      return h * 3600 + m * 60 + sec;
    }
    const numVal = parseFloat(s);
    if (!isNaN(numVal)) {
      return numVal > 24 ? numVal * 60 : numVal * 3600;
    }
    return null;
  }
  if (typeof val === 'number') {
    return val > 24 ? val * 60 : val * 3600;
  }
  return null;
}

// ────────────────────────────
// YARDIMCILAR
// ────────────────────────────
function birAdet(k){ 
  const istasyonSuresi = k.istasyonlar.reduce((s,i)=>s+(parseFloat(i.sure)||0),0);
  const urunKontrolSuresi = parseFloat(k.urunKontrolSuresi) || 0;
  return istasyonSuresi + urunKontrolSuresi;
}

function updateSidebar(){
  const n = klasmanlar.length;
  const inspCount = performansData.length;
  document.getElementById('klasman-badge').textContent = n+' '+(translations[currentLang]||translations.tr).klasman_word;
  document.getElementById('inspector-badge').textContent = inspCount+' inspector';
  document.getElementById('nav-kl-count').textContent = n;
  document.getElementById('nav-dashboard-count').textContent = inspCount;
  document.getElementById('sb-klasman-total').textContent = n;
  document.getElementById('sb-inspector-total').textContent = inspCount;
}

function tickClock(){
  const now = new Date();
  const pad = n=>String(n).padStart(2,'0');
  document.getElementById('clock').textContent =
    pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
}
setInterval(tickClock,1000); tickClock();

function toggleSection(bodyId, chevronId) {
  const body = document.getElementById(bodyId);
  const chev = document.getElementById(chevronId);
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chev) chev.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function showPage(id, navEl){
  // ── Yetki kontrolü ──────────────────────────────────────────────────────
  // Admin olmayan kullanıcılar için: kendilerine atanmayan sekmelere ve
  // her zaman admin'e özel olan klasmanlar/kullanıcılar sayfalarına erişimi engelle.
  let blocked = false;
  if (currentUser && !currentUser.isAdmin) {
    if (id === 'klasmanlar' || id === 'kullanicilar') {
      blocked = true;
    } else if (id === 'ekip-analiz') {
      blocked = !(currentUser.team || []).length;
    } else if (id !== 'dashboard' && !(currentUser.tabs || []).includes(id)) {
      blocked = true;
    }
  }
  if (blocked) { id = 'dashboard'; navEl = null; }

  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  // navEl varsa onu, yoksa event.currentTarget kullan; yetki engeli varsa Dashboard nav'ı aktif et
  const activeNav = navEl || (blocked ? null : event?.currentTarget);
  if (activeNav) {
    activeNav.classList.add('active');
  } else if (id === 'dashboard') {
    const dashNav = document.querySelector(".nav-item[onclick*=\"showPage('dashboard'\"]");
    if (dashNav) dashNav.classList.add('active');
  }

  if(id === 'dashboard') {
    renderDashboard();
  } else if(id === 'klasman-analiz') {
    renderKlasmanAnaliz();
  } else if(id === 'canli') {
    initCanliPage();
  } else if(id === 'performans') {
    renderPerfTabloFromData();
    autoFetchPerfIfNeeded();
  } else if(id === 'kullanicilar') {
    loadAndRenderUsers();
  } else if(id === 'ekip-analiz') {
    renderEkipAnaliz();
  }
}

function getPerformanceClass(performans) {
  if (performans >= 95) return 'perf-excellent';
  if (performans >= 85) return 'perf-good';
  if (performans >= 70) return 'perf-average';
  return 'perf-poor';
}

// Gösterim için kullanılacak performans değeri:
// Eğer verimlilikPerf varsa (Düz. Performans) onu, yoksa genelHizPerf'i döner
function getDispPerf(inspector) {
  return (inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined)
    ? inspector.verimlilikPerf
    : (inspector.genelHizPerf ?? 0);
}

function getProgressColor(performans) {
  if (performans >= 95) return '#00897B';
  if (performans >= 85) return '#1565C0';
  if (performans >= 70) return '#F57F17';
  return '#C62828';
}

function fmtSnKisa(sn) {
  if (!sn) return '—';
  const s = Math.round(sn);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}s ${String(m).padStart(2,'0')}d` : `${m}d`;
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// ────────────────────────────
// ÖZET İSTATİSTİKLER
// ────────────────────────────
function updateSummaryStats(inspectors) {
  const total = inspectors.length;
  // Özet istatistikler için Düz. Performans (verimlilikPerf) kullan
  const getPerfVal = (i) => i.verimlilikPerf !== null && i.verimlilikPerf !== undefined
    ? i.verimlilikPerf
    : (i.genelHizPerf ?? 0);

  const excellent = inspectors.filter(i => getPerfVal(i) >= 95).length;
  const good = inspectors.filter(i => {
    const p = getPerfVal(i);
    return p >= 85 && p < 95;
  }).length;
  const average = inspectors.filter(i => {
    const p = getPerfVal(i);
    return p >= 70 && p < 85;
  }).length;
  const poor = inspectors.filter(i => getPerfVal(i) < 70).length;

  const validPerformances = inspectors.filter(i => 
    i.verimlilikPerf !== null && i.verimlilikPerf !== undefined || i.genelHizPerf !== null && i.genelHizPerf !== undefined
  );
  const avgPerformans = validPerformances.length > 0 
    ? Math.round(validPerformances.reduce((sum, i) => sum + getPerfVal(i), 0) / validPerformances.length)
    : 0;

  const avgWorkingDays = total > 0 
    ? Math.round(inspectors.reduce((sum, i) => sum + (i.gunSayisi || 0), 0) / total)
    : 0;

  const totalProducts = inspectors.reduce((sum, i) => sum + (i.adet || 0), 0);

  document.getElementById('total-inspectors').textContent = total;
  document.getElementById('excellent-count').textContent = excellent;
  document.getElementById('good-count').textContent = good;
  document.getElementById('average-count').textContent = average;
  document.getElementById('poor-count').textContent = poor;
  document.getElementById('avg-performance').textContent = avgPerformans + '%';
  document.getElementById('avg-working-days').textContent = avgWorkingDays + ' ' + (translations[currentLang]||translations.tr).days_suffix;
  document.getElementById('total-products').textContent = totalProducts.toLocaleString('tr-TR');

}

// ────────────────────────────
// HEDEF VERİMLİLİK DEĞİŞİNCE
// ────────────────────────────
function onHedefChange() {
  // Veri varsa tablo + kartları yeniden çiz; yoksa sadece tabloyu yenile
  if (performansData && performansData.length > 0) {
    // verimlilikPerf ve hedefVerimlilik değerlerini güncelle
    const hedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
    performansData.forEach(row => {
      row.hedefVerimlilik = hedef;  // ← gelecekteki push'larda doğru gitsin
      row.verimlilikPerf = row.genelHizPerf !== null && row.genelHizPerf !== undefined
        ? Math.round(row.genelHizPerf * (100 / hedef))
        : null;
    });
    renderDashboard();
    renderPerfTabloFromData();
    updateSidebar();
    // Sheets'e de güncelle — Excel yoksa bile hedef değişikliği push edilsin
    if (!excelRows || excelRows.length === 0) {
      pushPerformansRawToSheets(performansData);
    }
  }
  // Tabloda da güncelle (Excel yüklüyse)
  if (excelRows && excelRows.length > 0) performansHesapla();
}

// ────────────────────────────
// DASHBOARD
// ────────────────────────────
function renderDashboard() {
  if (!performansData.length) {
    const _t0 = translations[currentLang]||translations.tr;
    document.getElementById('inspector-grid').innerHTML = `
      <div class="empty">
        <div class="empty-icon">📊</div>
        <h3>${_t0.no_perf_data}</h3>
        <p>${_t0.no_perf_data_hint}</p>
      </div>
    `;
    document.getElementById('dashboard-pagination').style.display = 'none';
    updateSummaryStats([]);
    renderTeamSection();
    renderTeamManagersSection();
    return;
  }

  const hedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  const inspectors = performansData.map(inspector => ({
    ...inspector,
    performans: inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined
      ? inspector.verimlilikPerf
      : (inspector.genelHizPerf !== null && inspector.genelHizPerf !== undefined
          ? Math.round((inspector.genelHizPerf) * (100 / hedef))
          : 0)
  }));

  filteredInspectors = inspectors;
  updateKlasmanFilter();
  filterInspectors();
  updateSummaryStats(inspectors);
  renderTeamSection();
  renderTeamManagersSection();
}

function updateKlasmanFilter() {
  const klasmanSet = new Set();
  // performansData'daki klasmanlardan
  performansData.forEach(inspector => {
    Object.keys(inspector.klasmanlar || {}).forEach(k => klasmanSet.add(k));
  });
  // Sheets'ten çekilen klasmanlar dizisinden (performansData boş olsa bile dolar)
  klasmanlar.forEach(k => { if (k.ad) klasmanSet.add(k.ad); });

  const select = document.getElementById('klasman-filter');
  const prev = select.value;
  select.innerHTML = `<option value="">${(translations[currentLang]||translations.tr).filter_all_klasman}</option>`;
  Array.from(klasmanSet).sort().forEach(k => {
    select.innerHTML += `<option value="${k}"${k === prev ? ' selected' : ''}>${k}</option>`;
  });
}

function filterInspectors() {
  const perfFilter = document.getElementById('perf-filter').value;
  const klasmanFilter = document.getElementById('klasman-filter').value;
  const searchTerm = document.getElementById('inspector-search').value.toLowerCase();
  const sortOrder = document.getElementById('sort-order').value;

  const hedefF = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  let filtered = [...performansData.map(inspector => ({
    ...inspector,
    performans: inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined
      ? inspector.verimlilikPerf
      : (inspector.genelHizPerf !== null && inspector.genelHizPerf !== undefined
          ? Math.round(inspector.genelHizPerf * (100 / hedefF))
          : 0)
  }))];

  if (perfFilter) {
    filtered = filtered.filter(inspector => {
      switch(perfFilter) {
        case 'excellent': return inspector.performans >= 95;
        case 'good': return inspector.performans >= 85 && inspector.performans < 95;
        case 'average': return inspector.performans >= 70 && inspector.performans < 85;
        case 'poor': return inspector.performans < 70;
        default: return true;
      }
    });
  }

  if (klasmanFilter) {
    filtered = filtered.filter(inspector => 
      Object.keys(inspector.klasmanlar).includes(klasmanFilter)
    );
  }

  if (searchTerm) {
    filtered = filtered.filter(inspector => 
      inspector.ins.toLowerCase().includes(searchTerm)
    );
  }

  // "Sadece Ekibim" filtresi — sadece ekip yöneticisi (admin olmayan) kullanıcılar için
  const teamOnlyEl = document.getElementById('team-only-filter');
  if (teamOnlyEl && teamOnlyEl.checked && currentUser && !currentUser.isAdmin) {
    const teamSet = new Set((currentUser.team || []).map(n => n.toLowerCase()));
    filtered = filtered.filter(inspector => teamSet.has((inspector.ins || '').toLowerCase()));
  }

  switch(sortOrder) {
    case 'perf-desc':
      filtered.sort((a, b) => b.performans - a.performans);
      break;
    case 'perf-asc':
      filtered.sort((a, b) => a.performans - b.performans);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.ins.localeCompare(b.ins));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.ins.localeCompare(a.ins));
      break;
    case 'adet-desc':
      filtered.sort((a, b) => b.adet - a.adet);
      break;
    case 'adet-asc':
      filtered.sort((a, b) => a.adet - b.adet);
      break;
  }

  filteredInspectors = filtered;
  currentDashboardPage = 1;
  renderInspectorCards();
}

function renderInspectorCards() {
  const grid = document.getElementById('inspector-grid');
  const pagination = document.getElementById('dashboard-pagination');
  
  if (!filteredInspectors.length) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <h3 data-i18n="filter_no_result">No filter results found</h3>
        <p data-i18n="filter_no_result_hint">Try changing the filter criteria</p>
      </div>
    `;
    applyI18nToNewNodes(grid);
    pagination.style.display = 'none';
    return;
  }

  const totalPages = Math.ceil(filteredInspectors.length / DASHBOARD_PER_PAGE);
  const startIndex = (currentDashboardPage - 1) * DASHBOARD_PER_PAGE;
  const endIndex = startIndex + DASHBOARD_PER_PAGE;
  const currentPageInspectors = filteredInspectors.slice(startIndex, endIndex);

  // Hedef verimlilik değerini oku
  const currentHedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);

  const cards = currentPageInspectors.map(inspector => {
    // Düz. Performans = Ham Performans × (100 / Hedef%) — kartlarda bu gösterilir
    const hamPerf = inspector.genelHizPerf;
    const duzPerf = hamPerf !== null && hamPerf !== undefined
      ? Math.round(hamPerf * (100 / currentHedef))
      : null;
    const performansVal = duzPerf ?? 0;
    const performansClass = getPerformanceClass(performansVal);
    const performansText = duzPerf !== null ? duzPerf + '%' : '—';
    const progressAngle = Math.min(360, (performansVal / 100) * 360);
    const progressColor = getProgressColor(performansVal);
    
    const ini = inspector.ins.split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
    const klasmanCount = Object.keys(inspector.klasmanlar).length;

    const performansAciklama = (() => {
      if (performansVal === null || performansVal === undefined) {
        return (translations[currentLang]||translations.tr).no_overtime_data;
      }
      const gunSayisi = inspector.gunSayisi || 0;
      const mesaiSaat = Math.round((inspector.mesaiSure || 0) / 3600);
      const overtimeDk = Math.round((inspector.toplamMesaistiSaniye || 0) / 60);
      const overtimeStr = overtimeDk > 0 ? ` · 🌙 ${overtimeDk}dk ${(translations[currentLang]||translations.tr).overtime_over}` : '';
      return `${gunSayisi} ${(translations[currentLang]||translations.tr).days_x_formula.replace('{h}', mesaiSaat)}${overtimeStr}`;
    })();

    const performansSeviyesi = (() => {
      if (performansVal >= 95) return (translations[currentLang]||translations.tr).perf_excellent;
      if (performansVal >= 85) return (translations[currentLang]||translations.tr).perf_good;
      if (performansVal >= 70) return (translations[currentLang]||translations.tr).perf_average;
      return (translations[currentLang]||translations.tr).perf_poor; // "Geliştirilmeli" yerine "Düşük"
    })();

    const klasmanRowsHtml = Object.entries(inspector.klasmanlar).map(([klasman, data]) => {
      const hizPerf = (data.hizPerf !== null && data.hizPerf !== undefined) ? data.hizPerf : null;
      const hizText = hizPerf !== null ? hizPerf + '%' : '—';
      const hizClass = hizPerf !== null ? getPerformanceClass(hizPerf) : '';
      return `<div class="klasman-item">
        <span class="klasman-name">${klasman} (${data.adet} ${(translations[currentLang]||translations.tr).units_short})</span>
        <span class="${hizClass}" style="font-size:10px;font-weight:600">${hizText}</span>
      </div>`;
    }).join('');

    const gunDetayi = inspector.gunlukDetay && inspector.gunlukDetay.length > 0 
      ? inspector.gunlukDetay.slice(0, 3).map(gun => {
          const tarih = new Date(gun);
          return `${tarih.getDate()}/${tarih.getMonth() + 1}`;
        }).join(', ') + (inspector.gunlukDetay.length > 3 ? '...' : '')
      : '—';

    return `
      <div class="inspector-card ${performansClass}">
        <!-- Header -->
        <div class="inspector-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="avatar">${ini}</div>
            <div>
              <div class="inspector-name">${inspector.ins}</div>
              <div style="font-size:10px;color:var(--muted2);margin-top:2px">
                ${inspector.gunSayisi || 0} ${(translations[currentLang]||translations.tr).days_suffix} ${(translations[currentLang]||translations.tr).working} · ${gunDetayi}
              </div>
            </div>
          </div>
          <div style="text-align:center">
            <div style="position:relative;display:inline-block">
              <div class="circular-progress" style="--progress-angle: ${progressAngle}deg; --progress-color: ${progressColor};">
                <div class="circular-progress-text ${performansClass}">${performansText}</div>
              </div>
              ${currentHedef !== 100 ? `<div style="position:absolute;top:-6px;right:-6px;background:var(--amber);color:#fff;font-size:8px;font-weight:700;padding:2px 5px;border-radius:8px;line-height:1.2">H%${currentHedef}</div>` : ''}
            </div>
            <div style="font-size:10px;color:var(--muted);margin-top:5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase" data-i18n="adj_perf_label">Adj. Performance</div>
            <div style="font-size:9px;color:${progressColor};font-weight:600;margin-top:1px">${performansSeviyesi}</div>
          </div>
        </div>

        <!-- Ana İstatistikler -->
        <div class="inspector-stats">
          <div class="inspector-stat">
            <div class="inspector-stat-value">${inspector.adet.toLocaleString('tr-TR')}</div>
            <div class="inspector-stat-label" data-i18n="total_qty">Total Quantity</div>
          </div>
          <div class="inspector-stat">
            <div class="inspector-stat-value">${inspector.kayit.toLocaleString('tr-TR')}</div>
            <div class="inspector-stat-label" data-i18n="record_count">Record Count</div>
          </div>
        </div>

        <!-- Süre İstatistikleri -->
        <div class="inspector-stats">
          <div class="inspector-stat">
            <div class="inspector-stat-value">${fmtSnKisa(inspector.standartSure||0)}</div>
            <div class="inspector-stat-label" data-i18n="std_duration">Standard Duration</div>
          </div>
          <div class="inspector-stat">
            <div class="inspector-stat-value">${fmtSnKisa(inspector.mesaiSure||0)}</div>
            <div class="inspector-stat-label"><span data-i18n="overtime_duration">Overtime Duration</span>${
              inspector.toplamMesaistiSaniye > 0
                ? `<br><span style="color:#E65100;font-size:9px;font-weight:700">🌙 +${Math.round(inspector.toplamMesaistiSaniye/60)}dk <span data-i18n="overtime_over">overtime+</span></span>`
                : ''
            }</div>
          </div>
        </div>

        <!-- Performans Detay Kutusu -->
        <div style="padding:14px;background:linear-gradient(135deg,var(--lblue3) 0%,#fff 100%);border-radius:10px;border:1px solid var(--border);margin:12px 0;position:relative;overflow:hidden">
          <div style="font-size:10px;color:var(--muted2);margin-bottom:4px;text-align:center">
            ${performansAciklama}
          </div>
          <div style="text-align:center">
            <span style="font-size:11px;color:var(--muted2)">📊 </span>
            <span style="font-size:12px;font-weight:600;color:var(--navy)">${klasmanCount} ${(translations[currentLang]||translations.tr).klasman_word}</span>
            <span style="color:var(--border);margin:0 6px"> • </span>
            <span style="font-size:11px;color:var(--muted2)">
              <span data-i18n="efficiency_label">efficiency</span> &nbsp;•&nbsp;
              <span style="color:var(--blue);font-weight:600">%100+</span> = <span data-i18n="above_target">above target</span> &nbsp;•&nbsp;
              <span style="color:var(--amber);font-weight:600">%100-</span> = <span data-i18n="below_target">below target</span>
            </span>
          </div>
        </div>

        <!-- Klasman Detayları -->
        <div class="klasman-breakdown">
          <div class="klasman-summary" onclick="toggleKlasmanDetails(this)">
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:10px;color:var(--muted2)" data-i18n="klasman_details">📋 Classification Details</span>
              <span style="font-size:8px;color:var(--muted2);background:var(--lblue2);padding:1px 6px;border-radius:10px">${klasmanCount} ${(translations[currentLang]||translations.tr).units_short}</span>
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <span class="toggle-text" style="font-size:10px;color:var(--blue);font-weight:600" data-i18n="see_details">See Details</span>
              <span class="toggle-icon" style="font-size:12px">👁️</span>
            </div>
          </div>
          <div class="klasman-details">
            ${klasmanRowsHtml}
          </div>
        </div>

        <!-- Alt Butonlar -->
        <div style="display:flex;gap:8px;margin-top:12px">
          <button onclick="showInspectorDetail('${inspector.ins.replace(/'/g, "\\'")}'); event.stopPropagation();" 
                  style="flex:1;padding:8px;background:var(--blue);color:#fff;border:none;border-radius:6px;font-size:11px;cursor:pointer;font-weight:500">
            📊 ${(translations[currentLang]||translations.tr).detailed_analysis}
          </button>
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = cards;

  // data-i18n attribute'larını yeni oluşan DOM'a uygula
  applyI18nToNewNodes(grid);

  if (totalPages > 1) {
    pagination.style.display = 'flex';
    document.getElementById('dash-page-info').textContent = `${currentDashboardPage} / ${totalPages}`;
    document.getElementById('dash-btn-prev').disabled = currentDashboardPage <= 1;
    document.getElementById('dash-btn-next').disabled = currentDashboardPage >= totalPages;
  } else {
    pagination.style.display = 'none';
  }
}

function changeDashboardPage(direction) {
  const totalPages = Math.ceil(filteredInspectors.length / DASHBOARD_PER_PAGE);
  currentDashboardPage = Math.max(1, Math.min(totalPages, currentDashboardPage + direction));
  renderInspectorCards();
  document.getElementById('inspector-grid').scrollIntoView({ behavior: 'smooth' });
}

function toggleKlasmanDetails(element) {
  const details = element.nextElementSibling;
  details.classList.toggle('show');
  
  const toggleIcon = element.querySelector('.toggle-icon');
  const toggleText = element.querySelector('.toggle-text');
  
  if (details.classList.contains('show')) {
    toggleIcon.textContent = '👁️';
    toggleText.textContent = (translations[currentLang]||translations.tr).hide_label;
    element.style.borderRadius = '8px 8px 0 0';
  } else {
    toggleIcon.textContent = '👁️';
    toggleText.textContent = (translations[currentLang]||translations.tr).see_details;
    element.style.borderRadius = '8px';
  }
}

// ────────────────────────────
// INSPECTOR DETAY MODAL
// ────────────────────────────
function showInspectorDetail(inspectorName) {
  const inspector = performansData.find(i => i.ins === inspectorName);
  if (!inspector) return;
  selectedInspectorDetail = inspector;

  document.getElementById('detail-modal-title').textContent = `${inspector.ins} — ${(translations[currentLang]||translations.tr).detailed_perf}`;

  // ── ANINDA AÇ: mevcut veriyle overlay'i hemen göster ──
  const _aoHedefValNow = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  
  // tumKayitlar'ı şimdiki veriyle hemen hesapla (aşağıda da yeniden hesaplanır)
  const buildTumKayitlar = (insp) => {
    const list = [];
    Object.entries(insp.klasmanlar).forEach(([klasmanAd, kd]) => {
      (kd.kayitlar || []).forEach(k => {
        list.push({
          id: list.length + 1, klasman: klasmanAd,
          adet: k.adet, kontrolAdetSuresi: k.kontrolAdetSuresi || 0,
          istasyonSuresi: k.istasyonSuresi || 0, standartSure: k.standartSure || 0,
          kayitFiiliSure: k.kayitFiiliSure || 0, baslangic: k.baslangic,
          bitis: k.bitis, tarihGecerli: k.tarihGecerli,
          ortalamaKontrolSn: k.adet > 0 && k.kayitFiiliSure > 0 ? Math.round(k.kayitFiiliSure / k.adet) : null,
          talepNo: k.talepNo || ''
        });
      });
    });
    return list;
  };

  // Overlay'i mevcut veriyle anında aç
  openAnalizOverlay(buildTumKayitlar(inspector), inspector, _aoHedefValNow);

  // ── ARKA PLAN: Sheets'ten veri çek, gelince tabloyu güncelle ──
  // Her zaman Sheets'ten taze veriyi çek (kayıtlar memory'de olsa bile)
const url   = appConfig.sheetsWebAppUrl;
const token = appConfig.sheetsApiToken;
if (url && token) {
    const url   = appConfig.sheetsWebAppUrl;
    const token = appConfig.sheetsApiToken;
    if (url && token) {
      // Loading göstergesi tablo altına ekle
      const loadBanner = document.createElement('div');
      loadBanner.id = 'ao-sheets-loading';
      loadBanner.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#1565C0;color:#fff;padding:10px 18px;border-radius:10px;font-size:12px;font-family:DM Sans,sans-serif;z-index:9999;box-shadow:0 4px 16px rgba(21,101,192,.4);display:flex;align-items:center;gap:8px;';
      loadBanner.innerHTML = '<div style="width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;animation:ao-gspin .8s linear infinite;"></div> ' + (translations[currentLang]||translations.tr).loading_records;
      document.body.appendChild(loadBanner);

      jsonpFetch(url, { action: 'getInspectorKayitlar', token, inspectorAdi: inspectorName.normalize('NFC').trim() })
        .then(data => {
          if (data.status === 'ok' && data.kayitlar && typeof data.kayitlar === 'object') {
            const insKlasmanKeys = Object.keys(inspector.klasmanlar);
            const norm = s => s.normalize('NFC').trim().toLowerCase();
            Object.entries(data.kayitlar).forEach(([klasmanAd, kayitlarArr]) => {
              if (!Array.isArray(kayitlarArr) || !kayitlarArr.length) return;
              let hedefKey = insKlasmanKeys.find(k => k === klasmanAd)
                || insKlasmanKeys.find(k => norm(k) === norm(klasmanAd));
              if (!hedefKey) return;
              inspector.klasmanlar[hedefKey].kayitlar = kayitlarArr.map(r => ({
                ...r,
                kontrolAdetSuresi: r.kontrolAdetSuresi || 0,
                istasyonSuresi: r.istasyonSuresi || 0,
                standartSure: r.standartSure || 0,
                kayitFiiliSure: r.kayitFiiliSure || 0,
                tarihGecerli: r.tarihGecerli || false,
                baslangic: r.baslangic ? (() => { const d = new Date(r.baslangic); return isNaN(d.getTime()) ? null : d; })() : null,
                bitis: r.bitis ? (() => { const d = new Date(r.bitis); return isNaN(d.getTime()) ? null : d; })() : null
              }));
            });
            // Overlay hâlâ açıksa tabloyu güncelle
            const ov = document.getElementById('analiz-overlay');
            if (ov && ov.style.display !== 'none') {
              const fresh = buildTumKayitlar(inspector);
              _aoData = fresh;
              _aoRenderStats();
              _aoRenderTop20();
              aoApplyFilters();
              const kb = Object.values(inspector.klasmanlar).reduce((s,kd)=>s+(kd.kayitlar||[]).length,0);
              console.log('[detay] Sheets kayıtları yüklendi ve tablo güncellendi:', kb, 'kayıt');
            }
          }
        })
        .catch(e => console.warn('getInspectorKayitlar hatası:', e.message))
        .finally(() => { const b = document.getElementById('ao-sheets-loading'); if(b) b.remove(); });
    }
  }
}

function closeDetailModal() {
  document.getElementById('detail-modal').classList.remove('open');
  selectedInspectorDetail = null;
}

// ────────────────────────────
// EXCEL EXPORT
// ────────────────────────────
function exportToExcel() {
  if (!performansData.length) {
    alert('Henüz performans verisi yok!');
    return;
  }

  const workbook = XLSX.utils.book_new();
  
  const mainData = performansData.map(inspector => {
    const totalHedef = inspector.standartSure || 0;
    const performans = inspector.genelHizPerf ?? 0;
    
    return {
      'Inspector': inspector.ins,
      'Toplam Adet': inspector.adet,
      'Kayıt Sayısı': inspector.kayit,
      'Standart Süre (dk)': Math.round(totalHedef/60),
      'Mesai Süresi (dk)': Math.round((inspector.mesaiSure||0)/60),
      'Performans (%)': performans,
      'Klasman Sayısı': Object.keys(inspector.klasmanlar).length,
      'Çalışma Gün Sayısı': inspector.gunSayisi || 0
    };
  });

  const mainSheet = XLSX.utils.json_to_sheet(mainData);
  XLSX.utils.book_append_sheet(workbook, mainSheet, 'Genel Performans');

  const detailData = [];
  performansData.forEach(inspector => {
    Object.entries(inspector.klasmanlar).forEach(([klasman, data]) => {
      const klasmanPerf = data.hizPerf ?? 0;
      detailData.push({
        'Inspector': inspector.ins,
        'Klasman': klasman,
        'Adet': data.adet,
        'Standart Süre (dk)': Math.round((data.standartSure||0)/60),
        'Performans (%)': klasmanPerf
      });
    });
  });

  const detailSheet = XLSX.utils.json_to_sheet(detailData);
  XLSX.utils.book_append_sheet(workbook, detailSheet, 'Klasman Detayları');

  const fileName = `Inspector_Performans_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function exportInspectorDetail() {
  if (!selectedInspectorDetail) return;
  const inspector = selectedInspectorDetail;

  // ── Yardımcılar ──
  function fmtSnExcel(sn) {
    if (!sn || sn <= 0) return '—';
    const s = Math.round(sn);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sc = s % 60;
    if (h > 0) return h + 's ' + String(m).padStart(2,'0') + 'd ' + String(sc).padStart(2,'0') + 'sn';
    if (m > 0) return m + 'd ' + String(sc).padStart(2,'0') + 'sn';
    return sc + 'sn';
  }
  function fmtTarihExcel(d) {
    if (!d) return '—';
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt.getTime())) return '—';
    return dt.toLocaleDateString('tr-TR', {day:'2-digit',month:'2-digit',year:'numeric'}) +
           ' ' + dt.toLocaleTimeString('tr-TR', {hour:'2-digit',minute:'2-digit'});
  }
  function oranHesapla(fiili, standart) {
    if (!fiili || !standart) return '—';
    return Math.round((fiili / standart) * 100) + '%';
  }

  const wb = XLSX.utils.book_new();

  // ── SAYFA 1: Özet (Klasman bazında) ──
  const ozetRows = Object.entries(inspector.klasmanlar).map(([klasman, kd]) => ({
    'Klasman':              klasman,
    'Toplam Adet':          kd.adet || 0,
    'Standart Süre':        fmtSnExcel(kd.standartSure),
    'Standart Süre (sn)':   kd.standartSure || 0,
    'Gerçekleşen Süre':     fmtSnExcel(kd.kayitFiiliSure),
    'Gerçekleşen (sn)':     kd.kayitFiiliSure || 0,
    'Oran (Std./Ger.)':     oranHesapla(kd.standartSure, kd.kayitFiiliSure),
    'Hız Performansı (%)':  kd.hizPerf ?? '—'
  }));
  const wsOzet = XLSX.utils.json_to_sheet(ozetRows);

  // Sütun genişlikleri
  wsOzet['!cols'] = [
    {wch:22},{wch:14},{wch:16},{wch:18},{wch:18},{wch:18},{wch:18},{wch:20}
  ];

  // Header rengi (A1:H1) — koyu lacivert
  const ozetRange = XLSX.utils.decode_range(wsOzet['!ref']);
  for (let C = ozetRange.s.c; C <= ozetRange.e.c; C++) {
    const cell = wsOzet[XLSX.utils.encode_cell({r:0, c:C})];
    if (cell) {
      cell.s = {
        font:    { bold: true, color: { rgb: 'FFFFFF' }, sz: 11 },
        fill:    { fgColor: { rgb: '0B1F3A' }, patternType: 'solid' },
        alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
      };
    }
  }

  // Veri satırları renklendirme
  for (let R = 1; R <= ozetRange.e.r; R++) {
    const oranCell = wsOzet[XLSX.utils.encode_cell({r:R, c:6})]; // Oran sütunu
    const oranVal  = oranCell ? parseInt(oranCell.v) : NaN;
    let rowColor = 'FFFFFF';
    if (!isNaN(oranVal)) {
      if (oranVal >= 100)       rowColor = 'E0F2F1'; // yeşil
      else if (oranVal >= 80)   rowColor = 'FFF8E1'; // amber
      else                      rowColor = 'FFEBEE'; // kırmızı
    }
    for (let C = ozetRange.s.c; C <= ozetRange.e.c; C++) {
      const cell = wsOzet[XLSX.utils.encode_cell({r:R, c:C})];
      if (cell) {
        cell.s = {
          fill: { fgColor: { rgb: R % 2 === 0 ? rowColor : rowColor.replace(/^(E0|FF|FF)/,'F') }, patternType: 'solid' },
          alignment: { horizontal: C >= 1 ? 'center' : 'left', vertical: 'center' },
          border: {
            bottom: { style: 'thin', color: { rgb: 'CFE3F7' } },
            right:  { style: 'thin', color: { rgb: 'CFE3F7' } }
          }
        };
      }
    }
  }
  XLSX.utils.book_append_sheet(wb, wsOzet, 'Özet');

  // ── SAYFA 2: Kayıt Detayı (satır bazında) ──
  const kayitRows = [];
  Object.entries(inspector.klasmanlar).forEach(([klasman, kd]) => {
    (kd.kayitlar || []).forEach((k, i) => {
      const fiili = k.kayitFiiliSure || 0;
      const std   = k.standartSure   || 0;
      const oran  = fiili && std ? Math.round((std / fiili) * 100) : null;
      kayitRows.push({
        '#':                    kayitRows.length + 1,
        'Klasman':              klasman,
        'Talep No':             k.talepNo || '—',
        'Adet':                 k.adet || 0,
        'Kontrol Süresi (sn)':  k.kontrolAdetSuresi || 0,
        'İstasyon Süresi':      fmtSnExcel(k.istasyonSuresi),
        'Standart Süre':        fmtSnExcel(std),
        'Standart Süre (sn)':   std,
        'Gerçekleşen Süre':     fmtSnExcel(fiili),
        'Gerçekleşen (sn)':     fiili || '—',
        'Oran (Std./Ger.)':     oran !== null ? oran + '%' : '—',
        'Ort. Kontrol (sn/ad)': k.adet > 0 && fiili > 0 ? Math.round(fiili / k.adet) : '—',
        'Başlangıç':            fmtTarihExcel(k.baslangic),
        'Bitiş':                fmtTarihExcel(k.bitis),
        'Tarih Geçerli':        k.tarihGecerli ? 'Evet' : 'Hayır'
      });
    });
  });

  const wsKayit = XLSX.utils.json_to_sheet(kayitRows.length ? kayitRows : [{'Bilgi':'Kayıt verisi yok'}]);
  wsKayit['!cols'] = [
    {wch:5},{wch:20},{wch:8},{wch:18},{wch:16},{wch:16},{wch:18},{wch:18},{wch:18},{wch:18},{wch:18},{wch:18},{wch:18},{wch:14}
  ];

  // Kayıt sayfası header rengi
  if (kayitRows.length) {
    const kayitRange = XLSX.utils.decode_range(wsKayit['!ref']);
    for (let C = kayitRange.s.c; C <= kayitRange.e.c; C++) {
      const cell = wsKayit[XLSX.utils.encode_cell({r:0, c:C})];
      if (cell) {
        cell.s = {
          font:  { bold: true, color: { rgb: 'FFFFFF' }, sz: 10 },
          fill:  { fgColor: { rgb: '102848' }, patternType: 'solid' },
          alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
        };
      }
    }
    // Veri satırları
    for (let R = 1; R <= kayitRange.e.r; R++) {
      const oranCell = wsKayit[XLSX.utils.encode_cell({r:R, c:9})]; // Oran
      const oranVal  = oranCell ? parseInt(oranCell.v) : NaN;
      const bg = isNaN(oranVal) ? 'FFFFFF' :
                 oranVal >= 100 ? (R%2===0?'E0F2F1':'F1FAF9') :
                 oranVal >= 80  ? (R%2===0?'FFF8E1':'FFFCF0') :
                                  (R%2===0?'FFEBEE':'FFF5F5');
      for (let C = kayitRange.s.c; C <= kayitRange.e.c; C++) {
        const cell = wsKayit[XLSX.utils.encode_cell({r:R, c:C})];
        if (cell) {
          cell.s = {
            fill: { fgColor: { rgb: bg }, patternType: 'solid' },
            alignment: { horizontal: C <= 1 || C === 11 || C === 12 ? 'left' : 'center', vertical: 'center' },
            border: { bottom: { style: 'thin', color: { rgb: 'CFE3F7' } } }
          };
        }
      }
    }
  }
  XLSX.utils.book_append_sheet(wb, wsKayit, 'Kayıt Detayı');

  // ── SAYFA 3: Inspector Özet ──
  const hamPerf  = inspector.genelHizPerf ?? 0;
  const hedef    = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  const duzPerf  = Math.round(hamPerf * (100 / hedef));
  const genelRows = [
    { 'Alan': 'Inspector Adı',        'Değer': inspector.ins },
    { 'Alan': 'Toplam Adet',          'Değer': inspector.adet || 0 },
    { 'Alan': 'Toplam Kayıt',         'Değer': inspector.kayit || 0 },
    { 'Alan': 'Klasman Sayısı',       'Değer': Object.keys(inspector.klasmanlar).length },
    { 'Alan': 'Çalışma Gün Sayısı',   'Değer': inspector.gunSayisi || 0 },
    { 'Alan': 'Standart Süre',        'Değer': fmtSnExcel(inspector.standartSure) },
    { 'Alan': 'Mesai Süresi',         'Değer': fmtSnExcel(inspector.mesaiSure) },
    { 'Alan': 'Ham Hız Performansı',  'Değer': hamPerf !== null ? hamPerf + '%' : '—' },
    { 'Alan': 'Düz. Performans',      'Değer': duzPerf + '%' },
    { 'Alan': 'Rapor Tarihi',         'Değer': new Date().toLocaleDateString('tr-TR') }
  ];
  const wsGenel = XLSX.utils.json_to_sheet(genelRows);
  wsGenel['!cols'] = [{wch:24},{wch:28}];
  // Header rengi
  ['A1','B1'].forEach(ref => {
    if (wsGenel[ref]) wsGenel[ref].s = {
      font: { bold:true, color:{rgb:'FFFFFF'}, sz:11 },
      fill: { fgColor:{rgb:'0B1F3A'}, patternType:'solid' },
      alignment: { horizontal:'center' }
    };
  });
  XLSX.utils.book_append_sheet(wb, wsGenel, 'Inspector Özet');

  const fileName = `${inspector.ins.replace(/\s+/g, '_')}_Detay_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

// ────────────────────────────
// KLASMAN YÖNETİMİ
// ────────────────────────────
let klFilter = 'all'; // 'all' | 'done' | 'undone'

// ─── OTOMATİK SHEETS PUSH (debounce 1.5sn) ───
let _klasmanPushTimer = null;
function autoSaveAndPushKlasmanlar() {
  saveData();
  clearTimeout(_klasmanPushTimer);
  _klasmanPushTimer = setTimeout(() => {
    const url   = appConfig.sheetsWebAppUrl;
    const token = appConfig.sheetsApiToken;
    if (!url || !token) return;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setKlasmanlar', token, klasmanlar, savedAt: new Date().toISOString() }),
      mode: 'no-cors'
    }).then(() => {
      console.log('☁️ Klasmanlar Sheets\'e otomatik gönderildi');
      showSuccessMessage((translations[currentLang]||translations.tr).sheets_klasman_sync);
    }).catch(err => console.warn('Klasman oto-push hatası:', err.message));
  }, 1500);
}

function isKlasmanTamamlandi(k) {
  // Manuel işaretleme öncelikli; işaretlenmemişse false
  return k.tamamlandi === true;
}

function toggleKlasmanTamamlandi(kId) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k) return;
  k.tamamlandi = !k.tamamlandi;
  autoSaveAndPushKlasmanlar();
  renderListe();
  renderEditor();
}

function setKlFilter(val) {
  klFilter = val;
  sayfa = 1;
  // Buton stillerini güncelle
  ['all','done','undone'].forEach(v => {
    const btn = document.getElementById('kl-f-' + v);
    if (!btn) return;
    btn.className = 'kl-filter-btn';
    if (v === val) {
      if (v === 'done')   btn.className += ' active-green';
      else if (v === 'undone') btn.className += ' active-amber';
      else btn.className += ' active';
    }
  });
  renderListe();
}

function filtered(){ 
  let list = klasmanlar.filter(k => k.ad.toLowerCase().includes(aramaStr.toLowerCase()));
  if (klFilter === 'done')   list = list.filter(k => isKlasmanTamamlandi(k));
  if (klFilter === 'undone') list = list.filter(k => !isKlasmanTamamlandi(k));
  return list;
}

function aramaYap(){ 
  aramaStr=document.getElementById('search-input').value; 
  sayfa=1; 
  renderListe(); 
}

function changePage(d){
  const fl=filtered(), tp=Math.max(1,Math.ceil(fl.length/KL_PER_PAGE));
  sayfa=Math.min(tp,Math.max(1,sayfa+d));
  renderListe();
}

const KL_PER_PAGE = 20; // Grid görünüm için sayfa başı klasman

function renderListe(){
  const fl = filtered();
  const tp = Math.max(1, Math.ceil(fl.length / KL_PER_PAGE));
  if(sayfa > tp) sayfa = tp;
  const slice = fl.slice((sayfa - 1) * KL_PER_PAGE, sayfa * KL_PER_PAGE);
  const el = document.getElementById('klasman-liste');

  // Tamamlanma sayaçlarını güncelle
  const totalAll   = klasmanlar.filter(k => k.ad.toLowerCase().includes(aramaStr.toLowerCase())).length;
  const totalDone  = klasmanlar.filter(k => k.ad.toLowerCase().includes(aramaStr.toLowerCase()) && isKlasmanTamamlandi(k)).length;
  const totalUndone = totalAll - totalDone;
  const countEl = document.getElementById('kl-filter-counts');
  if (countEl) countEl.textContent = `✅ ${totalDone}  ·  ⚠️ ${totalUndone}`;

  if(!slice.length){
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><h3 data-i18n="not_found">Not Found</h3><p data-i18n="change_search">Change the search criteria</p></div>';
    applyI18nToNewNodes(el);
  } else {
    el.innerHTML = '<div class="kl-grid">' + slice.map(k => {
      const icon      = k.icon || KL_ICONS[k.id % KL_ICONS.length];
      const sure      = birAdet(k).toFixed(1);
      const selected  = k.id === secilenId;
      const tamam     = isKlasmanTamamlandi(k);
      const checkBadge = tamam
        ? `<span style="position:absolute;top:6px;right:6px;font-size:11px;background:#E0F2F1;color:var(--green);border-radius:99px;padding:1px 6px;font-weight:700;border:1px solid #B2DFDB">✓</span>`
        : '';
      return `<div class="kl-card${selected?' selected':''}${tamam?' completed':''}" onclick="selectKlasman(${k.id})">
        ${checkBadge}
        <div class="kl-card-icon">${icon}</div>
        <div class="kl-card-name" title="${k.ad}">${k.ad}</div>
        <div class="kl-card-meta">⚙️ ${k.istasyonlar.length} ist. &nbsp;·&nbsp; ⏱ ${sure}sn</div>
      </div>`;
    }).join('') + '</div>';
  }

  document.getElementById('kl-sayac').textContent = fl.length + ' ' + (translations[currentLang]||translations.tr).klasman_word;
  
  // Sayfalama güncelle
  const prevBtn = document.getElementById('kl-prev');
  const nextBtn = document.getElementById('kl-next');
  const pagEl = document.getElementById('kl-pag-pages');
  const pagContainer = document.getElementById('kl-pag');
  
  if (prevBtn) prevBtn.disabled = sayfa <= 1;
  if (nextBtn) nextBtn.disabled = sayfa >= tp;
  
  if (pagEl) {
    if (tp <= 1) {
      if (pagContainer) pagContainer.style.display = 'none';
    } else {
      if (pagContainer) pagContainer.style.display = 'flex';
      // Sayfa numaralarını göster (max 7)
      let pages = [];
      if (tp <= 7) {
        for(let i=1;i<=tp;i++) pages.push(i);
      } else {
        pages = [1];
        if (sayfa > 3) pages.push('...');
        for(let i=Math.max(2,sayfa-1);i<=Math.min(tp-1,sayfa+1);i++) pages.push(i);
        if (sayfa < tp-2) pages.push('...');
        pages.push(tp);
      }
      pagEl.innerHTML = pages.map(p => 
        p === '...' 
          ? `<span style="padding:0 4px;color:var(--muted);line-height:28px">…</span>` 
          : `<button class="kl-pag-page${p===sayfa?' active':''}" onclick="goToPage(${p})">${p}</button>`
      ).join('');
    }
  }
  
  updateSidebar();
}

function goToPage(p) {
  sayfa = p;
  renderListe();
}

function selectKlasman(id){
  secilenId=id; 
  renderListe(); 
  renderEditor();
}

function renderEditor(){
  const k=klasmanlar.find(x=>x.id===secilenId);
  const el=document.getElementById('editor-content');
  if(!k){
    el.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 24px;text-align:center">
        <div style="width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,var(--lblue2),var(--lblue3));display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:18px;border:1px solid var(--border)">⚙️</div>
        <h3 style="font-size:15px;font-weight:600;color:var(--navy);margin-bottom:8px">Bir klasman seçin</h3>
        <p style="font-size:12px;color:var(--muted);max-width:220px;line-height:1.6">Soldan bir klasman seçerek istasyon sürelerini düzenleyebilirsiniz</p>
      </div>
    `;
    return;
  }
  
  const istasyonSuresi = k.istasyonlar.reduce((s,i)=>s+(parseFloat(i.sure)||0),0);
  const urunKontrolSuresi = parseFloat(k.urunKontrolSuresi) || 0;
  const toplamSure = istasyonSuresi + urunKontrolSuresi;
  
  const curIcon = k.icon || KL_ICONS[k.id % KL_ICONS.length];
  const iconGridHtml = KL_ICONS.map((ic) => `
    <button onclick="updateKlasmanIcon(${k.id},'${ic}')" title="${ic}"
      style="font-size:16px;padding:4px;border-radius:6px;border:2px solid ${ic===curIcon?'var(--blue2)':'var(--border2)'};
      background:${ic===curIcon?'var(--lblue2)':'var(--white)'};cursor:pointer;transition:all .1s;aspect-ratio:1;"
    >${ic}</button>
  `).join('');

  el.innerHTML=`
    <div style="padding:16px 18px;border-bottom:1px solid var(--border2);background:var(--lblue3);display:flex;align-items:center;justify-content:space-between">
      <h2 style="font-size:14px;font-weight:600;color:var(--navy);display:flex;align-items:center;gap:8px">
        <span>${curIcon}</span> ${k.ad} — Düzenle
      </h2>
      <button onclick="addIstasyon(${k.id})" style="padding:6px 12px;background:var(--blue);color:#fff;border:none;border-radius:6px;font-size:11px;cursor:pointer" data-i18n="add_station">＋ Add Station</button>
    </div>
    <div style="padding:18px">

      <!-- Klasman Adı & İkon Düzenleme -->
      <div style="padding:14px;background:var(--offwhite);border:1px solid var(--border2);border-radius:10px;margin-bottom:16px;">
        <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;display:flex;align-items:center;gap:6px">
          ✏️ Klasman Bilgileri
          <button onclick="toggleKlasmanTamamlandi(${k.id})" title="Tıklayarak işaretle / kaldır"
            style="display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:99px;border:1.5px solid ${isKlasmanTamamlandi(k)?'#81C784':'#FFE082'};
            background:${isKlasmanTamamlandi(k)?'#E0F2F1':'var(--lamber)'};
            color:${isKlasmanTamamlandi(k)?'var(--green)':'var(--amber)'};
            font-size:10px;font-weight:700;cursor:pointer;letter-spacing:.3px;transition:all .15s;font-family:'DM Sans',sans-serif">
            ${isKlasmanTamamlandi(k) ? '✅ Tamamlandı' : '⚠️ Tamamlanmadı'}
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:28px;">${curIcon}</span>
          <input value="${k.ad}" onblur="updateKlasmanAd(${k.id},this.value)" onkeydown="if(event.key==='Enter'){this.blur();}" 
            style="flex:1;padding:8px 12px;border:1.5px solid var(--blue3);border-radius:8px;font-size:13px;font-weight:600;color:var(--navy);"
            placeholder="Klasman adı">
        </div>
        <div style="font-size:10px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;" data-i18n="select_icon_btn">Select Icon</div>
        <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:4px;max-height:130px;overflow-y:auto;padding:2px;" id="editor-icon-grid-${k.id}">
          ${iconGridHtml}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--lgreen);border:1px solid var(--green);border-radius:8px;margin-bottom:8px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px">⏱</div>
        <div style="flex:1">
          <strong style="font-size:13px;color:var(--green);display:block" data-i18n="unit_check_duration">1-Unit Inspection Duration</strong>
          <span style="font-size:11px;color:var(--muted2)" data-i18n="unit_check_hint">Standard time spent per product</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <input type="number" value="${urunKontrolSuresi}" min="0" step="1" 
            onchange="updateUrunKontrol(${k.id},this.value)" style="width:80px;text-align:right;padding:6px 8px;border:1px solid var(--border);border-radius:6px">
          <span style="font-size:12px;color:var(--muted);white-space:nowrap">saniye</span>
        </div>
      </div>

      <!-- Ölçü -->
      <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--lamber);border:1px solid var(--amber);border-radius:8px;margin-bottom:8px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--amber);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px">📐</div>
        <div style="flex:1">
          <strong style="font-size:13px;color:var(--amber);display:block">Ölçü Süresi</strong>
          <span style="font-size:11px;color:var(--muted2)">Adet başına ölçüm süresi — BakilacakMiktar'a göre ölçülecek adet × bu süre eklenir</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <input type="number" value="${parseFloat(k.olcuSuresi)||0}" min="0" step="1"
            onchange="updateOlcuSuresi(${k.id},this.value)" style="width:80px;text-align:right;padding:6px 8px;border:1px solid var(--border);border-radius:6px">
          <span style="font-size:12px;color:var(--muted);white-space:nowrap">saniye</span>
        </div>
      </div>

      <!-- Ürün Kabul -->
      <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--lblue3);border:1px solid var(--blue3);border-radius:8px;margin-bottom:16px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--blue3);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px">✅</div>
        <div style="flex:1">
          <strong style="font-size:13px;color:var(--blue);display:block">Ürün Kabul Süresi</strong>
          <span style="font-size:11px;color:var(--muted2)">Parti başına sabit ek süre — miktar arttıkça kademeli artar (1-32→1x, 33-80→2x, 81-125→3x, 125+→4x)</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          <input type="number" value="${parseFloat(k.urunKabulSuresi)||0}" min="0" step="1"
            onchange="updateUrunKabulSuresi(${k.id},this.value)" style="width:80px;text-align:right;padding:6px 8px;border:1px solid var(--border);border-radius:6px">
          <span style="font-size:12px;color:var(--muted);white-space:nowrap">saniye</span>
        </div>
      </div>

      <div style="margin-bottom:16px">
        ${k.istasyonlar.length===0?`
          <div style="padding:40px 24px;text-align:center;border:2px dashed var(--border);border-radius:8px;background:var(--offwhite)">
            <div style="font-size:24px;margin-bottom:8px;opacity:0.5">⚙️</div>
            <h3 style="font-size:13px;font-weight:500;color:var(--muted);margin-bottom:4px">"İstasyon Ekle" ile başlayın</h3>
            <p style="font-size:11px;color:var(--muted2)" data-i18n="add_first_station">Add the first station to start defining this classification</p>
          </div>
        `:''}
        ${k.istasyonlar.map((ist,i)=>`
          <div style="display:grid;grid-template-columns:40px 1fr auto auto auto;gap:12px;align-items:center;padding:12px;background:var(--white);border:1px solid var(--border2);border-radius:8px;margin-bottom:8px">
            <div style="width:28px;height:28px;border-radius:50%;background:var(--lblue2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:var(--blue)">${i+1}</div>
            <input value="${ist.ad}" onchange="updateIst(${k.id},${ist.id},'ad',this.value)" placeholder="İstasyon adı" style="padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <input type="number" value="${ist.sure}" min="0" step="1"
                onchange="updateIst(${k.id},${ist.id},'sure',this.value)" style="width:80px;text-align:right;padding:6px 8px;border:1px solid var(--border);border-radius:6px;font-size:12px">
              <span style="font-size:11px;color:var(--muted);white-space:nowrap">sn</span>
            </div>
            <div style="font-size:10px;color:var(--muted2);text-align:right;min-width:40px">
              ${toplamSure > 0 ? ((parseFloat(ist.sure)||0)/toplamSure*100).toFixed(0) : 0}%
            </div>
            <button onclick="deleteIst(${k.id},${ist.id})" style="width:28px;height:28px;border:none;background:var(--lred);color:var(--red);border-radius:6px;cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center" title="İstasyonu Sil">🗑</button>
          </div>`).join('')}
      </div>
      
      ${k.istasyonlar.length>0 || urunKontrolSuresi>0?`
        <div style="background:linear-gradient(135deg,var(--lblue3) 0%,#fff 100%);border:1px solid var(--lblue);border-radius:10px;padding:16px">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center">
            <div>
              <div style="font-size:18px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace">${toplamSure.toFixed(0)}</div>
              <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px" data-i18n="total_duration_label">Total Duration (s)</div>
            </div>
            <div>
              <div style="font-size:18px;font-weight:700;color:var(--blue);font-family:'DM Mono',monospace">${k.istasyonlar.length}</div>
              <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px" data-i18n="station_count">Station Count</div>
            </div>
            <div>
              <div style="font-size:18px;font-weight:700;color:var(--green);font-family:'DM Mono',monospace">${(toplamSure/60).toFixed(1)}</div>
              <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:0.5px">Dakika/Adet</div>
            </div>
          </div>
        </div>`:''}
    </div>`;
}

function updateUrunKontrol(kId, val) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k) return;
  k.urunKontrolSuresi = parseFloat(val) || 0;
  autoSaveAndPushKlasmanlar();
  renderEditor(); 
  renderListe();
}

function updateOlcuSuresi(kId, val) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k) return;
  k.olcuSuresi = parseFloat(val) || 0;
  autoSaveAndPushKlasmanlar();
  renderEditor();
  renderListe();
}

function updateUrunKabulSuresi(kId, val) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k) return;
  k.urunKabulSuresi = parseFloat(val) || 0;
  autoSaveAndPushKlasmanlar();
  renderEditor();
  renderListe();
}

function updateIst(kId,iId,alan,val){
  const k=klasmanlar.find(x=>x.id===kId);
  const ist=k&&k.istasyonlar.find(i=>i.id===iId);
  if(!ist) return;
  if(alan==='sure') ist.sure=parseFloat(val)||0; else ist.ad=val;
  autoSaveAndPushKlasmanlar();
  renderEditor(); renderListe();
}

function updateKlasmanAd(kId, val) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k || !val.trim()) return;
  k.ad = val.trim();
  autoSaveAndPushKlasmanlar();
  // Kartları güncelle
  renderListe();
  // Editör başlığını da güncelle
  const editorHeader = document.querySelector('#editor-content h2');
  if (editorHeader) editorHeader.innerHTML = `<span>${k.icon || '📦'}</span> ${k.ad} — Düzenle`;
}

function updateKlasmanIcon(kId, ic) {
  const k = klasmanlar.find(x => x.id === kId);
  if (!k) return;
  k.icon = ic;
  autoSaveAndPushKlasmanlar();
  renderEditor(); renderListe();
}

function deleteIst(kId,iId){
  const k=klasmanlar.find(x=>x.id===kId);
  if(!k) return;
  k.istasyonlar=k.istasyonlar.filter(i=>i.id!==iId);
  autoSaveAndPushKlasmanlar();
  renderEditor(); renderListe();
}

// ─── KLASMAN İKON LİSTESİ ───
const KL_ICONS = [
  // Giyim — üst
  '👔','👕','🥼','🧥','🧣','👗','👘','🥻','🩱','🎽',
  // Giyim — alt
  '👖','🩲','🩳','🩴',
  // Ayakkabı & aksesuar
  '👟','👠','👡','👢','👞','🥾','🥿','👒','🎩','🧢','⛑️','👑',
  '👜','👝','💼','🎒','🧳','👛','💍','💎',
  // Tekstil & ev
  '🧶','🧵','🪡','🛋️','🛏️','🪣','🧺','🪢',
  // Spor
  '⚽','🏀','🎾','🏋️','🤸','🧘','🏊','🚴','🥊','🎯',
  // Diğer ürünler
  '📦','🎁','🛒','🏷️','📋','🗂️','📁','🗃️',
  // Kategori/bölüm
  '⭐','🔶','🔷','🟢','🟡','🟠','🔴','🟣','⚡','🌟','🎪','🏅'
];

function openModal(){
  document.getElementById('modal-input').value='';
  // İlk ikonu seç
  const defaultIcon = KL_ICONS[0];
  document.getElementById('modal-icon-val').value = defaultIcon;
  document.getElementById('modal-icon-preview').textContent = defaultIcon;
  
  // İkon grid'i oluştur
  const grid = document.getElementById('modal-icon-grid');
  grid.innerHTML = KL_ICONS.map((ic,i) => `
    <button onclick="selectModalIcon('${ic}')" title="${ic}"
      id="mig-${i}"
      style="font-size:18px;padding:5px;border-radius:7px;border:2px solid ${i===0?'var(--blue2)':'var(--border2)'};
      background:${i===0?'var(--lblue2)':'var(--white)'};cursor:pointer;transition:all .12s;aspect-ratio:1;"
    >${ic}</button>
  `).join('');
  
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('modal-input').focus(),80);
}

function selectModalIcon(ic) {
  document.getElementById('modal-icon-val').value = ic;
  document.getElementById('modal-icon-preview').textContent = ic;
  // Grid'deki seçili stili güncelle
  const grid = document.getElementById('modal-icon-grid');
  [...grid.children].forEach(btn => {
    const selected = btn.textContent.trim() === ic;
    btn.style.borderColor = selected ? 'var(--blue2)' : 'var(--border2)';
    btn.style.background  = selected ? 'var(--lblue2)' : 'var(--white)';
  });
}

function addIstasyon(kId){
  const k=klasmanlar.find(x=>x.id===kId);
  if(!k) return;
  const nid=Math.max(0,...k.istasyonlar.map(i=>i.id))+1;
  k.istasyonlar.push({id:nid,ad:'Yeni İstasyon',sure:60});
  autoSaveAndPushKlasmanlar();
  renderEditor(); renderListe();
}

function closeModal(){ 
  document.getElementById('modal').classList.remove('open'); 
}

function modalKey(e){ 
  if(e.key==='Enter') addKlasman(); 
  if(e.key==='Escape') closeModal(); 
}

function addKlasman(){
  const ad=document.getElementById('modal-input').value.trim();
  if(!ad) return;
  const icon = document.getElementById('modal-icon-val')?.value || '👔';
  const yeni={id:nextId++, ad, icon, urunKontrolSuresi: 60, olcuSuresi: 0, urunKabulSuresi: 0, istasyonlar:[]};
  klasmanlar.push(yeni);
  closeModal();
  secilenId=yeni.id;
  sayfa=Math.ceil(filtered().length/KL_PER_PAGE);
  autoSaveAndPushKlasmanlar();
  renderListe(); renderEditor();
}


// ────────────────────────────
// EXCEL YÜKLEME & PERFORMANS
// ────────────────────────────
function excelYukle(e){
  const file=e.target.files[0];
  if(!file) return;
  
  showFileStatus((translations[currentLang]||translations.tr).file_uploading, 'var(--blue)');
  
  const reader=new FileReader();
  reader.onload=function(ev){
    try{
      const wb=XLSX.read(ev.target.result,{type:'binary'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{defval:''});
      
      if(!rows.length){ 
        showFileStatus((translations[currentLang]||translations.tr).file_empty,'var(--red)'); 
        return; 
      }
      
      excelRows=rows;
      excelCols=Object.keys(rows[0]);
      showFileStatus('✅ '+rows.length+' ' + (translations[currentLang]||translations.tr).file_loaded + file.name,'var(--green)');
      document.getElementById('upload-zone').style.background = 'var(--lgreen)';
      document.getElementById('upload-zone').style.borderColor = 'var(--green)';
      fillColSelects();
      document.getElementById('sutun-panel').style.display = 'block';
      performansHesapla();
    }catch(err){
      showFileStatus((translations[currentLang]||translations.tr).file_error+err.message,'var(--red)');
    }
  };
  reader.readAsBinaryString(file);
}

function showFileStatus(msg,color){
  const el=document.getElementById('file-status');
  el.textContent=msg; 
  el.style.color=color;
}

function fillColSelects(){
  const opts='<option value="">— seçin —</option>'+excelCols.map(c=>`<option value="${c}">${c}</option>`).join('');
  ['col-klasman','col-inspector','col-adet','col-baslangic','col-bitis','col-talep'].forEach(id=>{ 
    const el = document.getElementById(id);
    if (el) el.innerHTML = opts; 
  });
  const mesaiEl = document.getElementById('col-mesai');
  if (mesaiEl) mesaiEl.innerHTML = '<option value="">— opsiyonel —</option>' + excelCols.map(c=>`<option value="${c}">${c}</option>`).join('');
  const yapilanDepoEl = document.getElementById('col-yapilan-depo');
  if (yapilanDepoEl) yapilanDepoEl.innerHTML = `<option value="">${(translations[currentLang]||translations.tr).filter_none}</option>` + excelCols.map(c=>`<option value="${c}">${c}</option>`).join('');
  const sonucEl = document.getElementById('col-sonuc');
  if (sonucEl) sonucEl.innerHTML = '<option value="">— Kullanma —</option>' + excelCols.map(c=>`<option value="${c}">${c}</option>`).join('');
  
  // Otomatik tahmin
  const klasmanCol = excelCols[0] || '';
  const adetCol = excelCols.find(c=>c.toLowerCase().includes('bakilacakmiktar')) || excelCols[17] || '';
  const insCol = excelCols.find(c=>c.toLowerCase().includes('inspector')) || '';
  const baslangicCol = excelCols.find(c=>c.toLowerCase().includes('inspectionbaslamatarihi')) || excelCols[10] || '';
  const bitisCol = excelCols.find(c=>c.toLowerCase().includes('inspectionbitistarihi')) || excelCols[11] || '';
  
  if(klasmanCol && document.getElementById('col-klasman')) document.getElementById('col-klasman').value = klasmanCol;
  if(adetCol && document.getElementById('col-adet')) document.getElementById('col-adet').value = adetCol;
  if(insCol && document.getElementById('col-inspector')) document.getElementById('col-inspector').value = insCol;
  if(baslangicCol && document.getElementById('col-baslangic')) document.getElementById('col-baslangic').value = baslangicCol;
  if(bitisCol && document.getElementById('col-bitis')) document.getElementById('col-bitis').value = bitisCol;
  
  const mesaiCol = excelCols.find(c => c.toLowerCase().includes('mesai') || c.toLowerCase().includes('shift') || c.toLowerCase().includes('çalışmasüresi')) || '';
  if (mesaiCol && document.getElementById('col-mesai')) document.getElementById('col-mesai').value = mesaiCol;

  // TalepNumarası otomatik tahmin
  const talepColAuto = excelCols.find(c => {
    const norm = c.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ı/g,'i').replace(/ç/g,'c');
    return norm.includes('talepno') || norm.includes('talepnumarasi') || norm.includes('talep') || norm === 'talep';
  }) || '';
  if (talepColAuto && document.getElementById('col-talep')) document.getElementById('col-talep').value = talepColAuto;

  // InspectionYapilanDepo otomatik tahmin
  const yapilanDepoColAuto = excelCols.find(c => c.toLowerCase().replace(/[^a-z]/g,'').includes('yapilandepo') || c.toLowerCase().replace(/\s/g,'') === 'inspectionyapilandepo') || excelCols[19] || '';
  if (yapilanDepoColAuto && document.getElementById('col-yapilan-depo')) document.getElementById('col-yapilan-depo').value = yapilanDepoColAuto;

  // InspectionSonuc otomatik tahmin — "sonuc" veya "sonuç" içeren sütun, "ysg" içerenleri öncelikle hariç tut
  const sonucColAuto = excelCols.find(c => {
    const norm = c.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/ç/g,'c').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ı/g,'i');
    return (norm.includes('inspectionsonuc') || norm.includes('inspectionsonuç') || norm === 'sonuc' || norm === 'sonuç') && !norm.startsWith('ysg');
  }) || excelCols.find(c => {
    const norm = c.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/ç/g,'c').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ı/g,'i');
    return norm.includes('sonuc') || norm.includes('sonuç');
  });
  if (sonucColAuto && document.getElementById('col-sonuc')) document.getElementById('col-sonuc').value = sonucColAuto;
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// PERFORMANS TABLOSUNU localStorage/Sheets VERİSİNDEN RENDER ET
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

// Sheets'ten performans verisini çek ve tabloyu güncelle (performans sekmesi açıkken arka planda)
let _perfFetchInProgress = false;
async function autoFetchPerfIfNeeded() {
  if (_perfFetchInProgress) return;
  const url = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;

  _perfFetchInProgress = true;
  try {
    const data = await jsonpFetch(url, { action: 'getPerformansRaw', token });
    if (data.status === 'ok' && Array.isArray(data.performansData) && data.performansData.length > 0) {
      performansData = fixVerimlilikPerf(restorePerformansDateObjects(data.performansData));
      // verimlilikPerf hedefVerimlilik'e göre yeniden hesaplandı
      saveData();
      renderPerfTabloFromData();
      renderDashboard();
      updateSidebar();
      showSuccessMessage('✅ ' + (translations[currentLang]||translations.tr).sheets_perf_updated + ' (' + performansData.length + ')', 3000);
    }
  } catch(e) {
    console.warn('Performans oto-çekme hatası:', e.message);
  }
  _perfFetchInProgress = false;
}

// ─── PERFORMANS TABLOSU SAYFALAMA STATE ───
let _perfPage = 1;
const _PERF_PER_PAGE = 20;

// performansData array'inden Inspector Performans Raporu tablosunu render eder
// Excel yüklenmeden, sadece kayıtlı/çekilen veriden tablo gösterir
function renderPerfTabloFromData(page) {
  const tablo = document.getElementById('perf-tablo');
  const empty = document.getElementById('perf-empty');
  if (!tablo || !empty) return;

  if (!performansData || !performansData.length) {
    tablo.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  if (page !== undefined) _perfPage = page;

  const hedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  // verimlilikPerf Sheets'ten geldiğinde doğru değerde — yeniden hesaplama

  const fmtSure = (sn) => {
    if (!sn) return '—';
    const s = Math.round(sn);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sc = s % 60;
    return h > 0
      ? `${h}s ${String(m).padStart(2,'0')}d`
      : `${m}d ${String(sc).padStart(2,'0')}sn`;
  };

  const ortPerformans = performansData.length > 0
    ? Math.round(performansData.reduce((s, r) => s + (r.genelHizPerf ?? 0), 0) / performansData.length) : 0;
  const ortVPerf = performansData.length > 0
    ? Math.round(performansData.reduce((s, r) => s + (r.genelHizPerf !== null && r.genelHizPerf !== undefined ? Math.round(r.genelHizPerf * (100 / hedef)) : 0), 0) / performansData.length) : 0;
  const ortalamaGun = performansData.length > 0
    ? Math.round(performansData.reduce((s, r) => s + (r.gunSayisi || 0), 0) / performansData.length) : 0;

  const vOrtEl = document.getElementById('verimlilik-ort');
  if (vOrtEl) {
    vOrtEl.textContent = ortVPerf + '%';
    vOrtEl.style.color = ortVPerf >= 95 ? 'var(--green)' : ortVPerf >= 85 ? 'var(--blue)' : ortVPerf >= 70 ? 'var(--amber)' : 'var(--red)';
  }

  // Sayfalama
  const totalPages = Math.ceil(performansData.length / _PERF_PER_PAGE);
  if (_perfPage > totalPages) _perfPage = totalPages;
  if (_perfPage < 1) _perfPage = 1;
  const startIdx = (_perfPage - 1) * _PERF_PER_PAGE;
  const pageData = performansData.slice(startIdx, startIdx + _PERF_PER_PAGE);

  const perfColorMap = {
    'perf-excellent': { bg: 'linear-gradient(135deg,#E8F5E9,#F1F8E9)', accent: '#00897B', badge: '#00897B', badgeTxt: '#fff', label: 'MÜKEMMEL' },
    'perf-good':      { bg: 'linear-gradient(135deg,#E3F2FD,#EEF7FF)', accent: '#1565C0', badge: '#1565C0', badgeTxt: '#fff', label: 'İYİ' },
    'perf-average':   { bg: 'linear-gradient(135deg,#FFF8E1,#FFFDE7)', accent: '#F57F17', badge: '#F57F17', badgeTxt: '#fff', label: 'ORTA' },
    'perf-poor':      { bg: 'linear-gradient(135deg,#FFEBEE,#FFF3F3)', accent: '#C62828', badge: '#C62828', badgeTxt: '#fff', label: 'DÜŞÜK' },
  };

  const kartlar = pageData.map((row, idx) => {
    const globalIdx = startIdx + idx + 1;
    const ini = row.ins.split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
    const performans = row.genelHizPerf ?? 0;
    const performansClass = getPerformanceClass(performans);
    const cm = perfColorMap[performansClass] || perfColorMap['perf-poor'];
    const vPerfDisplay = row.genelHizPerf !== null && row.genelHizPerf !== undefined
      ? Math.round(row.genelHizPerf * (100 / hedef)) : null;
    const vPerfClass = vPerfDisplay === null ? '' : getPerformanceClass(vPerfDisplay);
    const vcm = perfColorMap[vPerfClass] || cm;
    const tarihDurumu = (row.tarihBasariliKayit || 0) > 0
      ? `<span style="color:var(--green)">✅ ${row.tarihBasariliKayit}/${row.kayit}</span>`
      : `<span style="color:var(--amber)">⚠️ Tarih yok</span>`;
    const klasmanEntries = Object.entries(row.klasmanlar || {}).slice(0, 4);
    const klasmanBars = klasmanEntries.map(([k, v]) => {
      const kp = Math.round(v.hizPerf || 0);
      const kc = kp >= 95 ? '#00897B' : kp >= 85 ? '#1565C0' : kp >= 70 ? '#F57F17' : '#C62828';
      return `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <div style="font-size:10px;color:var(--muted);width:70px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0;">${k}</div>
        <div style="flex:1;height:5px;background:var(--border2);border-radius:3px;overflow:hidden;">
          <div style="width:${Math.min(100,kp)}%;height:100%;background:${kc};border-radius:3px;"></div>
        </div>
        <div style="font-size:10px;font-weight:700;color:${kc};min-width:28px;text-align:right;font-family:'DM Mono',monospace;">${kp}%</div>
      </div>`;
    }).join('');

    // Dairesel progress — pastada Düz. Performans gösterilir
    const displayPerf = vPerfDisplay !== null ? vPerfDisplay : performans;
    const displayCm   = vPerfDisplay !== null ? vcm : cm;
    const pAngle = Math.min(360, Math.round((Math.min(displayPerf, 150) / 150) * 360));

    return `
    <div style="background:${cm.bg};border:1.5px solid ${cm.accent}28;border-radius:14px;
      box-shadow:0 3px 16px ${cm.accent}1A;transition:transform .15s,box-shadow .15s;
      position:relative;overflow:hidden;display:flex;flex-direction:column;">
      <!-- Top accent bar -->
      <div style="height:4px;background:linear-gradient(90deg,${cm.accent},${cm.accent}88);border-radius:14px 14px 0 0;flex-shrink:0;"></div>

      <!-- Rank badge -->
      <div style="position:absolute;top:14px;right:14px;width:22px;height:22px;border-radius:50%;
        background:${cm.accent};color:#fff;display:flex;align-items:center;justify-content:center;
        font-size:9px;font-weight:700;font-family:'DM Mono',monospace;box-shadow:0 2px 6px ${cm.accent}44;">${globalIdx}</div>

      <!-- Header: avatar + isim + performans daire -->
      <div style="padding:14px 16px 12px;display:flex;align-items:center;gap:12px;">
        <div style="flex-shrink:0;">
          <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,${cm.accent},${cm.accent}CC);
            display:flex;align-items:center;justify-content:center;
            font-size:15px;font-weight:800;color:#fff;
            box-shadow:0 4px 12px ${cm.accent}44;border:2px solid rgba(255,255,255,.6);">
            ${ini}
          </div>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${row.ins}</div>
          <div style="font-size:10px;color:var(--muted);margin-top:1px;">${row.gunSayisi || 0} gün · ${tarihDurumu}</div>
          <div style="margin-top:5px;">
            <span style="font-size:9px;font-weight:700;background:${cm.badge};color:${cm.badgeTxt};
              padding:2px 7px;border-radius:8px;letter-spacing:.4px;">${cm.label}</span>
          </div>
        </div>
        <!-- Mini performans daire — sadece Düz. Performans -->
        <div style="flex-shrink:0;text-align:center;">
          <div style="width:64px;height:64px;border-radius:50%;
            background:conic-gradient(${displayCm.accent} ${pAngle}deg, #e2ecf8 0deg);
            display:flex;align-items:center;justify-content:center;
            box-shadow:0 2px 10px ${displayCm.accent}2A;">
            <div style="width:46px;height:46px;border-radius:50%;background:#fff;
              display:flex;flex-direction:column;align-items:center;justify-content:center;
              box-shadow:inset 0 1px 3px rgba(0,0,0,.07);">
              <div style="font-size:13px;font-weight:800;color:${displayCm.accent};font-family:'DM Mono',monospace;line-height:1;">${displayPerf}%</div>
              <div style="font-size:7px;color:var(--muted);letter-spacing:.4px;text-transform:uppercase;">perf</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats: 2×2 grid -->
      <div style="padding:0 16px 10px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        ${[
          ['📦','Adet',(row.adet||0).toFixed(0)],
          ['📋','Kayıt',row.kayit||0],
          ['⏱','Standart',fmtSure(row.standartSure)],
          ['🕐','Mesai',fmtSure(row.mesaiSure) + (row.toplamMesaistiSaniye > 0 ? ` 🌙+${Math.round(row.toplamMesaistiSaniye/60)}dk` : '')]
        ].map(([ic,lb,val])=>`
          <div style="background:rgba(255,255,255,.75);border:1px solid var(--border2);border-radius:8px;
            padding:7px 8px;display:flex;align-items:center;gap:7px;">
            <span style="font-size:14px;">${ic}</span>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace;line-height:1.2;">${val}</div>
              <div style="font-size:8px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;">${lb}</div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Klasman bars -->
      <div style="padding:0 16px 14px;border-top:1px solid ${cm.accent}14;margin-top:2px;padding-top:10px;">
        ${klasmanBars || `<div style="font-size:10px;color:var(--muted2);font-style:italic;text-align:center;padding:4px 0;">Klasman verisi yok</div>`}
      </div>
    </div>`;
  }).join('');

  // Sayfalama butonları HTML
  const pageBtns = (() => {
    let html = '';
    for (let p = 1; p <= totalPages; p++) {
      const active = p === _perfPage;
      html += `<button onclick="renderPerfTabloFromData(${p})"
        style="min-width:30px;height:30px;border-radius:7px;border:1px solid ${active ? 'var(--blue2)' : 'var(--border)'};
        background:${active ? 'var(--blue2)' : 'var(--white)'};color:${active ? '#fff' : 'var(--navy)'};
        cursor:pointer;font-size:12px;font-weight:${active ? '700' : '500'};padding:0 6px;
        transition:all .12s;">${p}</button>`;
    }
    return html;
  })();

  const verimlilikBaslik = hedef !== 100
    ? `⚡ Düz. Performans <span style="font-size:9px;color:var(--amber)">(Hedef %${hedef})</span>`
    : `⚡ Düz. Performans`;

  tablo.innerHTML = `
    <!-- RAPOR BAŞLIĞI -->
    <div style="padding:18px 22px;border-bottom:1px solid var(--border2);background:linear-gradient(135deg,var(--lblue3) 0%,#fff 70%);">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div>
          <div style="font-size:16px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:8px;">
            📊 Inspector Performans Raporu
            <span style="font-size:11px;font-weight:600;background:var(--blue2);color:#fff;padding:3px 10px;border-radius:99px;">${performansData.length} inspector</span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px;display:flex;gap:16px;flex-wrap:wrap;">
            <span><span data-i18n="adj_avg_short">⚡ Adj. Avg.:</span> <strong style="color:var(--amber)">${ortVPerf}%</strong></span>
            <span>📅 <span data-i18n='raw_avg'>Ham Ort.:</span> <strong style="color:var(--muted)">${ortPerformans}%</strong></span>
            <span><span data-i18n="avg_work_days">📆 Avg. Working:</span> <strong style="color:var(--navy)">${ortalamaGun} gün</strong></span>
          </div>
          <div style="font-size:10px;color:var(--green);margin-top:4px;">
            ✅ <span data-i18n='perf_formula'>Std Duration ÷ (Days × 7.5h) × 100</span>
            ${hedef !== 100 ? `&nbsp;·&nbsp; <span style="color:var(--amber)">⚡ <span data-i18n='adj_formula'>Raw Perf × (100÷${hedef})</span></span>` : ''}
          </div>
        </div>
        <!-- Özet stat kutuları -->
        <div style="display:flex;gap:10px;flex-shrink:0;">
          ${[
            ['🏆',(translations[currentLang]||translations.tr).perf_excellent,performansData.filter(r=>(r.genelHizPerf??0)>=95).length,'var(--green)','var(--lgreen)'],
            ['👍','İyi',performansData.filter(r=>{const p=r.genelHizPerf??0;return p>=85&&p<95}).length,'var(--blue)','var(--lblue2)'],
            ['⚠️',(translations[currentLang]||translations.tr).perf_average,performansData.filter(r=>{const p=r.genelHizPerf??0;return p>=70&&p<85}).length,'var(--amber)','var(--lamber)'],
            ['📉',(translations[currentLang]||translations.tr).perf_poor,performansData.filter(r=>(r.genelHizPerf??0)<70).length,'var(--red)','var(--lred)']
          ].map(([ic,lb,cnt,col,bg])=>`
            <div style="background:${bg};border:1px solid ${col}33;border-radius:10px;padding:10px 14px;text-align:center;min-width:54px;">
              <div style="font-size:16px;">${ic}</div>
              <div style="font-size:18px;font-weight:800;color:${col};font-family:'DM Mono',monospace;line-height:1;">${cnt}</div>
              <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">${lb}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>

    <!-- KARTLAR: 3 sütunlu grid -->
    <div style="padding:18px 22px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
      ${kartlar || '<div style="grid-column:1/-1;padding:32px;text-align:center;color:var(--muted2);">Veri yok</div>'}
    </div>

    <!-- SAYFALAMA -->
    ${totalPages > 1 ? `
    <div style="padding:14px 22px 18px;border-top:1px solid var(--border2);display:flex;align-items:center;justify-content:space-between;gap:12px;background:var(--offwhite);border-radius:0 0 var(--r) var(--r);">
      <button onclick="if(_perfPage>1)renderPerfTabloFromData(_perfPage-1)"
        ${_perfPage<=1?'disabled':''} class="pag-btn">← Önceki</button>
      <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;justify-content:center;">
        ${pageBtns}
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pag-info">${startIdx+1}–${Math.min(startIdx+_PERF_PER_PAGE,performansData.length)} / ${performansData.length}</span>
        <button onclick="if(_perfPage<${totalPages})renderPerfTabloFromData(_perfPage+1)"
          ${_perfPage>=totalPages?'disabled':''} class="pag-btn">Sonraki →</button>
      </div>
    </div>` : ''}
  `;

  tablo.style.display = 'block';
  empty.style.display = 'none';
}


// ════════════════════════════════════════════════════════════════════════════════
// ÖRNEKLEME TABLOSU
// ════════════════════════════════════════════════════════════════════════════════

// Bir Alttan tablosu: =EĞER(R<=20;R; EĞER(R<=32;20; EĞER(R<=50;20; EĞER(R<=80;32; EĞER(R<=125;50;80)))))
// Bir Alttan örnekleme tablosu
// BakilacakMiktar aralığı → kontrol edilecek adet
// ≤13→13, ≤20→20, ≤32→32, ≤50→32, ≤80→50, ≤125→80, ≤200→125, >200→200
const ORNEKLEME_BIR = [
  { max: 13,       val: 13  },
  { max: 20,       val: 20  },
  { max: 32,       val: 32  },
  { max: 50,       val: 32  },
  { max: 80,       val: 50  },
  { max: 125,      val: 80  },
  { max: 200,      val: 125 },
  { max: Infinity, val: 200 }
];

// İki Alttan örnekleme tablosu
// ≤13→13, ≤20→20, ≤32→32, ≤50→32, ≤80→32, ≤125→50, ≤200→80, >200→125
const ORNEKLEME_IKI = [
  { max: 13,       val: 13  },
  { max: 20,       val: 20  },
  { max: 32,       val: 32  },
  { max: 50,       val: 32  },
  { max: 80,       val: 32  },
  { max: 125,      val: 50  },
  { max: 200,      val: 80  },
  { max: Infinity, val: 125 }
];

function orneklemeAdet(adet, mod) {
  if (mod === 'kapali' || !mod) return adet;
  const tablo = mod === 'bir' ? ORNEKLEME_BIR : ORNEKLEME_IKI;
  for (const basamak of tablo) {
    if (adet <= basamak.max) {
      return basamak.val === null ? adet : basamak.val;
    }
  }
  return adet;
}

// ════════════════════════════════════════════════════════════════════════════════
// TARİHE GÖRE FARKLI ÖRNEKLEME SEVİYELERİ (Dönemler)
// ════════════════════════════════════════════════════════════════════════════════
// Aynı Excel dosyasında, farklı tarih aralıkları için farklı örnekleme modu
// kullanılabilmesi sağlanır (örn. 1-15 Ocak Kapalı, 16-28 Ocak Bir Alttan,
// 29 Ocak - 28 Şubat İki Alttan). En fazla 3 dönem desteklenir.
// Her dönem: { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD', mode: 'kapali'|'bir'|'iki' }
const ORNEKLEME_DONEM_MAX = 3;
let orneklemeDonemleri = [];

function toggleOrneklemeDonemleri() {
  const aktif = document.getElementById('ornekleme-tarihli-aktif')?.checked;
  const wrap = document.getElementById('ornekleme-donemler-wrap');
  const tag  = document.getElementById('ornekleme-default-tag');
  if (wrap) wrap.style.display = aktif ? 'flex' : 'none';
  if (tag)  tag.style.display  = aktif ? 'inline-block' : 'none';
  if (aktif && orneklemeDonemleri.length === 0) {
    // İlk açılışta kullanım kolaylığı için bir dönem ekle
    orneklemeDonemleri.push({ start: '', end: '', mode: 'kapali' });
  }
  renderOrneklemeDonemleri();
  performansHesapla();
}

function addOrneklemeDonemi() {
  if (orneklemeDonemleri.length >= ORNEKLEME_DONEM_MAX) return;
  orneklemeDonemleri.push({ start: '', end: '', mode: 'kapali' });
  renderOrneklemeDonemleri();
  performansHesapla();
}

function removeOrneklemeDonemi(idx) {
  orneklemeDonemleri.splice(idx, 1);
  renderOrneklemeDonemleri();
  performansHesapla();
}

function onOrneklemeDonemChange(el) {
  const idx = parseInt(el.dataset.idx, 10);
  const field = el.dataset.field;
  if (!orneklemeDonemleri[idx]) return;
  orneklemeDonemleri[idx][field] = el.value;
  performansHesapla();
}

function renderOrneklemeDonemleri() {
  const listEl = document.getElementById('ornekleme-donemler-list');
  const addBtn = document.getElementById('btn-ornekleme-donem-ekle');
  const maxHint = document.getElementById('ornekleme-donem-max-hint');
  if (!listEl) return;
  const t = translations[currentLang] || translations.tr;

  listEl.innerHTML = orneklemeDonemleri.map((p, idx) => `
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:#fff;border:1px solid #E1BEE7;border-radius:7px;padding:6px 10px">
      <span style="font-size:11px;font-weight:700;color:#8E24AA;min-width:14px">${idx + 1}.</span>
      <label style="font-size:10.5px;color:var(--muted);margin:0" data-i18n="sampling_period_start">${t.sampling_period_start}</label>
      <input type="date" data-idx="${idx}" data-field="start" value="${p.start || ''}" onchange="onOrneklemeDonemChange(this)" style="width:auto;padding:4px 6px;font-size:12px">
      <label style="font-size:10.5px;color:var(--muted);margin:0" data-i18n="sampling_period_end">${t.sampling_period_end}</label>
      <input type="date" data-idx="${idx}" data-field="end" value="${p.end || ''}" onchange="onOrneklemeDonemChange(this)" style="width:auto;padding:4px 6px;font-size:12px">
      <label style="font-size:10.5px;color:var(--muted);margin:0" data-i18n="sampling_period_mode">${t.sampling_period_mode}</label>
      <select data-idx="${idx}" data-field="mode" onchange="onOrneklemeDonemChange(this)" style="width:auto;padding:4px 8px;font-size:12px">
        <option value="kapali" ${p.mode === 'kapali' ? 'selected' : ''}>${t.mode_kapali}</option>
        <option value="bir" ${p.mode === 'bir' ? 'selected' : ''}>${t.mode_bir}</option>
        <option value="iki" ${p.mode === 'iki' ? 'selected' : ''}>${t.mode_iki}</option>
      </select>
      <button type="button" onclick="removeOrneklemeDonemi(${idx})" title="${t.sampling_period_remove}" style="border:none;background:none;color:var(--red);cursor:pointer;font-size:14px;padding:2px 6px;margin-left:auto">✕</button>
    </div>
  `).join('');

  if (addBtn) addBtn.style.display = orneklemeDonemleri.length >= ORNEKLEME_DONEM_MAX ? 'none' : '';
  if (maxHint) maxHint.style.display = orneklemeDonemleri.length >= ORNEKLEME_DONEM_MAX ? '' : 'none';
}

// Verilen tarih için, tarih aralıklı mod aktifse ve tarih bir döneme denk
// geliyorsa o dönemin örnekleme modunu döndürür. Aksi halde null döner
// (yani varsayılan/genel mod kullanılmalı).
function getOrneklemeModForDate(date) {
  if (!date) return null;
  const aktif = document.getElementById('ornekleme-tarihli-aktif')?.checked;
  if (!aktif) return null;
  for (const p of orneklemeDonemleri) {
    if (!p.start || !p.end) continue;
    const [sy, sm, sd] = p.start.split('-').map(Number);
    const [ey, em, ed] = p.end.split('-').map(Number);
    const startDate = new Date(sy, sm - 1, sd, 0, 0, 0, 0);
    const endDate   = new Date(ey, em - 1, ed, 23, 59, 59, 999);
    if (date >= startDate && date <= endDate) return p.mode;
  }
  return null;
}

function updateOrneklemeUI() {
  const mod = document.querySelector('input[name="ornekleme-mod"]:checked')?.value || 'kapali';
  const preview = document.getElementById('ornekleme-tablo-preview');
  const aciklama = document.getElementById('ornekleme-aciklama');
  if (!preview) return;

  if (mod === 'kapali') {
    preview.style.display = 'none';
    if (aciklama) aciklama.innerHTML = (translations[currentLang]||translations.tr).sampling_desc;
  } else {
    const tablo = mod === 'bir' ? ORNEKLEME_BIR : ORNEKLEME_IKI;
    const satirlar = tablo.map(b => `≤${b.max===Infinity?'∞':b.max}→${b.val===null?'R':b.val}`).join('  ');
    preview.style.display = 'block';
    preview.textContent = satirlar;
    if (aciklama) aciklama.innerHTML = mod === 'bir'
      ? '<strong>Bir Alttan:</strong> parti büyüklüğüne göre örneklem alınır.'
      : '<strong>İki Alttan:</strong> daha küçük örneklem — daha az kontrol adedi.';
  }
}

function performansHesapla(){
  const tablo=document.getElementById('perf-tablo');
  const empty=document.getElementById('perf-empty');

  if(!excelRows.length){
    tablo.style.display='none'; 
        empty.style.display='block'; 
    return;
  }

  const klasmanCol = document.getElementById('col-klasman')?.value;
  const insCol = document.getElementById('col-inspector')?.value;
  const adetCol = document.getElementById('col-adet')?.value;
  const baslangicCol = document.getElementById('col-baslangic')?.value || '';
  const bitisCol = document.getElementById('col-bitis')?.value || '';
  const mesaiCol = document.getElementById('col-mesai')?.value || '';
  const talepCol = document.getElementById('col-talep')?.value || '';
  // talepCol seçilmemişse Excel sütun adlarından otomatik bul
  const talepColFallback = talepCol || excelCols.find(c => {
    const norm = c.toLowerCase().replace(/[^a-z0-9]/g,'').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ı/g,'i').replace(/ç/g,'c');
    return norm.includes('talepno') || norm.includes('talepnumarasi') || norm === 'talep';
  }) || '';
  const yapilanDepoCol = document.getElementById('col-yapilan-depo')?.value || '';
  const sonucCol = document.getElementById('col-sonuc')?.value || '';
  const orneklemeMod = document.querySelector('input[name="ornekleme-mod"]:checked')?.value || 'kapali';
  const verimlilikHedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);

  updateOrneklemeUI();

  // Verimlilik açıklama güncelle
  const vAciklama = document.getElementById('verimlilik-aciklama');
  if (vAciklama) {
    if (verimlilikHedef === 100) vAciklama.textContent = '';
    else if (verimlilikHedef < 100) vAciklama.textContent = `(%${verimlilikHedef} (translations[currentLang]||translations.tr).target_below_100 ${(100/verimlilikHedef).toFixed(2)}x) `;
    else vAciklama.textContent = `(%${verimlilikHedef} (translations[currentLang]||translations.tr).target_above_100 ${(100/verimlilikHedef).toFixed(2)}x) `;
  }

  if(!klasmanCol || !insCol || !adetCol){
    showFileStatus((translations[currentLang]||translations.tr).col_select_warning, 'var(--amber)');
    return;
  }

  // Klasman mapping hazırla
  // Ölçü tablosu: BakilacakMiktar → ölçülecek adet
  function getOlcuAdet(adet) {
    if (adet <= 32)  return 6;
    if (adet <= 50)  return 9;
    if (adet <= 80)  return 9;
    if (adet <= 125) return 9;
    return 12;
  }

  // Ürün Kabul katsayısı: BakilacakMiktar → kaç kat
  function getUrunKabulKat(adet) {
    if (adet <= 32)  return 0.5;
    if (adet <= 80)  return 1.1;
    if (adet <= 125) return 1.2;
    return 1.3;
  }

  function normalize(str) { return String(str).toLowerCase().trim().replace(/[^\w]/g,''); }
  const klasmanMap = {};
  klasmanlar.forEach(k => {
    const normalKey = normalize(k.ad);
    klasmanMap[normalKey] = {
      urunKontrolSuresi: parseFloat(k.urunKontrolSuresi) || 0,
      olcuSuresi: parseFloat(k.olcuSuresi) || 0,
      urunKabulSuresi: parseFloat(k.urunKabulSuresi) || 0,
      istasyonSuresi: k.istasyonlar.reduce((s,i)=>s+(parseFloat(i.sure)||0),0),
      istasyonDetay: k.istasyonlar.map(i => ({ ad: i.ad, sure: parseFloat(i.sure)||0 }))
    };
  });

  const inspectorMap = {};
  const eslesmeyenKlasmanlar = new Set();
  let basariliTarihKayitlar = 0;
  let tarihHataliKayitlar = 0;

  let kaldiSatirSayisi = 0;

  excelRows.forEach(row => {
    const excelKlasman = String(row[klasmanCol]||'').trim();
    const ins = String(row[insCol]||'').trim();
    const adetHam = parseFloat(row[adetCol])||0;
    const baslangicTarih = baslangicCol ? row[baslangicCol] : null;
    const bitisTarih = bitisCol ? row[bitisCol] : null;
    const mesaiHam = mesaiCol ? row[mesaiCol] : null;

    // Tarihleri en başta parse et — örnekleme modu seçimi için de kullanılır
    const parsedBaslangic = baslangicTarih ? parseFlexibleDate(baslangicTarih) : null;
    const parsedBitis     = bitisTarih     ? parseFlexibleDate(bitisTarih)     : null;
    const tarihGecerli = parsedBaslangic && parsedBitis &&
                         parsedBitis > parsedBaslangic &&
                         parsedBaslangic.getFullYear() > 2000;

    // Örnekleme modu önceliği:
    // 1) Varsayılan: yukarıdaki genel mod (radio)
    // 2) Tarih aralıklı mod aktifse ve satırın başlangıç tarihi bir döneme denk
    //    geliyorsa o dönemin modu kullanılır
    // 3) InspectionSonuc "Kaldı" ise her durumda Kapalı (en yüksek öncelik —
    //    tüm adet kontrol edilmeli)
    let satırOrneklemeMod = orneklemeMod;
    const donemMod = getOrneklemeModForDate(parsedBaslangic);
    if (donemMod !== null) satırOrneklemeMod = donemMod;
    if (sonucCol) {
      const sonucRaw = String(row[sonucCol] || '').trim();
      // Türkçe karakter duyarsız karşılaştırma (ı→i, İ→i, ğ→g vs.)
      const sonucNorm = sonucRaw.toLocaleLowerCase('tr-TR').replace(/ı/g,'i').replace(/İ/g,'i').replace(/ğ/g,'g').replace(/ş/g,'s').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ç/g,'c');
      if (sonucNorm === 'kaldi' || sonucNorm.includes('kaldi')) {
        satırOrneklemeMod = 'kapali';
        kaldiSatirSayisi++;
      }
    }

    const adet = orneklemeAdet(adetHam, satırOrneklemeMod);

    // InspectionYapilanDepo filtresi: sütun seçiliyse boş satırları atla
    if (yapilanDepoCol) {
      const depoVal = String(row[yapilanDepoCol] ?? '').trim();
      if (!depoVal) return;
    }
    
    if(!excelKlasman || !ins || !adet) return;
    
    const klasmanKey = normalize(excelKlasman);
    const klasmanInfo = klasmanMap[klasmanKey];
    
    if(!klasmanInfo) {
      eslesmeyenKlasmanlar.add(excelKlasman);
      return;
    }
    
    if(!inspectorMap[ins]) {
      inspectorMap[ins] = {
        ins: ins,
        klasmanlar: {},
        toplamAdet: 0,
        kayitListesi: [],
        mesaiSureSn: null
      };
    }
    
    // Mesai süresini parse et
    if (mesaiHam !== null && mesaiHam !== undefined && mesaiHam !== '') {
      const parsedMesai = parseMesaiSuresi(mesaiHam);
      if (parsedMesai && parsedMesai > 0) {
        if (inspectorMap[ins].mesaiSureSn === null || parsedMesai > inspectorMap[ins].mesaiSureSn) {
          inspectorMap[ins].mesaiSureSn = parsedMesai;
        }
      }
    }

    if (tarihGecerli) {
      const zatenVar = inspectorMap[ins].kayitListesi.some(
        r => r.parsedBaslangic.getTime() === parsedBaslangic.getTime() &&
             r.parsedBitis.getTime()     === parsedBitis.getTime()
      );
      if (!zatenVar) inspectorMap[ins].kayitListesi.push({ parsedBaslangic, parsedBitis });
      basariliTarihKayitlar++;
    } else {
      tarihHataliKayitlar++;
    }

    // Standart süre hesaplama:
    // Adet > 10 ise: (kontrol süresi × adet) + ölçü eki + ürün kabul eki + istasyon süresi
    // Adet ≤ 10 ise: sadece (kontrol süresi × adet) — sabit süreler dahil edilmez
    let standartSure;
    if (adet > 15) {
      const olcuAdet = getOlcuAdet(adet);
      const urunKabulKat = getUrunKabulKat(adet);
      const olcuEk = olcuAdet * (klasmanInfo.olcuSuresi || 0);
      const urunKabulEk = urunKabulKat * (klasmanInfo.urunKabulSuresi || 0);
      standartSure = (klasmanInfo.urunKontrolSuresi * adet) + olcuEk + urunKabulEk + klasmanInfo.istasyonSuresi;
    } else {
      // 15 adet ve altı: yalnızca kontrol süresi × adet
      standartSure = klasmanInfo.urunKontrolSuresi * adet;
    }

    // Bu kaydın fiili süresi = başlangıç-bitiş farkı (mola düşümlü)
    const kayitFiiliSure = tarihGecerli
      ? hesaplaGerceklesenSure(parsedBaslangic, parsedBitis)
      : null;

    const klasmanKey2 = excelKlasman;
    if (!inspectorMap[ins].klasmanlar[klasmanKey2]) {
      inspectorMap[ins].klasmanlar[klasmanKey2] = {
        kayitlar: [],
        toplamAdet: 0,
        toplamStandartSure: 0,
        toplamKayitFiiliSure: 0
      };
    }
    const kl = inspectorMap[ins].klasmanlar[klasmanKey2];
    kl.toplamAdet += adet;
    kl.toplamStandartSure += standartSure;
    if (kayitFiiliSure && kayitFiiliSure > 0) {
      kl.toplamKayitFiiliSure += kayitFiiliSure;
    }
    kl.kayitlar.push({ no: kl.kayitlar.length + 1, klasman: excelKlasman, adet, standartSure, kayitFiiliSure, kontrolAdetSuresi: klasmanInfo.urunKontrolSuresi, istasyonSuresi: klasmanInfo.istasyonSuresi, istasyonDetay: klasmanInfo.istasyonDetay || [], baslangic: parsedBaslangic, bitis: parsedBitis, tarihGecerli, talepNo: talepColFallback ? String(row[talepColFallback]||'').trim() : '' });

    inspectorMap[ins].toplamAdet += adet;
  });

  // Kaldı özet göstergesi güncelle
  const kaldiOzet = document.getElementById('sonuc-kaldi-ozet');
  if (kaldiOzet) {
    if (sonucCol && kaldiSatirSayisi > 0) {
      kaldiOzet.style.display = 'block';
      kaldiOzet.textContent = '🔴 ' + kaldiSatirSayisi + ' satır "Kaldı" → Kapalı mod uygulandı';
    } else {
      kaldiOzet.style.display = 'none';
    }
  }

  // Inspector bazında sonuç map'i oluştur
  const map = {};
  Object.values(inspectorMap).forEach(inspectorData => {
    const ins = inspectorData.ins;
    const klasmanlarObj = {};

    // Inspector'ın tüm tarih dilimlerinden gerçek çalışma süresini hesapla (saniye)
    const fiiliSureSn = hesaplaInspectorFiiliSure(inspectorData.kayitListesi);
    
    // Günlük mesai hesaplama
    const mesaiHesap = hesaplaGunlukMesaiSuresi(inspectorData.kayitListesi);
    
    let toplamStandartSure = 0;   
    let toplamAdet = 0;
    let toplamKayitFiiliSure = 0; 

    Object.entries(inspectorData.klasmanlar).forEach(([klasman, kl]) => {
      toplamStandartSure += kl.toplamStandartSure;
      toplamAdet += kl.toplamAdet;
      toplamKayitFiiliSure += (kl.toplamKayitFiiliSure || 0);

      // Klasman bazında hızPerf: bu klasmanın standart süresi / tüm inspector standart süresi × genel performans
      // (Genel performans henüz hesaplanmadığından burada geçici saklarız, aşağıda düzeltiriz)
      const hizPerf = 0; // placeholder — aşağıda genel performans belli olunca güncellenir

      klasmanlarObj[klasman] = {
        adet: kl.toplamAdet,
        standartSure: kl.toplamStandartSure,
        kayitFiiliSure: kl.toplamKayitFiiliSure || 0,
        hizPerf,
        hacimPerf: null,
        kayitlar: kl.kayitlar  // Kayıt bazlı detay için
      };
    });

    // Tek Performans Metriği - Mesai Bazlı
    let mesaiSureSn;
    let performans = null;
    
    if (inspectorData.mesaiSureSn && inspectorData.mesaiSureSn > 0) {
      // Excel'den mesai sütunu var
      mesaiSureSn = inspectorData.mesaiSureSn;
      performans = Math.round((toplamStandartSure / mesaiSureSn) * 100);
    } else if (mesaiHesap && mesaiHesap.toplamMesaiSaniye > 0) {
      // Günlük 7.5 saat × gün sayısı
      mesaiSureSn = mesaiHesap.toplamMesaiSaniye;
      performans = Math.round((toplamStandartSure / mesaiSureSn) * 100);
    } else {
      // Hiçbiri yoksa null
      mesaiSureSn = fiiliSureSn; // Gösterim için
      performans = null;
    }

    // Klasman hizPerf düzeltmesi: her klasmanın standart süresi / toplam standart süre × genel performans
    // Böylece günün tüm mesaisi tek klasmana yüklenmez; çoklu klasman çalışan inspector'da hakkaniyet sağlanır
    if (performans !== null && toplamStandartSure > 0) {
      Object.keys(klasmanlarObj).forEach(k => {
        const oran = klasmanlarObj[k].standartSure / toplamStandartSure;
        klasmanlarObj[k].hizPerf = Math.round(oran * performans);
      });
    }

    map[ins] = {
      ins: ins,
      adet: toplamAdet,
      fiiliSure: fiiliSureSn,                  // Sadece gösterim için
      kayitFiiliSure: toplamKayitFiiliSure,    // Debug için
      standartSure: toplamStandartSure,        
      mesaiSure: mesaiSureSn,                  
      kayit: Object.values(inspectorData.klasmanlar).reduce((s,k)=>s+k.kayitlar.length,0),
      klasmanlar: klasmanlarObj,
      // Tek performans metriği
      genelHizPerf: performans,           // Mesai bazlı performans
      genelPerformans: performans,        // Aynı değer
      genelHacimPerf: null,
      // Verimlilik düzeltmeli performans
      verimlilikPerf: performans !== null ? Math.round(performans * (100 / verimlilikHedef)) : null,
      hedefVerimlilik: verimlilikHedef,
      tarihBasariliKayit: inspectorData.kayitListesi.length,
      gunSayisi: mesaiHesap ? mesaiHesap.gunSayisi : 0,
      gunlukDetay: mesaiHesap ? mesaiHesap.gunlukDetay : [],
      toplamMesaistiSaniye: mesaiHesap ? (mesaiHesap.toplamMesaistiSaniye || 0) : 0,
      gunlukOvertimeDetay: mesaiHesap ? (mesaiHesap.gunlukOvertimeDetay || {}) : {}
    };

    
    // Debug log
    console.log(`[${ins}] Gün:${mesaiHesap?.gunSayisi || 0} Standart:${Math.round(toplamStandartSure/60)}dk Mesai:${Math.round(mesaiSureSn/60)}dk Mesaisti:${Math.round((mesaiHesap?.toplamMesaistiSaniye||0)/60)}dk Performans:${performans}% VPerf:${performans !== null ? Math.round(performans*(100/verimlilikHedef)) : null}%`);
  });

  const liste = Object.values(map).sort((a, b) => {
    const perfA = a.genelHizPerf ?? 0;
    const perfB = b.genelHizPerf ?? 0;
    return perfB - perfA;
  });

  if(!liste.length){ 
    tablo.style.display='none'; 
    empty.style.display='block'; 
    showFileStatus((translations[currentLang]||translations.tr).no_data_processable, 'var(--red)');
    return; 
  }

  // Performans verilerini güncelle
  performansData = liste;

  // Yeni bir yükleme başlıyor — önceki Temizle iptalini sıfırla
  window._uploadAborted = false;

  // Google Sheets'e otomatik gönder (bağlantı ayarı yapılmışsa)
  pushPerformansToSheets(liste);
  pushPerformansRawToSheets(liste); // tam JSON — diğer bilgisayarlardan çekilebilir
  
  const satirlar=liste.map((row,i)=>{
    const ini=row.ins.split(' ').map(w=>w[0]||'').slice(0,2).join('').toUpperCase();
    
    const performans = row.genelHizPerf ?? 0;
    const performansClass = getPerformanceClass(performans);
    
    const klasmanDetay = Object.entries(row.klasmanlar)
      .map(([k,v]) => {
        const klasmanPerf = v.hizPerf ?? 0;
        return `${k}: ${v.adet} adet (${klasmanPerf}%)`;
      })
      .join('<br>');
    
    const fmtSure = (sn) => {
      if (!sn) return '—';
      const s = Math.round(sn);
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sc = s % 60;
      return h > 0
        ? `${h}s ${String(m).padStart(2,'0')}d ${String(sc).padStart(2,'0')}sn`
        : `${m}d ${String(sc).padStart(2,'0')}sn`;
    };
    
    const tarihDurumu = row.tarihBasariliKayit > 0 ? `✅ ${row.tarihBasariliKayit}/${row.kayit}` : `⚠️ Tarih yok`;
    const vPerf = row.verimlilikPerf;
    const vPerfClass = vPerf === null ? '' : vPerf >= 95 ? 'perf-excellent' : vPerf >= 85 ? 'perf-good' : vPerf >= 70 ? 'perf-average' : 'perf-poor';
    const verimlilikHedef3 = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
    
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:9px">
        <div class="avatar">${ini}</div>
        <div>
          <strong style="font-size:13px">${row.ins}</strong>
          <div style="font-size:10px;color:var(--muted2)">${row.gunSayisi || 0} ${(translations[currentLang]||translations.tr).working} · ${tarihDurumu}</div>
        </div>
      </div></td>
      <td style="color:var(--muted);font-family:'DM Mono',monospace">${row.kayit}</td>
      <td style="font-family:'DM Mono',monospace">${row.adet.toFixed(0)}</td>
      <td style="font-family:'DM Mono',monospace">${fmtSure(row.standartSure)}</td>
      <td style="font-family:'DM Mono',monospace">${fmtSure(row.mesaiSure)}</td>
      <td style="font-family:'DM Mono',monospace">
        <div>
          <span class="${performansClass}" style="font-weight:700;font-size:14px">${performans !== null ? performans+'%' : '—'}</span>
          <div style="font-size:9px;color:var(--muted);margin-top:1px">
            ${row.gunSayisi || 0} ${(translations[currentLang]||translations.tr).days_x_formula.replace('{h}', Math.round((row.mesaiSure||0)/3600))}
          </div>
        </div>
      </td>
      <td style="font-family:'DM Mono',monospace;background:${verimlilikHedef3 !== 100 ? 'linear-gradient(135deg,#FFFDE7,#fff)' : 'transparent'}">
        <div>
          <span class="${vPerfClass}" style="font-weight:700;font-size:14px">${vPerf !== null ? vPerf+'%' : '—'}</span>
          <div style="font-size:9px;color:var(--muted);margin-top:1px">
            ${performans !== null && verimlilikHedef3 !== 100 ? `${performans}% × (100÷${verimlilikHedef3})` : verimlilikHedef3 === 100 ? 'Hedef=%100 (aynı)' : '—'}
          </div>
        </div>
      </td>
      <td style="font-size:11px;color:var(--muted2);max-width:200px" title="${klasmanDetay.replace(/<br>/g, ', ')}">${klasmanDetay}</td>
    </tr>`;
  }).join('');

  const toplamKayit = excelRows.filter(row => {
    const excelKlasman = String(row[klasmanCol]||'').trim();
    const klasmanKey = normalize(excelKlasman);
    return klasmanMap[klasmanKey];
  }).length;

  const ortPerformans = liste.length > 0 ?
    Math.round(liste.reduce((sum, row) => sum + (row.genelHizPerf ?? 0), 0) / liste.length) : 0;

  const ortalamaGun = liste.length > 0 ? 
    Math.round(liste.reduce((sum, row) => sum + (row.gunSayisi || 0), 0) / liste.length) : 0;

  const ortVPerf = liste.length > 0 ?
    Math.round(liste.reduce((sum, row) => sum + (row.verimlilikPerf ?? 0), 0) / liste.length) : 0;

  // Verimlilik ortalama kutusunu güncelle
  const vOrtEl = document.getElementById('verimlilik-ort');
  if (vOrtEl) {
    vOrtEl.textContent = ortVPerf + '%';
    vOrtEl.style.color = ortVPerf >= 95 ? 'var(--green)' : ortVPerf >= 85 ? 'var(--blue)' : ortVPerf >= 70 ? 'var(--amber)' : 'var(--red)';
  }

  const verimlilikHedef2 = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);

  // performansData güncellendi; sayfalı kart renderını çağır
  _perfPage = 1;
  renderPerfTabloFromData(1);
  tablo.style.display='block';
  empty.style.display='none';
  
  updateSidebar();
  renderDashboard();
  
  showFileStatus(`✅ ${liste.length}` + (translations[currentLang]||translations.tr).analysis_done, 'var(--green)');
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// CANLI GÖSTERİM FONKSİYONLARI
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

// ────────────────────────────
// CANLI GÖSTERİM SAYFA İNİT
// ────────────────────────────
function initCanliPage() {
  console.log('🎬 Canlı sayfa başlatılıyor...');
  showWelcomeScreen();
  updateSlideWelcomeStats();
  renderTopInspectors();
  console.log('✅ Canlı sayfa hazır');
}

function updateSlideWelcomeStats() {
  const totalInspectors = performansData.length;
  const avgPerformance = totalInspectors > 0 
    ? Math.round(performansData.reduce((sum, i) => sum + getDispPerf(i), 0) / totalInspectors)
    : 0;
  
  document.getElementById('welcome-total').textContent = totalInspectors;
  document.getElementById('welcome-avg').textContent = avgPerformance + '%';
}

// ────────────────────────────
// SLIDESHOW KONTROLÜ
// ────────────────────────────
function toggleSlideshow() {
  if (slideshowActive) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  if (!performansData.length) {
    alert((translations[currentLang]||translations.tr).no_perf_alert);
    return;
  }
  
  slideshowActive = true;
  currentSlideIndex = 0;
  
  // Kontrol panelini gizle
  document.getElementById('canli-controls').style.display = 'none';
  
  // Buton metnini değiştir
  document.getElementById('slideshow-btn').innerHTML = (translations[currentLang]||translations.tr).stop_slideshow;
  
  // Inspector listesini hazırla
  prepareSlideshow();
  
  // İlk slaydı göster
  showSlide(0);
  
  // Otomatik geçişi başlat
  startAutoSlide();
  
  // Header bilgilerini güncelle
  updateSlideHeader();

  // Görsel geliştirmeler
  document.getElementById('slideshow-container').classList.add('running');
  _initParticles();
  _startCountdownRing();
  
  console.log('🎬 Slideshow başlatıldı:', slideshowInspectors.length, 'inspector');
}

function stopSlideshow() {
  slideshowActive = false;
  
  // Intervalları temizle
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  
  // Kontrol panelini göster
  document.getElementById('canli-controls').style.display = 'block';
  
  // Buton metnini değiştir
  document.getElementById('slideshow-btn').innerHTML = '<svg width=14 height=14 viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px"><polygon points="5,3 19,12 5,21"/></svg> ' + (translations[currentLang]||translations.tr).start_slideshow;
  
  // Welcome ekranını göster
  showWelcomeScreen();

  // Görsel geliştirmeler kaldır
  document.getElementById('slideshow-container').classList.remove('running');
  _stopCountdownRing();
  
  console.log('⏸️ Slideshow durduruldu');
}

function resetSlideshow() {
  stopSlideshow();
  currentSlideIndex = 0;
  showWelcomeScreen();
}

// ────────────────────────────
// SLIDESHOW HAZIRLIK
// ────────────────────────────
function prepareSlideshow() {
  console.log('🎬 Slideshow hazırlanıyor...', performansData.length, 'inspector mevcut');
  
  let inspectors = [...performansData];
  
  // Görüntüleme moduna göre filtrele — Düz. Performans (getDispPerf) bazında
  switch(displayMode) {
    case 'top5':
      inspectors = inspectors
        .sort((a, b) => getDispPerf(b) - getDispPerf(a))
        .slice(0, 10);
      break;
    case 'excellent':
      inspectors = inspectors.filter(i => getDispPerf(i) >= 95);
      break;
    case 'good':
      inspectors = inspectors.filter(i => getDispPerf(i) >= 85);
      break;
    default: // 'all'
      inspectors = inspectors.sort((a, b) => getDispPerf(b) - getDispPerf(a));
  }
  
  slideshowInspectors = inspectors;
  console.log('📊 Slideshow için hazırlanan inspector sayısı:', slideshowInspectors.length);
  
  // Sol paneli güncelle
  renderTopInspectors();
  
  // Duyuruları güncelle
  updateAnnouncements();
}

function updateAnnouncements() {
  const announcements = [];
  
  if (slideshowInspectors.length > 0) {
    const best = slideshowInspectors[0];
    const bestPerf = Math.round(getDispPerf(best));
    
    if (bestPerf >= 95) {
      announcements.push(`🏆 ${(translations[currentLang]||translations.tr).best_inspector_month}: ${best.ins} (${bestPerf}%)`);
    }
    
    const excellentCount = slideshowInspectors.filter(i => getDispPerf(i) >= 95).length;
    if (excellentCount > 0) {
      announcements.push(`⭐ ${excellentCount} Inspector mükemmel performans gösteriyor!`);
    }
    
    const avgPerf = Math.round(slideshowInspectors.reduce((sum, i) => sum + getDispPerf(i), 0) / slideshowInspectors.length);
    announcements.push(`📊 ${(translations[currentLang]||translations.tr).stat_avg_perf_plain}: ${avgPerf}% | ${(translations[currentLang]||translations.tr).stat_total_inspector}: ${slideshowInspectors.length}`);
  }
  
  // Duyuru metnini döngüsel olarak değiştir
  let announcementIndex = 0;
  const announcementElement = document.getElementById('announcement-text');
  
  function cycleAnnouncements() {
    if (announcements.length > 0) {
      announcementElement.textContent = announcements[announcementIndex];
      announcementIndex = (announcementIndex + 1) % announcements.length;
    }
  }
  
  cycleAnnouncements();
  setInterval(cycleAnnouncements, 4000);
}

// ────────────────────────────
// AYIN EN İYİ İNSPECTÖRLERİ (5 KİŞİ)
// ────────────────────────────
function renderTopInspectors() {
  const listContainer = document.getElementById('top-inspectors-list');
  
  if (!performansData || !performansData.length) {
    listContainer.innerHTML = `
      <div style="text-align:center;padding:32px 22px;color:rgba(255,255,255,.3);">
        <div style="font-size:28px;margin-bottom:10px;opacity:.5">📊</div>
        <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Veri Yok</div>
        <div style="font-size:10px;margin-top:6px;color:rgba(255,255,255,.2);">Excel yükleyip analiz yapın</div>
      </div>
    `;
    return;
  }

  const topInspectors = [...performansData]
    .filter(i => {
      const perf = getDispPerf(i);
      return perf !== null && perf !== undefined && !isNaN(perf) && perf > 0;
    })
    .sort((a, b) => getDispPerf(b) - getDispPerf(a))
    .slice(0, 10);

  if (!topInspectors.length) {
    listContainer.innerHTML = `
      <div style="text-align:center;padding:32px 22px;color:rgba(255,255,255,.3);">
        <div style="font-size:28px;margin-bottom:10px;opacity:.5">⚠️</div>
        <div style="font-size:11px;font-weight:600;">Performans verisi yok</div>
      </div>
    `;
    return;
  }

  const listHtml = topInspectors.map((inspector, index) => {
    const rank = index + 1;
    const performans = Math.round(getDispPerf(inspector));
    const performansClass = getPerformanceClass(performans);
    const rankCardClass = rank === 1 ? 'rank-1-card' : rank === 2 ? 'rank-2-card' : rank === 3 ? 'rank-3-card' : '';
    const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-other';
    const rankIcon = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
    const t = (translations[currentLang] || translations.tr);

    const perfColor = performans >= 95 ? '#4DB6AC'
      : performans >= 85 ? '#64B5F6'
      : performans >= 70 ? '#FFB74D'
      : '#EF9A9A';

    const performanceLevel = (() => {
      if (performans >= 95) return { text: 'MÜKEMMEL', cls: 'badge-excellent' };
      if (performans >= 85) return { text: 'İYİ', cls: 'badge-good' };
      if (performans >= 70) return { text: 'ORTA', cls: 'badge-average' };
      return { text: 'DÜŞÜK', cls: 'badge-poor' };
    })();

    return `
      <div class="top-inspector-card ${rankCardClass}" onclick="jumpToInspector('${inspector.ins.replace(/'/g, "\\'")}')">
        <div class="top-inspector-info" style="display:flex;align-items:center;gap:10px">
          <div class="top-inspector-rank ${rankClass}" style="flex-shrink:0">${rank <= 3 ? rankIcon : rank}</div>
          <div class="top-inspector-info-text" style="flex:1;min-width:0">
            <div class="top-inspector-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${inspector.ins}</div>
            <div class="top-inspector-details">
              ${(inspector.adet || 0).toLocaleString('tr-TR')} ${t.units_short} · ${inspector.gunSayisi || 0} ${t.working}
            </div>
            <span class="top-inspector-badge ${performanceLevel.cls}" style="margin-top:4px;display:inline-block">${performanceLevel.text}</span>
          </div>
          <div class="top-inspector-performance ${performansClass}" style="color:${perfColor};flex-shrink:0">${performans}%</div>
        </div>
      </div>
    `;
  }).join('');

  listContainer.innerHTML = listHtml;
}

// ────────────────────────────
// INSPECTOR'A ATLAMA
// ────────────────────────────
function jumpToInspector(inspectorName) {
  if (!slideshowActive || !slideshowInspectors.length) return;
  
  const targetIndex = slideshowInspectors.findIndex(i => i.ins === inspectorName);
  if (targetIndex !== -1) {
    currentSlideIndex = targetIndex;
    showSlide(currentSlideIndex);
    
    // Progress bar'ı sıfırla
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    document.getElementById('progress-bar').style.width = '0%';
    
    // Otomatik geçişi yeniden başlat
    if (slideshowActive) {
      startAutoSlide();
    }
  }
}

// ────────────────────────────
// SLIDE GÖSTERME
// ────────────────────────────
function showSlide(index) {
  const mainArea = document.getElementById('slideshow-main');
  
  if (index >= slideshowInspectors.length) {
    currentSlideIndex = 0;
    index = 0;
  }
  
  const inspector = slideshowInspectors[index];
  // Düz. Performans (verimlilikPerf) varsa onu kullan, yoksa genelHizPerf
  const performans = Math.round(getDispPerf(inspector));
  const hamPerf = Math.round(inspector.genelHizPerf ?? 0);
  const performansClass = getPerformanceClass(performans);
  
  const performansLevel = (() => {
    if (performans >= 95) return (translations[currentLang]||translations.tr).perf_excellent;
    if (performans >= 85) return (translations[currentLang]||translations.tr).perf_good;
    if (performans >= 70) return (translations[currentLang]||translations.tr).perf_average;
    return (translations[currentLang]||translations.tr).perf_poor; // "Geliştirilmeli" yerine "Düşük" olarak değiştirildi
  })();
  
  const ini = inspector.ins.split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
  
  // SVG circle hesaplaması — container 150×150px → merkez (75,75), r=65
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (Math.min(performans, 150) / 150) * circumference;

  // Klasman breakdown satırları
  const klasmanEntries = Object.entries(inspector.klasmanlar || {})
    .sort((a, b) => (b[1].adet || 0) - (a[1].adet || 0))
    .slice(0, 4);

  const klasmanRows = klasmanEntries.length ? klasmanEntries.map(([kName, kData]) => {
    const kPerf = Math.round(kData.hizPerf || 0);
    const kColor = kPerf >= 95 ? '#4CAF50' : kPerf >= 85 ? '#2196F3' : kPerf >= 70 ? '#FF9800' : '#ef5350';
    const barW = Math.min(100, kPerf);
    return `<div class="slide-klasman-row">
      <span class="slide-klasman-name">${kName}</span>
      <span class="slide-klasman-adet">${(kData.adet || 0).toLocaleString('tr-TR')} ${(translations[currentLang]||translations.tr).units_short}</span>
      <div class="slide-klasman-bar"><div class="slide-klasman-bar-fill" style="width:${barW}%;background:${kColor}"></div></div>
      <span class="slide-klasman-perf" style="color:${kColor}">${kPerf}%</span>
    </div>`;
  }).join('') : `<div style="font-size:12px;color:rgba(255,255,255,.4);text-align:center;padding:8px">${(translations[currentLang]||translations.tr).no_data_live}</div>`;

  const slideHtml = `
    <div class="inspector-slide active ${performansClass} anim-${animationEffect}">
      <div class="inspector-slide-header">
        <div class="inspector-slide-title">${(translations[currentLang]||translations.tr).detailed_perf}</div>
        <div class="inspector-slide-subtitle">${new Date().toLocaleDateString(currentLang === 'en' ? 'en-GB' : 'tr-TR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</div>
      </div>
      
      <div class="inspector-slide-main">
        <!-- Sol: Avatar ve İsim -->
        <div class="inspector-slide-avatar">
          <div class="inspector-slide-avatar-circle">
            ${ini}
          </div>
          <div class="inspector-slide-name">${inspector.ins}</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom:16px;">
            📅 ${inspector.gunSayisi || 0} ${(translations[currentLang]||translations.tr).working}
          </div>
          <!-- Klasman Breakdown -->
          <div style="text-align:left;width:100%">${klasmanRows}</div>
        </div>
        
        <!-- Orta: İstatistikler -->
        <div class="inspector-slide-info">
          <div class="inspector-slide-stat">
            <div class="inspector-slide-stat-value">${(inspector.adet || 0).toLocaleString('tr-TR')}</div>
            <div class="inspector-slide-stat-label">${(translations[currentLang]||translations.tr).total_product}</div>
          </div>
          <div class="inspector-slide-stat">
            <div class="inspector-slide-stat-value">${(inspector.kayit || 0).toLocaleString('tr-TR')}</div>
            <div class="inspector-slide-stat-label">${(translations[currentLang]||translations.tr).record_count}</div>
          </div>
          <div class="inspector-slide-stat">
            <div class="inspector-slide-stat-value">${fmtSnKisa(inspector.standartSure||0)}</div>
            <div class="inspector-slide-stat-label">${(translations[currentLang]||translations.tr).std_duration}</div>
          </div>
          <div class="inspector-slide-stat">
            <div class="inspector-slide-stat-value">${Object.keys(inspector.klasmanlar || {}).length}</div>
            <div class="inspector-slide-stat-label">${(translations[currentLang]||translations.tr).klasman_count}</div>
          </div>
        </div>
        
        <!-- Sağ: Performans -->
        <div class="inspector-slide-performance">
          <div class="performance-circle">
            <svg viewBox="0 0 150 150">
              <circle
                class="performance-circle-bg"
                cx="75"
                cy="75"
                r="${radius}"
              />
              <circle
                class="performance-circle-progress"
                cx="75"
                cy="75"
                r="${radius}"
                stroke-dasharray="${strokeDasharray}"
                stroke-dashoffset="${strokeDashoffset}"
              />
            </svg>
            <div class="performance-circle-text">
              <div class="performance-circle-value">${performans}%</div>
              <div class="performance-circle-label">${inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined ? (translations[currentLang]||translations.tr).adj_perf_label_upper : (translations[currentLang]||translations.tr).avg_perf_plain}</div>
            </div>
          </div>
          <div class="performance-level">${performansLevel}</div>
          ${inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined && hamPerf !== performans
            ? `<div style="margin-top:10px;font-size:12px;color:rgba(255,255,255,.5)">${(translations[currentLang]||translations.tr).raw_avg} <strong style="color:rgba(255,255,255,.75)">${hamPerf}%</strong></div>`
            : ''}
        </div>
      </div>
    </div>
  `;
  
  mainArea.innerHTML = slideHtml;

  // Countdown ring'i sıfırla
  if (slideshowActive) _resetCountdownRing();
  
  // Footer bilgilerini güncelle
  updateSlideFooter(index);
}

function showWelcomeScreen() {
  const mainArea = document.getElementById('slideshow-main');
  const t = translations[currentLang] || translations.tr;
  
  mainArea.innerHTML = `
    <div class="slideshow-welcome">
      <span class="welcome-icon">📺</span>
      <h2>${t.live_h2_title}</h2>
      <p>${t.live_h2_sub}</p>
      <div class="welcome-stats">
        <div class="welcome-stat">
          <div class="welcome-stat-value" id="welcome-total">0</div>
          <div class="welcome-stat-label">${t.stat_total_inspector}</div>
        </div>
        <div class="welcome-stat">
          <div class="welcome-stat-value" id="welcome-avg">0%</div>
          <div class="welcome-stat-label">${t.avg_perf_plain}</div>
        </div>
      </div>
      <button class="welcome-start-btn" onclick="toggleSlideshow()">
        ${t.start_slideshow}
      </button>
    </div>
  `;
  
  updateSlideWelcomeStats();
}

// ────────────────────────────
// OTOMATİK GEÇİŞ
// ────────────────────────────
function startAutoSlide() {
  // Mevcut interval'ları temizle
  if (slideshowInterval) clearInterval(slideshowInterval);
  if (progressInterval) clearInterval(progressInterval);
  
  // Progress bar'ı başlat
  let progressWidth = 0;
  const progressStep = 100 / (slideDuration / 100);
  
  progressInterval = setInterval(() => {
    progressWidth += progressStep;
    document.getElementById('progress-bar').style.width = progressWidth + '%';
    
    if (progressWidth >= 100) {
      clearInterval(progressInterval);
    }
  }, 100);
  
  // Slide geçişi
  slideshowInterval = setInterval(() => {
    if (slideshowActive) {
      currentSlideIndex = (currentSlideIndex + 1) % slideshowInspectors.length;
      showSlide(currentSlideIndex);
      
      // Progress bar'ı sıfırla
      progressWidth = 0;
      document.getElementById('progress-bar').style.width = '0%';
    }
  }, slideDuration);
}

// ────────────────────────────
// ANİMASYON EFEKTLERİ
// ────────────────────────────
function getAnimationName() {
  switch(animationEffect) {
    case 'fade': return 'fadeIn';
    case 'zoom': return 'zoomIn';
    case 'flip': return 'flipIn';
    default: return 'slideInLeft';
  }
}

// ────────────────────────────
// AYAR FONKSİYONLARI
// ────────────────────────────
function updateSlideDuration() {
  slideDuration = parseInt(document.getElementById('slide-duration').value);
  if (slideshowActive) {
    startAutoSlide(); // Yeni süreyle yeniden başlat
  }
}

function updateDisplayMode() {
  displayMode = document.getElementById('display-mode').value;
  if (slideshowActive) {
    prepareSlideshow();
    currentSlideIndex = 0;
    showSlide(0);
    startAutoSlide();
  }
}

function updateAnimationEffect() {
  animationEffect = document.getElementById('animation-effect').value;
}

// ────────────────────────────
// HEADER VE FOOTER GÜNCELLEMELERİ
// ────────────────────────────
function updateSlideHeader() {
  const totalInspectors = slideshowInspectors.length;
  const avgPerformance = totalInspectors > 0 
    ? Math.round(slideshowInspectors.reduce((sum, i) => sum + getDispPerf(i), 0) / totalInspectors)
    : 0;
  
  document.getElementById('slide-total-inspectors').textContent = totalInspectors;
  document.getElementById('slide-avg-performance').textContent = avgPerformance + '%';
  
  // Saati güncelle
  updateSlideClock();
  setInterval(updateSlideClock, 1000);
}

function updateSlideClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('tr-TR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  document.getElementById('slide-current-time').textContent = timeStr;
}

function updateSlideFooter(index) {
  const total = slideshowInspectors.length;
  document.getElementById('slide-counter').textContent = `${index + 1} / ${total}`;
  
  const today = new Date().toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric'
  });
  document.getElementById('slide-date').textContent = today;
}

// ────────────────────────────
// TAM EKRAN YÖNETİMİ (GELİŞTİRİLMİŞ)
// ────────────────────────────
function toggleFullscreen() {
  const container = document.getElementById('slideshow-container');
  
  if (!document.fullscreenElement && !container.classList.contains('fullscreen-mode')) {
    // Tam ekran moduna geç
    container.classList.add('fullscreen-mode');
    
    // Tarayıcı tam ekranını da dene
    if (container.requestFullscreen) {
      container.requestFullscreen().catch(() => {
        console.log('Tarayıcı tam ekran desteklenmiyor, CSS tam ekran kullanılıyor');
      });
    }
    
    console.log('🖥️ Tam ekran modu açıldı');
  } else {
    // Tam ekran modundan çık
    container.classList.remove('fullscreen-mode');
    
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
        console.log('Tam ekran çıkış hatası');
      });
    }
    
    console.log('🖥️ Tam ekran modundan çıkıldı');
  }
}

// Tam ekran değişiklik eventi (güncellendi)
document.addEventListener('fullscreenchange', function() {
  const container = document.getElementById('slideshow-container');
  const isFullscreen = !!document.fullscreenElement;
  
  if (!isFullscreen && container.classList.contains('fullscreen-mode')) {
    // Tarayıcı tam ekranından çıkıldıysa CSS tam ekranını da kapat
    container.classList.remove('fullscreen-mode');
  }
});

// ────────────────────────────
// KLAVYE KONTROLÜ (TAM EKRANDA)
// ────────────────────────────
document.addEventListener('keydown', function(e) {
  if (document.fullscreenElement && slideshowActive) {
    switch(e.key) {
      case 'ArrowRight':
      case ' ': // Space tuşu
        e.preventDefault();
        currentSlideIndex = (currentSlideIndex + 1) % slideshowInspectors.length;
        showSlide(currentSlideIndex);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slideshowInspectors.length - 1;
        showSlide(currentSlideIndex);
        break;
      case 'Escape':
        e.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          stopSlideshow();
        }
        break;
      case 'p':
      case 'P':
        e.preventDefault();
        toggleSlideshow();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  }
  
  // Genel klavye kısayolları
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    saveData();
  }
  
  if (e.key === 'Escape') {
    if (document.getElementById('modal').classList.contains('open')) {
      closeModal();
    }
    if (document.getElementById('detail-modal').classList.contains('open')) {
      closeDetailModal();
    }
  }
  
  if (e.ctrlKey && e.key === 'n' && document.getElementById('page-klasmanlar').classList.contains('active')) {
    e.preventDefault();
    openModal();
  }
});

// ────────────────────────────
// MOUSE KONTROLÜ (TAM EKRANDA)
// ────────────────────────────
document.addEventListener('click', function(e) {
  if (document.fullscreenElement && slideshowActive) {
    const container = document.getElementById('slideshow-container');
    if (container.contains(e.target)) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      
      if (x > width / 2) {
        // Sağ yarı - sonraki slide
        currentSlideIndex = (currentSlideIndex + 1) % slideshowInspectors.length;
        showSlide(currentSlideIndex);
      } else {
        // Sol yarı - önceki slide
        currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slideshowInspectors.length - 1;
        showSlide(currentSlideIndex);
      }
    }
  }
});

// ────────────────────────────
// TOUCH KONTROLÜ (MOBİL)
// ────────────────────────────
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
  if (document.fullscreenElement && slideshowActive) {
    touchStartX = e.changedTouches[0].screenX;
  }
});

document.addEventListener('touchend', function(e) {
  if (document.fullscreenElement && slideshowActive) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  }
});

function handleGesture() {
  const threshold = 50; // minimum swipe distance
  
  if (touchEndX < touchStartX - threshold) {
    // Sol swipe - sonraki slide
    currentSlideIndex = (currentSlideIndex + 1) % slideshowInspectors.length;
    showSlide(currentSlideIndex);
  }
  
  if (touchEndX > touchStartX + threshold) {
    // Sağ swipe - önceki slide
    currentSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : slideshowInspectors.length - 1;
    showSlide(currentSlideIndex);
  }
}

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// INIT & EVENT LISTENERS
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
loadData();
loadConfig();
renderListe();
renderEditor();
renderDashboard();
renderPerfTabloFromData();
updateSidebar();

// Şifre kapısını başlat
initPasswordGate();

// Modal kapatma - dış tıklama
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.getElementById('detail-modal').addEventListener('click', function(e) {
  if (e.target === this) closeDetailModal();
});

// Drag & Drop desteği
const uploadZone = document.getElementById('upload-zone');
uploadZone.addEventListener('dragover', function(e) {
  e.preventDefault();
  this.style.borderColor = 'var(--blue3)';
  this.style.backgroundColor = 'var(--lblue2)';
});

uploadZone.addEventListener('dragleave', function(e) {
  e.preventDefault();
  this.style.borderColor = 'var(--border)';
  this.style.backgroundColor = 'var(--lblue3)';
});

uploadZone.addEventListener('drop', function(e) {
  e.preventDefault();
  this.style.borderColor = 'var(--border)';
  this.style.backgroundColor = 'var(--lblue3)';
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const fileInput = document.getElementById('file-input');
    fileInput.files = files;
    excelYukle({ target: fileInput });
  }
});

// Otomatik kaydetme (5 dakikada bir)
setInterval(function() {
  if (klasmanlar.length > 0 || performansData.length > 0) {
    saveData();
    console.log('🔄 Otomatik kaydetme yapıldı');
  }
}, 5 * 60 * 1000);

// Sayfa kapatılırken uyarı
window.addEventListener('beforeunload', function(e) {
  const lastSaved = localStorage.getItem('lc_inspection_data');
  if (lastSaved) {
    try {
      const data = JSON.parse(lastSaved);
      const savedTime = new Date(data.savedAt || 0);
      const now = new Date();
      const diffMinutes = (now - savedTime) / (1000 * 60);
      
      if (diffMinutes > 10) {
        e.preventDefault();
        e.returnValue = 'Değişiklikleriniz kaydedilmemiş olabilir. Sayfadan çıkmak istediğinizden emin misiniz?';
        return e.returnValue;
      }
    } catch (err) {
      e.preventDefault();
      e.returnValue = 'Verileriniz kaydedilmemiş olabilir. Sayfadan çıkmak istediğinizden emin misiniz?';
      return e.returnValue;
    }
  }
});

// Sayfa görünürlük değişiminde slideshow'u duraklat
document.addEventListener('visibilitychange', function() {
  if (document.hidden && slideshowActive) {
    // Sayfa gizlendiğinde slideshow'u duraklat
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
    }
    if (progressInterval) {
      clearInterval(progressInterval);
    }
  } else if (!document.hidden && slideshowActive) {
    // Sayfa tekrar görünür olduğunda slideshow'u devam ettir
    startAutoSlide();
  }
});

// Network durumu kontrolü
window.addEventListener('online', function() {
  console.log('🌐 İnternet bağlantısı geri geldi');
});

window.addEventListener('offline', function() {
  console.log('🌐 İnternet bağlantısı kesildi - Veriler yerel olarak saklanmaya devam ediyor');
});

// Hover efektleri
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.summary-stat')) {
      const card = e.target.closest('.summary-stat');
      const value = card.querySelector('.summary-stat-value');
      if (value) value.style.transform = 'scale(1.05)';
    }
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.summary-stat')) {
      const card = e.target.closest('.summary-stat');
      const value = card.querySelector('.summary-stat-value');
      if (value) value.style.transform = 'scale(1)';
    }
  });
});

// Başarı mesajı gösterimi
function showSuccessMessage(message, duration = 3000) {
  const notification = document.getElementById('save-notification');
  notification.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, duration);
}

// Hata mesajı gösterimi
function showErrorMessage(message) {
  alert('❌ Hata: ' + message);
}

// Versiyon kontrolü ve güncelleme bildirimi
const APP_VERSION = '2.2.0';
const LAST_VERSION_KEY = 'lc_inspection_last_version';

function checkVersion() {
  const lastVersion = localStorage.getItem(LAST_VERSION_KEY);
  if (lastVersion !== APP_VERSION) {
    console.log(`🎉 Inspection Panel güncellendi! v${lastVersion || '1.0.0'} → v${APP_VERSION}`);
    localStorage.setItem(LAST_VERSION_KEY, APP_VERSION);
    
    if (lastVersion) {
      showSuccessMessage(`🎉 Panel güncellendi! v${APP_VERSION}`, 5000);
    }
  }
}

checkVersion();

// Son güncelleme tarihi gösterimi
function showLastUpdateTime() {
  try {
    const saved = localStorage.getItem('lc_inspection_data');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.savedAt) {
        const lastUpdate = new Date(data.savedAt);
        const now = new Date();
        const diffMinutes = Math.round((now - lastUpdate) / (1000 * 60));
        
        if (diffMinutes < 60) {
          console.log(`📅 Son güncelleme: ${diffMinutes} dakika önce`);
        } else if (diffMinutes < 1440) {
          console.log(`📅 Son güncelleme: ${Math.round(diffMinutes/60)} saat önce`);
        } else {
          console.log(`📅 Son güncelleme: ${lastUpdate.toLocaleDateString('tr-TR')}`);
        }
      }
    }
  } catch (err) {
    console.log('📅 Son güncelleme bilgisi alınamadı');
  }
}

// Sayfa yüklendiğinde son güncelleme zamanını göster
showLastUpdateTime();

// Konsol mesajları ve yardım
console.log(`
╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                    LC WAİKİKİ INSPECTION                                                     ║
║                                   PERFORMANS PANELİ v${APP_VERSION}                                                     ║
║                                                                                                              ║
║  🎯 Inspector performanslarını analiz edin                                                                   ║
║  📊 Excel verilerini yükleyin ve raporlayın                                                                 ║
║  ⚙️  Klasman tanımlarını yönetin                                                                             ║
║  🎬 Canlı gösterim ile büyük ekranda izleyin                                                                ║
║                                                                                                              ║
║  ✅ Performans Hesaplama: Standart Süre ÷ Mesai Süresi × 100                                                ║
║  📅 Mesai Süresi: Günlük 7.5 saat × çalışma gün sayısı                                                     ║
║  🎯 Hedef: %100 = tam verimlilik, %100+ = hedeften hızlı                                                    ║
║                                                                                                              ║
║  📺 CANLI GÖSTERİM KLAVYE KOMUTLARI (Tam Ekranda):                                                          ║
║  • → / Space: Sonraki slide                                                                                 ║
║  • ←: Önceki slide                                                                                           ║
║  • P: Oynat/Duraklat                                                                                        ║
║  • F: Tam ekran aç/kapat                                                                                    ║
║  • Escape: Çıkış                                                                                            ║
║  • Mouse: Sol yarı = önceki, sağ yarı = sonraki                                                             ║
║                                                                                                              ║
║  🔧 GENEL KLAVYE KISAYOLLARI:                                                                                ║
║  • Ctrl+S: Kaydet                                                                                           ║
║  • Ctrl+N: Yeni Klasman (Klasman sayfasında)                                                                ║
║  • Escape: Modal Kapat                                                                                      ║
║                                                                                                              ║
║  📈 ÖZELLİKLER:                                                                                              ║
║  • Gerçek zamanlı performans hesaplama                                                                      ║
║  • Klasman bazında detaylı analiz                                                                           ║
║  • Excel import/export desteği                                                                              ║
║  • Responsive tasarım                                                                                       ║
║  • Otomatik kaydetme                                                                                        ║
║  • Drag & drop dosya yükleme                                                                                ║
║  • Canlı slideshow gösterimi                                                                                ║
║  • Tam ekran desteği                                                                                        ║
║  • Sol panel: En iyi 10 inspector                                                                           ║
║                                                                                                              ║
║  💡 İPUCU: Performans verileri localStorage'da otomatik kaydedilir                                           ║
║                                                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
`);

// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// GELİŞTİRİLMİŞ GÖRSELLİK YARDIMCILARI
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

// ─── PARTİKÜL EFEKTI ───
function _initParticles() {
  const container = document.getElementById('slide-particles');
  if (!container) return;
  container.innerHTML = '';
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'slide-particle';
    const size = 20 + Math.random() * 60;
    const left = Math.random() * 100;
    const dur = 8 + Math.random() * 12;
    const delay = Math.random() * -15;
    p.style.cssText = `width:${size}px;height:${size}px;left:${left}%;bottom:-${size}px;animation-duration:${dur}s;animation-delay:${delay}s;`;
    container.appendChild(p);
  }
}

// ─── COUNTDOWN RING ───
let _ringInterval = null;
let _ringStartTime = null;

function _startCountdownRing() {
  _stopCountdownRing();
  const circumference = 113; // 2π × 18
  _ringStartTime = Date.now();

  function tick() {
    const elapsed = Date.now() - _ringStartTime;
    const fraction = Math.min(elapsed / slideDuration, 1);
    const offset = circumference * fraction;
    const rem = Math.max(0, Math.ceil((slideDuration - elapsed) / 1000));

    const fill = document.getElementById('ring-fill');
    const num  = document.getElementById('ring-num');
    if (fill) fill.style.strokeDashoffset = offset;
    if (num)  num.textContent = rem;

    // Color: green → amber → red
    let color = '#4CAF50';
    if (fraction > 0.7)  color = '#FF9800';
    if (fraction > 0.9)  color = '#ef5350';
    if (fill) fill.style.stroke = color;
  }

  tick();
  _ringInterval = setInterval(tick, 100);
}

function _resetCountdownRing() {
  _ringStartTime = Date.now();
}

function _stopCountdownRing() {
  if (_ringInterval) { clearInterval(_ringInterval); _ringInterval = null; }
  const fill = document.getElementById('ring-fill');
  const num  = document.getElementById('ring-num');
  if (fill) fill.style.strokeDashoffset = 0;
  if (num)  num.textContent = '';
}

// ─── showSlide'ı countdown ring ile güncelle ───
const _origShowSlide = showSlide;


// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// HD VİDEO OLUŞTURMA — Slayt başına PNG yakala → WebM video
// Yöntem: Her slayta bekle, html2canvas ile PNG al, canvas stream üzerinden MediaRecorder'a yaz
// Kesiklik sorunu giderildi: sabit FPS stream + slayt arası geçiş beklemesi
// ════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

let _vidRecorder   = null;
let _vidChunks     = [];
let _vidSlideTimer = null;
let _vidCanvas     = null;
let _vidCtx        = null;
let _vidStream     = null;
let _vidRendering  = false;
let _vidFillTimer  = null;  // sabit FPS dolgu timer

// HD sabit çözünürlük
const VID_W = 1920;
const VID_H = 1080;
const VID_FPS = 30;

function _loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    if (window.html2canvas) { resolve(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    s.onload = resolve;
    s.onerror = () => reject(new Error('html2canvas yüklenemedi'));
    document.head.appendChild(s);
  });
}

// Canvas stream'i canlı tutan dolgu loop — MediaRecorder boş frame görmemesi için
function _startFillLoop(ctx, w, h) {
  if (_vidFillTimer) { clearInterval(_vidFillTimer); _vidFillTimer = null; }
  _vidFillTimer = setInterval(() => {
    // Mevcut içeriği koru; tamamen siyah/boşsa canlı gradient arka plan yaz
    const px = ctx.getImageData(w>>1, h>>1, 1, 1).data;
    if (px[0] === 0 && px[1] === 0 && px[2] === 0) {
      _drawVividBg(ctx, w, h);
    } else {
      const imageData = ctx.getImageData(0, 0, w, h);
      ctx.putImageData(imageData, 0, 0);
    }
  }, 1000 / VID_FPS);
}

// Canlı arka plan: koyu lacivert → orta mavi gradient
function _drawVividBg(ctx, w, h) {
  const grd = ctx.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0,   '#0B1F3A');
  grd.addColorStop(0.4, '#102848');
  grd.addColorStop(1,   '#0D2E55');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, w, h);
  // Köşe aksan
  const g2 = ctx.createRadialGradient(w*0.15, h*0.85, 0, w*0.15, h*0.85, w*0.4);
  g2.addColorStop(0, 'rgba(33,150,243,0.12)');
  g2.addColorStop(1, 'transparent');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, w, h);
  const g3 = ctx.createRadialGradient(w*0.85, h*0.15, 0, w*0.85, h*0.15, w*0.35);
  g3.addColorStop(0, 'rgba(21,101,192,0.10)');
  g3.addColorStop(1, 'transparent');
  ctx.fillStyle = g3;
  ctx.fillRect(0, 0, w, h);
}

function _stopFillLoop() {
  if (_vidFillTimer) { clearInterval(_vidFillTimer); _vidFillTimer = null; }
}

async function startVideoRecording() {
  if (!performansData.length) {
    alert('⚠️ Önce Performans Analizi sayfasından Excel yükleyin ve veri oluşturun!');
    return;
  }
  if (_vidRendering) {
    _stopVideoRecording();
    return;
  }

  prepareSlideshow();
  const inspCount = slideshowInspectors.length;
  if (!inspCount) { alert('Gösterilecek inspector yok!'); return; }

  const perSlideSec = parseInt(document.getElementById('slide-duration')?.value || 5000) / 1000;
  const totalMin = Math.ceil((inspCount * perSlideSec + 5) / 60);

  if (!confirm(
    `🎥 HD Video Oluşturma (1920×1080)

` +
    `• ${inspCount} inspector × ${perSlideSec}sn ≈ ${totalMin} dk
` +
    `• Çözünürlük: 1920×1080 (Full HD)
` +
    `• Format: WebM (tüm tarayıcılarda desteklenir)
` +
    `• Oluşturma sırasında sayfada başka işlem yapmayın

` +
    `Başlamak istiyor musunuz?`
  )) return;

  const loadBtn = document.getElementById('video-rec-btn');
  loadBtn.innerHTML = '⏳ Hazırlanıyor...';
  loadBtn.disabled = true;

  try {
    await _loadHtml2Canvas();
  } catch(e) {
    alert('❌ html2canvas yüklenemedi: ' + e.message);
    loadBtn.innerHTML = '🎥 Video Oluştur';
    loadBtn.disabled = false;
    return;
  }

  // HD canvas oluştur
  _vidCanvas = document.createElement('canvas');
  _vidCanvas.width  = VID_W;
  _vidCanvas.height = VID_H;
  _vidCtx = _vidCanvas.getContext('2d', { alpha: false });

  // Canlı gradient arka planla başlat
  _drawVividBg(_vidCtx, VID_W, VID_H);

  // Stream al
  _vidStream = _vidCanvas.captureStream(VID_FPS);

  // En yüksek kalite codec seç
  const mimeType = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm'
  ].find(t => MediaRecorder.isTypeSupported(t)) || 'video/webm';

  _vidRecorder = new MediaRecorder(_vidStream, {
    mimeType,
    videoBitsPerSecond: 12_000_000  // 12 Mbps — HD kalite
  });
  _vidChunks = [];
  _vidRecorder.ondataavailable = e => { if (e.data?.size > 0) _vidChunks.push(e.data); };
  _vidRecorder.onstop = _finishVideo;
  _vidRecorder.start(200);  // Her 200ms'de bir chunk → akıcı kayıt
  _vidRendering = true;

  // Dolgu loop başlat (kesiklik önlenir)
  _startFillLoop(_vidCtx, VID_W, VID_H);

  loadBtn.innerHTML = '⏹️ Durdur';
  loadBtn.className = 'btn btn-warning';
  loadBtn.disabled  = false;
  loadBtn.onclick   = _stopVideoRecording;

  if (slideshowActive) stopSlideshow();
  slideshowActive = true;
  const canliCtrl = document.getElementById('canli-controls');
  if (canliCtrl) canliCtrl.style.display = 'none';
  document.getElementById('slideshow-btn').innerHTML = (translations[currentLang]||translations.tr).stop_slideshow;

  _showRecordingIndicator();
  showSuccessMessage((translations[currentLang]||translations.tr).hd_recording, 4000);

  await _renderAllSlidesHD(inspCount, perSlideSec);

  _stopVideoRecording();
}

async function _renderAllSlidesHD(total, perSlideSec) {
  const container = document.getElementById('slideshow-container');

  for (let i = 0; i < total && _vidRendering; i++) {
    currentSlideIndex = i;
    showSlide(i);
    _updateRecordProgress(i + 1, total);

    // Animasyon + DOM render için bekle
    await _sleep(120);

    // Slayt fotoğrafını çek (yüksek kalite)
    try {
      // Gerçek boyutları al; 0 ise güvenli fallback
      const cW = container.offsetWidth  || container.getBoundingClientRect().width  || 1280;
      const cH = container.offsetHeight || container.getBoundingClientRect().height || 720;
      const bestScale = Math.min(VID_W / cW, 4); // max 4× güvenlik sınırı

      // Arka planı garantile (canlı gradient)
      _drawVividBg(_vidCtx, VID_W, VID_H);

      const tempCanvas = await html2canvas(container, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,   // container kendi arka planını taşısın
        scale: bestScale,
        logging: false,
        removeContainer: false,
        imageTimeout: 0,
        foreignObjectRendering: false
      });

      // Dolgu loop durdur — şimdi gerçek frame yazacağız
      _stopFillLoop();

      // HD canvas'a çiz
      _vidCtx.drawImage(tempCanvas, 0, 0, VID_W, VID_H);

      // Slayt süresi boyunca aynı frame'i tut (akıcı tutmak için mini loop)
      const slideEnd = Date.now() + (perSlideSec * 1000);
      while (Date.now() < slideEnd && _vidRendering) {
        // Frame'i yenile (freeze kalmaması için)
        _vidCtx.drawImage(tempCanvas, 0, 0, VID_W, VID_H);
        await _sleep(1000 / VID_FPS);
      }

      // Dolgu loop tekrar başlat
      _startFillLoop(_vidCtx, VID_W, VID_H);

    } catch(err) {
      console.warn('Slayt render hatası:', err);
      // Hata durumunda geçiş yap
      await _sleep(perSlideSec * 1000);
    }
  }
}

function _sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function _stopVideoRecording() {
  _vidRendering = false;
  _stopFillLoop();
  clearTimeout(_vidSlideTimer);

  if (_vidRecorder && _vidRecorder.state !== 'inactive') {
    _vidRecorder.stop();
  }
  if (_vidStream) {
    _vidStream.getTracks().forEach(t => t.stop());
    _vidStream = null;
  }

  _hideRecordingIndicator();

  const btn = document.getElementById('video-rec-btn');
  if (btn) {
    btn.innerHTML = '🎥 Video Oluştur';
    btn.className = 'btn btn-success';
    btn.disabled  = false;
    btn.onclick   = startVideoRecording;
  }

  stopSlideshow();
}

function _finishVideo() {
  if (!_vidChunks.length) {
    alert('⚠️ Video verisi oluşturulamadı. Tarayıcı MediaRecorder desteğini kontrol edin.');
    return;
  }
  const mimeType = _vidChunks[0]?.type || 'video/webm';
  const blob = new Blob(_vidChunks, { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toLocaleDateString('tr-TR').replace(/\./g, '-');
  a.href     = url;
  a.download = `LCW_Inspection_HD_${date}.webm`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 8000);
  const mb = (blob.size / 1024 / 1024).toFixed(1);
  showSuccessMessage(`🎬 HD Video indirildi! ${mb} MB — 1920×1080`, 6000);
  _vidChunks = [];
}

function _showRecordingIndicator() {
  let el = document.getElementById('rec-indicator');
  if (!el) {
    el = document.createElement('div');
    el.id = 'rec-indicator';
    el.style.cssText = `
      position:fixed;top:68px;right:20px;z-index:9998;
      background:linear-gradient(135deg,#B71C1C,#C62828);color:#fff;
      padding:8px 18px;border-radius:9px;font-size:12px;font-weight:700;
      box-shadow:0 4px 20px rgba(198,40,40,.5);
      display:flex;align-items:center;gap:8px;letter-spacing:.3px;
    `;
    document.head.insertAdjacentHTML('beforeend', `<style>
      @keyframes recPulse{0%,100%{opacity:1}50%{opacity:.7}}
      #rec-indicator{animation:recPulse 1.2s infinite;}
    </style>`);
    document.body.appendChild(el);
  }
  el.innerHTML = `<span style="width:9px;height:9px;background:#fff;border-radius:50%;display:inline-block;flex-shrink:0"></span> HD REC <span id="rec-progress" style="font-family:'DM Mono',monospace;font-size:11px;opacity:.85">0/?</span>`;
  el.style.display = 'flex';
}

function _updateRecordProgress(cur, total) {
  const el = document.getElementById('rec-progress');
  if (el) el.textContent = `${cur}/${total}`;
}

function _hideRecordingIndicator() {
  const el = document.getElementById('rec-indicator');
  if (el) el.style.display = 'none';
}



if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.lcDebug = {
    klasmanlar: () => klasmanlar,
    performansData: () => performansData,
    slideshowInspectors: () => slideshowInspectors,
    clearAll: () => {
      localStorage.removeItem('lc_inspection_data');
      location.reload();
    },
    addTestData: () => {
      // Test verisi ekle
      performansData = [
        {
          ins: 'Ahmet YILMAZ',
          adet: 150,
          kayit: 8,
          standartSure: 7200,
          mesaiSure: 8100,
          genelHizPerf: 89,
          gunSayisi: 3,
          klasmanlar: {
            'Pantolon': { adet: 100, standartSure: 4800, hizPerf: 92 },
            'Ceket': { adet: 50, standartSure: 2400, hizPerf: 85 }
          }
        },
        {
          ins: 'Fatma KAYA',
          adet: 200,
          kayit: 12,
          standartSure: 9600,
          mesaiSure: 9000,
          genelHizPerf: 107,
          gunSayisi: 4,
          klasmanlar: {
            'Pantolon': { adet: 120, standartSure: 5760, hizPerf: 105 },
            'Mont': { adet: 80, standartSure: 3840, hizPerf: 110 }
          }
        }
      ];
      renderDashboard();
      renderTopInspectors();
      console.log('✅ Test verisi eklendi');
    }
  };
  
  console.log('🔧 Debug fonksiyonları: lcDebug.clearAll(), lcDebug.addTestData(), lcDebug.klasmanlar()');
}

// Uygulama hazır
console.log(`✅  Inspection Performans Paneli v${APP_VERSION} hazır!`);
console.log(`📊 ${klasmanlar.length} klasman, ${performansData.length} inspector verisi yüklendi`);
// ════════════════════════════════════════════════════════════════════
// KLASMAN ANALİZ — SHEETS ENTEGRASYONU
// ════════════════════════════════════════════════════════════════════

async function pushKlasmanAnalizToSheets(liste) {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token || !liste || !liste.length) return;
  try {
    const payload = liste.map(k => ({
      ad:                  k.ad,
      standartKontrolSure: k.standartKontrolSure || 0,
      istasyonSuresi:      k.istasyonSure        || 0,
      gerceklesenOrt:      (k.toplamAdet > 0 && k.toplamFiiliSure > 0)
                           ? parseFloat((k.toplamFiiliSure / k.toplamAdet).toFixed(3)) : 0,
      toplamAdet:          k.toplamAdet          || 0,
      inspectorSayisi:     k.inspectorSayisi     || 0,
      toplamFiiliSure:     k.toplamFiiliSure     || 0
    }));
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setKlasmanAnaliz', token, klasmanAnaliz: payload, savedAt: new Date().toISOString() }),
      mode: 'no-cors'
    });
    console.log('✅ Klasman analiz Sheets\'e gönderildi:', payload.length, 'klasman');
  } catch(err) {
    console.warn('Klasman analiz push hatası:', err.message);
  }
}

async function pushAndRenderKlasmanAnaliz() {
  renderKlasmanAnaliz();          // Önce hesapla & render et (içinde push var)
  showSuccessMessage((translations[currentLang]||translations.tr).sheets_analiz_sent);
}

async function pullKlasmanAnalizFromSheets() {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) {
    alert('⚠️ Sheets bağlantısı yapılandırılmamış!\nKlasman Yönetimi → Bağlantı Ayarları bölümünden URL ve Token girin.');
    return;
  }
  const btn = document.getElementById('kla-pull-btn');
  const orig = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = (translations[currentLang]||translations.tr).pulling; btn.disabled = true; }
  try {
    const data = await jsonpFetch(url, { action: 'getKlasmanAnaliz', token });
    if (data.status === 'ok' && Array.isArray(data.klasmanAnaliz) && data.klasmanAnaliz.length > 0) {
      // Sheets'ten gelen veriyi ekranda göster
      const el = document.getElementById('klasman-analiz-icerik');
      if (!el) return;

      const liste = data.klasmanAnaliz;

      const kartlar = liste.map(k => {
        const std          = k.standartKontrolSure || 0;
        const gerceklesen  = k.gerceklesenOrt      || 0;
        const fark         = gerceklesen > 0 && std > 0 ? gerceklesen - std : null;
        const farkYuzde    = fark !== null && std > 0 ? Math.round((fark / std) * 100) : null;
        const barGenislik  = gerceklesen > 0 && std > 0 ? Math.min(200, Math.round((gerceklesen / std) * 100)) : 0;
        const barRenk      = fark === null ? 'var(--muted2)' : fark <= 0 ? '#00897B' : fark <= std * 0.2 ? '#F57F17' : '#C62828';
        const farkIkon     = fark === null ? '—' : fark <= 0 ? '▼ Hedef Altında ✓' : '▲ Hedef Üstünde';

        return `
        <div style="background:#fff;border:1.5px solid var(--border2);border-radius:14px;padding:20px;box-shadow:var(--shadow);position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,${barRenk},${barRenk}88);border-radius:14px 14px 0 0;"></div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
            <div>
              <div style="font-size:15px;font-weight:700;color:var(--navy);">${k.ad}</div>
              <div style="font-size:11px;color:var(--muted);margin-top:2px;">${(k.toplamAdet||0).toLocaleString('tr-TR')} adet · ${k.inspectorSayisi||0} inspector</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:22px;font-weight:800;color:${barRenk};font-family:'DM Mono',monospace;line-height:1;">${gerceklesen > 0 ? gerceklesen.toFixed(2)+'sn' : '—'}</div>
              <div style="font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-top:2px;">Gerçekleşen/Adet</div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">
            <div style="background:var(--lblue3);border:1px solid var(--border2);border-radius:10px;padding:12px 14px;">
              <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">📐 Standart</div>
              <div style="font-size:18px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace;">${std > 0 ? std.toFixed(2)+'sn' : '—'}</div>
              <div style="font-size:10px;color:var(--muted2);margin-top:3px;">1 adet ürün kontrol</div>
              ${k.istasyonSuresi > 0 ? `<div style="font-size:10px;color:var(--muted2);margin-top:1px;">+ ${k.istasyonSuresi.toFixed(2)}sn istasyon</div>` : ''}
            </div>
            <div style="background:${fark!==null&&fark<=0?'var(--lgreen)':fark!==null&&fark<=std*0.2?'var(--lamber)':'var(--lred)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':fark!==null&&fark<=std*0.2?'#FFE082':'#FFCDD2'};border-radius:10px;padding:12px 14px;">
              <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">⏱ Gerçekleşen</div>
              <div style="font-size:18px;font-weight:700;color:${barRenk};font-family:'DM Mono',monospace;">${gerceklesen > 0 ? gerceklesen.toFixed(2)+'sn' : '—'}</div>
              <div style="font-size:10px;color:${barRenk};margin-top:3px;font-weight:600;">${fark !== null ? (fark>0?'+':'')+fark.toFixed(2)+'sn fark' : '—'}${farkYuzde !== null ? ` (${fark>0?'+':''}${farkYuzde}%)` : ''}</div>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-bottom:4px;">
              <span>Gerçekleşen / Standart oranı</span>
              <span style="font-weight:600;color:${barRenk}">${barGenislik}%</span>
            </div>
            <div style="height:8px;background:var(--border2);border-radius:4px;overflow:hidden;">
              <div style="width:${Math.min(100,barGenislik)}%;height:100%;background:${barRenk};border-radius:4px;"></div>
            </div>
          </div>
          <div style="text-align:center;padding:6px 12px;border-radius:8px;background:${fark!==null&&fark<=0?'var(--lgreen)':fark!==null?'var(--lred)':'var(--offwhite)'};border:1px solid ${fark!==null&&fark<=0?'#B2DFDB':fark!==null?'#FFCDD2':'var(--border2)'};">
            <span style="font-size:11px;font-weight:700;color:${barRenk};">${farkIkon}</span>
          </div>
        </div>`;
      }).join('');

      const hedefte   = liste.filter(k => k.gerceklesenOrt > 0 && k.standartKontrolSure > 0 && k.gerceklesenOrt <= k.standartKontrolSure).length;
      const yakin     = liste.filter(k => { const g=k.gerceklesenOrt,s=k.standartKontrolSure; return g>0&&s>0&&g>s&&g<=s*1.2; }).length;
      const yuksek    = liste.filter(k => { const g=k.gerceklesenOrt,s=k.standartKontrolSure; return g>0&&s>0&&g>s*1.2; }).length;
      const veriYok   = liste.filter(k => !k.gerceklesenOrt || !k.standartKontrolSure).length;

      el.innerHTML = `
        <div style="background:linear-gradient(135deg,var(--navy) 0%,var(--blue) 100%);border-radius:12px;padding:16px 22px;margin-bottom:20px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
          <div style="font-size:28px;">🎯</div>
          <div style="flex:1;">
            <div style="font-size:15px;font-weight:700;color:#fff;" data-i18n="klasman_analiz_overlay_title">Classification Analysis — Fetched from Sheets</div>
            <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:3px;">${liste.length} klasman · ${liste.reduce((s,k)=>s+(k.toplamAdet||0),0).toLocaleString('tr-TR')} toplam adet</div>
          </div>
          ${[['✅','Hedefte',hedefte,'#4CAF50'],['⚠️','Yakın',yakin,'#FFB74D'],['🔴','Yüksek',yuksek,'#EF9A9A'],['➖','Veri Yok',veriYok,'rgba(255,255,255,.5)']].map(([ic,lb,cnt,col])=>`
          <div style="text-align:center;background:rgba(255,255,255,.1);border-radius:10px;padding:10px 16px;min-width:80px;">
            <div style="font-size:16px;">${ic}</div>
            <div style="font-size:20px;font-weight:800;color:${col};font-family:'DM Mono',monospace;line-height:1.2;">${cnt}</div>
            <div style="font-size:9px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.5px;">${lb}</div>
          </div>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">${kartlar}</div>
      `;
      showSuccessMessage(`✅ ${liste.length} ` + (translations[currentLang]||translations.tr).sheets_analiz_loaded);
    } else {
      alert('ℹ️ Sheets\'te henüz klasman analiz verisi yok.\n\nÖnce "📤 Sheets\'e Gönder & Yenile" butonuna basın.');
    }
  } catch(err) {
    alert('❌ Veri çekilemedi: ' + err.message);
  } finally {
    if (btn) { btn.innerHTML = orig; btn.disabled = false; }
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// KULLANICI YÖNETİMİ
// ══════════════════════════════════════════════════════════════════════════════
// _usersCache: Users sekmesinden çekilen [{username, tabs:[...]}] listesi (admin
// hariç). Şifreler güvenlik nedeniyle sunucudan geri okunmaz; sadece admin yeni
// bir şifre belirlediğinde sunucuya gönderilir, aksi halde mevcut şifre korunur.
let _usersCache = [];
let _editingUsername = null; // null => yeni kullanıcı, string => düzenleniyor

// Kullanıcı adını ("fatma.dogan", "ali_kirna" gibi) okunabilir bir görünen
// ada çevirir: noktalar/alt çizgiler boşluğa dönüştürülür ve her kelimenin
// ilk harfi büyütülür. "fatma.dogan" → "Fatma Dogan".
function _formatDisplayName(username) {
  if (!username) return username;
  return String(username)
    .split(/[._\s]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toLocaleUpperCase('tr-TR') + part.slice(1).toLocaleLowerCase('tr-TR'))
    .join(' ');
}

function _escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

async function loadAndRenderUsers() {
  const tbody = document.getElementById('users-tbody');
  if (!tbody) return;
  const t = translations[currentLang] || translations.tr;

  // Sadece admin bu sayfayı yönetebilir
  if (currentUser && !currentUser.isAdmin) {
    tbody.innerHTML = `<tr><td colspan="3" style="padding:18px;text-align:center;color:var(--red)">⛔ Bu sayfaya yalnızca admin erişebilir.</td></tr>`;
    return;
  }

  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) {
    tbody.innerHTML = `<tr><td colspan="3" style="padding:18px;text-align:center;color:var(--red)">⚠️ Google Sheets bağlantısı yapılandırılmamış. Klasman Yönetimi → Bağlantı Ayarları.</td></tr>`;
    return;
  }

  tbody.innerHTML = `<tr><td colspan="3" style="padding:18px;text-align:center;color:var(--muted)">${t.loading}</td></tr>`;

  try {
    const data = await jsonpFetch(url, { action: 'getUsers', token });
    if (data.status === 'ok') {
      _usersCache = (data.users || []).map(u => ({ username: u.username, tabs: u.tabs || [], team: u.team || [] }));
    } else {
      _usersCache = [];
    }
  } catch(e) {
    _usersCache = [];
    tbody.innerHTML = `<tr><td colspan="3" style="padding:18px;text-align:center;color:var(--red)">❌ ${e.message}</td></tr>`;
    return;
  }
  renderUsersTable();
}

function renderUsersTable() {
  const tbody = document.getElementById('users-tbody');
  const sayac = document.getElementById('users-sayac');
  if (!tbody) return;
  const t = translations[currentLang] || translations.tr;

  if (sayac) sayac.textContent = (1 + _usersCache.length) + ' kullanıcı';

  let rows = `
    <tr style="border-bottom:1px solid var(--border2)">
      <td style="padding:10px;font-weight:700;color:var(--navy)">👑 admin</td>
      <td style="padding:10px;color:var(--muted);font-size:12px">${t.admin_row_note}</td>
      <td style="padding:10px;text-align:right;color:var(--muted);font-size:11px">—</td>
    </tr>`;

  if (!_usersCache.length) {
    rows += `<tr><td colspan="3" style="padding:18px;text-align:center;color:var(--muted)">${t.no_users}</td></tr>`;
  } else {
    _usersCache.forEach(u => {
      const tabLabels = (u.tabs || []).map(tid => {
        const found = ASSIGNABLE_TABS.find(a => a.id === tid);
        return found ? found.label : tid;
      });
      const badges = tabLabels.length
        ? tabLabels.map(l => `<span style="display:inline-block;background:var(--lblue2);color:var(--blue);border-radius:99px;padding:2px 9px;font-size:11px;margin:2px">${_escapeHtml(l)}</span>`).join('')
        : `<span style="color:var(--muted);font-size:11px">—</span>`;
      const safeUser = _escapeHtml(u.username);
      rows += `
        <tr style="border-bottom:1px solid var(--border2)">
          <td style="padding:10px;font-weight:600;color:var(--navy);font-family:'DM Mono',monospace">${safeUser}</td>
          <td style="padding:10px">${badges}</td>
          <td style="padding:10px;text-align:right;white-space:nowrap">
            <button class="btn btn-sm" onclick="openUserModal('${safeUser}')">${t.edit_btn}</button>
            <button class="btn btn-sm btn-warning" style="margin-left:6px" onclick="deleteUserConfirm('${safeUser}')">${t.delete_btn}</button>
          </td>
        </tr>`;
    });
  }
  tbody.innerHTML = rows;
}

// ── Kullanıcı Ekle/Düzenle Modalı ────────────────────────────────────────────
function openUserModal(username) {
  const t = translations[currentLang] || translations.tr;
  _editingUsername = username || null;

  const titleEl   = document.getElementById('user-modal-title');
  const userInput = document.getElementById('user-modal-username');
  const pwInput   = document.getElementById('user-modal-password');
  const pwHint    = document.getElementById('user-modal-pw-hint');
  const tabsBox   = document.getElementById('user-modal-tabs');

  let selectedTabs = [];
  if (_editingUsername) {
    const u = _usersCache.find(x => x.username === _editingUsername);
    selectedTabs = (u && u.tabs) || [];
    titleEl.textContent = '✏️ Kullanıcıyı Düzenle: ' + _editingUsername;
    userInput.value = _editingUsername;
    userInput.disabled = true;
    pwInput.placeholder = '••••••';
    pwHint.textContent = t.password_hint_edit;
  } else {
    titleEl.textContent = '✨ ' + t.add_user;
    userInput.value = '';
    userInput.disabled = false;
    pwInput.placeholder = '••••••';
    pwHint.textContent = t.password_hint;
  }
  pwInput.value = '';

  // Sekme checkbox'larını oluştur (Dashboard hariç — herkese açık)
  tabsBox.innerHTML = ASSIGNABLE_TABS.filter(tb => tb.id !== 'dashboard').map(tb => {
    const checked = selectedTabs.includes(tb.id) ? 'checked' : '';
    return `
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;user-select:none">
        <input type="checkbox" class="user-modal-tab-cb" value="${tb.id}" ${checked} style="width:15px;height:15px;margin:0;cursor:pointer;accent-color:var(--blue2)">
        <span>${_escapeHtml(tb.label)}</span>
      </label>`;
  }).join('');

  document.getElementById('user-modal').classList.add('open');
  setTimeout(() => userInput.disabled ? pwInput.focus() : userInput.focus(), 80);
}

function closeUserModal() {
  document.getElementById('user-modal').classList.remove('open');
  _editingUsername = null;
}

async function saveUserFromModal() {
  const userInput = document.getElementById('user-modal-username');
  const pwInput   = document.getElementById('user-modal-password');
  const tabs = [...document.querySelectorAll('.user-modal-tab-cb')]
    .filter(cb => cb.checked).map(cb => cb.value);

  const username = (userInput.value || '').trim().toLowerCase();
  const password = pwInput.value || '';

  if (!_editingUsername) {
    // ── Yeni kullanıcı ──
    if (!username) { alert('Kullanıcı adı boş olamaz!'); return; }
    if (!/^[a-z0-9._]{3,40}$/.test(username)) {
      alert('Kullanıcı adı sadece küçük harf, rakam, nokta(.) ve alt çizgi(_) içerebilir.\nÖrnek: ahmet.ornek');
      return;
    }
    if (username === 'admin') { alert('"admin" kullanıcı adı sistem tarafından kullanılıyor, başka bir ad seçin.'); return; }
    if (_usersCache.some(u => u.username.toLowerCase() === username)) {
      alert('Bu kullanıcı adı zaten kullanılıyor!'); return;
    }
    if (!password || password.length < 4) { alert('Şifre en az 4 karakter olmalı!'); return; }

    _usersCache.push({ username, tabs, _newPassword: password });
  } else {
    // ── Mevcut kullanıcıyı düzenle ──
    const u = _usersCache.find(x => x.username === _editingUsername);
    if (!u) { alert('Kullanıcı bulunamadı!'); closeUserModal(); return; }
    if (password && password.length < 4) { alert('Şifre en az 4 karakter olmalı!'); return; }
    u.tabs = tabs;
    if (password) u._newPassword = password;
  }

  await _pushUsersToSheets();
  closeUserModal();
  renderUsersTable();
}

async function deleteUserConfirm(username) {
  if (!confirm(`"${username}" kullanıcısını silmek istediğinize emin misiniz?`)) return;
  _usersCache = _usersCache.filter(u => u.username !== username);
  await _pushUsersToSheets();
  renderUsersTable();
}

// Tüm kullanıcı listesini Sheets'teki Users sekmesine gönderir.
// Şifre alanı sadece yeni belirlenmişse doldurulur; aksi halde boş bırakılır
// ve sunucu mevcut şifreyi korur (bkz. _writeUsers, panel-v1-gs).
async function _pushUsersToSheets() {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) { alert('⚠️ Google Sheets bağlantısı yapılandırılmamış!'); return; }

  const payload = _usersCache.map(u => ({
    username: u.username,
    password: u._newPassword || '',
    tabs: u.tabs || []
  }));

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setUsers', token, users: payload }),
      mode: 'no-cors'
    });
    // Gönderildikten sonra geçici şifreleri temizle (tekrar gönderilmesin)
    _usersCache.forEach(u => { delete u._newPassword; });
    showSuccessMessage('✅ Kullanıcılar Sheets\'e gönderildi');
  } catch(err) {
    alert('❌ Gönderme hatası: ' + err.message);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// EKİP YÖNETİMİ (Dashboard — "Ekibim")
// ══════════════════════════════════════════════════════════════════════════════
// Her ekip yöneticisi (admin olmayan kullanıcı), inspector listesinden kendi
// ekibini seçer. Ekip bilgisi Users sayfasının "Team" sütununda saklanır ve
// currentUser.team içinde (virgülle ayrılmış değil, dizi olarak) tutulur.

// performansData içinden, verilen ekip listesine (kullanıcı adları) ait
// inspectorleri, hedef verimliliğe göre normalize edilmiş "performans" alanı
// eklenmiş olarak döndürür. Genel amaçlı: hem "Ekibim" kartı hem de admin'in
// "Ekip Yöneticileri" bölümü tarafından kullanılır.
function getInspectorsForTeam(teamArr) {
  const teamSet = new Set((teamArr || []).map(n => String(n).toLowerCase()));
  if (!teamSet.size) return [];
  const hedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  return performansData
    .filter(i => teamSet.has((i.ins || '').toLowerCase()))
    .map(inspector => ({
      ...inspector,
      performans: inspector.verimlilikPerf !== null && inspector.verimlilikPerf !== undefined
        ? inspector.verimlilikPerf
        : (inspector.genelHizPerf !== null && inspector.genelHizPerf !== undefined
            ? Math.round(inspector.genelHizPerf * (100 / hedef))
            : 0)
    }));
}

// performansData içinden, hedef verimliliğe göre normalize edilmiş "performans"
// alanı eklenmiş ekip üyelerini döndürür.
function getTeamInspectors() {
  if (!currentUser || currentUser.isAdmin) return [];
  return getInspectorsForTeam(currentUser.team || []);
}

// ══════════════════════════════════════════════════════════════════════════════
// EKİBİM ANALİZİ — Ekip yöneticisi için ekip üyeleri arası karşılaştırma
// ══════════════════════════════════════════════════════════════════════════════
function renderEkipAnaliz() {
  const container = document.getElementById('ekip-analiz-icerik');
  if (!container) return;
  const t = translations[currentLang] || translations.tr;

  const teamInspectors = getTeamInspectors();

  if (!performansData.length || !teamInspectors.length) {
    container.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🧑‍🤝‍🧑</div>
        <h3>${t.waiting_data}</h3>
        <p>${t.waiting_data_sub}</p>
      </div>
    `;
    return;
  }

  // ── 1) Genel sıralama: performansa göre yüksekten alçağa ──────────────────
  const siraliUyeler = [...teamInspectors].sort((a, b) => (b.performans || 0) - (a.performans || 0));

  const genelSiraHtml = siraliUyeler.map((ins, idx) => {
    const klasmanSayisi = Object.keys(ins.klasmanlar || {}).length;
    const perfClass = getPerformanceClass(ins.performans || 0);
    const madalya = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : (idx + 1) + '.';
    return `
      <tr>
        <td style="padding:10px 12px;font-weight:700;color:var(--muted);width:36px;text-align:center">${madalya}</td>
        <td style="padding:10px 12px;font-weight:600;color:var(--navy)">${_escapeHtml(_formatDisplayName(ins.ins))}</td>
        <td style="padding:10px 12px;text-align:center"><span class="${perfClass}" style="font-weight:700;font-family:'DM Mono',monospace">${ins.performans || 0}%</span></td>
        <td style="padding:10px 12px;text-align:center;font-family:'DM Mono',monospace;color:var(--navy)">${(ins.adet || 0).toLocaleString('tr-TR')}</td>
        <td style="padding:10px 12px;text-align:center;font-family:'DM Mono',monospace;color:var(--muted)">${klasmanSayisi}</td>
      </tr>
    `;
  }).join('');

  // ── 2) Performans Dağılımı: ekip üyelerini bantlara ayır ──────────────────
  const bantlar = {
    excellent: { key: 'excellent', label: t.perf_excellent, color: 'var(--green)', bg: 'var(--lgreen)', count: 0 },
    good:      { key: 'good',      label: t.perf_good,      color: 'var(--blue)',  bg: 'var(--lblue3)', count: 0 },
    average:   { key: 'average',   label: t.perf_average,   color: 'var(--amber)', bg: 'var(--lamber)', count: 0 },
    poor:      { key: 'poor',      label: t.perf_poor,      color: 'var(--red)',   bg: 'var(--lred)',   count: 0 }
  };
  teamInspectors.forEach(ins => {
    const p = ins.performans || 0;
    if (p >= 95) bantlar.excellent.count++;
    else if (p >= 85) bantlar.good.count++;
    else if (p >= 70) bantlar.average.count++;
    else bantlar.poor.count++;
  });
  const maxBantSayisi = Math.max(1, ...Object.values(bantlar).map(b => b.count));

  const dagilimHtml = Object.values(bantlar).map(b => {
    const yuzde = Math.round((b.count / teamInspectors.length) * 100);
    const barYuzde = Math.round((b.count / maxBantSayisi) * 100);
    return `
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:90px;font-size:12px;font-weight:600;color:var(--navy);flex-shrink:0">${b.label}</div>
        <div style="flex:1;background:var(--offwhite);border-radius:6px;height:22px;overflow:hidden">
          <div style="height:100%;width:${barYuzde}%;background:${b.color};border-radius:6px;transition:width .3s"></div>
        </div>
        <div style="width:70px;text-align:right;font-size:12px;font-family:'DM Mono',monospace;color:var(--muted);flex-shrink:0">${b.count} (${yuzde}%)</div>
      </div>
    `;
  }).join('');

  // ── 3) Gelişim Alanları: ekibin en düşük performans gösterdiği klasmanlar ──
  // Her klasman için, o klasmanda çalışan ekip üyelerinin ortalama hizPerf'i.
  const klasmanMap = {}; // { klasmanAdi: { toplamPerf, toplamAdet, kisiSayisi } }
  teamInspectors.forEach(ins => {
    Object.entries(ins.klasmanlar || {}).forEach(([klasmanAd, kd]) => {
      if (!kd.adet) return; // hiç çalışmadıysa dahil etme
      if (!klasmanMap[klasmanAd]) klasmanMap[klasmanAd] = { toplamPerf: 0, toplamAdet: 0, kisiSayisi: 0 };
      klasmanMap[klasmanAd].toplamPerf  += kd.hizPerf || 0;
      klasmanMap[klasmanAd].toplamAdet  += kd.adet || 0;
      klasmanMap[klasmanAd].kisiSayisi  += 1;
    });
  });

  const klasmanOrtalamalari = Object.entries(klasmanMap).map(([ad, v]) => ({
    ad,
    ortalamaPerf: Math.round(v.toplamPerf / v.kisiSayisi),
    toplamAdet: v.toplamAdet,
    kisiSayisi: v.kisiSayisi
  })).sort((a, b) => a.ortalamaPerf - b.ortalamaPerf);

  const gelisimAlanlari = klasmanOrtalamalari.slice(0, 5);

  const gelisimHtml = gelisimAlanlari.map(k => {
    const perfClass = getPerformanceClass(k.ortalamaPerf);
    return `
      <tr>
        <td style="padding:10px 12px;font-weight:600;color:var(--navy)">${_escapeHtml(k.ad)}</td>
        <td style="padding:10px 12px;text-align:center"><span class="${perfClass}" style="font-weight:700;font-family:'DM Mono',monospace">${k.ortalamaPerf}%</span></td>
        <td style="padding:10px 12px;text-align:center;font-family:'DM Mono',monospace;color:var(--navy)">${k.toplamAdet.toLocaleString('tr-TR')}</td>
        <td style="padding:10px 12px;text-align:center;font-family:'DM Mono',monospace;color:var(--muted)">${k.kisiSayisi}</td>
      </tr>
    `;
  }).join('');

  // ── 4) En çok üretim yapan üye ─────────────────────────────────────────────
  const enCokUretim = [...teamInspectors].sort((a, b) => (b.adet || 0) - (a.adet || 0))[0];

  // ── Genel ekip özeti ─────────────────────────────────────────────────────
  const toplamAdet = teamInspectors.reduce((s, i) => s + (i.adet || 0), 0);
  const ortPerf = Math.round(teamInspectors.reduce((s, i) => s + (i.performans || 0), 0) / teamInspectors.length);

  container.innerHTML = `
    <!-- Üst özet kartları -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:20px">
      <div class="summary-stat">
        <div class="summary-stat-value">${teamInspectors.length}</div>
        <div class="summary-stat-label">${t.team_manager_member_count}</div>
      </div>
      <div class="summary-stat" style="background:linear-gradient(135deg,var(--lgreen) 0%,#fff 100%);border-color:#B2DFDB">
        <div class="summary-stat-value" style="color:${ortPerf>=95?'var(--green)':ortPerf>=85?'var(--blue)':ortPerf>=70?'var(--amber)':'var(--red)'}">${ortPerf}%</div>
        <div class="summary-stat-label">${t.team_avg_perf}</div>
      </div>
      <div class="summary-stat" style="background:linear-gradient(135deg,var(--lamber) 0%,#fff 100%);border-color:#FFE082">
        <div class="summary-stat-value" style="color:var(--amber)">${toplamAdet.toLocaleString('tr-TR')}</div>
        <div class="summary-stat-label">${t.team_manager_total_qty}</div>
      </div>
      <div class="summary-stat" style="background:linear-gradient(135deg,var(--lblue3) 0%,#fff 100%);border-color:var(--lblue)">
        <div class="summary-stat-value" style="font-size:18px;color:var(--blue)">🏅 ${_escapeHtml(_formatDisplayName(enCokUretim.ins))}</div>
        <div class="summary-stat-label">${t.ekip_analiz_top_producer} · ${(enCokUretim.adet || 0).toLocaleString('tr-TR')}</div>
      </div>
    </div>

    <!-- Genel sıralama tablosu -->
    <div style="background:#fff;border:1px solid var(--border2);border-radius:12px;overflow:hidden;margin-bottom:20px">
      <div style="padding:14px 16px;border-bottom:1px solid var(--border2);font-weight:700;color:var(--navy)">
        🏆 ${t.ekip_analiz_general_ranking}
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#f8f9fa">
            <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">#</th>
            <th style="padding:8px 12px;text-align:left;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_name}</th>
            <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_perf}</th>
            <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_qty}</th>
            <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_klasman_count}</th>
          </tr>
        </thead>
        <tbody>${genelSiraHtml}</tbody>
      </table>
    </div>

    <!-- Performans Dağılımı -->
    <div style="background:#fff;border:1px solid var(--border2);border-radius:12px;padding:16px;margin-bottom:20px">
      <div style="font-weight:700;color:var(--navy);margin-bottom:12px">📊 ${t.ekip_analiz_dist_title}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${dagilimHtml}
      </div>
    </div>

    <!-- Gelişim Alanları: en yavaş klasmanlar -->
    <div style="background:#fff;border:1px solid var(--border2);border-radius:12px;overflow:hidden;margin-bottom:8px">
      <div style="padding:14px 16px;border-bottom:1px solid var(--border2);font-weight:700;color:var(--navy)">
        🛠️ ${t.ekip_analiz_gelisim_title}
      </div>
      ${gelisimAlanlari.length ? `
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:#f8f9fa">
              <th style="padding:8px 12px;text-align:left;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_klasman}</th>
              <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_avg_perf}</th>
              <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_qty}</th>
              <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px">${t.ekip_analiz_col_member_count}</th>
            </tr>
          </thead>
          <tbody>${gelisimHtml}</tbody>
        </table>
      ` : `<div style="padding:14px 16px;color:var(--muted);font-size:13px">${t.ekip_analiz_no_klasman_data}</div>`}
    </div>
  `;
}

// Admin görünümünde, her ekip yöneticisi için özet kart oluşturur:
// kullanıcı adı, çalışan sayısı, toplam kontrol edilen adet ve performans
// ortalaması. _usersCache'teki "team" alanına sahip (admin olmayan)
// kullanıcılar üzerinden çalışır.
async function renderTeamManagersSection() {
  const section = document.getElementById('team-managers-section');
  const grid = document.getElementById('team-managers-grid');
  if (!section || !grid) return;

  const isAdmin = !currentUser || currentUser.isAdmin;
  if (!isAdmin || !performansData.length) {
    section.style.display = 'none';
    return;
  }

  // _usersCache henüz yüklenmediyse (Kullanıcılar sekmesine girilmemiş olabilir),
  // sessizce yükle.
  if (!_usersCache.length) {
    await _silentLoadUsersCache();
  }

  const managers = _usersCache.filter(u => (u.team || []).length > 0);
  if (!managers.length) {
    section.style.display = 'none';
    return;
  }

  const t = translations[currentLang] || translations.tr;

  grid.innerHTML = managers.map(mgr => {
    const teamInspectors = getInspectorsForTeam(mgr.team);
    const total = teamInspectors.length;
    const totalAdet = teamInspectors.reduce((s, i) => s + (i.adet || 0), 0);
    const avgPerf = total > 0
      ? Math.round(teamInspectors.reduce((s, i) => s + (i.performans || 0), 0) / total)
      : 0;

    const perfColor = avgPerf >= 95 ? 'var(--green)'
      : avgPerf >= 85 ? 'var(--blue)'
      : avgPerf >= 70 ? 'var(--amber)'
      : 'var(--red)';

    return `
      <div class="card team-manager-card" style="margin-bottom:0;overflow:hidden">
        <div class="card-header" style="background:linear-gradient(135deg,var(--navy) 0%,var(--navy2) 100%);border-bottom:none;padding:10px 14px">
          <h2 style="color:#fff;gap:8px;font-size:12px">
            <span style="background:rgba(255,255,255,.12);border-radius:6px;padding:3px 6px;font-size:12px">🧑‍💼</span>
            <span>${t.team_manager_prefix}: ${_escapeHtml(_formatDisplayName(mgr.username))}</span>
          </h2>
        </div>
        <div class="card-body" style="padding:12px 14px">
          ${total > 0 ? `
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
              <div style="text-align:center;padding:8px 4px;border-radius:8px;background:var(--lblue3);border:1px solid var(--border2)">
                <div style="font-size:18px;font-weight:700;color:var(--navy);font-family:'DM Mono',monospace;line-height:1">${total}</div>
                <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;margin-top:4px">${t.team_manager_member_count}</div>
              </div>
              <div style="text-align:center;padding:8px 4px;border-radius:8px;background:var(--lamber);border:1px solid #FFE082">
                <div style="font-size:18px;font-weight:700;color:var(--amber);font-family:'DM Mono',monospace;line-height:1">${totalAdet.toLocaleString('tr-TR')}</div>
                <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;margin-top:4px">${t.team_manager_total_qty}</div>
              </div>
              <div style="text-align:center;padding:8px 4px;border-radius:8px;background:var(--lgreen);border:1px solid #B2DFDB">
                <div style="font-size:18px;font-weight:700;color:${perfColor};font-family:'DM Mono',monospace;line-height:1">${avgPerf}%</div>
                <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;font-weight:600;margin-top:4px">${t.team_manager_avg_perf}</div>
              </div>
            </div>
          ` : `
            <div style="text-align:center;color:var(--muted);font-size:12px;padding:4px 0">${t.team_manager_no_members}</div>
          `}
        </div>
      </div>
    `;
  }).join('');

  section.style.display = '';
}

// _usersCache'i (Kullanıcılar sekmesine girmeden) sessizce doldurur.
// Hata olursa _usersCache boş bırakılır; section gizli kalır.
async function _silentLoadUsersCache() {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token) return;
  try {
    const data = await jsonpFetch(url, { action: 'getUsers', token });
    if (data.status === 'ok') {
      _usersCache = (data.users || []).map(u => ({ username: u.username, tabs: u.tabs || [], team: u.team || [] }));
    }
  } catch(e) {
    console.warn('_silentLoadUsersCache hatası:', e.message);
  }
}

// "Ekibim" kartını (özet istatistikler + üye listesi) çizer.
// Admin için kart zaten gizlidir (applyUserPermissions), burada sadece veriyi günceller.
function renderTeamSection() {
  const card = document.getElementById('my-team-card');
  if (!card) return;
  if (!currentUser || currentUser.isAdmin) return;

  const t = translations[currentLang] || translations.tr;
  const teamInspectors = getTeamInspectors();
  const total = teamInspectors.length;

  const avgPerf = total > 0
    ? Math.round(teamInspectors.reduce((s, i) => s + (i.performans || 0), 0) / total)
    : 0;
  const totalProducts = teamInspectors.reduce((s, i) => s + (i.adet || 0), 0);
  const avgDays = total > 0
    ? Math.round(teamInspectors.reduce((s, i) => s + (i.gunSayisi || 0), 0) / total)
    : 0;

  const elMembers  = document.getElementById('team-total-members');
  const elAvgPerf  = document.getElementById('team-avg-perf');
  const elProducts = document.getElementById('team-total-products');
  const elAvgDays  = document.getElementById('team-avg-days');
  if (elMembers)  elMembers.textContent  = total;
  if (elAvgPerf)  elAvgPerf.textContent  = avgPerf + '%';
  if (elProducts) elProducts.textContent = totalProducts.toLocaleString('tr-TR');
  if (elAvgDays)  elAvgDays.textContent  = avgDays + ' ' + t.days_suffix;


  const listEl = document.getElementById('team-members-list');
  if (!listEl) return;

  if (!total) {
    listEl.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:12px;width:100%">${t.team_empty_hint}</div>`;
    return;
  }

  listEl.innerHTML = teamInspectors
    .sort((a, b) => (b.performans || 0) - (a.performans || 0))
    .map(i => {
      const perf  = i.performans || 0;
      const color = getProgressColor(perf);
      const ini   = (i.ins || '').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
      const safeName = _escapeHtml(i.ins);
      const jsName   = safeName.replace(/'/g, "\\'");
      return `
        <div class="team-member-chip">
          <div class="avatar">${ini}</div>
          <div style="flex:1;min-width:0;cursor:pointer" onclick="showInspectorDetail('${jsName}')">
            <div class="tm-name">${safeName}</div>
            <div class="tm-perf" style="color:${color}">${perf}%</div>
          </div>
          <button class="tm-remove" title="${t.remove_from_team}" onclick="removeFromTeam('${jsName}')">✕</button>
        </div>`;
    }).join('');
}

// Ekipten bir inspector çıkarır (admin dede yetkisi gibi değil — sadece kendi ekibi).
async function removeFromTeam(name) {
  if (!currentUser || currentUser.isAdmin) return;
  const t = translations[currentLang] || translations.tr;
  if (!confirm(`"${name}" ${t.team_remove_confirm}`)) return;
  currentUser.team = (currentUser.team || []).filter(n => n !== name);
  try { localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); } catch(e) {}
  renderTeamSection();
  await _pushTeamToSheets();
}

// currentUser.team listesini Sheets'teki Users sayfasına gönderir (tek satır günceller).
async function _pushTeamToSheets() {
  const url   = appConfig.sheetsWebAppUrl;
  const token = appConfig.sheetsApiToken;
  if (!url || !token || !currentUser) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'setUserTeam', token, username: currentUser.username, team: currentUser.team || [] }),
      mode: 'no-cors'
    });
  } catch(err) {
    console.warn('Ekip güncelleme hatası:', err.message);
  }
}

// ── Ekibimi Düzenle Modalı ───────────────────────────────────────────────────
let _teamModalSelection = new Set();

function openTeamModal() {
  if (!currentUser || currentUser.isAdmin) return;
  if (!performansData.length) {
    alert('⚠️ Henüz performans verisi yok. Önce Performans Analizi sayfasından veri yükleyin.');
    return;
  }
  _teamModalSelection = new Set(currentUser.team || []);
  const searchEl = document.getElementById('team-modal-search');
  if (searchEl) searchEl.value = '';
  renderTeamModalList();
  document.getElementById('team-modal').classList.add('open');
}

function closeTeamModal() {
  document.getElementById('team-modal').classList.remove('open');
}

function renderTeamModalList() {
  const t = translations[currentLang] || translations.tr;
  const search = (document.getElementById('team-modal-search')?.value || '').toLowerCase();
  const listEl = document.getElementById('team-modal-list');
  if (!listEl) return;

  const hedef = Math.max(1, parseFloat(document.getElementById('inp-verimlilik')?.value) || 100);
  const perfByName = {};
  performansData.forEach(i => {
    const p = i.verimlilikPerf !== null && i.verimlilikPerf !== undefined
      ? i.verimlilikPerf
      : (i.genelHizPerf !== null && i.genelHizPerf !== undefined ? Math.round(i.genelHizPerf * (100 / hedef)) : null);
    perfByName[i.ins] = p;
  });

  const names = [...new Set(performansData.map(i => i.ins))].sort((a, b) => a.localeCompare(b, 'tr'));
  const filtered = names.filter(n => n.toLowerCase().includes(search));

  if (!filtered.length) {
    listEl.innerHTML = `<div style="padding:14px;text-align:center;color:var(--muted);font-size:12px">${t.team_no_result}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(n => {
    const checked = _teamModalSelection.has(n) ? 'checked' : '';
    const safe = _escapeHtml(n);
    const jsName = safe.replace(/'/g, "\\'");
    const p = perfByName[n];
    const perfBadge = p !== null && p !== undefined
      ? `<span style="font-size:11px;font-weight:700;color:${getProgressColor(p)}">${p}%</span>`
      : `<span style="font-size:11px;color:var(--muted)">—</span>`;
    return `
      <label style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px;cursor:pointer;padding:6px 8px;border-radius:6px;background:#fff;border:1px solid var(--border2)">
        <span style="display:flex;align-items:center;gap:8px;min-width:0">
          <input type="checkbox" ${checked} onchange="_teamModalToggle('${jsName}', this.checked)" style="width:15px;height:15px;margin:0;cursor:pointer;accent-color:var(--blue2);flex-shrink:0">
          <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${safe}</span>
        </span>
        ${perfBadge}
      </label>`;
  }).join('');
}

function _teamModalToggle(name, checked) {
  if (checked) _teamModalSelection.add(name);
  else _teamModalSelection.delete(name);
}

async function saveTeamFromModal() {
  currentUser.team = [..._teamModalSelection];
  try { localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser)); } catch(e) {}
  closeTeamModal();
  renderTeamSection();
  await _pushTeamToSheets();
  showSuccessMessage('✅ Ekibiniz güncellendi');
}
