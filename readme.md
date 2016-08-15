## Late-response
Responds with user specified delay. Designed to test your applications for a scenario with high latency  
For example following request will return this document in plain text format with 2 seconds delay  
[`http://late-response.teivaz.com/?`**`l=2000`**`&`**`t=text/plain`**](http://late-response.teivaz.com/?l=2000&t=text/plain)  
And this request will return an jpeg image after 5 second pause  
[`http://late-response.teivaz.com/?`**`l=5000`**`&`**`t=image/jpeg`**](http://late-response.teivaz.com/?l=5000&t=image/jpeg)
### How to use? Just add query parametes:
 - `l` - integer, number of ms to wait before response. Ensures that response will be deliver not earlier than specified amount of time within range 0 - 10,000 milliseconds
 - `t` - mime type

### Currently supported mime types:
 - `text/html` - [...?t=text/html](http://late-response.teivaz.com?t=text/html)
 - `text/plain` - [...?t=text/plain](http://late-response.teivaz.com?t=text/plain)
 - `text/xml` - [...?t=text/xml](http://late-response.teivaz.com?t=text/xml)
 - `text/x-markdown` - [...?t=text/x-markdown](http://late-response.teivaz.com?t=text/x-markdown)
 - `image/gif` - [...?t=image/gif](http://late-response.teivaz.com?t=image/gif)
 - `image/png` - [...?t=image/png](http://late-response.teivaz.com?t=image/png)
 - `image/svg+xml` - [...?t=image/svg%2Bxml](http://late-response.teivaz.com?t=image/svg%2Bxml)
 - `image/jpeg` - [...?t=image/jpeg](http://late-response.teivaz.com?t=image/jpeg)
 - `image/x-icon` - [...?t=image/x-icon](http://late-response.teivaz.com?t=image/x-icon)
 - `image/bmp` - [...?t=image/bmp](http://late-response.teivaz.com?t=image/bmp)

### Feedback
Feedback, feature requests, and bugs send here [https://github.com/Teivaz/late-response/issues](https://github.com/Teivaz/late-response/issues)

### Author and license
Copyright (c) 2016 [Teivaz](http://teivaz.com) under [Zlib License](https://opensource.org/licenses/Zlib)
