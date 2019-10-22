const sampleSentence = "\r|\r/\r-\r\\\r|\r/\r-\r\\";

const mystery = (sentence, index = 0) => {

    if(sentence.length === index) {
      process.stdout.write('\r|'+ '\n');
    return;

    }
    
    process.stdout.write(sentence[index]);

    setTimeout(() => {
      mystery(sentence, index+1);
    }, 500);
    
}

mystery(sampleSentence);

//Another way of doing it to animate the cursor forever
/*
const sampleSentence = "|/-\|/-\\";
const mystery = (sentence, index = 0) => {
   process.stdout.write(sentence[index % sentence.length] + '\r');
   setTimeout(() => {
     mystery(sentence, index+1);
   }, 300);
}
mystery(sampleSentence);
*/
