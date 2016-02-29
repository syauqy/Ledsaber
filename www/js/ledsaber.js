var ledsaber = {
            mpu: {
                x: 0, y: 0, z: 0
                },
            rgb: {
                r: 0, g: 0, b: 0
                },
            onUpdateMPU: function () {},
            onUpdateRGB: function () {},
            getMPU: function () {
                $.ajax({
                    type: "GET",
                    url: particle.getLink('mpu'),
                    complete: function(xhr, status) {
                        if(status == "success")
                            ledsaber.mpu = JSON.parse(JSON.parse(xhr.responseText).result);
                        ledsaber.onUpdateMPU();
                    }
                });
            },
            getRGB: function () {
                $.ajax({
                    type: "GET",
                    url: particle.getLink('rgb'),
                    complete: function(xhr, status) {
                        if(status == "success")
                            ledsaber.rgb = JSON.parse(JSON.parse(xhr.responseText).result);
                        ledsaber.onUpdateRGB();
                    }
                });
            },
            setRGB: function (r, g, b) {
                if(this.xhrSetRGB !== undefined) {
                    if(0 < this.xhrSetRGB.readyState && this.xhrSetRGB.readyState < 4)
                        return;
                }
                
                this.xhrSetRGB = $.ajax({
                    type: "POST",
                    url: particle.postLink('setrgb'),
                    data: $.param ({
                        access_token: particle.access_token,
                        args: r + ',' + g + ',' + b
                    })
                });
            }
            
            ,
            setHexRGB: function (color) {
                var r = parseInt(color.substring(1, 3), 16);
                var g = parseInt(color.substring(3, 5), 16);
                var b = parseInt(color.substring(5, 7), 16);
                this.setRGB(r, g, b);
            }
            
        }