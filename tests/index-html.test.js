const fs = require("fs")
const path = require("path")
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8")

jest.dontMock("fs")

describe("index.html", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  afterEach(() => {
    jest.resetModules()
  })
  it("body element renders", function () {
    const bodyTag = document.getElementsByTagName("body")
    expect(bodyTag).toBeTruthy()
  })

  describe("header and container elements", () => {
    it("header and main tags renders", function () {
      const headerTag = document.getElementsByTagName("header")
      expect(headerTag).toBeTruthy()

      const mainTag = document.getElementsByTagName("main")
      expect(mainTag).toBeTruthy()
    })

    it("header contains expected text", function () {
      const headerTag = document.getElementById("header")
      const expectedText = "Trello Clone"
      const headerText = headerTag.innerHTML
      expect(headerText).toEqual(expectedText)
    })

    it("button contains expected text", function () {
      const addColumnButton = document.getElementById("add-column-button")
      const expectedText = "Add Column"
      const addColumnButtonText = addColumnButton.innerHTML
      expect(addColumnButtonText).toEqual(expectedText)
    })

    it("search field renders with empty input by default", function () {
      const searchBox = document.getElementById("search-box")
      expect(searchBox).toBeTruthy()
      expect(searchBox.value).toEqual("")
    })
  })
})
