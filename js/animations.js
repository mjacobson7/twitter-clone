$(document).ready(function(){
  $('#tweet-controls').hide();
  $('.tweet-actions').hide();
  $('.stats').hide();
  $('#tweet-content .tweet-compose').on('click', function() {
    $('#tweet-content .tweet-compose').css('height', '5em');
    $('#tweet-controls').show();
  })
  $('.reply .tweet-compose').on('click', function() {
    $(this).css('height', '5em');
  })
  $('.tweet-compose').keyup(function() {
    var charLeft = 140 - this.value.length;
    $('#char-count').html(charLeft);
    if(charLeft <= 10) {
      $('#char-count').css('color', 'red');
    }
    if(charLeft > 10) {
      $('#char-count').css('color', 'black');
    }
    if(charLeft < 0) {
      $('#tweet-submit').prop('disabled', true);
    }
    if(charLeft >= 0) {
      $('#tweet-submit').prop('disabled', false);
    }
    })
  $('#tweet-submit').click(function() {
    var textInput = $('.tweet-compose').val();
    $('#stream').prepend('<div class="tweet"><div class="content">' +
    '<img class="avatar" src="img/alagoon.jpg"/>' +
    '<strong class="fullname">Max Jacobson</strong> ' +
    '<span class="username">@mjacobson7</span>' +
    '<p class="tweet-text">' + textInput + '</p>' +
    '<div class="tweet-actions">' +
    '<ul>' +
    '<li><span class="icon action-reply"></span> Reply</li>' +
    '<li><span class="icon action-retweet"></span> Retweet</li>' +
    '<li><span class="icon action-favorite"></span> Favorite</li>' +
    '<li><span class="icon action-more"></span> More</li>' +
    '</ul>' +
    '</div>' +
    '<div class="stats">' +
    '<div class="retweets">' +
    '<p class="num-retweets">30</p>' +
    '<p>RETWEETS</p>' +
    '</div>' +
    '<div class="favorites"> ' +
    '<p class="num-favorites">6</p>' +
    '<p>FAVORITES</p>' +
    '</div>' +
    '<div class="users-interact">' +
    '<div>' +
    '<img src="img/alagoon.jpg"/>' +
    '<img src="img/vklimenko.jpg"/>' +
    '</div>' +
    '</div>' +
    '<div class="time">' +
    '1:04 PM - 19 Sep 13' +
    '</div>' +
    '</div>' +
    '<div class="reply">' +
    '<img class="avatar" src="img/alagoon.jpg"/>' +
    '<textarea class="tweet-compose" placeholder="Reply to @mjacobson7"/></textarea>' +
    '</div>' +
    '</div>' +
    '</div>');
  })
  $('.tweet').hover(function(){
    $(this).find('.tweet-actions').show();
  })
  $('.tweet').mouseleave(function(){
    $(this).find('.tweet-actions').hide();
  })
  $('.tweet').on('click', function(){
    $(this).find('.stats').show(250);
  })
})
