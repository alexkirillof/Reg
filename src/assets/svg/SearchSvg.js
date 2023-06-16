import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
export const SearchSvg = (props) => (
  <Svg width={30} height={30} viewBox="0 0 30 30">
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </Svg>
)

