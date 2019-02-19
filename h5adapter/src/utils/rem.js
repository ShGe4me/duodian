const remUni = 75
const width = 375

document.querySelector('html').style.fontSize = remUni * (window.innerWidth / width) + 'px'
window.resize = () => {
  document.querySelector('html').style.fontSize = remUni * (window.innerWidth / width)+ 'px'
}
