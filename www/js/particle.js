var particle = {
            device_id: '270036000547343138333038', //use your own device id
            access_token: '2d207a3d9d8b249d48beba65c5c2af475875bc7a', //use your own access token
            getLink: function (variable) {
                return 'https://api.particle.io/v1/devices/' + this.device_id + '/' + variable + '?access_token=' + this.access_token;
            },
            postLink: function(funcName) {
                return 'https://api.particle.io/v1/devices/' + this.device_id + '/' + funcName;
            }
        }