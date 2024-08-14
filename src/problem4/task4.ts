function sum_to_n_a(n: number): number {
  let sum = 1;
  for (let i = 0; i < n - 1; i++) {
    sum += i + 2;
  }
  return sum;
}

function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

function sum_to_n_c(n: number): number {
  if (n == 0) return 0;
  return n + sum_to_n_c(n - 1);
}

console.log(sum_to_n_a(6));
