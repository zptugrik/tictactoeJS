function AssetsManager() {
    this.successCount = 0;
    this.errorCount = 0;
    this.cache = {};
    this.downloadQueue = [];
}

AssetsManager.prototype.QueueDownload = function(path) {
    this.downloadQueue.push(path);
}

AssetsManager.prototype.DownloadAll = function(DownloadCallback) {
    if (this.downloadQueue.length === 0) {
        DownloadCallback();
    }
    else{
        for (var i = 0; i < this.downloadQueue.length; i++) {
            var path = this.downloadQueue[i];
            var img = new Image();
            var that = this;
            img.addEventListener("load", function() {
                console.log(this.src + ' is loaded');
                that.successCount += 1;
                if (that.IsDone()) {
                    DownloadCallback();
                }
            }, false);
            img.addEventListener("error", function() {
                that.errorCount += 1;
                if (that.IsDone()) {
                    DownloadCallback();
                }
            }, false);
            img.src = path;
            this.cache[path] = img;
        }
    }
}

AssetsManager.prototype.IsDone = function() {
    return (this.downloadQueue.length == this.successCount + this.errorCount);
}

AssetsManager.prototype.GetAsset = function(path) {
    return this.cache[path];
}