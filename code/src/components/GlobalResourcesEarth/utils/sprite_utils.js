import * as THREE from "three";
export function CreateSprite(str, position) {
    const fontsize = 20;
    var widthBorderSize = 10;
    var heightBorderSize = 5;
    //三角号的大小
    var triangle = 10;
    // var str = "北京11sqwe"
    var canvasTexture = makeTexture(str, fontsize, widthBorderSize, heightBorderSize, triangle);
    /* 画布内容用于纹理贴图 */
    // canvas.width=300;
    // canvas.height=150;
    var texture = new THREE.Texture(canvasTexture);

    texture.needsUpdate = true;
    // console.log(context);
    var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    var sprite = new THREE.Sprite(spriteMaterial);
    /* 缩放比例 */
    sprite.position.set(position.x, position.y, position.z);
    // sprite.scale.set(100, 50, 1);

    return sprite;
}
function makeTexture(message, fontsize, widthBorderSize, heightBorderSize, triangle) {
    /* 创建画布 */
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var fontface = "myFont";
    context.font = fontsize + "px " + fontface;
    var metrics = context.measureText(message);
    var textWidth = metrics.width;
    canvas.width = textWidth + widthBorderSize * 2;
    canvas.height = fontsize + heightBorderSize * 2 + triangle;
    context.font = fontsize + "px " + fontface;
    context.fillStyle = "rgba(143, 195, 31, 1.0)";
    context.strokeStyle = "rgba(143, 195, 31, 1.0)";
    normRect(context, 0, 0, textWidth + widthBorderSize * 2, fontsize + heightBorderSize * 2, triangle);
    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.fillText(message, widthBorderSize, fontsize + heightBorderSize);
    return canvas;
}
function normRect(context, x, y, width, height, triangle) {
    context.beginPath();
    // ctx.moveTo(x, y);
    // ctx.lineTo(x, y - 2*h);
    // ctx.lineTo(x + 2*w, y - 2*h);
    // ctx.lineTo(x + 2*w, y);
    // ctx.lineTo(x, y);
    context.moveTo(x, y);
    context.lineTo(x, y + height);
    context.lineTo(x + width / 2 - triangle, y + height);
    context.lineTo(x + width / 2, y + height + triangle);
    context.lineTo(x + width / 2 + triangle, y + height);
    context.lineTo(x + width, y + height);
    context.lineTo(x + width, y);
    context.lineTo(x, y);
    context.closePath();
    context.fill();
    context.stroke();
}
function roundRect(ctx, x, y, w, h, r) {

    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

}