interface Person {
  name: string;
  age: number;
}

function hello(p: Person) {
  console.log(`Hello, ${p.name}`);
}

hello({ name: "stoneream", age: 20 });
