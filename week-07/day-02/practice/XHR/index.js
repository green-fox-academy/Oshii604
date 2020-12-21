//       A 4 SOR, ami mindenképpen kell:

//      const myRequest = new XMLHttpRequest();
//      myRequest.onload = console.log;
//      myRequest.open(`GET`, `https://canceled.greenfox.academy`);
//      myRequest.send(null);

function finishedLoading(parameter) {
  console.log(parameter);
}

console.log(`another code here`);
const myRequest = new XMLHttpRequest();
// myRequest.onreadystatechange = console.log;
// myRequest.onreadystatechange = finishedLoading;
myRequest.onreadystatechange = (event) => {
  console.log(event.target.readyState);
  // ez ugyanaz:
  // console.log(myRequest.readyState);
  console.log(event);
  if (myRequest.readyState === 4) {
    console.log(`onreadystatechange:`, myRequest.status);
  }
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    mainContent.innerHTML = myRequest.response;
  }
};

myRequest.onload = () => {
  console.log(`onload:`, myRequest.status);
};

myRequest.open(`GET`, `https://canceled.greenfox.academy`);
// 404 hiba:
// myRequest.open(`GET`, `https://canceled.greenfox.academy/hello`);

// header-change, de megbaszódik tőle minden
// myRequest.setRequestHeader(`csokulcs`, `mivan`);
myRequest.setRequestHeader(`Accept`, `application/JSON`);

myRequest.send(null);

function hello(callback) {
  callback(`Hello World!`);
}

hello(console.log);
