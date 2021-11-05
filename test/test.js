const { Waffle, Heading, Text } = require('../lib')

const assert = require('assert')

describe('Waffle', function () {
  const exampleWaffle = new Waffle(
    undefined,
    'Hello World',
    'A test document',
    'Kevin Ju',
    '2021-01-01T00:00:00Z',
    '2021-01-01T00:00:00Z'
  )
  const exampleWaffleJson = '{"title":"Hello World","description":"A test document","author":"Kevin Ju","creationDate":"2021-01-01T00:00:00Z","modificationDate":"2021-01-01T00:00:00Z","blocks":{}}'
  describe('#loadJson()', function () {
    it('', function () {
      const loadedWaffle = Waffle.loadJson(exampleWaffleJson)
      // TODO: implement check
    })
  })
  describe('#dumpJson()', function () {
    it('', function () {
      assert.strictEqual(exampleWaffle.dumpJson(), exampleWaffleJson)
    })
  })
  describe('#findBlock()', function () {

  })
})

describe('Block', function () {
  describe('Heading', function () {
    const exampleHeading = new Heading(
      'heading-1',
      1,
      'Hello World'
    )
    const exampleHeadingJson = '{"id":"heading-1","type":"heading","width":12,"height":1,"level":1,"content":"Hello World"}'
    describe('#loadJson()', function () {
      it('', function () {
        const loadedHeading = Waffle.loadJson(exampleHeadingJson)
        // TODO: implement check
      })
    })
    describe('#dumpJson()', function () {
      it('', function () {
        assert.strictEqual(exampleHeading.dumpJson(), exampleHeadingJson)
      })
    })
  })
  describe('Text', function () {
    const exampleText = new Text(
      'text-1',
      'This is a test waffle document.'
    )
    const exampleTextJson = '{"id":"text-1","type":"text","width":12,"height":8,"content":"This is a test waffle document."}'
    describe('#loadJson()', function () {
      it('', function () {
        const loadedText = Waffle.loadJson(exampleTextJson)
        // TODO: implement check
      })
    })
    describe('#dumpJson()', function () {
      it('', function () {
        assert.strictEqual(exampleText.dumpJson(), exampleTextJson)
      })
    })
  })
})
