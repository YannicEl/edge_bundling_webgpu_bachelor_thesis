export function getShortestPathDataGouped() {
	const groupedShortestPath: Record<string, Array<(typeof shortestPath)[number]>> = {};

	shortestPath.forEach((path) => {
		const found = groupedShortestPath[path.file];
		if (!Array.isArray(found)) {
			groupedShortestPath[path.file] = [];
		} else {
			groupedShortestPath[path.file]!.push(path);
		}
	});

	return groupedShortestPath;
}

export const shortestPath = [
	{ file: 'simple', start: 0, end: 2, path: [0, 1, 2], length: 718.8845741897483 },
	{ file: 'simple', start: 4, end: 3, path: [4, 3], length: 339.4112549695428 },
	{
		file: 'simple',
		start: 0,
		end: 5,
		path: [0, 5],
		length: 1223.7646832622684,
	},
	{
		file: 'simple',
		start: 5,
		end: 1,
		path: [5, 4, 3, 2, 1],
		length: 1338.3578934099537,
	},
	{
		file: 'simple',
		start: 1,
		end: 5,
		path: [1, 2, 3, 4, 5],
		length: 1338.3578934099537,
	},
	{
		file: 'simple',
		start: 3,
		end: 0,
		path: [3, 0],
		length: 989.5453501482385,
	},
	{
		file: 'simple',
		start: 3,
		end: 2,
		path: [3, 2],
		length: 379.4733192202055,
	},
	{
		file: 'simple',
		start: 1,
		end: 2,
		path: [1, 2],
		length: 379.4733192202055,
	},
	{
		file: 'simple',
		start: 5,
		end: 0,
		path: [5, 0],
		length: 1223.7646832622684,
	},
	{
		file: 'simple',
		start: 5,
		end: 0,
		path: [5, 0],
		length: 1223.7646832622684,
	},
	{
		file: 'airlines',
		start: 21,
		end: 111,
		path: [21, 111],
		length: 284.1543780971135,
	},
	{
		file: 'airlines',
		start: 74,
		end: 187,
		path: [74, 136, 173, 187],
		length: 797.9773019916798,
	},
	{
		file: 'airlines',
		start: 95,
		end: 217,
		path: [95, 41, 217],
		length: 400.7359602003381,
	},
	{
		file: 'airlines',
		start: 193,
		end: 59,
		path: [193, 70, 59],
		length: 313.6092162868872,
	},
	{
		file: 'airlines',
		start: 217,
		end: 6,
		path: [217, 50, 6],
		length: 188.16603456363885,
	},
	{
		file: 'airlines',
		start: 171,
		end: 162,
		path: [171, 134, 192, 162],
		length: 879.8346423688016,
	},
	{
		file: 'airlines',
		start: 27,
		end: 204,
		path: [27, 50, 204],
		length: 166.37146219118176,
	},
	{
		file: 'airlines',
		start: 48,
		end: 103,
		path: [48, 192, 103],
		length: 359.3588946710471,
	},
	{
		file: 'airlines',
		start: 150,
		end: 170,
		path: [150, 50, 136, 170],
		length: 440.24380533912984,
	},
	{
		file: 'airlines',
		start: 9,
		end: 47,
		path: [9, 192, 18, 47],
		length: 604.9044078125856,
	},
	{
		file: 'airtraffic',
		start: 1523,
		end: 904,
		path: [1523, 262, 59, 8, 33, 904],
		length: 508.4819433843285,
	},
	{
		file: 'airtraffic',
		start: 255,
		end: 1431,
		path: [255, 278, 1431],
		length: 56.12607448366406,
	},
	{
		file: 'airtraffic',
		start: 217,
		end: 1214,
		path: [217, 54, 1214],
		length: 131.7543257688497,
	},
	{
		file: 'airtraffic',
		start: 470,
		end: 583,
		path: [470, 82, 219, 138, 583],
		length: 381.75824590236346,
	},
	{
		file: 'airtraffic',
		start: 1393,
		end: 432,
		path: [1393, 945, 1084, 10, 432],
		length: 460.75653477260096,
	},
	{
		file: 'airtraffic',
		start: 1507,
		end: 1240,
		path: [1507, 62, 216, 1240],
		length: 266.8734593993161,
	},
	{
		file: 'airtraffic',
		start: 842,
		end: 75,
		path: [842, 843, 833, 822, 23, 26, 82, 75],
		length: 957.0757641966541,
	},
	{
		file: 'airtraffic',
		start: 1427,
		end: 593,
		path: [1427, 62, 230, 593],
		length: 344.5910775578635,
	},
	{
		file: 'airtraffic',
		start: 1283,
		end: 236,
		path: [1283, 26, 236],
		length: 207.09216991527427,
	},
	{
		file: 'airtraffic',
		start: 918,
		end: 1211,
		path: [918, 135, 166, 229, 769, 1211],
		length: 94.28961171848935,
	},
] as const;

export const adjacencyList = [
	{
		file: 'simple',
		nodes: [0, 3, 5, 7, 10, 12],
		edges: [1, 5, 3, 0, 2, 1, 3, 0, 2, 4, 3, 5, 0, 4],
	},
	{
		file: 'example',
		nodes: [0, 4, 8, 10, 12, 14, 16, 18, 20, 24, 27, 30],
		edges: [
			1, 11, 10, 8, 0, 2, 11, 8, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 1, 0, 8, 10, 11, 9, 11,
			0, 10, 0, 1, 9,
		],
	},
] as const;
