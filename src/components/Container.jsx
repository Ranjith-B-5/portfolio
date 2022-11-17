import React from 'react';
import App from './App';
import { fadeInLeftBig } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';




const styles = StyleSheet.create({
	animate__fadeInLeftBig: {
		animationName: fadeInLeftBig,
		animationDuration: '1s'
	}
});

const style1 = css(styles.animate__fadeInLeftBig);

function Container()
{
    return(
        <div className={'h-screen bg-transparent '+style1}><App />
	</div>
    )
}

export default Container;