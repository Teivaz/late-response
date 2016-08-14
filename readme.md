## Late-response
Resturns specified content type with delay.
Following line will return this document in plain text format with 2 seconds delay  
[`http://late-response.teivaz.com/?`**`l=2000`**`&`**`t=text/plain`**](http://late-response.teivaz.com/?l=2000&t=text/plain)

### How to use? Just add query parametes:
 - `l` - integer, number of ms to wait before response. Ensures that response will be deliver not earlier than specified ammount of time
 - `t` - mime type

### Currently supported mime types:
 - `text/plain`
 - `text/html`
 - `image/gif`

### Feedback
Feedback, feature request, and bugs go here https://github.com/Teivaz/late-response/issues
