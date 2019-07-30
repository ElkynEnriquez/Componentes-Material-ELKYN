(function ($) {

    $.anwidget("ee.BtnTextoPrimary",{
        options: {
			'visible': true,
			'disabled': false,
            'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "color", "label", "outline"],
		getCreateOptions: function() {
            return $.extend(this.options, { 'id': "button" + _widgetID++ });
		},
		getCreateString: function() {
            var salida="";
			salida="<button id='" + this._options['id'] + "' class='btn btn-";
            if (this._options['outline'] == true)
                { salida += "outline-"; }
            salida += this._options['color'] + "' ";
            salida += " type='button'>";
            salida += this._options['label'] + "</button>";
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