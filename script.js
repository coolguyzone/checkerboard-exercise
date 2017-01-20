// Your JS goes here

//BLACK AND RED

// for (let i = 1; i < 82; i++) {
//     if (i % 2 === 0) {
//       let red = document.createElement('div')
//       red.innerHTML = "<div style='display:block; background-color:#FF0000;padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>"
//       document.body.append(red)
//     } else {
//       let black = document.createElement('div')
//       black.innerHTML = "<div style='display:block; background-color:#000000;padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>"
//       document.body.append(black)
//     }
// }

//RANDOM COLORS

for (let i = 1; i < 82; i++) {
  let redValue = Math.floor(Math.random() * (255 + 1));
  let greenValue = Math.floor(Math.random() * (255 + 1));
  let blueValue = Math.floor(Math.random() * (255 + 1));
  rgb = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ');'

  let tile = document.createElement('div')

  // tile.setAttribute("style", "background-color:" + rgb)
  tile.innerHTML = "<div style='display:block; padding-bottom:11.1%;float:left; background-color:" + rgb + "width:11.1%'>&nbsp;</div>"
  document.body.append(tile);

}
