const Imagizer = require('../dist/imagizer.js')

const Project = Imagizer.Project
const Image = Imagizer.Image

const project = new Project(500, 375)
const layer1 = project.createLayer()
const image1 = new Image()

image1.load('./test.png', function () {
  const obj = layer1.put(image1, 0, 0)
  obj.applyEffect('edge')
  obj.applyEffect('gray-scale')
  obj.applyEffect('invert')
  project.save('./node_result.png')
})
