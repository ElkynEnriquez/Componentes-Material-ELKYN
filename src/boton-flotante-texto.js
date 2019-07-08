(function ($) {    

    $.anwidget("ee.BtnTextoFlotante",{
        options: {
			'visible': true,
			'disabled': false,
            'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "estilo", "label", "icono", "texto"],
		getCreateOptions: function() {
            return $.extend(this.options, { 'id': "button" + _widgetID++ });
		},
		getCreateString: function() {
            var salida="";
			salida="<button class='mdc-fab mdc-fab-ink-color($mdc-theme-on-primary) ";
            if (this._options['texto'] == true)
                { salida += "mdc-fab--extended "; }
            else 
                { salida += "aria-label='" + this._options['label'] + "' ";}
            salida += "id='" + this._options['id'] + "'><span class='mdc-fab__icon material-icons'>" + this._options['icono'] + "</span>";
            if (this._options['texto'] == true)
                { salida += "<span class='mdc-fab__label'>" + this._options['label'] + "</span> </button>"; }
            else {salida += "</button>";}
            return salida;
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
            if (this._options['texto'] == false)
            {   var alto = this._$this.css("height");
                this._$this.css("width", alto);}
		}
    });   
})(jQuery);