import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={252}
    height={252}
    viewBox="0 0 252 252"
    backgroundColor="#d1fff0"
    foregroundColor="#fff0d1"
    {...props}
  >
    <rect x="25" y="15" rx="5" ry="5" width="220" height="0" /> 
    <rect x="0" y="0" rx="15" ry="15" width="252" height="252" />
  </ContentLoader>
)

export default MyLoader