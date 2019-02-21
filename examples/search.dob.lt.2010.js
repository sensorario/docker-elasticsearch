const es = require('elasticsearch');
const client = new es.Client({
    host: 'localhost:9200',
    log: 'trace'
});

client.search({
    index: 'address-book',
    type: 'contact',
    body: {
        query: {
            range: {
                "contact.dob": {
                    "lt":2010
                }
            }
        }
    }
}).then(function(resp) {
    console.log(resp._shards.total);
}, function(err) {
    console.trace(err.message);
});
