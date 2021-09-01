import React from 'react'

import SkillImage from './SkillImage.component'
import { SkillIconBoxContainer } from './SkillIconBox.styles'

const SkillIconBox = ({ name, img, skillClassName, className }) => {
	return (
		<SkillIconBoxContainer className={className}>
			<p>{name}</p>
			<SkillImage img={img} className={skillClassName} />
		</SkillIconBoxContainer>
	)
}

export default SkillIconBox
