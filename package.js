Package.describe({
    summary: 'dynamic types',
    name: 'dtype'
});

var both = ["client", "server"];

Package.onUse(function(api){
    api.use([
        "matb33:collection-hooks",
        "underscore"
    ], both);

    api.use([
        'deps',
    ], 'client');
    api.export("dType", both);

    api.addFiles('common.js', ['server']);
    api.addFiles('util.js', ['server']);
    api.addFiles('validator.js', ['server']);
    api.addFiles('updater.js', ['server']);
    api.addFiles('core.js', both);
    api.addFiles('constructor.js', ['server']);
    api.addFiles('basicFieldTypesDefinition.js', both);
    api.addFiles('client.js', ['client']);
});

Package.onTest(function(api){
    api.use(['dtype', 'tinytest', 'test-helpers']);
    api.addFiles('test/test.js', ['server']);
    api.addFiles('test/fieldTest.js', ['server']);
    api.addFiles('test/serviceTest.js', ['server']);
    api.addFiles('test/relation.js', ['server']);
})
