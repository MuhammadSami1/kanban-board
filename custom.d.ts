// if you are getting error of "Cannot find types of module 'xyz'" then you can add that module here
// and error will be gone

declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.png' {
  const typeexplain: any
  export default typeexplain
}
declare module 'react-quick-pinch-zoom'
declare module '@emoji-mart/react'
declare module '@emoji-mart/data'
