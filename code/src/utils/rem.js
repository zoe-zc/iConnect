/**
 * 动态设置根字体大小
 */
// const baseSize = 144

// function setRem() {
//   console.log(document.documentElement.clientWidth)
//   const scale = document.documentElement.clientWidth / 1440
//   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
// }

function setRem() {
  let baseSize = 144 // 这个是设计稿中1rem的大小。
  // 移动端
  if (document.documentElement.clientWidth <= 768) {
    // 移动端 100px = 1rem
    baseSize = 100 // 这个是设计稿中1rem的大小。
    const scale = document.documentElement.clientWidth / 320
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  } else {
    // pc端
    baseSize = 144
    const scale = document.documentElement.clientWidth / 1440
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
}

setRem()

window.onresize = function() {
  setRem()
}
