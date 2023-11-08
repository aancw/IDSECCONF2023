Interceptor.attach(Module.getExportByName(null, 'fopen'), {
    onEnter(args) {
        this.strstr = null;
        if (args[0].readUtf8String() == "/proc/self/maps")
        {
            Interceptor.attach(Module.getExportByName(null, 'strstr'), {
                onEnter(args) {
                    this.arg_1 = args[0].readUtf8String();
                },
                onLeave(retval) {
                    if (this.arg_1.includes('frida'))
                    {
                        retval.replace(0);
                    }
                }
            });
        }
    },
});
