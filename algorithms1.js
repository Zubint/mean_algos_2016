function returnWords(strPhrase){
  var currentWord = "";
  var i=0;
  var myArray =[];

  for(i=0; i<strPhrase.length; i++)
  {
    //if i strPhrase[i] is a space, then this is a complete word
    //push to the array.  Otherwise, keep building current word.
      currentWord += strPhrase[i];
      if(strPhrase[i]===" "){
        myArray.push(currentWord.trim());
        currentWord ="";
      }
    }
    myArray.push(currentWord); //this will be the last word in the sentence
    return myArray;
  }
  console.log (returnWords("I like pizza!"));

  // ##rotateString [Intermediate]
  // Create a function called rotateString that takes in a string and a number and rotates the string by that many characters to the right.
  // E.g. rotateString("Seattle Mariners", 3) => "ersSeattle Marin"

  function rotateString(strPhrase, numRotations){
      var tempString ="";
      var startAt =0;
      var strLength = 0;

      strLength = strPhrase.length;
      startAt = parseInt(strLength - numRotations);
      tempString = strPhrase.substr(startAt, numRotations) + strPhrase.substr(0, startAt);
      // console.log (tempString);
      return tempString;
  }

  function rotateStringManual(strPhrase, numRotations){
      var temp = "";
      var newString ="";

      for (var i=numRotations; i>0; i--){
        temp += strPhrase[strPhrase.length-i];
      }

      for (var i=0; i<strPhrase.length-numRotations; i++){
        newString += strPhrase[i];
      }

      return temp+newString;
  }

  console.log(rotateStringManual("Seattle Marriners", 13));

  console.log(rotateString("Seattle Marriners", 13));

  function isRotation(strOriginal, strRotationSuspect){
    // ##isRotation [Intermediate]
    // Create a function called isRotation that takes in two strings and returns true if the second string is a rotation of the first string.  Return false otherwise.  Capitalization applies.
    // E.g. isRotation("Todd", "oddT") => true, isRotation("Todd", "oddt") => false

    var realRotation ="";
    var i =0;

    realRotation = rotateString(strOriginal, 3);


    if (realRotation === strRotationSuspect){
      //this is a valid rotation
      console.log("True", strRotationSuspect , "=", strOriginal, " rotated");
      return true;
    }else{
      console.log("False", strRotationSuspect , "!=", strOriginal, " rotated");
      return false;
    }

  }

  isRotation("Todd", "oddT");
  isRotation("Todd", "oddt");
