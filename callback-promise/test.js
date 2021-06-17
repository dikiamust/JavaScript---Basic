let visitsCountMap = new Map(); // Menyimpan daftar user
console.log(visitsCountMap);

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 3);
}

let jonas = {name: "Jonas", age: 19};
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

console.log(visitsCountMap);

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
