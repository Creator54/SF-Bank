import { styles } from 'ansi-colors'
import React from 'react'

function Main(){
  const date = new Date()
  let time
  let source

  if (date.getHours() < 12) {
    time = 'Morning'
    source = 'https://image.flaticon.com/icons/png/128/3892/3892928.png'
  }
  else if (date.getHours() >= 12 && date.getHours() < 17) {
    time = 'Afternoon'
    source = 'https://image.flaticon.com/icons/png/128/2698/2698194.png'
  }
  else if (date.getHours() >= 17 && date.getHours() < 20){
    time = 'Evening'
    source = 'https://image.flaticon.com/icons/png/128/3094/3094159.png'
  }
  else {
    time = 'Night'
    source = 'https://image.flaticon.com/icons/png/128/3626/3626276.png'
  }

  const user = 'Creator54'

  return(
    <div>
      {/* <img style={styles} src={source} alt={time}/> */}
      <main>
        Good {time} {user}
      </main>
    </div>
  )
}

export default Main