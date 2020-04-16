import React from 'react'
import { GlobalContextProvider } from 'context/GlobalContext'
import Collapses from './Collapses'

const App = () => {
	return (
		<GlobalContextProvider>
			<div className='wrapper'>
				<Collapses />
			</div>
		</GlobalContextProvider>
	)
}

export default App
