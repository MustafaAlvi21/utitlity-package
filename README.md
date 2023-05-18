
# Utility.ai

The most evolved web3 development platform. Everything you need to build & scale decentralized applications and games with ease.


## Installation

Install this package

```bash
  npm i utitlity-beta
```
    
## Usage/Examples

#### Require package:
``` Javascript
const Utility = require("utitlity-beta");
```

#### Initialize:
``` Javascript
const myUtility = new Utility("ENTER API KEY");
myUtility.init();
```
 
#### Function call:
``` Javascript
myUtility.getSignature("wallet address", "message")
    .then(data => {
        console.log("Signature => ", data);
    })
    .catch(err => {
        console.log(err);
    })
```