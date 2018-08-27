function Field(){
    this.x = 115;
    this.y = 0;
    this.disabled = false;
}

Field.prototype.Draw = function(){

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 6;
    ctx.moveTo(this.x + 290, this.y + 20);
    ctx.lineTo(this.x + 290, this.y + 330);

    ctx.moveTo(this.x + 400, this.y + 20);
    ctx.lineTo(this.x + 400, this.y + 330);

    ctx.moveTo(this.x + 190, this.y + 120);
    ctx.lineTo(this.x + 500, this.y + 120);

    ctx.moveTo(this.x + 190, this.y + 230);
    ctx.lineTo(this.x + 500, this.y + 230);

    ctx.stroke();
}