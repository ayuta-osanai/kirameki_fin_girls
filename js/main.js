$('.carousel').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  // dots: true, // ドットを表示
  fade: false, // フェードで切り替え
  speed: 1500,
});

// アニメーション
  //左方向
  $('.left').waypoint({
    handler: function(direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === 'down') {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeOutUpを削除して
         * fadeInUpアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element)
          .addClass('animate__fadeInLeft');
      }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
  });

  //右方向
  $('.right').waypoint({
    handler: function(direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === 'down') {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeOutUpを削除して
         * fadeInUpアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element)
          .addClass('animate__fadeInRight');
      }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
  });


$('.accordion-title-wrapper').on('click', function(e) {

  $(this).find('.accordion-plus-minus-mark').toggleClass('open');



  // .accordion-contentを選択

  var content =  $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();
});