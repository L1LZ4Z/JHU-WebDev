(function() {
  
  // NOTE! The steps in this file are basically identical to the ones you
  // performed in the SpeakHello.js file.

  // STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
  // Done


  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
  // Done
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // Done
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  // STEP 9: Expose the 'byeSpeaker' object to the global scope. 
  // Done
  window.byeSpeaker = byeSpeaker;

})(window);