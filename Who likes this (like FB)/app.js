// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
   const peopleThatLikes = names.length;
   if(peopleThatLikes===0){
    return `no one likes this`
   }
   else if (peopleThatLikes===1){
    return `${names[0]} likes this`
   }
   else if (peopleThatLikes===2){
    return `${names[0]} and ${names[1]} likes this`
   }
   else {
    return `${names[0]}, ${names[1]} and ${peopleThatLikes-2} others like this`
   }

  }
console.log( likes(["max","alice","steve","genie"]) )