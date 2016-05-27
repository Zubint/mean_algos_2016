// ##Censor
// Create a function that, given a string and an array of 'naughty words',
// returns a new string with naughty words changed to 'x' characters.
// Given ("Snap crackle pop nincompoop", ["crack", "poop"]), you should
// return "Snap xxxxxle pop nincomxxxx!".

function censor(strPhrase, arrNaughtyArray){
      var phraseArray = strPhrase.split(" ");

      for (i=0; i<phraseArray.length; i++){
          var phraseString = phraseArray[i];

        for (j=0; j<arrNaughtyArray.length; j++){
            var naughtyString = arrNaughtyArray[j];
            // console.log(phraseString + " " + naughtyString);
              //if phraseString.length < naughtyString.length - dont do anything
              if (phraseString.length < naughtyString.length){
                //do nothing
                  // console.log("shorter phrase string " + phraseString + " " + naughtyString);
              }else {

                  var wordStartingPoint =0;
                  // console.log(phraseString.indexOf(naughtyString[0]));
                  var lcPhrase = phraseString;
                  var naughtyLetter = naughtyString[0];

                  lcPhrase = lcPhrase.toLowerCase();
                  naughtyLetter= naughtyLetter.toLowerCase();

                  // wordStartingPoint = phraseString.indexOf(naughtyString[0]);
                  wordStartingPoint = lcPhrase.indexOf(naughtyLetter);

                  if (wordStartingPoint>=0){
                      // console.log("yes" + phraseString + " " + naughtyString);
                    //find the location of the first letter of the
                    //search phrase in the phrase string
                      if (phraseString.length>= (wordStartingPoint+naughtyString.length-1)){
                        // console.log("passes length test " + phraseString);
                          //Now you know you have a match, make sure that it doesn't
                          //start so late in the word that you can't make a full word match
                          //if this test passes, go letter by letter and change the
                          //matching letters to x if and only if the whole word is a match
                          //otherwise don't change the word.
                            var stringEndingPoint = 0;
                            var naughtyIdx =0;
                            // console.log ("word starting point: " + wordStartingPoint);
                            for (var z=wordStartingPoint; z<naughtyString.length+wordStartingPoint; z++){
                              var phraseLetter= phraseString[z];
                              var naughtyLetter = naughtyString[naughtyIdx];
                              phraseLetter = phraseLetter.toLowerCase();
                              naughtyLetter= naughtyLetter.toLowerCase(); //make sure we compare like characters.

                                  if (phraseLetter === naughtyLetter){
                                    // console.log(phraseLetter + " " + naughtyLetter);
                                    stringEndingPoint++;
                                    naughtyIdx++;
                                }
                            }
                            // console.log(stringEndingPoint, " ", naughtyIdx);
                            //when you get here, stringEndingPoint should be the same length
                            //as the naughtyString word, otherwise, this was not a whole word match
                            // console.log("after matching word lengths " + phraseString);

                            // console.log(stringEndingPoint + " naughtyStringlength " + naughtyString.length);
                            if (stringEndingPoint === naughtyString.length){
                              //this was a full word match
                              // console.log("full match: " , phraseString , " naughtystring: " , naughtyString);
                              stringEndingPoint +=wordStartingPoint; //add in the starting point so that you can compare
                              // console.log(stringEndingPoint);                      //positions in the loop below
                              var tempString ="";
                              for (var z=0; z<phraseString.length; z++){
                                if (z>=wordStartingPoint && z<stringEndingPoint){
                                  // console.log(z)
                                    tempString+="x"
                                }else {
                                    tempString+=phraseString[z];
                                    // console.log(tempString);
                                }
                              }
                              //change the word in the array
                              // console.log(tempString);
                              phraseArray[i] = tempString;
                              // console.log(phraseArray);
                            }
                      }
                  }
              }
            }
          }
          //now your array has all the words in ther censored format,
          //return it as a string.
          var returnString = phraseArray.join(" ");
          // console.log (returnString);
          return returnString;
        }

console.log(censor("Snap crackle pop nincompoop", ["crack", "poop"]));


// ##Bad Characters
// Given two strings, the second string contains characters that must be removed
// from the first.  Return the resultant string.


function badCharacters(str1, strBadCharacters){

    var objMyBadChars = {};
    var strTempString="";

    for (i=0; i<strBadCharacters.length; i++){
      if(strBadCharacters[i].trim()){
        objMyBadChars[strBadCharacters[i].toLowerCase()]=true;
      }
      // varString = strBadCharacters[i].toLowerCase();
    }
        // console.log(objMyBadChars);
    //now you have an array with indexes that include all of the 'bad characters'

    for (x=0; x<str1.length; x++){
        str1Lc = str1.toLowerCase();
      if (!objMyBadChars[str1Lc[x]]){  //this allows you to compare everything lowercase
          strTempString +=str1[x];  //you don't want to change the original string unless there is a bad characters
      }
    }
    return strTempString;
}

console.log(badCharacters("Soemthing about the lollipop guild", "Pop guild"));
