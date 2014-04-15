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
                    text: 'Custom header tag',
                    onclick: function() {
                        editor.windowManager.open( {
                            title: 'Insert header tag',
                            body: [{
                                type: 'textbox',
                                name: 'title',
                                label: 'Your title'
                            },
                            {
                                type: 'textbox',
                                name: 'id',
                                label: 'Header anchor'
                            },
                            {
                                type: 'listbox', 
                                name: 'level', 
                                label: 'Header level', 
                                'values': [
                                    {text: '<h3>', value: '3'},
                                    {text: '<h4>', value: '4'},
                                    {text: '<h5>', value: '5'},
                                    {text: '<h6>', value: '6'}
                                ]
                            }],
                            onsubmit: function( e ) {
                                editor.insertContent( '<h' + e.data.level + ' id="' + e.data.id + '">' + e.data.title + '</h' + e.data.level + '>');
                            }
                        });
                    }
                }
           ]
        });
    });
})();