import type { Edge } from '../../Edge';
import type { Graph } from '../../Graph';
import { dijkstraGPU } from '../../shortest-path/dijkstra/gpu';
import { greedySpanner } from '../../spanner/greedy';

export type EdgePathBundlinGPUgParams = {
	device: GPUDevice;
	spanner?: Graph;
	maxDistortion?: number;
	edgeWeightFactor?: number;
};

export async function edgePathBundlingGPU(
	graph: Graph,
	{ device, spanner, maxDistortion = 2, edgeWeightFactor = 1 }: EdgePathBundlinGPUgParams
) {
	if (!spanner) {
		spanner = greedySpanner(graph, maxDistortion);
	}

	spanner.edges.forEach((edge) => {
		edge.weight = Math.pow(Math.abs(edge.weight), edgeWeightFactor);
	});

	const difference: Edge[] = [];
	graph.edges.forEach((edge) => {
		if (!spanner.edges.has(edge.id)) {
			difference.push(edge);
		}
	});

	const bundeledEdges: {
		edge: Edge;
		controlPoints: { x: number; y: number }[];
	}[] = [];

	const shortestPaths = await dijkstraGPU({
		device,
		graph: spanner,
		paths: difference.map((edge) => ({ start: edge.start, end: edge.end })),
	});

	console.time('edge bundling');
	let i = 0;
	for (const shortestPath of shortestPaths) {
		const edge = difference[i];
		if (!edge) throw new Error('Edge not found');

		if (shortestPath === null) {
			throw new Error('Shortest path is null');
		}

		if (shortestPath.length <= maxDistortion * edge.weight) {
			bundeledEdges.push({
				edge,
				controlPoints: shortestPath.nodes.slice(1, -1).map(({ x, y }) => ({ x, y })),
			});
		}

		i++;
	}
	console.timeEnd('edge bundling');

	console.log(bundeledEdges);

	return {
		bundeledEdges,
		spanner,
	};
}
