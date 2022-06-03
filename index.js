function displayPasswords(){
  let inputs=4;
  for(let i=1;i<=inputs;i++){
    let id='a'+i;
    let p=randomPasswordGenerator();
    // document.querySelector(id).textContent=p;
    document.getElementById(id).value=p;
    console.log("id: ",id, " , p: ",p);
  }
}

function randomPasswordGenerator(){
  let password="";
  let limit=8;
  for(let i=1;i<=limit;i++){
    let temp=randomNumberGenerator(4);
    if(temp==0)password+=randomSmallAlphabetGenerator();
    else if(temp==1)password+=randomCapitalAlphabetGenerator();
    else if(temp==2)password+=randomSpecialCharacterGenerator();
    else password+=randomNumberGenerator();
  }
  return password;
}

function randomSmallAlphabetGenerator(){
  let s = "abcdefghijklmnopqrstuvwxyz";
  let index=randomNumberGenerator(26);
  if(index>-1&&index<26)return s[index];
}

function randomCapitalAlphabetGenerator(){
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index=randomNumberGenerator(26);
  if(index>-1&&index<26)return s[index];
}

function randomSpecialCharacterGenerator(){
  let s = ";@#$%^&*(){}[],! ?-+";
  let index=randomNumberGenerator(20);
  if(index>-1&&index<20)return s[index];
}

function randomNumberGenerator(multiplier=10){
  return Math.floor(Math.random()*multiplier);
}