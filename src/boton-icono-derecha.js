(function($) {    

    $.anwidget("ee.BtnIconoDerecha", {
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
			return "<button class='mdc-button mdc-button--" + this._options['estilo'] + "' id='" + this._options['id'] + "'><span class='mdc-button__label'>" + this._options['label'] + "</span> <i class='material-icons mdc-button__icon' aria-hidden='true'>" + this._options['icono'] + "</i></button>";
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