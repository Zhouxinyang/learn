require.config({
    paths: {
        "jquery" : "jquery-1.12.4"
    }
});
define(["jquery"],function($){
        function Dialog(){
            this.defaultSettings = {
                width : 300,
                height :400,
                content : "",
                title : "弹出层"
            };
            this.container = $('<div class="dialog-container"></div>');
            this.mask = $('<div class="dialog-mask"></div>');
            this.title = $('<div class="dialog-title"></div>');
            this.item = $('<div class="dialog-title-item"></div>');
            this.close = $('<div class="dialog-title-close">[x]</div>');
            this.content = $('<div class="dialog-container"></div>');
            this.box = $('<div class="dialog-box"></div>');
        }

    Dialog.prototype.open = function(options){
        $.extend(this.defaultSettings,options);
        this.item.html(this.defaultSettings.title);
        $(document.body).append(this.container);
        this.container.append(this.mask).append(this.box)
        this.title.append(this.item).append(this.close);
        this.box.append(this.title).append(this.content).css({
            width : this.defaultSettings.width,
            height : this.defaultSettings.height
        });
        this.content.css({
            height : this.defaultSettings.height - 30
        }).load(this.defaultSettings.content);
        var that = this;
        this.close.on('click',function(){
            that.closeDialog();
        });
    }
    Dialog.prototype.closeDialog = function(){
        this.container.remove();
    }
    return Dialog;


});