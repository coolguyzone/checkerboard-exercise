// Your JS goes here

for (let i = 1; i < 82; i++) {
  let redValue = Math.floor(Math.random() * (255 + 1));
  let greenValue = Math.floor(Math.random() * (255 + 1));
  let blueValue = Math.floor(Math.random() * (255 + 1));

  let tile = document.createElement('div')
  tile.innerHTML = "<div style='display:block; padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>"
  document.body.append(tile)

}
