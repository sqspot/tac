function main(item) {
  const url = item.url;
  let field = {
    url: url
  };

  if (url.includes('.4gtv.tv')) {
    // field.filter = 'static-mozai.4gtv.tv'
    field.contains = 'cdn.hinet.net/live/'
  } else if (url.includes('mjv003.com')) {
    field.verify = 'Eighteen_declaration_2023.png'
  } else if (url.includes('yeslivetv.com')) {
    field.button = '.vjs-big-play-button'
    field.contains = '.m3u8,.googlevideo.com/videoplayback'
    field.filter = 'static-mozai.4gtv.tv'
  } else if (url.includes('www.ofiii.com')) {
    field.button = '.player_container'
  } else if (url.includes('www.gdtv.cn')) {
    field.index = 2
  } else if (url.includes('www.chaojidianshi.net')) {
    field.filter = 'www.google.com'
  } else if (url.includes('huya.com')) {
    field.contains = '.flv'
  }
  return jz.getVideo(field);
}