import  {React, Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/world.json'

class ULottie extends Component {
  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <h1>About Us</h1>
         <Lottie options={defaultOptions}
            height={300}
            width={300}
        />
      </div>
    )
  }
}

export default ULottie