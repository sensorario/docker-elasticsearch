.SENSORARIO: default
default:
	docker run -p 9300:9300 -p 9200:9200 docker.elastic.co/elasticsearch/elasticsearch:6.2.4

