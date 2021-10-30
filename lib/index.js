class Waffle {
  constructor (title, description, author, creationDate = new Date(), modificationDate = new Date(), blocks = {}) {
    this.title = title
    this.description = description
    this.author = author
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.blocks = blocks
  }

  static loadJson () {

  }

  dumpJson () {

  }

  findBlock (blockId) {

  }
}

class Block {
  constructor (id, width = 12, height = 8) {
    this.id = id
    this.width = width
    this.height = height
  }

  static loadJson () {

  }

  dumpJson () {

  }
}

class Heading extends Block {
  constructor (id, width = 12, height = 1, level = 2, content) {
    super(id, width, height)
    this.level = level
    this.content = content
  }
}

class Text extends Block {
  constructor (id, width = 12, height = 8, content) {
    super(id, width, height)
    this.content = content
  }
}

class Image extends Block {
  constructor (id, width = 6, height = 6, src) {
    super(id, width, height)
    this.src = src
  }
}

class Video extends Block {
  constructor (id, width = 6, height = 6, src) {
    super(id, width, height)
    this.src = src
  }
}

class List extends Block {
  constructor (id, width = 12, height = 8, contents = []) {
    super(id, width, height)
    this.contents = contents
  }
}

class Table extends Block {
  constructor (id, width = 12, height = 8, contents = []) {
    super(id, width, height)
    this.contents = contents
  }
}

class Chart extends Block {
  constructor (id, width = 6, height = 6, type, contents = []) {
    super(id, width, height)
    this.type = type
    this.contents = contents
  }
}

module.exports = {
  Waffle, Block, Heading, Text, Image, Video, List, Table, Chart
}
