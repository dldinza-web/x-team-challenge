
Solution
--------
- **bigbird88** has 2 message in the queue:

  __First:__
  `$ node index.js bigbird88 --first`
  ```
  from: @theRealElmo
  ---
  new phone who dis?
  ```
  __Second:__
  `$ node index.js bigbird88 60b725f10c9c85c70d97880dfe8191b3`
  ```
  from: @theRealElmo
  ---
  here's the message
  ```
- **theRealElmo** has one message:
  `$ node index.js theRealElmo --first`
  ```
  from: @alice
  ---
  hello, I would like you to join my professional network on linkedin
  ```
- **Alice** has one message:
  `$ node index.js alice --first`
  ```
  from: @theRealElmo
  ---
  secret message from me to you
  ```
