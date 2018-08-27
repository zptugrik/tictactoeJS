function Layer(layerName) {
    this.layerName = layerName;
    this.disabled = false;
    this.childs = [];
    this.drawObject = false;
    this.x = 0;
    this.y = 0;
}
Layer.prototype.AddDrawObject = function(drawObject) {
    this.drawObject = drawObject;
}

Layer.prototype.SetPosition = function(position) {
    this.x = position.x;
    this.y = position.y;
}

Layer.prototype.AddChild = function(childObject) {
    this.childs.push(childObject);
}
Layer.prototype.Enable = function(isEnable) {
    this.disabled = !isEnable;
    if(this.childs.length > 0){
        for( let i = 0; i < this.childs.length; i++){
            this.childs[i].disabled = !isEnable;
        }
    }
}
Layer.prototype.Draw = function() {
    if( !this.disabled && this.childs.length > 0){
        for( let i = 0; i < this.childs.length; i++){
            if( this.childs[i].drawObject ){
                ctx.drawImage(this.childs[i].drawObject, this.childs[i].x, this.childs[i].y);
            }
            this.childs[i].Draw();
        }
    }
}