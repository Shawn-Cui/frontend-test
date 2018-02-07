describe("calculate", function() {
  it("Should return warning", function() {
    expect("Input should be numbers!").toEqual(add('a', 1))
  })

  it("Should return warning", function() {
    expect("Input should be numbers!").toEqual(add(1, 'b'))
  })

  it("Should return warning", function() {
    expect("Input should be numbers!").toEqual(add('a', 'b'))
  })

  it("Add numbers", function() {
    expect(10).toEqual(add(1, 9))
  })

  it("Add numbers float", function() {
    expect(4.9).toEqual(add(3.1, 1.8))
  })
});
