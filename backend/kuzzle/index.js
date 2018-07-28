const CMS = require('./cms');

class DLC {

  constructor () {
    this.cms = new CMS(this);

    this.controllers = {
      cms: {
        edit: 'cmsEdit',
        publish: 'cmsPublish'
      }
    };
  }

  init (config, context) {
  }

  // controllers
  // --------------------------------------------------------------------------

  cmsEdit (request) {
    return this.cms.edit(request);
  }

  cmsPublish (request) {
    return this.cms.publish(request);
  }

}

module.exports = DLC;