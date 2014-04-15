(function() {
    tinymce.PluginManager.add('gavickpro_tc_button', function( editor, url ) {
        editor.addButton( 'gavickpro_tc_button', {
            title: 'My test button',
            icon: 'wp_code',
            onclick: function() {
                editor.insertContent('Hello World!');
            }
        });
    });
})();