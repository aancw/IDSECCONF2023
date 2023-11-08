Java.perform(function(){
  // Membuat instance untuk kelas RootBeer yang akan di hook
  var RB = Java.use("com.scottyab.rootbeer.RootBeer");
  
  const functionsBypass = [
    "checkForRWPaths",
    "checkForRootNative",
    "checkForMagiskBinary",
    "checkForSuBinary",
    "checkSuExists",
  ];
  
  functionsBypass.forEach((func) => {
    RB[func].implementation = function() {
      return false;
    };
    
  });
  
});
  
  