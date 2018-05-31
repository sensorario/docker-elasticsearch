# elasticsearch examples

First of all pull docker image:

> docker pull docker.elastic.co/elasticsearch/elasticsearch:6.2.4
  
Seond, run docker:

> docker run -p 9300:9300 -p 9200:9200 docker.elastic.co/elasticsearch/elasticsearch:6.2.4

Now start with CRUD operations

## Create new index and properties mappging.

### Request

```
>  PUT http://localhost:9200/indice
>  {
>   "mappings": {
>     <cose che mappo>: {
>       "properties": {
>         <chiave>: {
>           "type": <tipo della chiave>
>         }
>       }
>     }
>   }
>  }
```

### Response

```
< {
<     "acknowledged": true,
<     "shards_acknowledged": true,
<     "index": "indice"
< }
```

## See indexes in browser

### Request

> http://localhost:9200/_cat/indices

### Response

yellow open indice                      Fly0K1RcSRumG86Xr-VYXQ 5 1   0  0   1.1kb   1.1kb
green  open .monitoring-es-6-2018.05.29 rtrWxymcRe-p9SogkIC32w 1 0 318 55 392.3kb 392.3kb

## Create new record

### Request

```
> PUT http://localhost:9200/indice/_doc/1
> {
>  "ip_addr": "192.168.1.1"
> }
```

### Response

```
< {
<     "_index": "indice",
<     "_type": "_doc",
<     "_id": "1",
<     "_version": 1,
<     "result": "created",
<     "_shards": {
<         "total": 2,
<         "successful": 1,
<         "failed": 0
<     },
<     "_seq_no": 0,
<     "_primary_term": 1
< }
```

## Get record

### Request

> GET http://localhost:9200/indice/_doc/2

### Response

```
< {
<     "_index": "indice",
<     "_type": "_doc",
<     "_id": "2",
<     "_version": 6,
<     "found": true,
<     "_source": {
<         "ip_addr": "192.168.1.2"
<     }
< }
```

## Search inside index

### Request

```
> Content-type: application/json
> GET http://localhost:9200/indice/_search/
> {
>   "query": {
>     "term": {
>       "ip_addr":"192.168.2.2/16"
>       }
>   }
> }
```

### Response

```
< { 
<   "took" : 3,
<   "timed_out" : false,
<   "hits" : {
<      "total" : 1,
<      "max_score" : 1,
<      "hits" : [
<         {
<            "_score" : 1,
<            "_source" : {
<               "ip_addr" : "192.168.2.2"
<            },
<            "_type" : "_doc",
<            "_id" : "2",
<            "_index" : "indice"
<         }
<      ]
<   },
<   "_shards" : {
<      "failed" : 0,
<      "total" : 5,
<      "successful" : 5,
<      "skipped" : 0
<   }
< }
```

## Multiple search

```
> GET spider/annuncio/_search
> {
>   "query": {
>     "bool": {
>       "must": [
>         {
>           "match": {
>             "path.to.some.field.keyword": "value"
>           }
>         },
>         {
>           "match": {
>             "path.to.another.field.keyword": "another value"
>           }
>         }
>       ]
>     }
>   }
> }
```
