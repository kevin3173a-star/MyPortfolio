import React from 'react'


function Stack({item}) {//5. {item}으로 받아서
    
  return (
    <ul>
        {//6. item으로 map 돌림
            item.map((stacks)=>{
            return <li key={stacks.id}>
                    <img src={stacks.src} alt=''/>
                   </li>
            })
        }
    </ul>
    
  )
}

export default Stack