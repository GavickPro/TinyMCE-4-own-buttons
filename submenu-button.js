(function() {
    tinymce.PluginManager.add('gavickpro_tc_button', function( editor, url ) {
        editor.addButton( 'gavickpro_tc_button', {
            title: 'My test button',
            type: 'menubutton',
            icon: 'icon gavickpro-own-icon',
            menu: [
            	{
            		text: 'Menu item I',
            		value: 'Text from menu item I',
            		onclick: function() {
            			editor.insertContent(this.value());
            		}
           		}
           ]
        });
    });
})();