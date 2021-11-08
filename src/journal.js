export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

export function Journal() {
  this.entries = {};
  this.currentId = 0;
}

Journal.prototype.addEntry = function(entry) {
  this.currentId += 1;
  entry.id = this.currentId;
  this.entries[this.currentId] = entry;
};

function isCharVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

function isCharConsonant(char) {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  for (let i = 0; i < consonants.length; i++) {
    if (char.toLowerCase() === consonants[i]) {
      return true;
    }
  }
  return false;
}

Entry.prototype.numberOfVowels = function() {
  let vowels = 0;
  for (let i = 0; i < this.body.length; i++) {
    if (isCharVowel(this.body.charAt(i))) {
      vowels++;
    }
  }
  return vowels;
};

Entry.prototype.numberOfConsonants = function() {
  let consonants = 0;
  for (let i = 0; i < this.body.length; i++) {
    if (isCharConsonant(this.body.charAt(i))) {
      consonants++;
    }
  }
  return consonants;
};

Entry.prototype.firstEightWords = function(){
  const wordArray = this.body.split(" ");  
  let teaser = "";
  for (let i = 0; i < 8 && i < wordArray.length; i++) {
    teaser = teaser + wordArray[i];
  }
  return teaser;
};
