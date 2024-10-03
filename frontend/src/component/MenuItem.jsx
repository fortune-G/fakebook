import React from 'react'

const MenuItem = (props) => {
    const{icon:Icon,text,...restProps} = props     //รับprops คือตัวที่จะเปลี่ยน เอาicon มาแล้วเปลี่ยนเป็นตัวพิมพ์ใหญ่ให้เป็น component
  return (                                      //avatarมากับicon,text=flukมากับprops, restPropsเอา classnameมา
    <div>
      <div className='btn btn-xl m-10 bg-opacity-0 justify-start hover:bg-opacity-20 border-none shadow-none my-3 py-1 '>
        <Icon {...restProps} /> {text}</div>
    </div>
  )
}

export default MenuItem
