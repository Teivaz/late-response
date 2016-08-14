## Late-response
Responds with user specified delay. Designed to test your applications for a scenario with high latency  
For example following request will return this document in plain text format with 2 seconds delay  
[`http://late-response.teivaz.com/?`**`l=2000`**`&`**`t=text/plain`**](http://late-response.teivaz.com/?l=2000&t=text/plain)

### How to use? Just add query parametes:
 - `l` - integer, number of ms to wait before response. Ensures that response will be deliver not earlier than specified ammount of time within range 0 - 10 seconds
 - `t` - mime type

### Currently supported mime types:
 - `text/html` - [example](http://late-response.teivaz.com?t=text/html)
 - `text/plain` - [example](http://late-response.teivaz.com?t=text/plain)
 - `text/xml` - [example](http://late-response.teivaz.com?t=text/xml)
 - `text/x-markdown` - [example](http://late-response.teivaz.com?t=text/markdown)
 - `image/gif` - [example](http://late-response.teivaz.com?t=image/gif)

### Feedback
Feedback, feature request, and bugs go here https://github.com/Teivaz/late-response/issues
