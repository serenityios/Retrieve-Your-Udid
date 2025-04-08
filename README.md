# Retrieve Your UDID
Retrieve your UDID easily on iOS using s0n1c's UDID Retrieval Api (https://s0n1c.ca/)

## What does this do?
- Generate a .mobileconfig locally using https://s0n1c.ca/'s UDID Retrieval Api
- After the .mobileconfig is installed an URL back to your Website is generated containing your Encrypted Base64 Device Info (Containing UDID)
- The Website will clean the URL (clean anything in the URL after the first Question Mark, this was made incase People could crack a Payment System using the UDID) 
- The Website will Decrypt the Base64 string and another button you can click opens a Javascript alert() after showing your Device Info but formatted to JSON
- The Device Info is saved in LocalStorage, so its not lost and you can access it easily even after Refresh.

## Why does the Clean URL Function cause problems
- It might be because it removes everything after the first Question Mark ( /? ) Please modify the Function if you do not want it to glitch

