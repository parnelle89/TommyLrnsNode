var finalSum = 0;
for (var i = 0; i < process.argv.length; i++) {
	/* First two are node and path, ignore */
	if (i >= 2) {
		// On to the actual numbers
		if (!isNaN(process.argv[i])) {
			var iCurrentNumber = +process.argv[i];
			finalSum += iCurrentNumber;
		}
	}
}

console.log(finalSum);