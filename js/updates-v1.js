let webvium = ['Webvium-v21.04.17', 'Webvium-v21.4.20', 'Webvium-v1.2', 'Webvium-v1.3', 'Webvium-v1.4', 'Webvium-v1.5', 'Webvium-v1.6', 'Webvium-v1.7']
webvium.forEach(function(item, index, array) {
  console.log(item, index)
  let li0 = document.createElement("a")
  li0.href = 'https://mrepol742.github.io/PROJECT-WEBVIUM/Downloads/' + item + '.apk';
  li0.title = item;
  div.appendChild(li0)
})