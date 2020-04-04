import React from 'react'
import Collapses from './Collapses'
import { GlobalContextProvider } from 'context/GlobalContext'

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
