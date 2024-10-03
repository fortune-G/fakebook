import React from 'react'
import defaultAvatar from '../assets/default-avatar.png'


const Avatar = (props) => {
    const {imgSrc, menu , ...restProps } = props
	return (
		<div className="avatar items-center cursor-pointer">
			<div {...restProps}>
				<img src={imgSrc ?? defaultAvatar} />
			</div>
			{ menu && 
					<DropdownArrow className="absolute -bottom-2 -right-1 w-4"/>
			}
		</div>
	)
}

export default Avatar
