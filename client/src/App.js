import React, { useState, useEffect } from 'react'

import SkillIconBox from './SkillIconBox.component'
import data from './App.data'
import sal from 'sal.js'
import 'sal.js/dist/sal.css'

function App() {
	useEffect(() => {
		sal()
	}, [])

	return (
		<div className="App">
			<ul>
				{data.map((el, i) => (
					<li key={i} data-sal="fade" data-sal-delay="200" data-sal-repeat>
						<SkillIconBox
							img={el.img}
							name={el.name}
							className="icon-box"
							skillClassName="skill-img"
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
