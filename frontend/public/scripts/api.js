// This is api
import { BACKEND_URL } from './config.js'

/** @typedef {import("./config.js").Level} Level */
/** @typedef {import("./config.js").Leaderboard} Leaderboard */

// Level number is old level
export async function callGetNewLevelAPI(levelNumber) {
	/** @type {Level[]} */
	const newLevel = await fetch(
		`${BACKEND_URL}/getNewLevel/${levelNumber}`
	).then(r => r.json())
	if (newLevel.disable == true) {
		return null
	} else {
		return newLevel
	}
}

export async function callPostNewScoreAPI(name, star, inputNum, levelNum) {
	try {
		const response = await fetch(`${BACKEND_URL}/leaderboard`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				star: star,
				inputNum: inputNum,
				levelNum: levelNum,
			}),
		})

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`)
		}

		const result = await response.json()
		return result
	} catch (err) {
		console.log(err)
	}
}

export async function callGetLeaderboardAPI(level) {
	/** @type {Leaderboard[]} */
	const leaderboard = await fetch(`${BACKEND_URL}/leaderboard/${level}`).then(
		r => r.json()
	)
	return leaderboard
}
