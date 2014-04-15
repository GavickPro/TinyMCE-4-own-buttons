(function() {
    tinymce.PluginManager.add('gavickpro_tc_button', function( editor, url ) {
        editor.addButton( 'gavickpro_tc_button', {
            title: 'My test button',
            type: 'menubutton',
            icon: 'icon gavickpro-own-icon',
            menu: [
                {
                    text: 'Custom h3 tag',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Insert h3 tag',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Your title'
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '<h3>' + e.data.title + '</h3>');
                            }
                        });
                    }
                },
                {
                    text: 'Custom h4 tag',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Insert h4 tag',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Your title'
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '<h4>' + e.data.title + '</h4>');
                            }
                        });
                    }
                }
           ]
        });
    });
})();