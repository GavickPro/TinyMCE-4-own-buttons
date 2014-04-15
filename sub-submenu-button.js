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
                },
                {
                    text: 'Menu item II',
                    value: 'Text from menu item II',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                        {
                            text: 'First submenu item',
                            value: 'Text from sub sub menu',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }       
                        },
                        {
                            text: 'Second submenu item',
                            value: 'Text from sub sub menu',
                            onclick: function(e) {
                                e.stopPropagation();
                                editor.insertContent(this.value());
                            }       
                        }
                    ]
                },
                {
                    text: 'Menu item III',
                    value: 'Text from menu item III',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                }
           ]
        });
    });
})();