let dragging = false; // 是否正在移动
let position = null; // 位置
xxx.addEventListener(`mousedown`, function(e) {
    dragging = true; //正在移动中
    position = [
        e.clientX,
        e.clientY
    ];
    console.log("position1", position);
});
document.addEventListener("mousemove", function(e) {
    if (dragging === false) return;
     //没有移动，什么也不做
    const x = e.clientX;
    const y = e.clientY;
    const deltaX = x - position[0];
    const deltaY = y - position[1];
    const left = parseInt(xxx.style.left || 0);
    const top = parseInt(xxx.style.top || 0);
    xxx.style.left = left + deltaX + "px";
    xxx.style.top = top + deltaY + "px";
    position = [
        x,
        y
    ];
    console.log("position2", position);
});
document.addEventListener("mouseup", function(e) {
    dragging = false;
});

//# sourceMappingURL=index.de158e3a.js.map
