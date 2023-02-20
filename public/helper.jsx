var nameList = [
  "Manish Chauhan",
  "Saroj Nilesh",
  "Keshab Reddy",
  "Rajiv Mandal",
  "Ojha Rahul",
  "Vahhab Lakhani",
  "Nikhil Maliwal",
  "Vikas Khushwah",
  "Neil Armstrong",
  "Akshay Saini",
  "Mishra Shivam",
  "Suraj Tiwari",
  "Deepak Rajput",
  "Suryansh Gupta",
  "Ranu Manadol",
  "Rosy Mam",
  "Rushab Kabra",
  "Anki Chauhan",
  "Virat Kohli",
  "Namo Jha",
  "Tushar MAndoli",
  "Rushab Pandu",
  "Rohit Sharma",
  "Ms Dhoni",
  "Suresh Chaduri",
  "Mayuri Gupta",
  "Ashwini patil",
  "Chetan Nada",
  "Ashrey Jha",
  "Ramesh Medical",
  "Jethalal Gada",
  "Aathmaram Tukaram Bhide",
  "Ayushi Library",
  "Sports Tak",
  "Lokesh Kumar",
  "Deep Chauhan",
  "Watch Me",
  "Mumbai Indians",
  "React JS",
  "Namaste React",
  "Namaste JS",
  "Pooja Bhat",
  "Salman Khan",
  "Sharukh Khan",
  "Kapil Sharma",
  "Kartik Mahale",
  "Rajjo Bhaiya",
  "Kunal Bhaiya",
  "Ady Bhaiya",
  "Aman 432",
  "Aman 332",
  "Jr Ady",
  "Ankit Bhaiya",
  "Nil Bhaiya",
  "Boss",
  "Rishi Don",
  "Naman Mathur",
  "Arbaaz",
  "Aman Gupta",
  "Namrita Thapa",
  "Peyush Bansal",
  "Ashneer Grover",
  "Anupam Mittal",
  "Vineeta Singh",
  "Ghazal Alagh",
  "Apurv Singh",
  "Abhimanyu Ojha",
  "Ajay Aj",
  "Anish Singh",
  "Anshul Jr",
  "Brajesh Jha",
  "Devam Jani",
  "Gaurav Singh",
  "Gokul Modi",
  "Amit Shah",
  "Ishika Verma",
  "Jinesh Jain",
  "Lakshit ",
  "Kuldeep Mang",
  "Monica Sharma",
  "Lord Puneet",
  "King Kohli",
  "Mc stan",
  "Emiway Bantai",
  "krsna",
  "Raftaar",
  "Madhu Sindam",
  "Mohit Lalwani",
  "Nilesh Patil",
  "Yuwraj Patil",
  "Chetan Patil",
  "Roshan Mahale",
  "Bhushan Mahale",
  "Nitish Rajput",
  "Pranav Atre",
  "Pratik Wankhede",
  "Rishab Joshi",
  "Ronit Lad",
  "Sagar PAtil",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function GenerateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export function Makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}