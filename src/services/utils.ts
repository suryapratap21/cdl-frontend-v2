export const hostname = () => {
  let hostUrl = 'https://api.tradelizer.com'
  // let hostUrl = 'http://localhost:4001';
  // Example switch case for different environments. Uncomment or modify as needed.
  if (typeof window !== 'undefined') {
    switch (window.location.hostname) {
      case 'localhost': // Development environment
        hostUrl = 'http://localhost:3000/api'
        break
      // Add more cases as needed for different environments
      default:
        hostUrl = 'https://api.tradelizer.com'
        break
    }
  }
  return hostUrl
}
