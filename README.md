# ESPN API Sample (Dust.js/Node.js)

## Developing

Install [node.js](http://nodejs.org/) to run Node.
Install [foreman](http://ddollar.github.com/foreman/) to run this Procfile-based project.

    $ git clone https://github.com/jaxzin/api-samples-js-dust-node.git
    $ cd api-samples-js-dust-node
    $ npm install
    $ foreman start

## Running on Heroku

Assumes your local environment is already:
> * [Setup to deploy to Heroku](http://devcenter.heroku.com/articles/quickstart).
> * Setup with [node](http://nodejs.org/) and [npm](http://npmjs.org/)

    $ git clone http://github.com/jaxzin/api-samples-js-dust-node.git
    $ cd api-samples-js-dust-node
    $ heroku create --stack cedar
    $ git push heroku master
    ... wait for it to push and launch ...
    $ heroku ps:scale web=1
    $ heroku config:add NODE_ENV=production
    $ heroku config:add espn_api_key=[your app key from developer.espn.com]
    ... wait for it to add the config vars and restart ...
    $ heroku open

## Light Reading

* [The ESPN Developer Center](http://developer.espn.com)
* [Node.js](http://nodejs.org/)
* [Node Package Manager (npm)](http://npmjs.org/)
* [Dust.js](http://akdubya.github.com/dustjs/)
* [Backbone.js](http://documentcloud.github.com/backbone/)