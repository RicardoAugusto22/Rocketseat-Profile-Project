function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a image
  if(html.classList.contains('light')) {
    // se estiver no light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Ricardo Augusto sorrindo, usando óculos e camisa rosa, de  barba com um lago por trás dele."
    )
  } else {
    // se estiver no dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Ricardo Augusto sorrindo, usando óculos e camisa rosa, de  barba com um lago por trás dele."
    )
  }
}