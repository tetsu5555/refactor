function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`)
  renderPhoto(outStream, person.renderPhoto)
  // 変数のインライン化を行っていく
  emitPhotoData(outStream, person.photo)
  outStream.write(`<p>location: ${person.photo.location}</p>\n`)
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write("<div>\n")
      // 変数のインライン化を行っていく
      emitPhotoData(outStream, p)
      outStream.write(`<p>location: ${p.location}</p>\n`)
      outStream.write("</div>\n")
    })
}

// 簡単にgrepできるものしておくと良い
function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`)
  outStream.write(`<p?date: ${photo.date.toDateString()}</p>\n`)
}
