const es = require('elasticsearch');
const client = new es.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.count({
    index: 'address-book',
    type: 'contact',
}).then(function(resp) {
    console.log(resp._shards.total);
}, function(err) {
    console.trace(err.message);
});
