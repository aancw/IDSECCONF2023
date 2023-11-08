Interceptor.attach(Module.findExportByName(null, "strstr"),{
    onEnter: function(args){
        this.frida = false;
        var str1 = args[0].readCString();
        var str2 = args[1].readCString();      
        if(
          str1.indexOf("gum-js-loop")!==-1 || str2.indexOf("gum-js-loop")!==-1 ||
          str1.indexOf("gmain")!==-1 || str2.indexOf("gmain")!==-1 ||  str1.indexOf("frida")!==-1 || str2.indexOf("frida")!==-1 || str1.indexOf("linjector")!==-1 || str2.indexOf("linjector")!==-1                         
          ){          
            this.frida = true;
        }
    },
    onLeave: function(retval){
        if (this.frida) {
            retval.replace(ptr("0x0"));
        }
    }
});