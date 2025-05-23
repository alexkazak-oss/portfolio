
export const menuSlide = {
	initial: { x: "calc(-100% - 100px)" },
	enter: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: { x: "calc(-100% - 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}


export const slide = {
	initial: { opacity: 0, x: -350 },
	enter: i => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
	exit: i => ({
		opacity: 0,
		x: -150,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
}


export const scale = {
	open: {scale: 1, transition: {duration: 0.3}},
	closed: {scale: 0, transition: {duration: 0.4}}
}

export const fromVerticalToHorizontal = {
	initial: ({ i }) => ({
		x: 10,
		y: -60 * -i,
	}),
	animate: ({ i, isOpen }) => ({
		x: isOpen ? i * 280 : 0,
		y: isOpen ? -10 : -60 * -i,
		transition: {
			delay: 0.06 * i,
			duration: 0.5,
			ease: [0.76, 0, 0.24, 1],
		},
	}),
}

export const socialBlockMotion = {
	initial: {
		x: 0, 
		opacity: 0,
	},
	animate: (isOpen) => ({
		x: isOpen ? 450 : 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.1,
		},
	}),
}


