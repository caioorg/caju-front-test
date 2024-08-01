import Helpers from "./helpers"

describe("Helpers", () => {
  describe("delay", () => {
    jest.useFakeTimers()

    it("should resolve after the specified delay", async () => {
      const ms = 1000
      const promise = Helpers.delay(ms)

      // Move the jest timers forward by ms milliseconds
      jest.advanceTimersByTime(ms)

      await expect(promise).resolves.toBeUndefined()
    })
  })
})
