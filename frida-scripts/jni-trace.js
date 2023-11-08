// replace the android_dlopen_ext with the export that you want to trace in JNI
Interceptor.attach(Module.findExportByName(null, 'android_dlopen_ext'),{
    onEnter: function(args){
        var library_path = Memory.readCString(args[0])
        console.log("\n[...] Loading library : " + library_path)
    }
})
