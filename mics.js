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

export const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API || 'https://gcu-csm-strapi.herokuapp.com'

export const fetchStrapiContent = async path => {
  const response = await fetch(`${STRAPI_API_URL}/${path}`)
  return await response.json()
}

export const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
