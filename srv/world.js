const cds = require("@sap/cds");

module.exports = function capsrv() {
  this.on('eventinfo', async (req) => {       
      const WebhookSrv = await cds.connect.to('WebhookSrv');
      var res = await WebhookSrv.send('POST', '/sample_url', req.data);     
      return req.data;
  });

  this.on('hello', (req) => {{    
    return 'Hello ' + req.data.to;
  }});

}