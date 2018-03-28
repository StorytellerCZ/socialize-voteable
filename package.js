/* global Package */
Package.describe({
    name: 'socialize:voteable',
    summary: 'A package for implementing social up/down style voting',
    version: '1.0.0',
    git: 'https://github.com/copleykj/socialize-voteable.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use([
        'socialize:linkable-model@1.0.1',
        'socialize:user-blocking@1.0.0',
        'reywood:publish-composite@1.5.2',
    ]);

    api.imply('socialize:linkable-model');

    api.mainModule('server/server.js', 'server');
    api.mainModule('common/common.js');
});
