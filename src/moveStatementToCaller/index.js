function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.renderPhoto);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter(p => p.date > recentDateCutoff())
    .forEach(p => {
      outStream.write("<div>\n")
      emitPhotoData(outStream, p)
      outStream.write("</div>\n")
    })
}

function emitPhotoData(outStream, photo) {
  zztmp(outStream, photo)
  outStream.write(`<p>location: ${photo.location}</p>\n`)
}

function zztmp(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`)
  outStream.write(`<p?date: ${photo.date.toDateString()}</p>\n`)
}
