//文字職変化
$(function () {
  //「文字色変化」ボタンがクリックされたら
  $('#change-color').on('click', function () {
    //targetの文字の色を変える
      $('#target').toggleClass('red');
  });
});

//文字内容変化
$(function () {
  //「文字内容変化」ボタンがクリックされたら
  $('#change-text').on('click', function () {
    //targetの文字内容を変える
      $('#target').text('Hello!');
  });
});

//フェードアウト
$(function () {
  //「フェードアウト」ボタンがクリックされたら
  $('#fade-out').on('click', function () {
    //targetをフェードアウトで非表示にする
      $('#target').fadeOut();
  });
});

//フェードイン
$(function () {
  //「フェードイン」ボタンがクリックされたら
  $('#fade-in').on('click', function () {
    //targetをフェードインで表示する
      $('#target').fadeIn();
  });
});