$("#dynamic-content img").each(function (index, element) {
    if ($("#dynamic-content").hasClass("no-img-wrap") ||
        $(this).hasClass("no-img-wrap")) {
        return;
    }

    if (!$(this).hasClass("img-responsive")) {
        $(this).addClass("img-responsive");
    }

    if (!$(this).hasClass("img-thumbnail")) {
        $(this).addClass("img-thumbnail");
    }

    var src  = $(this).attr("src").replace("_th", "");
    var wrap = '<a href="' + src + '" data-lightbox="' + index + '"></a>';

    /**
     * Çok dandik bir çözüm ama şimdilik uyguluyoruz bakalım
     * eğer cms'den bootstrap content gibi eklenirse resim doğru şekilde col-md-3 bir div'in içine ekleniyor
     * fakat dümdüz eklediğimiz resimler bütün sayfa boyutunda gözüküyor o yüzden onları da div'in içine almak lazım
     * ama bootstraple eklenenleri almamak lazım
     * bootstrap tool ile eklenen resimler <p> içinde geliyor eğer resim <p>'deyse sadece lightbox ekliyoruz
     * değilse <div> + <a> ekliyoruz
     */
    // if ($(this).parent().get(0).tagName != "P") {
    //     wrap = "<div class='col-md-3'>" + wrap + "</div>";
    // }
    $(this).wrap(wrap);
});
