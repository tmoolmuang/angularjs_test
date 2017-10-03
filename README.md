## AngularJS Project Starter

* AngularJS 1.6.4
* angular-ui-router
* bootstrap 4.0

## Configuration

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.

## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── logo.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```

### Difference between Pages and Templates

The `templates` directory should hold any HTML files used as templates in Angular states configured by UI Router. All other HTML files belong in the `pages` directory.
