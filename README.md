POST /api/v1/testing/add

Req:
```
{
    "num1": integer,
    "num2": integer
}
```
Res:
```
{
	"addition": integer
}
```

POST /api/v1/testing/divide

Req:
```
{
    "num1": integer,
    "num2": integer
}
```
Res:
```
{
	"division": integer
}
```

GET /api/v1/testing/ns/:lim

this API finds the sum of number from 1 + 2 + 3....lim. For example output of GET /api/v1/testing/ns/2 will be 1 + 2 i.e 3

```
{
    "sum_till_n": integer
}
```

PUT /api/v1/testing/insert
puts the element at the end of the list

Req:
```
{
	"list": list of integers,
	"to_insert": integer
}
```
eg:
{
	"list": [1,2,3],
	"to_insert": 3
}

Res:
```
{
    "new_list": new list of integers
}
```







