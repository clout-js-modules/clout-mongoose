clout-mongoose
==================
## Install
In the directory of your clout-js application, do the following;

1) Install this package
```bash
npm install clout-mongoose
```

2) Add this module to ```package.json```
```JSON
{
    ...
    "modules": ["clout-mongoose"]
    ...
}
```

## Configure
Create a new file ```mongoose.default.js``` or ```mongoose.<YOUR_ENV>.js``` in ```/conf``` directory with the following JavaScript.
```JavaScript
module.exports = {
    mongoose: {
        // refer to http://mongoosejs.com/docs/connections.html
        uri: 'mongodb://localhost/myapp',
        conf: {}
    }
};
```
