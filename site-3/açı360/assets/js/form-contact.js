$(document).ready(function () {
    $("form#contact-form").validate({
        errorElement: "span",
        ignore: ".ignore_validation",
        onsubmit: false,
        highlight: (element) => {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: (element) => {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorPlacement: (error, element) => {
            var error_div = element.closest(".form-group").find(".help-block");
            if (error_div.length > 0) {
                error_div.append(error);
            } else {
                error.insertAfter(element);
            }
        },
        success: (element) => {
            $(element).remove();
        },
        messages:{
            email: {
                required :'Bu alanı doldurmak zorundasınız.',
                email :'Lütfen geçerli bir e-posta giriniz.'
            },
            phone: {
                required :'Bu alanı doldurmak zorundasınız.',
            },
            name: {
                required :'Bu alanı doldurmak zorundasınız.',
            },
            subject: {
                required :'Bu alanı doldurmak zorundasınız.',
            },
            message: {
                required :'Bu alanı doldurmak zorundasınız.',
            }
        }
    });

    /**
     * Sayfa içerisinde intlTelInput varsa bunun için validation methodu ekliyoruz
     */
     if (typeof $.fn.intlTelInput !== undefined) {
        $.validator.addMethod("phoneCheck", function (value, element) {
            return $(element).intlTelInput("isValidNumber");
        }, "Lütfen geçerli bir telefon formatı giriniz.");
    }
});

$(document).ready(function () {
    $('form#contact-form').submit(function (e) {
        e.preventDefault();

        if ($(this).valid()) {
            let form = $(this).serialize();
            $.post("contact.php", form, function (data) {
                if (data.success === true) {
                    $('form#contact-form').get(0).reset();
                    $('form#contact-form').before('<div class="success alert alert-success">Teşekkürler. E-postanız başarıyla gönderildi.</div>');
                    setTimeout(function () {
                        $(".success").remove();
                    }, 5000);
                } else {
                    $('form#contact-form').before('<div class="danger alert alert-danger">E-postanız gönderilken bir hata meydana geldi. (HATA : '+data.message+')</div>');
                    setTimeout(function () {
                        $(".danger").remove();
                    }, 5000);
                }
            }, "json");
        }
        return false;
    });
});
