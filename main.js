// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

const LinksSocialMedia = {
  github: 'ivanacarvalhods',
  youtube: 'maykbrito',
  facebook: 'ivana.carvalhodossantos.9',
  instagram: 'ivanacarvalhods',
  twitter: 'ivanacarvalhods'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
