Package.describe({
    name: 'kevohagan:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '1.1.0',
    git: 'https://github.com/kevohagan/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@1.1.0.3");

    api.add_files([
        'sweetalert/lib/sweet-alert.css',
        'sweetalert/lib/sweet-alert.min.js'
    ], ['client']);
});
