class Waffle {
  constructor(title, description, author, creationDate=new Date(), modificationDate=new Date(), blocks=[]) {
    this.title = title
    this.description = description
    this.author = author
    this.creationDate = creationDate
    this.modificationDate = modificationDate
    this.blocks = blocks
  }
  loadJson(jsonString){

  }
  dumpJson(){

  }
  dumpHtml(htmlString){

  }

  findBlock(blockId){

  }
}

class Block {
  constructor(id,startRow,startCol, rows,cols) {
  }
  loadJson(jsonString){

  }
  dumpJson(){

  }
  dumpHtml(htmlString){

  }
}

module.exports = Waffle
