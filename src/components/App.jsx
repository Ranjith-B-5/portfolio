import React, { useState } from 'react';
import { rollIn, flipInX } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import sharinghan from './images/sharinghan_itachi.png';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';
import Skillset from './Skillset';

const styles = StyleSheet.create({
	zoomInDown: {
		animationName: rollIn,
		animationDuration: '1.5s'
	},
	flipInX: {
		animationName: flipInX,
		animationDuration: '3s'
	}
});

const style1 = css(styles.zoomInDown);
const style2 = css(styles.flipInX);

function App() {
	return (
		<div className="bg-gray-900 position:absolute inset-0">
			<div className="pt-24">
				<h1 className={'text-indigo-50 z-0 text-6xl sm:text-7xl text-center font-sans md:text-7xl ' + style1}>
					Hi, I am <span className='text-cyan-500'>Ranjith</span>
				</h1>
				<div
					className={'w-32 h-32 sm:w-48 sm:h-48 mt-10 m-auto rounded-full bg-white object-contain ' + style1}
				>
					<img src={sharinghan} alt="eye" />
				</div>
				<TypeAnimation
					sequence={[ 'WEB DEVELOPER.', 2000, 'CYBERSECURITY ENTHUSIAST.', 2000, 'WEEB.', 2000 ]}
					className={'text-5xl text-center mt-8 text-cyan-500 ' + style1}
					wrapper="h2"
					repeat={Infinity}
				/>
			</div>
			<Skillset/>
			<Footer />
		</div>
	);
}

export default App;
