export const fileToBase64 = async file => {
  return new Promise((resolve, reject) => {
    if (!file.type) return resolve(file)
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = e => reject(e)
  })
}

export const getformattedDate = date => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export const fetchStrapiContent = async path => {
  const response = await fetch(`http://localhost:1337/${path}`)
  return await response.json()
}
