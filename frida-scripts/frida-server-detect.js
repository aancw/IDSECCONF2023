const pathString = Memory.allocUtf8String("/data/local/tmp/foo-server");

Interceptor.attach(Module.getExportByName(null, 'stat'), {
    onEnter(args) {
        if(args[0].readUtf8String().includes('frida-server')) {
            args[0] = pathString;
        }
    }
});
