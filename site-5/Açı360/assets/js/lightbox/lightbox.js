    $(function () {
        $('#portfolio').magnificPopup({
            delegate: 'a',
            type: 'image',
            image: {
                cursor: null,
                titleSrc: 'title' },

            gallery: {
                enabled: true,
                preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
                navigateByImgClick: true } });


    });
