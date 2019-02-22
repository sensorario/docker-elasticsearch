# Examples

## Retrieve all data from the index

The following is a simple query to get all data stored in the index
`address-book`.

    GET address-book/_search
    {
      "query": {
        "match_all": {}
      }
    }

## Get the mapping

This query return the mapped data.

    GET address-book/_mapping/contact

The `dob` type is in the format `yyyy-mm-dd` and auto-mapped as `date` type.

    {
      "address-book": {
        "mappings": {
          "contact": {
            "properties": {
              "contact": {
                "properties": {
                  "dob": {
                    "type": "date"
                  }
                }
              }
            }
          }
        }
      }
    }

## Delete all the index

    DELETE /address-book/

> Send a contact with only date of birth
> and with valida date format
> "strings containing formatted dates,
> e.g. "2015-01-01" or "2015/01/01 12:10:30"."

    POST /address-book/contact/1
    {
      "contact": {
        "dob": "1982-09-10"
      }
    }

## Send full person data

    POST /address-book/contact/1
    {
      "contact": {
        "name": "Simone",
        "dob": "1982-09-10"
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

## Search with a typed field

This kind of search is not possible with `contact.dob` as text. The type MUST
BE a date field type. To be a field, the format should be `yyyy-mm-dd` or
forced using `_mapping` action.

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

## Get mapping

    GET address-book/_mapping/contact

## Create index

The body part is mandatory!

    POST address-book/contact
    {}

Here instructions to define the schema and the `contract` that define the
format and the type of `contact` properties.

    PUT address-book/_mapping/contact
    {
        "contact" : {
            "properties" : {
                "dob" : {"type" : "date", "store" : true }
            }
        }
    }

## Invalid date format

Request is "valid", but `dop` won't be mapped as `date`.

    POST /address-book/contact/1
    {
      "contact": {
        "name": "Simone",
        "dob": "10/09/1982"
      }
    }
