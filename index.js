const someValue = '';
function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
    return 'This one is on me!';
  } else if(400 < someValue && someValue <= 2000){
    return 'That will be twenty bucks.';
  } else if(2000 < someValue && someValue <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else if(2500 < someValue){
    return 'No can do.';
  }
}

const city = '';
function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

const tipAmount = '';
function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch(tipAmount){
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
    return 'Thank you.'
    default:
    return 'Bye.'
  };
}