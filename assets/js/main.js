


const vocab = {

  'A': 'Alpha',  'B': 'Bravo',   'C': 'Charlie',
  'D': 'Delta',  'E': 'Echo',    'F': 'Foxtrot',
  'G': 'Golf',   'H': 'Hotel',   'I': 'India',
  'J': 'Juliett','K': 'Kilo',    'L': 'Lima',
  'M': 'Mike',   'N': 'November','O': 'Oscar',
  'P': 'Papa',   'Q': 'Quebec',  'R': 'Romeo',
  'S': 'Sierra', 'T': 'Tango',   'U': 'Uniform',
  'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray',
  'Y': 'Yankee', 'Z': 'Zulu', '1': 'One', '2':'Two',
  '3':'Three', '4': 'Four', '5':'Five', '6': 'Six',
  '7':'Seven', '8':'Eight', '9':'Nine', '0':'Zero'
};
function code(){
  
let inputcode = document.getElementById('xvar').value.toUpperCase().split("");


let result = inputcode.map(item => vocab[inputcode [item]])  
              .filter( (item) => typeof item !== 'undefined').join(' ');
              return;

console.log(result);

}       





  








/*//Array.from([1, 2, 3], x => x + x));
//Array.from( inputcode, x => x + x));
//console.log( alphabet[icode[0]]);

//alphabet[inputcode[1]],  alphabet[inputcode[2]],  alphabet[inputcode[3]],  alphabet[inputcode[4]],  alphabet[inputcode[5]],  alphabet[inputcode[6]]);
}
*/