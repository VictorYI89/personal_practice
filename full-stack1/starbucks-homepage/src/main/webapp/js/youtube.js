// 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
var player;
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',  //변경-영상ID
        playerVars: {
            autoplay : 1,   //자동재생 여부(1:자동재생 함, mute와 함께 설정)
            loop : 1,    //반복재생여부(1:반복재생 함)
            playlist : 'An6LvWQuj_8'   //재생할 영상 리스트
        },
        events: {
            onReady: function(event){
                event.target.mute()
            }
        }
    });
}
