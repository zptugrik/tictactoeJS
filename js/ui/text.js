function Text(init){
    this.label = init.lable || "";
    this.x = init.position.x || 0;
    this.y = init.position.y || 0;
    this.font = init.font || "20px Arial";
    this.color = init.color || "blue";
    this.disabled = false;
}

Text.prototype.Draw = function(){

    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.fillText(this.label, this.x, this.y);
    ctx.stroke();
}