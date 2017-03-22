var path = require('path')
var funcs = require('./funcs')

/*
Users
  - theRealElmo   [1 message]
  - bigbird88     [2 messages]
  - alice         [1 message]
*/

var session = {
  username: process.argv[2],
  lastMessageHash: process.argv[3]
}

if (!session.username || !session.lastMessageHash) {
  console.log('Usage: node index.js <username> <hash>')
  process.exit(0)
}

// 1. load the database
var dbFile = path.join(__dirname, 'db', 'index.json')
funcs.loadDb(dbFile, function (err, db) {
  if (err) {
    console.log(err)
    return
  }

  // 2. encode the name
  var encoded = funcs.encodeName(session.username)

  // 3. find the user's inbox
  var inbox = funcs.findInbox(db, encoded)
  if (!inbox.messages.length) {
    console.log('There is not any message for the user "' + session.username + '"')
    return
  }

  // 4. find the next message
  funcs.findNextMessage(inbox, session.lastMessageHash)
    // 5. print out the message.
    // Paste the console output into the "Solution" field and you're done!
    .then(function(nextMessage) { console.log(nextMessage) })
    .catch(function(err) { console.log(err) })
})
