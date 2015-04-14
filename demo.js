var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert');

var db = new Db('test', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {
  db.createCollection('test', function(err, collection) {
  });

  var collection = db.collection('test');
  //collection.remove();
  var doc1 = {"url" : { "s_url" : "aaaa","l_url" : "https://www.google.com/"}, "visits" : 10};
  //var doc2 = {'hello':'doc2'};
  collection.insert(doc1);
  //collection.insert(doc2);
  collection.count(function(err, count) {
    console.log("Count is"+count);
  });
  collection.update({"url" : { "s_url" : "aaaa","l_url" : "https://www.google.com/"}, "visits" : 10}, {$set:{"url" : { "s_url" : "aaaa","l_url" : "https://www.google.com/"}, "visits" : 0}});
  collection.find().toArray(function(err, item) {

    item.find({'s_url':'aaaa'}).toArray(function(err, item) {
      console.log("item is : " + item);
    //for(var i : item)
    //{
      //console.log(i+" "item[i]);
    //}
    console.log("error is : " + err);
    });
    
    //console.log("Short "+item.url.s_url);
    //for(var i in item) {
    //console.log (i +"  "+ item[i]);
    //}

  });
  /*
  db.collection('simple_query',{strict:true},  function(err, collection) {
    console.log(err);
    if(err == null)
    {
      collection.insert([{a:1}, {a:2}, {a:3}], {w:1}, function(err, result) {
        assert.equal(null, err);
    });
    }
  });
*/

  // Create a collection we want to drop later

  /*db.collection('bank_data', function(err, collection) {
             collection.find().toArray(function(err, items) {
                 console.log(items);
                 //res.send(items);
             });
         });*/
    /*
    db.collection("simple_query").remove({},function(err,numberRemoved){
            console.log("inside remove call back" + numberRemoved);
        });
    */
  /*db.createCollection('simple_query', function(err, collection) {
    assert.equal(null, err);

    // Insert a bunch of documents for the testing
    collection.insert([{a:1}, {a:2}, {a:3}], {w:1}, function(err, result) {
      assert.equal(null, err);

      // Peform a simple find and return all the documents
      collection.find().toArray(function(err, docs) {
        assert.equal(null, err);
        //assert.equal(3, docs.length);

        db.close();
      });
    });*/
  //});
});
