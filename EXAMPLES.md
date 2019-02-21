# Examples

## retrieve all data from the index

GET address-book/_search
{
  "query": {
    "match_all": {}
  }
}

## get the mapping

GET address-book/_mapping/contact

## delete all the index

DELETE /address-book/

# Send a contact with only date of birth
# and with valida date format
# "strings containing formatted dates,
# e.g. "2015-01-01" or "2015/01/01 12:10:30"."
POST /address-book/contact/1
{
  "contact": {
    "dob": "1982-09-10"
  }
}

## send full person data

POST /address-book/contact/1
{
  "contact": {
    "dob": "1982-09-10",
    "name": "Simone"
  }
}

POST /address-book/contact/2
{
  "contact": {
    "name": "Lorenzo",
    "dob": "2018-06-09"
  }
}

## Delete an index entirely

DELETE /address-book/

## Search witha field typed

POST address-book/contact/_search
{
  "query": {
    "range": {
      "contact.dob": {
        "lt":2010
      }
    }
  }
}

## Search on string fields

POST address-book/contact/_search
{
  "query": {
    "match": {
      "contact.name": "Lorenzo"
    }
  }
}

GET address-book/_mapping/contact

## Create index

POST address-book/contact
{
  
}

PUT address-book/_mapping/contact
{
    "contact" : {
        "properties" : {
            "dob" : {"type" : "date", "store" : true }
        }
    }
}

## Invalid date format

POST /address-book/contact/1
{
  "contact": {
    "name": "Simone",
    "dob": "10/09/1982"
  }
}

## Retrieve all data from the index

GET address-book/_count
{
  "query": {
    "match_all": {}
  }
}
