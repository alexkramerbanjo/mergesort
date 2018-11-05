function bsplit() {
  let args = [...arguments];
  for (let i = 0; i < args.length; i++) {
    if (args[i].length === 1) {
      return args[i];
    } else {
      let firstHalf = args[i].slice(0, args[i].length / 2);
      let secondHalf = args[i].slice(args[i].length / 2, args[i].length);
      return bsplit(firstHalf, secondHalf);
    }
  }
}
