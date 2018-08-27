function Button(decorator){

    // decorate button at the beginning
    this.label = decorator.lable || "Button";
    this.buttonX = decorator.position.x || 10;
    this.buttonY = decorator.position.y || 80;
    this.buttonW = decorator.width || 120;
    this.buttonH = decorator.height || 60;
    this.backgroundColor = decorator.backgroundColor || "green";
    this.textColor = decorator.textColor || "white";
    this.OnClick = decorator.OnClick || this.OnClick;
    this.xOffset = document.getElementById("canvas").offsetLeft;
    this.yOffset = document.getElementById("canvas").offsetTop;
    this.disabled = false;
    this.transparent = decorator.transparent || false;

    canvas.addEventListener('click', function(event) {
        if (!this.disabled &&
            event.x > this.buttonX + this.xOffset &&
            event.x < this.buttonX + this.buttonW + this.xOffset &&
            event.y > this.buttonY + this.yOffset &&
            event.y < this.buttonY + this.buttonH + this.yOffset
        ) {
            this.OnClick();
        }
    }.bind(this));
}
Button.prototype.SetPosition = function(position) {
    this.buttonX = position.x;
    this.buttonY = position.y;
}
Button.prototype.OnClick = function(){
        console.log('Button was clicked!');
}

Button.prototype.AddLable = function(text){
    this.label = text;
}

Button.prototype.Draw = function(){
    if( !this.transparent )
    {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.buttonX, this.buttonY, this.buttonW, this.buttonH);

        ctx.strokeStyle = this.backgroundColor;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 6;
        ctx.strokeRect(this.buttonX, this.buttonY, this.buttonW, this.buttonH);


        ctx.textAlign = "left";
        ctx.fillStyle = this.textColor;
        ctx.font = "20px Arial";
    }

    ctx.fillText(this.label,
        this.buttonX + (this.buttonW - parseInt(ctx.measureText(this.label).width))/2,
        this.buttonY + (this.buttonH - parseInt(ctx.font.match(/\d+/), 10))/2 + 0.9 * parseInt(ctx.font.match(/\d+/), 10));
}