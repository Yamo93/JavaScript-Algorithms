# Objective
    Write a function that takes in a string that ignores special characters and underscores, is case insensitive, ignores spaces and sees if it is a palindrome.

# Example Returns:
* isPalindrome('A man, a plan, a canal. Panama') will return **true**.
* isPalindrome('My age is 0, 0 si ega ym.') will return **true**.
* isPalindrome('_codegod') will return **false**.
* isPalindrome('.0_0 (: /-\ 0-0') will return **true**.

# How I Solved It Hints:
* toLowerCase()
* replace().
* A regular expression to exclude all unwanted characters.
* split().
* reverse().
* join():