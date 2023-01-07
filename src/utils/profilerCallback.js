const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
	console.log(`${id}'s ${phase} phase:`);
	console.log(`Actual time: ${actualTime}`);
	console.log(`Base time: ${baseTime}`);
	console.log(`Start time: ${startTime}`);
	console.log(`Commit time: ${commitTime}`);
	return id;
};

export default callback;
