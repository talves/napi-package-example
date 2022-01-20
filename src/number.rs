#[napi]
pub fn plus_100(input: u32) -> u32 {
  input + 100
}

#[napi]
pub fn add(a: u32, b: u32) -> u32 {
  a + b
}
