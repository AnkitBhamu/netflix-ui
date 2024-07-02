function print() {
  console.log("done");
}

async function hello() {
  for (let i = 0; i < 50000; i++) {
    let val = 6;
    console.log(i);
  }

  print();
}

hello();
