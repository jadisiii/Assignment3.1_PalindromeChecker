// Ray Arbizu

// This section is for animating the letters and word when the page loads

document.addEventListener('DOMContentLoaded', (event) => {
    const letters = document.querySelectorAll('#animatedText span');
    const bouncingWord = document.querySelector('#feverText');

    // Animate letters
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = 1;
      }, 200 * index);
    });

    // Animate the word FEVER bouncing 
    setTimeout(() => {
        bouncingWord.style.opacity = 1;
        bouncingWord.style.transform = 'translateY(0)';
      }, 200 * letters.length);
});


// This section is for checking the Palindrom and displaying results on page

function palindromCheck()
{
    var palInput = document.getElementById("palindromString").value;

    palInput = palInput.toLowerCase();

    document.getElementById("wordForward").innerHTML = "Here is the word you input: " + palInput;

    var i;
    let reversed = "";
    for (i=palInput.length-1; i >=0;i--) // For loop to reverse the input
    {
        reversed += palInput[i]; // reversing the input
    }

    document.getElementById("wordBackward").innerHTML = "Here is the work backwards: " + reversed; // Display the reversed in the backwords location

    var wordResultElement = document.getElementById("wordResult");

    if (palInput == reversed)
    {
        document.getElementById("wordResult").innerHTML = "Success!<br><br>'" + palInput + "'<br><br>...is the same forward and backward and is therefore a Palindrom!";
        wordResultElement.style.color = "#C5E898";
    }
    else 
    {
        document.getElementById("wordResult").innerHTML = "Wrong!<br><br>'" + palInput + "'<br><br>...is NOT a Palindrom";
        wordResultElement.style.color = "orangered";
    }

    document.getElementById("enterAnother").innerHTML = "Please try another word";


}

// Function to reset the page when the reset button is click on
function reset(){
    location.reload(); // reloads the page
}
    

