class Waffle {
  constructor (blocks = {}, title, description, author, creationDate = new Date(), modificationDate = new Date()) {
    this.title = title
    this.description = description
    this.author = author
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.blocks = blocks
  }

  static loadJson (jsonString) {
    const jsonObj = JSON.parse(jsonString)
    // TODO: parse blocks
    return Object.assign(new Waffle(), jsonObj)
  }

  dumpJson () {
    return JSON.stringify(this)
  }

  findBlock (blockId) {

  }
}

class Block {
  constructor (id, width = 12, height = 8) {
    this.id = id
    this.type = undefined
    this.width = width
    this.height = height
  }

  static loadJson (jsonString) {
    const jsonObj = JSON.parse(jsonString)
    return Object.assign(new Waffle(), jsonObj)
  }

  dumpJson () {
    return JSON.stringify(this)
  }
}

class Heading extends Block {
  constructor (id, level = 2, content, width = 12, height = 1) {
    super(id, width, height)
    this.type = 'heading'
    this.level = level
    this.content = content
  }
}

class Text extends Block {
  constructor (id, content, width = 12, height = 8) {
    super(id, width, height)
    this.type = 'text'
    this.content = content
  }
}

class Image extends Block {
  constructor (id, src, width = 6, height = 6) {
    super(id, width, height)
    this.type = 'image'
    this.src = src
  }
}

class Video extends Block {
  constructor (id, src, width = 6, height = 6) {
    super(id, width, height)
    this.type = 'video'
    this.src = src
  }
}

class List extends Block {
  constructor (id, contents = [], width = 12, height = 8) {
    super(id, width, height)
    this.type = 'list'
    this.contents = contents
  }
}

class Table extends Block {
  constructor (id, contents = [], width = 12, height = 8) {
    super(id, width, height)
    this.type = 'table'
    this.contents = contents
  }
}

class Chart extends Block {
  constructor (id, category, contents = [], width = 6, height = 6) {
    super(id, width, height)
    this.type = 'chart'
    this.category = category
    this.contents = contents
  }
}

module.exports = {
  Waffle,
  Block,
  Heading,
  Text,
  Image,
  Video,
  List,
  Table,
  Chart
}
