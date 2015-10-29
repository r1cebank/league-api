/**
 * util/core.spec.js
 *
 * @author  Rock Hu <rockia@mac.com>
 * @license MIT
 */
 import Endpoints    from '../../src/config/endpoints.json';
 import API          from '../../src/config/api.json';


var Sinon           = require('sinon');
var Chai            = require('chai');
var Path            = require('path');

Chai.use(require('sinon-chai'));
Chai.should();

var expect         = Chai.expect;
var index      = require('../../src/index.js');

describe('index', function() {
    it('should return APIDriver Object', function(){
        var options = {
            api_key: '1234',
            platform: 'production',
            region: 'NA'
        };
        class APIDriver{};
        var apidriverObj      = new APIDriver(Endpoints,API,options);
        expect(apidriverObj).to.be.an.instanceof(APIDriver);
    });

    

});
