# DevOps task - EX.CO

Overview
---------
You have a small nodejs app that answer a /page request with a query param of url and in return 
will fetch the page of the requested url, will count how many chars it got and will return it.
Inorder to set it up you should use should run the nodejs app in a nodejs container and also connect it to a mongodb instance.

You should use docker-compose in order to run the 2 containers.
GET `/` will return `ok`
GET `/page?url=%some-url%` will return an object of the request url, page length and a flag whether the response is cached or not

```json
{
  "url": %some url%,
  "pageLength": %char count%,
  "cached": %boolean flag%,
}
```

First goal:
`localhost:3000` should return ok
Second goal:
`localhost:3000/page?url=%some-url%` should respond with the correct answer
Third goal:
Explain what other layers you will use to support this flow in scale


