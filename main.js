// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

const socialMediaLinks = {
  github: 'ivanacarvalhods',
  linkedin: 'ivana-carvalho-70b007155',
  portfolio: 'ivanacarvalhods',
  instagram: 'ivanacarvalhods',
  twitter: 'ivanacarvalhods'
}

//Add social media links
const updateSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const socialMedia = li.getAttribute('class')

    if (socialMedia === 'linkedin')
      li.children[0].href = `https://${socialMedia}.com/in/${socialMediaLinks[socialMedia]}`
    else if (socialMedia === 'portfolio')
      li.children[0].href = `https://${socialMediaLinks[socialMedia]}.github.io`
    else
      li.children[0].href = `https://${socialMedia}.com/${socialMediaLinks[socialMedia]}`
  }
}

//Get API Data
const getGitHubProfileData = (input = socialMediaLinks.github) => {
  const favIcon = document.querySelector("link[rel='shortcut icon']")

  const url = `https://api.github.com/users/${input}`

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

const searchButton = document.querySelector('#search-button')
const gitHubNickInput = document.querySelector('#github-nick-input')

const getGitHubUserInput = () => {
  const gitHubUserNick = gitHubNickInput.value

  if (!gitHubUserNick) return
  else getGitHubProfileData(gitHubUserNick)
}

searchButton.addEventListener('click', getGitHubUserInput)

gitHubNickInput.addEventListener('keyup', event => {
  let key = event.keyCode

  if (key === 13) getGitHubUserInput()
})

//Settings modal
const optionsButton = document.querySelector('#options-button')
optionsButton.addEventListener('click', () => displayModal('options-modal'))

const displayModal = modalID => {
  const modal = document.querySelector(`#${modalID}`)

  modal.classList.add('display')

  modal.addEventListener('click', e => {
    const el = e.target
    if (el.id === modalID) {
      modal.classList.remove('display')
    }
  })
  const closeButton = document.querySelector('#close-modal')
  closeButton.addEventListener('click', () => modal.classList.remove('display'))
}

//Dark Mode
const html = document.querySelector('html')
const darkModeCheckbox = document.querySelector('#dark-mode-check')

if (darkModeCheckbox.checked) html.classList.toggle('dark-mode')

darkModeCheckbox.addEventListener('change', () => {
  html.classList.toggle('dark-mode')
})

//Color Themes
const updateColorTheme = () => {
  const themeName = colorThemesList.value

  html.classList.add(`${themeName}`)
}

const colorThemesList = document.querySelector('#color-themes-list')
colorThemesList.addEventListener('change', updateColorTheme)

updateColorTheme()

updateSocialMediaLinks()
getGitHubProfileData()
