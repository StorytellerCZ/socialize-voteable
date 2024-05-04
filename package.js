/* global Package */
Package.describe({
    name: 'socialize:voteable',
    summary: 'A package for implementing social up/down style voting',
    version: '2.0.0',
    git: 'https://github.com/copleykj/socialize-voteable.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['2.8.1', '3.0-rc.0']);

    api.use([
        'socialize:linkable-model@2.0.0',
        'socialize:user-blocking@2.0.0',
        'reywood:publish-composite@1.8.9',
    ]);

    api.imply('socialize:linkable-model');

    api.mainModule('server/server.js', 'server');
    api.mainModule('common/common.js', 'client');
});
