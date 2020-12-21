const GIPHY_API_KEY = `jf8w0w90RcfWrRBnIFbMbAhb1oXh2RtU`;
const xhr = new XMLHttpRequest();

xhr.onload = postGifs;
xhr.open(`GET`, `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=friends%20chandler`);
// xhr.setRequestHeader(`Accept`, `application/JSON`);
xhr.setRequestHeader(`Content-Type`, `application/JSON`);
xhr.send();

function postGifs() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // mainContent.innerHTML = xhr.response;
    const parsedGifs = JSON.parse(xhr.response);
    console.log(parsedGifs);
    for (let i = 0; i < 16; i++) {
      const thumbnail = document.createElement(`img`);
      thumbnail.setAttribute(`src`, parsedGifs.data[i].images.downsized_still.url);
      mainContent.appendChild(thumbnail);
    }
    const thumbnails = document.getElementsByTagName(`img`);
    console.log(thumbnails);

    // eslint-disable-next-line no-restricted-syntax
    /*
    for (const gif of thumbnails) {
      gif.addEventListener(`click`, () => {
        gif.setAttribute(`src`, parsedGifs.data[1].images.downsized.url); // itt mit kellene csinálnom??
      });
    }
    */
    for (let i = 0; i < 16; i++) {
      thumbnails[i].addEventListener(`click`, () => {
      // if (thumbnails[i].getAttribute(`src`, parsedGifs.data[i].images.downsized_still.url)) {
        thumbnails[i].setAttribute(`src`, parsedGifs.data[i].images.downsized.url);
        // } else {
        // thumbnails[i].setAttribute(`src`, parsedGifs.data[i].images.downsized_still.url);
        // }
      });
    }
  }
}
