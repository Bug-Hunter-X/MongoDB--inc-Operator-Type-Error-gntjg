```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("65192675192736192736")},{$inc:{ "counter": 10 }});
```