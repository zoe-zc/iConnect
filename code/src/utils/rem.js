/**
 * 动态设置根字体大小
 */
const baseSize = 37.5

function setRem(){
    console.log(document.documentElement.clientWidth)
    const scale = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = baseSize * Math.min(scale,2) + 'px'
}
setRem()

window.onresize = function(){
    setRem()
}