![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

Express: Dice Roll Generator
============================

Objectives
----------

- Build an express app that uses query parameters

Instructions
------------

Starting with `express-generator`, write a new express app. Your app should respond as follows:

```text
Request   GET /roll
Response  JSON {"roll": 3}   # a random number between 1 and 6
```

**Bonus**

```text
Request   GET /roll?q=1d10   # "1d10" is a "dice expression"
Response  JSON {"roll": 5}   # a random number between 1 and 10
```


```text
Request   GET /roll?q=2d10+4 # roll 2 10-sided dice and add 4
Response  JSON {"roll": 15}  # a random number between 6 and 24
```

Additional Resources
--------------------

- [Dice Expressions](http://lmwcs.com/rptools/wiki/Dice_Expressions)
- [Node Query Parameters](http://expressjs.com/api.html#req.query)

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
