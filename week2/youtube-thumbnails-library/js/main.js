console.log('hello world');

const everyLink = document.getElementsByTagName('a');

for( let i = 0; i < everyLink.length; i++ ){
  const currentLink = everyLink[i];
  const url = currentLink.href;
  const thumbnailURL =  youtube.generateThumbnailUrl( url );
  console.log('video url: ', url);
  console.log('thumbnail url: ', thumbnailURL);

  const img = document.createElement('img');
  img.src = thumbnailURL;

  currentLink.appendChild( img );

}
