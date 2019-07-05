(function($) {    

    $.anwidget("ee.BtnIconoFlotante", {
        options: {
			'visible': true,
			'disabled': false,
            'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "estilo", "label", "icono"],
		getCreateOptions: function() {
            return $.extend(this.options, { 'id': "button" + _widgetID++ });
		},
		getCreateString: function() {
			return "<button class='mdc-fab aria-label='" + this._options['label'] + "' id='" + this._options['id'] + "'><span class='mdc-fab__icon material-icons'>" + this._options['icono'] + "</span> </button>";
		},			
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		},
        update: function(force) {
            this.applyProperties(this._$this, force);
			this.applyAttributes(this._$this, force);			
		}
    });   
})(jQuery);