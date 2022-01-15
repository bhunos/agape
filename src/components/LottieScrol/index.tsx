import React, { useRef } from 'react'
import { GetLottiesScrol } from './styles'

export function LottieScrol() {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <GetLottiesScrol>
      <a href="#subscribeArrow">
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_NnBW3K.json" background="transparent" speed="1" style={{ width: "100px", height: "100px" }} loop autoplay></lottie-player>
      </a>
    </ GetLottiesScrol>
  )
}
