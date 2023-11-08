Interceptor.attach(Module.findExportByName(null, 'android_dlopen_ext'), {
    onEnter: function(args) {
        this.path = Memory.readUtf8String(args[0]);
    },
    onLeave: function(retval) {
        if (!retval.isNull() && this.path.indexOf('libemulatordetector.so') !== -1 ) {
            hookReplaceIsDetected();
        }
    }
});

function hookReplaceIsDetected() {
    Interceptor.attach(Module.findExportByName("libemulatordetector.so", "Java_com_reveny_emulator_detection_MainActivity_isDetected"), {
        onLeave: function(retval) {
            retval.replace(0);
            console.log("Replacing detection function success");
        }
    });
}