class Waffle {
  constructor (title, description, author, creationDate = new Date(), modificationDate = new Date(), blocks = []) {
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
    return this.blocks.find(block => block.id === blockId)
  }
}

class Block {
  constructor (id, startRow = 0, startCol = 0, rows = 6, cols = 12) {
    this.id = id
    this.startRow = startRow
    this.startCol = startCol
    this.rows = rows
    this.cols = cols
  }

  static loadJson () {

  }

  dumpJson () {

  }
}

class Heading extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 1, cols = 12, level = 2, content) {
    super(id, startRow, startCol, rows, cols)
    this.level = level
    this.content = content
  }
}

class Text extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 6, cols = 12, content) {
    super(id, startRow, startCol, rows, cols)
    this.content = content
  }
}

class Image extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 6, cols = 6, src) {
    super(id, startRow, startCol, rows, cols)
    this.src = src
  }
}

class Video extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 6, cols = 6, src) {
    super(id, startRow, startCol, rows, cols)
    this.src = src
  }
}

class List extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 8, cols = 12, contents = []) {
    super(id, startRow, startCol, rows, cols)
    this.contents = contents
  }
}

class Table extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 8, cols = 12, contents = []) {
    super(id, startRow, startCol, rows, cols)
    this.contents = contents
  }
}

class Chart extends Block {
  constructor (id, startRow = 0, startCol = 0, rows = 6, cols = 6, type, contents = []) {
    super(id, startRow, startCol, rows, cols)
    this.type = type
    this.contents = contents
  }
}

module.exports = {
  Waffle, Block, Heading, Text, Image, Video, List, Table, Chart
}
