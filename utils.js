// Utility functions for paper.js generative art
paper = paper && Object.prototype.hasOwnProperty.call(paper, 'default') ? paper['default'] : paper;

let utl = {	
	poscas: {
		'silver': '#BABCBB',
		'grey' : '#98999D',
		'slate grey' : '#5B6870',
		'deep grey' : '#545859',
		'black' : '#2d2926',
		'green' : '#0E793D',
		'metallic green' : '#57a499',
		'glitter light blue' : '#4694af',
		'blue' : '#005e9e',
		'navy blue' : '#002b49',
		'preussian blue' : '#320071',
		'metallic violet' : '#725899',
		'fluorescent green' : '#00bf6f',
		'aqua green' : '#4db7b6',
		'turquoise' : '#0097cd',
		'glitter blue' : '#0076b7',
		'glitter violet' : '#765c9b',
		'glitter green' : '#659959',
		'light green' : '#80e0a7',
		'metallic blue' : '#5d99ae',
		'sky blue' : '#009cde',
		'raspberry': '#893b67',
		'gold' : '#bb9b38',
		'glitter yellow' : '#bdb002',
		'apple green' : '#78be21',
		'light blue' : '#5bc2e7',
		'lavender' : '#d8a5f3',
		'metallic pink' : '#a56d95',
		'ochre' : '#c59213',
		'straw yellow' : '#fbd872',
		'light pink' : '#e9b8e5',
		'glitter pink' : '#b97e90',
		'red wine' : '#934953',
		'fluorescent yellow' : '#ffff2d',
		'beige' : '#f6e1cc',
		'pink' : '#f57eb6',
		'glitter red' : '#b95e70',
		'yellow' : '#ffd101',
		'fluorescent light orange': '#ffd635',
		'orange' : '#ff901d',
		'light orange' : '#ffbe9e',
		'coral pink' : '#ff8ca1',
		'fluorescent pink' : '#ff3eb5',
		'dark brown' : '#572d2d',
		'glitter orange' : '#c77335',
		'fluorescent orange' : '#ff7244',
		'metallic red' : '#bf6e59',
		'cacao brown' : '#7c3a2d',
		'fluorescent red' : '#ff5256',
		'red' : '#e13e53',
		'khaki': '#3e4827',
		'english green': '#205c40',
		'emerald green': '#169387',
		'deep gray': '#545859',
		'fuchsia': '#9a1E66',
		'dark red': '#9d2236',
		'ruby red': '#b8312d',
		'violet': '#8246AF',
		'bright yellow': '#ef9021',
		'bronze': '#bb8459',
		'brown': '#c07d59',
		'lilac': '#7d55c7',
		'light green': '#80e0a7',
		'apricot': '#f7d774',
		'sunshine yellow': '#fbfc72',
		'ivory': '#f2eec9',
		'white': '#fff'
	},

	molotows: {
		"zinc yellow": "#fff713",
		"orange DARE": "#ee7620",
		"traffic red": "#d51023",
		"burgundy": "#6a192c",
		"purple violet": "#74324a",
		"shock blue middle": "#00a2e2",
		"shock blue": "#0083ba",
		"true blue": "#004b9a",
		"petrol": "#004470",
		"violet dark": "#1e1056",
		"currant": "#56407e",
		"magenta": "#b71d5b",
		"fuchsia pink": "#d36aa2",
		"neon pink": "#eb5692",
		"calypso middle": "#74bd8b",
		"lagoon blue": "#009994",
		"turquoise": "#00794d",
		"poison green": "#dedd2e",
		"grasshopper": "#b1cc35",
		"UNIVERSES green": "#49ae41",
		"MISTER GREEN": "#00632e",
		"future green": "#004811",
		"amazonas light": "#7a9b7a",
		"hazelnut brown": "#391602",
		"lobster": "#be3218",
		"ocher brown light": "#d68307",
		"signal white": "#ffffff",
		"signal black": "#000000",
		"nature white": "#faf4e3",
		"vanilla pastel": "#ffeb91",
		"sahara beige pastel": "#fcc253",
		"peach pastel": "#f9a97e",
		"skin pastel": "#f8c1b8",
		"lago blue pastel": "#81b5c0",
		"lilac pastel": "#cca9d0",
		"ceramic light pastel": "#66b8eb",
		"blue violet pastel": "#739ad1",
		"cool grey pastel": "#808a94",
		"grey blue light": "#bdbcbb",
		"grey blue dark": "#6e7172",
		"neon yellow fluo": "#fff264",
		"neon orange fluo": "#f7ad66",
		"neon pink fluo": "#f29ec4",
		"neon green fluo": "#b8d483",	
	},

	getHex: (colorObject) => {
		const colorKeys = Object.keys(colorObject);
		const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
		return colorObject[randomKey];
	},
	
	each: (array, callback) => { array.forEach(callback)},

// MATH
// 88b           d88                       88           
// 888b         d888                ,d     88           
// 88`8b       d8'88                88     88           
// 88 `8b     d8' 88  ,adPPYYba,  MM88MMM  88,dPPYba,   
// 88  `8b   d8'  88  ""     `Y8    88     88P'    "8a  
// 88   `8b d8'   88  ,adPPPPP88    88     88       88  
// 88    `888'    88  88,    ,88    88,    88       88  
// 88     `8'     88  `"8bbdP"Y8    "Y888  88       88  
	
	PR: (seed=9238923) =>  {
		const a = 1664525;
		const c = 1013904223;
		const m = Math.pow(2, 32);
		const value = (a * seed + c) % m;
		return value / m;
	},

	PRG: class LinearCongruentialGenerator {
		constructor(seed) {
			this.a = 1664525; // Multiplier
			this.c = 1013904223; // Increment
			this.m = Math.pow(2, 32); // Modulus
			this.seed = seed;
		}
	
		next() {
			this.seed = (this.a * this.seed + this.c) % this.m;
			return this.seed / this.m;
		}
	},

	R: (a) => Math.random() * a,

	F: (a) => Math.floor(a),	

	Rr: (hi,lo) => Math.random() * (hi - lo) + lo,
                                                     
    isEven: (n) => {
        return n % 2 === 0;
    },
    isOdd: (n) => {
        return !utl.isEven(n);
    },
    getRI: (min, max) => {
        return Math.floor(Math.random() * Math.floor(max - min)) + min;
    },
    getDifference: (a, b) => {
        return Math.abs(a - b);
    },
    noise: (phase) => {
        return perlin.get(phase, phase); // requires perlin.js http://joeiddon.github.io/perlin/perlin.js
    },
    maybe: () => {
        return Math.random() > 0.5;
    },
    plusminus: () => {
        return Math.random() < 0.5 ? -1 : 1;
    },
    sinBetween: (min, max, t) => {
        return ((max - min) * Math.sin(t) + max + min) / 2;
    },
	RBias: (min, max, bias, influence) => {
		var rnd = Math.random() * (max - min) + min,   // random in range
			mix = Math.random() * influence;           // random mixer
		return rnd * (1 - mix) + bias * mix;           // mix full range and bias
	},
	mapRange: (value, inMin, inMax, outMin, outMax) => {
        return outMin + ((outMax - outMin) * (value - inMin)) / (inMax - inMin);
    },
	sineDenseMiddle: (x, max) => {
		return Math.sin((x / max) * Math.PI);
	},
	
// ARRAY	
//        db                                                          
//       d88b                                                         
//      d8'`8b                                                        
//     d8'  `8b      8b,dPPYba,  8b,dPPYba,  ,adPPYYba,  8b       d8  
//    d8YaaaaY8b     88P'   "Y8  88P'   "Y8  ""     `Y8  `8b     d8'  
//   d8""""""""8b    88          88          ,adPPPPP88   `8b   d8'   
//  d8'        `8b   88          88          88,    ,88    `8b,d8'    
// d8'          `8b  88          88          `"8bbdP"Y8      Y88'     
//                                                           d8'      
//                                                          d8'       
    // Get an array of random numbers sorted in order

    pick: (n, min, max) => {
		var results = [];
        for (let i = 1; i <= n; i++) {
			var value = Math.floor(Math.random() * max + min);
            results.push(value);
        }
        return results.sort((a, b) => a - b);
    },
	
	// get random item from an array
	getR: (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	},

	weightedR: (items, weights) => {
		var totalWeight = weights.reduce((a, b) => a + b, 0);
		var random = Math.random() * totalWeight;
	
		var weightSum = 0;
		for (var i = 0; i < weights.length; i++) {
			weightSum += weights[i];
			if (random < weightSum) {
				return items[i];
			}
		}
	},
	

	getV: (array, value) => {
		const index = Math.round(value * (array.length - 1));
		const safeIndex = Math.max(0, Math.min(index, array.length - 1));
		return array[safeIndex];
	},

	weightedRV: (array, weights, value, proximityRange) => {
		function getRandomElementInRange(weightedArray, minIndex, maxIndex) {
			// Ensure that the indices are within the array bounds
			minIndex = Math.max(0, Math.min(minIndex, weightedArray.length - 1));
			maxIndex = Math.max(0, Math.min(maxIndex, weightedArray.length - 1));
	
			// Calculate the total weight within the specified range
			let totalWeight = 0;
			for (let i = minIndex; i <= maxIndex; i++) {
				totalWeight += weightedArray[i] ? weightedArray[i].weight : 0;
			}
	
			// Choose a random value within the total weight
			let threshold = Math.random() * totalWeight;
	
			// Select an element based on the random value and weights
			for (let i = minIndex; i <= maxIndex; i++) {
				if (weightedArray[i]) {
					threshold -= weightedArray[i].weight;
					if (threshold < 0) {
						return weightedArray[i].value;
					}
				}
			}
	
			// In case no element is found (shouldn't normally happen), return a fallback
			
			return null;
		}
	
		// Ensure proximityRange is within reasonable bounds
		proximityRange = Math.min(proximityRange, array.length);
	
		// Create an array of objects with values and corresponding weights
		const weightedArray = array.map((value, index) => ({ value, weight: weights[index] || 0 }));
	
		// Determine the target index based on the provided value
		const targetIndex = Math.round(value * (array.length - 1));
	
		// Calculate the min and max indices for the range
		const minIndex = targetIndex - proximityRange;
		const maxIndex = targetIndex + proximityRange;
	
		// Get a random element within the range
		return getRandomElementInRange(weightedArray, minIndex, maxIndex);
	},

	shuffleA: (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	},
	
	

// VECTORS                                                                                     
// 8b           d8                                                                   
// `8b         d8'                         ,d                                        
//  `8b       d8'                          88                                        
//   `8b     d8'  ,adPPYba,   ,adPPYba,  MM88MMM  ,adPPYba,   8b,dPPYba,  ,adPPYba,  
//    `8b   d8'  a8P_____88  a8"     ""    88    a8"     "8a  88P'   "Y8  I8[    ""  
//     `8b d8'   8PP"""""""  8b            88    8b       d8  88           `"Y8ba,   
//      `888'    "8b,   ,aa  "8a,   ,aa    88,   "8a,   ,a8"  88          aa    ]8I  
//       `8'      `"Ybbd8"'   `"Ybbd8"'    "Y888  `"YbbdP"'   88          `"YbbdP"'  
                                                                                  
                                                                                  
    between: (p1, p2, r = 0.5) => {
        var tmpLine = new paper.Path.Line({
            from: p1,
            to: p2,
        });
        var result = tmpLine.getPointAt(tmpLine.length * r);
        tmpLine.remove();
        return result;
    },
    normal: (path, loc, value) => {
        var vector = path.getNormalAt(loc) * value;
        return vector;
    },

    getPo: (path, x, y) => {
		// console.log(path)
        lx1 = path.curves[0];
        lx2 = path.curves[2];
        cur = new paper.Curve(
            lx1.getLocationAt(x * lx1.length).point,
            lx2.getLocationAt((1 - x) * lx2.length).point
        );
        res = cur.getLocationAt(y * cur.length).point;
        cur.remove();
        return res;
    },

    getSeg: (path, x, y, hIn, hOut) => {

        po = utl.getPo(path, x, y);
        se = new paper.Segment({
            point: po,
        });
        if (hIn || hOut) {
            poIn = utl.getPo(path, hIn[0], hIn[1]);
            poOut = utl.getPo(path, hOut[0], hOut[1]);
            se.handleIn = poIn.subtract(po);
            se.handleOut = poOut.subtract(po);
        }
        return se;
    },

	// Returns as an array the two points on a circle that are tangential to an external point
	tngts: (cc, rad, po) => {
        let th = Math.acos(rad/cc.getDistance(p))
        let d = Math.atan2(po.y-cc.y, po.x-cc.x) 
        let d1=d+th, d2=d-th
        return [new paper.Point(cc.x+rad*Math.cos(d1),cc.y+rad*Math.sin(d1)), new paper. Point(cc.x+rad*Math.cos(d2), cc.y+rad*Math.sin(d2))]
    },

//POINTS	                                                             
// 88888888ba               88                                  
// 88      "8b              ""                ,d                
// 88      ,8P                                88                
// 88aaaaaa8P'  ,adPPYba,   88  8b,dPPYba,  MM88MMM  ,adPPYba,  
// 88""""""'   a8"     "8a  88  88P'   `"8a   88     I8[    ""  
// 88          8b       d8  88  88       88   88      `"Y8ba,   
// 88          "8a,   ,a8"  88  88       88   88,    aa    ]8I  
// 88           `"YbbdP"'   88  88       88   "Y888  `"YbbdP"'  
                                                             
                                                             
	genPointsEased: (center, maxDistance, count) => {
		const points = [];
	
		for (let i = 0; i < count; i++) {
			const distance = Math.random() * maxDistance;
			const angle = Math.random() * Math.PI * 2;
			const x = center.x + distance * Math.cos(angle);
			const y = center.y + distance * Math.sin(angle);
			points.push(new paper.Point(x, y));
		}
	
		return points;
	},

	// Function to generate random points with Poisson Disc Sampling
	genPoissonPoints: (center, width, height, maxDistance, minDistance, count) => {

		const pds = new PoissonDiskSampling({
			shape: [width, height],
			minDistance: minDistance,
			maxDistance: maxDistance,
			tries: 50
		});


		let poisPoints = pds.fill()

		// pds.addRandomPoints(count);

		const points = poisPoints.map(([x, y]) => new paper.Point(center.x + x, center.y + y));

		return points;
	},


	addPointToCurve: (path, offset) => {
        var p = path.getPointAt(offset);
        path.splitAt(path.getLocationAt(offset));
        path.join(path);

        if (path.getLocationOf(p) != undefined) {
            var result = path.getLocationOf(p).segment;
            return result;
        } else {
            return undefined;
        }
    },

	isPointOnLine: (point, lineStart, lineEnd) => {
		// Vector from lineStart to lineEnd
		var lineVector = lineEnd.subtract(lineStart);
		
		// Vector from lineStart to the point
		var pointVector = point.subtract(lineStart);
	
		// Check if the vectors are collinear by cross product
		var isCollinear = lineVector.cross(pointVector) === 0;
	
		// Check if the point is within the bounds of the segment
		var isWithinBounds = pointVector.dot(lineVector) >= 0 && pointVector.dot(lineVector) <= lineVector.dot(lineVector);
	
		return isCollinear && isWithinBounds;
	},
          
// MAPPING
// 88b           d88                                        88                            
// 888b         d888                                        ""                            
// 88`8b       d8'88                                                                      
// 88 `8b     d8' 88  ,adPPYYba,  8b,dPPYba,   8b,dPPYba,   88  8b,dPPYba,    ,adPPYb,d8  
// 88  `8b   d8'  88  ""     `Y8  88P'    "8a  88P'    "8a  88  88P'   `"8a  a8"    `Y88  
// 88   `8b d8'   88  ,adPPPPP88  88       d8  88       d8  88  88       88  8b       88  
// 88    `888'    88  88,    ,88  88b,   ,a8"  88b,   ,a8"  88  88       88  "8a,   ,d88  
// 88     `8'     88  `"8bbdP"Y8  88`YbbdP"'   88`YbbdP"'   88  88       88   `"YbbdP"Y8  
//                                88           88                             aa,    ,88  
//                                88           88                              "Y8bbdP"   

	mapArt: (from, to, pad) => {
        ref = new paper.Rectangle(from.bounds);
        ref = ref.scale(pad, pad);
		let result = new paper.Group()

		// Loop through each path in original item
        from.hasChildren()
            ? from.children.forEach(process)
            : process(from);

        function process(path) {
            // initialize result path
            resP = new paper.Path({
                fillColor: path.fillColor,
                strokeColor: path.strokeColor,
                strokeWidth: path.strokeWidth,
                opacity: path.opacity,
                strokeCap: 'round',
                strokeJoin: 'round',
            });
            resP.closed = path.closed ? true : false;

            //Loop through each segment in original path
            path.segments.forEach((s) => {
                myp = s.point;
                //toRelative = p => [(p.x - ref.left) / ref.width, (p.y - ref.top) / ref.height];
                toRelative = (p) => [
                    Math.min(
                        Math.max((p.x - ref.left) / ref.width, 0.00001),
                        1
                    ),
                    Math.min(
                        Math.max((p.y - ref.top) / ref.height, 0.00001),
                        1
                    ),
                ];
                [x, y] = toRelative(myp);
                [hinx, hiny] = toRelative(myp.add(s.handleIn));
                [houtx, houty] = toRelative(myp.add(s.handleOut));

                resP.add(
					utl.getSeg(to, x, y, [hinx, hiny], [houtx, houty])
				);
				result.addChild(resP)
            });
        }

        return result;
    },

	mapArtOnPath: (art, path, cellHeight, cellWidth, randomizeWidth = 0, padding=1, demo) => {
		let p = path
		let h = cellHeight
		let w = cellWidth
		let result = new paper.Group()
		let curPos = 0
		let counter = 0
		let delta = 0.01
		grayValues = false

		while (curPos < p.length) {
			
			// if art is one path, repeat it, if it's array, take nth item of array and loop array if necessary
			let myart = Array.isArray(art) ? art[counter%art.length] : art 

			// introduce little width randomizing
			let stepW = w ? w : myart.bounds.height / 1.5 * (Math.random() * randomizeWidth + 1)

			// clone will be used for individual letter
			let artClone = myart.clone()
			
			// get points of a rectangle that is along the path
			let n = p.getNormalAt(curPos)
			let myp = p.getPointAt(curPos)

			// get the gray value 
			if (grayValues) {
				nearestGray = findNearestSegment(p, curPos).colorValue
				artClone.children.slice(1).forEach(pa => {
					pa.strokeColor = new paper.Color(nearestGray);
				});
			}

			// Should probably be removed from the utility function
			if (grayValues) {

				let myMidP = curPos + stepW / 2 < p.length ? p.getPointAt(curPos + (stepW / 2)) : curPos
			
				const searchx = myMidP.x; // The value you want to find
				const searchy = myMidP.y; // The value you want to find
				
				const tolerance = 100; // Adjust the tolerance as needed
				
				// Initialize variables to store the nearest match and its distance
				let nearestGray = null;
				let minDistance = Number.MAX_VALUE;
				
				grayData.forEach(item => {
					const diffX = Math.abs(item.x - searchx);
					const diffY = Math.abs(item.y - searchy);
					const distance = Math.sqrt(diffX * diffX + diffY * diffY);
					
					if (distance <= tolerance && distance < minDistance) {
						nearestGray = item;
						minDistance = distance;
					}
				});	

				if (nearestGray && demo > 4) {
					gr = nearestGray['gray'] 
					
					// Light art coloring
					if (gr < 0.5) {
						artClone.children.slice(1).forEach(pa => {
							pa.strokeColor = lightC;
						});
					}		
					
					// Light art coloring
					if (gr < 0.2) {
						artClone.children.slice(1).forEach(pa => {
							pa.strokeColor = 'white';
						});
					}		
					
					// Background art coloring
					if (gr > 0.999) {
						artClone.children.slice(1).forEach(pa => {
							pa.strokeColor = bgC;
						});
					}
					// mappedArtHeight = Math.abs(h * Math.sin(p.length / (myp.x + .1)))
				}
			}

		
		
			mappedArtHeight = h

			n.length = mappedArtHeight
			let myp2 = myp.add(n)			

			curPos += stepW
			if (curPos > p.length) continue			
			
			let nextn = p.getNormalAt(curPos)
			let nextp = p.getPointAt(curPos)
			nextn.length = mappedArtHeight
			let nextp2 = nextp.add(nextn)
			
			let seg = new paper.Path({
				segments: [myp, myp2, nextp2, nextp],             
				closed: true
			})
			result.addChild(utl.mapArt(artClone, seg, padding))

			seg.remove()
			counter++
		}

		function findNearestSegment(path, offset) {
			// Ensure the offset is within the path's length
			offset = Math.min(offset, path.length);
		
			// Get the location on the path at the given offset
			var location = path.getLocationAt(offset);
		
			if (!location || !location.curve) {
				// In case the offset is not valid or there's no curve at the location
				return null;
			}
		
			// Get the point at this location
			var pointAtOffset = location.point;
		
			// Get the segments connected to this curve
			var previousSegment = location.curve.segment1;
			var nextSegment = location.curve.segment2;
		
			// Calculate distances to the segments
			var distanceToPrevSegment = pointAtOffset.getDistance(previousSegment.point);
			var distanceToNextSegment = pointAtOffset.getDistance(nextSegment.point);
		
			// Determine the nearest segment
			return distanceToPrevSegment < distanceToNextSegment ? previousSegment : nextSegment;
		}

		return result
	},

	//Maps paths (grouped or not) to quadrilaterals with curved sides
mapArtX: (from, to, freq, pad, delOrig = false) => {
	let ref = new paper.Rectangle(from.bounds);
	ref = ref.scale(pad, pad);

	let result = new paper.Group();

	function processItem(item, parentGroup) {
		if (item instanceof paper.CompoundPath) {
			let compound = new paper.CompoundPath({
				strokeColor: item.strokeColor,
				strokeWidth: item.strokeWidth,
				fillColor: item.fillColor,
				parent: parentGroup
			});

			item.children.forEach(child => {
				processPath(child, compound);
			});
		} else if (item instanceof paper.Path) {
			processPath(item, parentGroup);
		} else if (item instanceof paper.Group) {
			let newGroup = new paper.Group({ parent: parentGroup });
			item.children.forEach(child => {
				processItem(child, newGroup);
			});
		}
	}

	function processPath(path, parent) {
		let resPath = new paper.Path({
			strokeColor: path.strokeColor,
			strokeWidth: path.strokeWidth,
			fillColor: path.fillColor,
			closed: path.closed
		});

		let pCount = Math.floor(path.length / freq);
		let segLe = path.length / pCount

		for (let i = 0; i < pCount; i++) {
			
			let point = path.getPointAt(i * segLe);		
			let newPoint = utl.getPointX(ref, path, to, point.x, point.y, pad)

			if (newPoint == undefined) console.log('UNDEFINED')
			
			resPath.add(newPoint);
		}

		//resPath.simplify(.001)
		
		

		if (parent instanceof paper.CompoundPath) {
			parent.addChild(resPath);
		} else {
			parent.addChild(resPath);
		}
	}

	processItem(from, result);

	if (delOrig) {from.remove(); to.remove();}

	return result;
},

getPointX: (ref, from, to, x, y, pad) => {
	if (x > ref.width) x = ref.width
	if (y > ref.height) y = ref.height
	
	xOff = (x - ref.left) / ref.width
	yOff = (y - ref.top) / ref.height
	temp = new paper.Group()

	const pa = (s1, s2) => new paper.Path({segments: [s1, s2], parent:temp})
	const paa = (segs) => new paper.Path({segments: segs, parent: temp})
	
	let se = to.segments 

	// Divide path into separate side paths by determining that smooth segs are in between corners and corners are not smooth

	function divideToSides(segs) {
		let sides = [];
		let side = [segs[0]];

		// Iterate over the array
		for (let i = 1; i < se.length; i++) {
			side.push(se[i]); // Add the current point to the current side

			// If it's a corner or the end of the array
			if (!se[i].isSmooth() || i === se.length - 1) {
				// Check if the current side is valid
				if (side.length > 1 || (side.length === 1 && i === se.length - 1)) {
					// If we're at the end, close the loop
					if (i === se.length - 1 && se[i].isSmooth()) {
						side.push(segs[0]);
					}
					sides.push(side); // Add the current side to sides
					if (i === se.length - 1 && !se[i].isSmooth()) {
						sides.push([se[i], se[0]])
					}
					side = !se[i].isSmooth() ? [se[i]] : []; // Start a new side if it's a corner
				}
			}
		}

		return sides
	}

	let sides = divideToSides(se)	
	let side1 = paa(sides[0])
	let side2 = paa(sides[1])
	let side3 = paa(sides[2])
	side3.reverse()
	let side4 = paa(sides[3])
	side4.reverse()

	let int = new paper.Path({parent:temp})
	int.interpolate(side1, side3, yOff)
	int.firstSegment.point = side4.getPointAt(side4.length * yOff)
	int.lastSegment.point = side2.getPointAt(side2.length * yOff)
	let res = int.getPointAt(xOff*int.length)
	
	temp.remove()
 
	return res
},

//Maps art from triangle to another. Art should be inside triangle. Triangles' top point should be segment[0].
trimap: (src, tgt, art, res) => {
    let resG = new paper.Group()
    
    let iterate = (item) => {
		if (item instanceof paper.Path && item.segments) {
            
            let mpd = new paper.Path({strokeColor:item.strokeColor, closed:item.closed, fillColor:item.fillColor, parent:resG})
            
            let srcs = src.segments, tgts = tgt.segments
            let srcTop = srcs[0].point, tgtTop = tgts[0].point
            
            if (res) resample(item,res)
            
            item.segments.forEach(se => {
    
                let v = se.point.subtract(srcTop)
                
                let guide = (f,t) => new paper.Path.Line({from:f, to:t, insert:false})
        
                let li = guide(srcTop, srcTop.add(v.multiply(50)))
                
                let int = li.getIntersections(tri1)[1]
                
                let base = pao([srcs[1], srcs[2]])
                let relInt = base.getOffsetOf(int.point) / base.length
                
                let rely =  v.length / srcTop.getDistance(int.point)
                
                let base2 = pao([tgts[1], tgts[2]])
                let li2 = guide(tgtTop, base2.getPointAt(relInt*base2.length))
                
                mpd.add(li2.getPointAt(rely*li2.length))
			})
		}
		
		if (item.hasChildren()) {
			item.children.forEach(child => iterate(child));
		}
    }
    
    iterate(art);
	return resG;
},

	
// OCCLUSION	                                                                                                  
//   ,ad8888ba,                            88                          88                            
//  d8"'    `"8b                           88                          ""                            
// d8'        `8b                          88                                                        
// 88          88   ,adPPYba,   ,adPPYba,  88  88       88  ,adPPYba,  88   ,adPPYba,   8b,dPPYba,   
// 88          88  a8"     ""  a8"     ""  88  88       88  I8[    ""  88  a8"     "8a  88P'   `"8a  
// Y8,        ,8P  8b          8b          88  88       88   `"Y8ba,   88  8b       d8  88       88  
//  Y8a.    .a8P   "8a,   ,aa  "8a,   ,aa  88  "8a,   ,a88  aa    ]8I  88  "8a,   ,a8"  88       88  
//   `"Y8888Y"'     `"Ybbd8"'   `"Ybbd8"'  88   `"YbbdP'Y8  `"YbbdP"'  88   `"YbbdP"'   88       88  
                                                                                                                                                                                               

	occlusionX: (item, cookie=false, origColors=false, smallLines=0.1, verbose=true, callback=undefined) => {
		utl.ungroup(item)
		let res = new paper.Group()

		// function process(items) {
		// 	origs = items
		// 	console.log('originaaleja: ' + origs.length)
			
		// 	valids = []
			
		// 	len = origs.length
		
		// 	for (o = 0; o < len; o++) {
		// 		el = origs[o]
				
		// 		validEl = true
		// 		// stray point object with fill but no dimensions
		// 		if (el.bounds.height == 0 && el.bounds.width == 0) {
		// 			validEl = false
		// 		}
				
		// 		//invisible object, no need to process
		// 		if (el.fillColor== null && el.strokeColor == null) {
		// 			validEl = false
		// 		}
		
		// 		if (validEl) {
		
		// 			// take a clone of a current sprite
		// 			var ori = el.clone()
		// 			ori.parent = processed
				
		// 			// If element is to be processed
		// 			if (ori instanceof Shape) {
		// 				if (c.verbose) console.log('Processed elem is a SHAPE')
		// 				d = ori.toPath()
		// 				ori.remove()				
		// 			}
		
		// 			// If there are lines with fillcolor applied, close them (these are visually filled areas so we assume they should be processed as such)
		// 			// if (el.fillColor != null && el.closed == false) {
		// 			// 	el.closePath()
		// 			// }	
		
		// 			// If element is a stroke with a wider than threshold width, expand it
		// 			if (ori.strokeWidth > c.lineWidthThreshold && (c.expandAllLines || !ori.closed)) {
		// 				console.log('expand')
		// 				d = PaperOffset.offsetStroke(ori, ori.strokeWidth, { cap: el.strokeCap, join: el.strokeJoin })							
		// 				ori.remove()
		// 			}
		
		// 			// valids.push(d)
		// 		}		 		
		// 	}
		
			
		
		
		// 	console.log('prosessoituja originaaleja: ' + processed.children.length)
		// }
		let origs = item.children
		let len = origs.length
		let x = len - 1 

		function loop() {

			let el = origs[x]
			if ((el instanceof paper.CompoundPath && el.children.length === 0) || (el instanceof paper.Group && el.children.length === 0)) return false

			if (verbose && x % 100 == 0) console.log('occlusion ' + (len - x) + '/' + len)
			
			// use variables instead of accessing properties for possible speed advantage
			let fillC, strokeC
			
			let opt = {strokeColor: el.strokeColor, strokeWidth: el.strokeWidth, fillColor: el.fillColor}

			if (el.fillColor != null) fillC = el.fillColor.clone()
			if (el.strokeColor != null) strokeC = el.strokeColor.clone()
			let origColor = strokeC == null ? fillC : strokeC
			
			let strokeW = el.strokeWidth
			let closed = el.closed
			
			let rect1 = el.bounds
			let ints = []
			
			let flat
		
			// Check for elements above the current element
			for (let k=x+1;k<len;k++) {

				let testEl = origs[k]			
				// let rect2 = testEl.bounds

				const checkOverlap = (r1, r2) => !(r1.right < r2.left || r1.bottom < r2.top || r1.left > r2.right || r1.top > r2.bottom)							
				if (testEl.closed && checkOverlap(rect1, testEl.bounds)) ints.push(testEl)					
			}

			intLen = ints.length

			// If there are items in front of current element, then create the mask and do the subtraction 
			if (intLen > 0) {
				let mask = new paper.Path()
				
				ints.forEach(int => {
					mask = mask.unite(int, {insert: false, trace: false})    
				})

				let traceMethod = el.closed || el.type != undefined ? true : false
								
				// Open current path if we don't want cookie cutter type results
				if (!cookie && el.closed) {
					tmp = el.clone()
					tmp = tmp.splitAt(tmp.firstSegment.location)
					flat = tmp.subtract(mask, {trace: false})
					tmp.remove()
				}
				else  {
					flat = el.subtract(mask, {trace: traceMethod})
				}
				mask.fillColor = 'red'
				mask.remove()
			}
			else {
				flat = el.clone()
			}

			// Set colors in runtime
			if (!origColors) {
				flat.strokeColor = 'black'
				flat.fillColor = null
			
			} else {
				flat.fillColor = opt.fillColor
				flat.strokeColor = opt.strokeColor
				flat.strokeWidth = opt.strokeWidth				
			}
			
			flat.parent = res			
			x--

			// Check if the loop should continue
			if (x >= 0) {

					return loop()

			} else {

				// Clean up here
				item.remove()				
				res.reverseChildren()
				
				dels = []
				res.children.forEach(p => {
					if (p.length < smallLines * 0.352) dels.push(p)
				})
				
				dels.forEach(d => {	d.remove() })
				
				if (origColors) {
					res.children.forEach(path => {
						if (path.strokeColor === null) {						
							path.strokeColor = path.fillColor
						}
						// path.fillColor = null
						// path.strokeWidth = 1
					})
				}
				// Set color attributes
				if (!origColors) {
					res.strokeColor = 'black'
					res.fillColor = null
					res.strokeWidth = 1
				}
				if (callback) callback(res)
				if (callback==undefined) {
					return res
				}
			}
		}

		return loop()
	},


	// Do the hidden line removal
	occlusion: (item, callback, cookieCutter = false, verbose = true, ungroupCompounds=false) => {
		if (!item) return false 

		console.log('occlusion starting')
		console.log('ungrouping items')
		utl.ungroup(item)
		
		let resultG = new paper.Group()

		var mask = new paper.Path()

		// This function assumes that input item has children
		var elCount = item.children.length
		
		// Initialize counter
		var x = elCount - 1

		// Loop through all elements in occludable item
		function loop() {
			if (verbose && x % 100 == 0) console.log('processing ' + (elCount - x) + '/' + elCount)
			var el = item.children[x]
			
			// use variables instead of accessing properties for possible speed advantage
			let fillC, strokeC

			if (el.fillColor != null) fillC = el.fillColor.clone()
			if (el.strokeColor != null) strokeC = el.strokeColor.clone()
			origColor = strokeC == null ? fillC : strokeC

			strokeW = el.strokeWidth
			closed = el.closed
			validEl = true
			
			// stray point object with fill but no dimensions
			if (el.bounds.height == 0 && el.bounds.width == 0) {
				validEl = false
			}
			
			//invisible object, no need to process
			if (fillC == null && strokeC == null) {
				validEl = false
			}
			
			// If element is to be processed
			if (validEl) {

				// take a clone of a current sprite
				var d = el.clone()
				
				// If element is a shape (circle, ellipse, rectangle…), let's convert it to path first
				if (d instanceof paper.Shape) {
					if (verbose) console.log('Processed elem is a SHAPE')
					d = d.toPath()
				}

				// If there are lines with fillcolor applied, close them (these are visually filled areas so we assume they should be processed as such)
				if (fillC != null && closed == false) {
					d.closePath()
				}		
			
				// If element is a stroke with a wider than threshold width, expand it
				// if (strokeW > c.lineWidthThreshold) {
				// 	// If all elements, including closed ones are to be expanded
				// 	if (c.expandAllLines) {
				// 		if (verbose) console.log('Elem had wider than treshold strokewidth and all lines are to be expanded.')
				// 		d = PaperOffset.offsetStroke(d, strokeW, { cap: el.strokeCap, join: el.strokeJoin })
				// 	}				
				// 	else {
				// 		if (!d.closed) d = PaperOffset.offsetStroke(el, strokeW, { cap: el.strokeCap, join: el.strokeJoin })
				// 	}
				// }
			
				// If cookie cutter option is not selected
				if (!cookieCutter && d.closed) {
					// if (d.closed) {
						// Let's stash the original element in order to add it to the global mask
						fi = d.clone()
						// Compound paths need to be processed one sub-path at a time
						if (d instanceof paper.CompoundPath) {
							if (verbose) console.log('compound path being processed')
				
							temp = [...d.children]
							d.parent.addChildren(d.children)
				
							// Subtract the mask from each compound path's sub-path individually
							temp.forEach(path => {
								
								path.splitAt(path.firstSegment.location)						
								subtractAndUnite(path, false, fillC, strokeC)	
								
							})
							
							// Update global mask after all sub-paths have been processed first
							mask = mask.unite(fi, {insert: false})
							fi.remove()
				
						}

						else {
							// Other than compound closed paths are processed one by one
							d.splitAt(d.firstSegment.location)
							subtractAndUnite(d, fi, fillC, strokeC)
						}
					}

				// If cookie cutter option IS selected
				else {
					if (d.closed) subtractAndUnite(d, d, fillC, strokeC)
					else subtractAndUnite(d, false, fillC, strokeC)
					// subtractAndUnite(d, false, origColor)
				}
					
				// }
			}

			x--

			// Check if the loop should continue
			if (x >= 0) {

				loop()				

			} else {
				// Loop finished, perform cleanup
				
				if (verbose) console.log('DONE, cleanup')
		
				mask.remove()

				// Reverse order
				resultG.reverseChildren()

				// Ungroup possible resulted compound paths, this is not always desired behaviour
				if (ungroupCompounds) utl.ungroup(resultG, false)		

				// Remove original paths
				item.remove()

				// Clean up small lines smaller than threshold						
				toDelete = []

				limit = 0.352

				resultG.children.forEach(path => {
					if ((path.bounds.height < limit && path.bounds.width < limit) || path.length < limit) {
						toDelete.push(path)
					}
				})

				if (verbose) console.log('Small lines to delete found: ' + toDelete.length)

				toDelete.forEach(p => {
					p.remove()
				})

				
				
				// if (c.originalColors) {
				// 	resultLayer.children.forEach(path => {
				// 		if (path.strokeColor === null) {						
				// 			path.strokeColor = path.fillColor
				// 		}
				// 		path.fillColor = null
				// 		path.strokeWidth = 1
				// 	})
				// }
				
				// Set color attributes
				// if (!c.originalColors) {
					// resultG.strokeColor = 'black'
					// resultG.fillColor = null
					// resultG.strokeWidth = 1
				// }

			}
		}

		function subtractAndUnite(pathToProcess, toUnite = false, fillC, strokeC) {

			var traceMethod = pathToProcess.closed || pathToProcess.type != undefined ? true : false
		
			// add processed clone into the result layer
			resultG.addChild(pathToProcess)
			
			// Subtract everything above from the processed element
			res = pathToProcess.subtract(mask, {trace: traceMethod}) 	
			
			// Give resulting compound path's subpaths a meaningful strokeColor (so they won't disappear when ungrouping)
			if (res instanceof paper.CompoundPath) {
				res.children.forEach(path => {
					path.strokeColor = strokeC
					path.fillColor = fillC
					// if (path.strokeColor == null) {
					// 	path.strokeColor = origColor
					// }
				})
			}
			
			// If layer is a solid shape
			if (toUnite) {		
		
				// Unite to previous solid shapes
				mask = mask.unite(toUnite, {insert: false})
				toUnite.remove()
		
			}
		
			//remove temporary clone
			pathToProcess.remove()		
		
			res.strokeWidth = 1
			
			// if (!c.originalColors) {
				// res.strokeColor = 'black'
				// res.fillColor = null
			
			// } else {
			// 	if (res.strokeColor == null) res.strokeColor = origColor
			// 	res.fillColor = null
			// }
		
			return res
		}

		// Start the loop
		loop()

		if (callback && typeof callback === 'function') {
			callback(resultG);
		}
		else {
			return resultG
		}
		
				
	},

	// Recursively ungroup the SVG
	ungroup: (item, keepCompounds = true) => {

		if ( !item ) return false

		flag = true
		// If item is a group

		for (var i = 0; i < item.children.length; i++) {
			var el = item.children[i]
				if ( el.hasChildren() ) {

					// don't process clipping compound paths
					// if (el.clipMask && el instanceof paper.CompoundPath ) {
					// 	continue
					// }
					if (el instanceof paper.CompoundPath && el.closed && keepCompounds) {				
						continue
					}
					
					// Have to deal with clipping groups first
					if (el.clipped) utl.flattenClipping(el)

					// Move children to parent element and remove the group
					el.parent.insertChildren(el.index, el.removeChildren())
					el.remove()
					flag = false
				

				// Recurse as long as there are groups left
				if (!flag) {
					utl.ungroup(item)
				}
			}
		}
		
	},

// Flattens a clipping group
flattenClipping: (clipGroup) => {
	// Check if the group has children and if the first child is a clipping mask
	if (clipGroup.children.length > 0) {

		let mask = clipGroup.children.find(child => child.clipMask === true)
		if (!mask) return false
		if (mask instanceof paper.Shape) mask = mask.toPath()
		if (mask.closed == false) clipMask.closePath()
		
		// Ungroup everything inside a clipping group
		utl.ungroup(clipGroup)

		// Get the actual clipped layers
		let inners = clipGroup.children.filter(obj => { return obj.clipMask === false })
		let torem = [mask]
		
		// Loop through clipped layers and get the boolean intersection against clone of the clipping mask
		for (let x = 0; x < inners.length; x++) {
			let el = inners[x]
			
			if (!el.intersects(mask) && !el instanceof paper.CompoundPath) {
				if (!mask.contains(el.bounds.center)) torem.push(el)
				continue
			}
			
			else {
				if(el instanceof paper.Shape) el = el.toPath() // if inner element is a shape, let's convert to a path first
				let trace = el.closed ? true : false // Use suitable tracing method for open and closed paths
				
				let newEl = el.intersect(mask, {trace: trace})
				
				clipGroup.insertChild(el.index, newEl)
				newEl.style = el.style // Keep original style for the intersected paths
				el.remove()
			}
		}
		
		//clean up	
		torem.forEach(e => e.remove())
		clipGroup.clipped = false

		return clipGroup
	}
	return false	

},

// HATCH                                                         
// 88        88                                  88           
// 88        88                ,d                88           
// 88        88                88                88           
// 88aaaaaaaa88  ,adPPYYba,  MM88MMM  ,adPPYba,  88,dPPYba,   
// 88""""""""88  ""     `Y8    88    a8"     ""  88P'    "8a  
// 88        88  ,adPPPPP88    88    8b          88       88  
// 88        88  88,    ,88    88,   "8a,   ,aa  88       88  
// 88        88  `"8bbdP"Y8    "Y888  `"Ybbd8"'  88       88  
                                                           
                                                           
	// Hatch fill simple shapes (renctangle, circle etc. No U-shapes)
	hatchFill: (path, off, angle, penW, color) => {
		console.log('Hatchfill: starting')
		commonPivot = new paper.Point(0,0) // doesn't matter what it is as long as its not paths default pivot

		penW = penW * 2.83465 // convert pen width from mm to points

		pathCopy = PaperOffset.offset(path, -penW)
		pathCopy2 = PaperOffset.offset(path, -.5 * penW)
		
		pathCopy2.strokeColor = color
		pathCopy2.strokeWidth = penW
		pathCopy.pivot = commonPivot
		pathCopy.rotate(angle)
		
		b = pathCopy.bounds
		di = b.topLeft.getDistance(b.bottomRight)
		
		lines = Math.floor(b.height / penW)
		spc = b.height / lines
		
		lOff = (di - b.width) / 2
		xStart = b.left - lOff
		xEnd = b.right + lOff
		
		hatchTemp = new paper.Group({ pivot: commonPivot })
		
		for (l = 0; l < lines; l++) {
			new paper.Path.Line({
				from: [xStart, b.top + l * spc],
				to: [xEnd, b.top + l * spc],
			  
				parent: hatchTemp
			})
		}
		
		// Group to return the full hatching
		resG = new paper.Group({pivot: commonPivot })

		opt = {
			strokeColor: color,
			strokeWidth: penW,
			strokeCap: 'round',
			strokeJoin: 'round',
			parent: resG
		}
		
		// The resulting hatch fill path
		res = new paper.Path({
		   ...opt
	   })
		
	
		hatchTemp.children.forEach((h, idx) => {
			
			ints = h.getIntersections(pathCopy)
			
			if (ints.length == 2) {
				
				ref = new paper.Path.Line({
					from: ints[0].point ,
					to: ints[1].point
				})
				
				refLe = ref.length
				
				if (refLe > penW) {
					
					start = idx % 2 === 0 ? 0 : refLe
					end = idx % 2 === 0 ? refLe : 0
					
					res.add(ref.getPointAt(start))
					res.add(ref.getPointAt(end))            
				}
				
				ref.remove()
			}
		})
	
		hatchTemp.remove()
		
	   pathCopy.rotate(-angle)
	   resG.rotate(-angle)

	   pathCopy2.parent = resG
	   pathCopy2.strokeColor = color
	   pathCopy2.strokeWidth = penW
	   pathCopy2.fillColor = null
	
	   pathCopy.remove()
	   resG.pivot = resG.bounds.center
	   

	   return resG
		
	},

	// Hatch fill any shape	
	hatchFillAny: (origpath, penW, angle, color, debug=false, crossHatch=false, zigzag=true) => {
		let mm=2.83465
		let mindim=Math.min(origpath.bounds.width,origpath.bounds.height)

		if (origpath == null || mindim < 1 ){
			console.log('path bypassed')
			return 
		} 

		let commonPivot = new paper.Point(0,0)
		
		Array.isArray(penW) ? penW.forEach((pw, index, arr)=>arr[index]=pw*mm) : penW*=mm // convert pen width from mm to points		
		
		let origColor = origpath.fillColor ? origpath.fillColor : 'black'
		if (color) origColor = color
		
		let resG = new paper.Group({pivot: commonPivot})
		
		let hatchAreaOff=penW, edgeOff=penW, edgeLayers=1
		if (Array.isArray(penW)) {
		    let Lpen = Math.max(...penW)
		    let Spen = Math.min(...penW)
		    hatchAreaOff = Lpen
		    edgeOff = Spen
		    edgeLayers = Math.floor(Lpen / Spen)+1

			if (mindim < 10*Spen) hatchAreaOff = Spen
		}				
		
		path = PaperOffset.offset(origpath, -hatchAreaOff)
		pathCopy2 = PaperOffset.offset(origpath, -.5 * edgeOff)
		path.pivot = commonPivot
		
		for (let i=1;i<edgeLayers;i++) {
		    let edge = PaperOffset.offset(origpath, -.5 * i * edgeOff)
		    edge.strokeWidth = edgeOff
		    edge.parent = resG
		}
		
		
		hatch(angle)
		if (crossHatch) hatch(angle-90)

		function hatch(myAngle) {
			hatchG = new paper.Group({pivot: commonPivot})
			path.rotate(myAngle)

			// get dimensions
			var pb = path.bounds;
	
			let di = pb.topLeft.getDistance(pb.bottomRight)
					
			// set offset
			let offset = (di - pb.width) / 2
	
			// calculate how much lines fit onto the path with density given as parametre
			var linesCount = (Math.max(pb.width, pb.height) + 2 * offset) /  hatchAreaOff
			
			// Create dummy compound path to accommodate individual lines
			var lines = new paper.Group({pivot: commonPivot});
					
			// Let's add all separate point/line groups into this variable
			var runList = [[]];
			// Indicates index of runList lists.
			var curList = 0;
			// Current number of points in a line
			var curCount = 1;
		
			let prevInts
			
			for (var l = 0; l < linesCount; l++) {
				// The horizontal position of a hatch line
				var x = pb.left - offset + l * hatchAreaOff;
	
				// Create reference line in order to get intersection points
				var refline = new paper.Path.Line({
					from: new paper.Point(x, pb.top - offset),
					to: new paper.Point(x, pb.bottom + offset)
				})
		
				// Get intersection points
				var ints = path.getIntersections(refline);
		
				// Sort intersections along the reference line
				ints.sort(function(a, b) {
					return refline.getOffsetOf(a.point) - refline.getOffsetOf(b.point);
				  });
		
				// The number of actual line segments
				var myLineCount = ints.length / 2;
				
				
				if (isEven(ints.length) && ints.length > 1) {
		
					isclose = true			
					// Check if this and previous refline intersections are next to each other in the path
					
					// BUG In tight corners there are too many false positives
					// if (prevInts != undefined && prevInts.length > 1 && prevInts.length == ints.length)  {
					if (prevInts != undefined && prevInts.length > 1) {
		
						ints.every((inter, index) => {
							
							if (index > prevInts.length - 1) return false
		
							// Put this line's and previous lines CurveLocation into an sorted array
							offs = [prevInts[index].offset, inter.offset].sort()
		
							// Check if any of active line's intersection points is between the points
							ints.every(int => {						
								if (isBetween(int.offset, offs)) {
									if (debug) {
										new paper.Path.Circle({center: prevInts[index].point, radius: 2, fillColor: 'red'})
										new paper.Path.Circle({center: inter.point, radius: 2, fillColor: 'black'})
										new paper.Path.Circle({center: int.point, radius: 2, fillColor: 'green'})
										new paper.PointText({
											point: int.point,
											content: int.offset.toFixed(2),
											fontSize: 5
										})
										new paper.PointText({
											point: inter.point,
											content:inter.offset.toFixed(2),
											fontSize: 5
										})
										new paper.PointText({
											point: prevInts[index].point,
											content: prevInts[index].offset.toFixed(2),
											fontSize: 5
										})
										console.log(prevInts[index].offset + ' ' + int.offset + ' ' + inter.offset)
									}
		
									isclose = false
									return false;
								}
							  
								return true;
							  })
		
							  if (!isclose) return false
		
							  return true
						})
		
						function isBetween(number, twoNumbersArray) {
							return number > twoNumbersArray[0] && number < twoNumbersArray[1];
						}
					}
		
					// If number of points aka number of individual lines are not identical, divide runlist into separate groups
					if (myLineCount != curCount || !isclose) {
					// if (!isclose) {
						// set index of current list to first of the new groups about to be created
						curList = runList.length;
						curCount = myLineCount;
						// Create a new group per each line segment within one hatch line 
						for (var g = 0; g < myLineCount; g++) {
							runList.push([]);
						}
					}
					
					// Loop through each line segment and add two points to corresponding group in runlist
					for (var a = 0; a < myLineCount; a++) {
						var activeList = runList[curList + a];
						activeList.push([ints[a * 2].point, ints[a * 2 + 1].point])
					}
				}
				prevInts = [...ints]
				refline.remove();
			}
		
		
			if (runList.length > 0) {
				for (let i = runList.length - 1; i >= 0; i--) {
					if (runList[i].length === 0) {
						runList.splice(i, 1);
					}
				}
			}
			
			
			if (runList.length > 0) {
		
				oRunList = [...runList]
		
				if (oRunList.length == 0) console.log('Tyhjä runlista')
		
				// Create lines, go through all the groups created previously
				for (var i = 0; i < oRunList.length; i++) {

					var continuousLine
					if (zigzag) continuousLine = new paper.Path({strokeColor: path.strokeColor, strokeWidth:hatchAreaOff})

					var myList = oRunList[i];
		
					if (myList.length == 0) console.log('Tyhjä myList')
		
					// Every other end connected to create zigzag pattern
					for (var k = 0; k < myList.length; k++) {
						if (!zigzag) continuousLine = new paper.Path({strokeColor: path.strokeColor,strokeWidth:hatchAreaOff});

						if (isEven(k)) {
							addToContinuousLine(0)
							addToContinuousLine(1)
						}
						else {
							addToContinuousLine(1)
							addToContinuousLine(0)
						}
						if (!zigzag) lines.addChild(continuousLine);
					}
		
					function addToContinuousLine(ind) {
						continuousLine.add(myList[k][ind]);
					}
					
					if (zigzag) lines.addChild(continuousLine);
				}
				
				// Put lines vector element into drawing in front of the texturized path
				lines.parent = hatchG;
			}
			hatchG.rotate(-myAngle)
			hatchG.parent = resG
			path.rotate(-myAngle)
		}

		path.parent = resG
		path.strokeWidth = hatchAreaOff
		
		resG.fillColor = null
		resG.strokeColor = origColor
		resG.strokeCap = 'round'
		resG.strokeJoin = 'round'
		
		pathCopy2.parent = resG
		pathCopy2.strokeColor = color
		pathCopy2.strokeWidth = edgeOff
		pathCopy2.fillColor = null

		return resG

		// function outline(path) {
		// 	path.fillColor = null;
		// 	path.strokeWidth = 1;
		// }
		
		function isEven(n) {
			return n % 2 == 0;
		 }
	},


// FILL
// ███████╗██╗██╗     ██╗     
// ██╔════╝██║██║     ██║     
// █████╗  ██║██║     ██║     
// ██╔══╝  ██║██║     ██║     
// ██║     ██║███████╗███████╗
// ╚═╝     ╚═╝╚══════╝╚══════╝
                           
fillGrid: (path, pat, freq, rnd, opt) => {        
    let bo = path.bounds
    let max = Math.max(bo.height, bo.width)
    let stp = max / freq * 1.05
    let freqX = bo.width < max ? Math.ceil(bo.width / (bo.height/freq)) : freq 
    let freqY = bo.height < max ? Math.ceil(bo.height / (bo.width/freq)) : freq 
    
    let res = new paper.Group()
    for(let x=0;x<freqX;x++) {
        for(let y=0;y<freqY;y++) {
            myp = bo.topLeft.add(new paper.Point(x*stp, y*stp))
            mypat = pat.clone()
            mypat.position=myp.add(new paper.Point(utl.Rr(rnd, -rnd),utl.Rr(rnd, -rnd)))
            mypat.parent=res
            mypat.style={...opt}
        }
    }
    let todel = []
    let ints = []
    res.children.forEach(item => {
        let isInt = path.intersects(item)
		let isBigger = path.isInside(item.bounds)
        if ((!path.contains(item.bounds.center) && !isInt) || isBigger) todel.push(item)
        if (isInt) ints.push(item)
    })
    
    ints.forEach(item => {
        let pcl = path.clone()
        let myres = item.intersect(pcl, {trace:false})
        if (myres instanceof paper.CompoundPath) {
            myres.children.forEach(item => {
               if (!path.contains(item.getPointAt(item.length/2))) item.remove()
            })
        }
        todel.push(item)
        pcl.remove()
    })
    
    todel.forEach(item => item.remove())
    return res
},

// COLOR                                                           
//   ,ad8888ba,                88                           
//  d8"'    `"8b               88                           
// d8'                         88                           
// 88              ,adPPYba,   88   ,adPPYba,   8b,dPPYba,  
// 88             a8"     "8a  88  a8"     "8a  88P'   "Y8  
// Y8,            8b       d8  88  8b       d8  88          
//  Y8a.    .a8P  "8a,   ,a8"  88  "8a,   ,a8"  88          
//   `"Y8888Y"'    `"YbbdP"'   88   `"YbbdP"'   88          
                                                         
                                                         
    hex2color: (hex) => {
        var t = hex.match(/[A-Za-z0-9]{2}/g).map(function (v) {
            return parseInt(v, 16) / 255;
        });
        var c = new paper.Color(t);
        return c;
    },
    componentToHex: (c) => {
        var hex = parseInt(c * 255).toString(16);
        var padding =
            typeof padding === 'undefined' || padding === null
                ? (padding = 2)
                : padding;

        while (hex.length < padding) {
            hex = '0' + hex;
        }
        return hex;
    },
    rgb2hex: (r, g, b) => {
        return '#' + utl.componentToHex(r) + utl.componentToHex(g) + utl.componentToHex(b);
    },
    invertColor: (color) => {
        if (color != null) {
            color.red = 1 - color.red;
            color.green = 1 - color.green;
            color.blue = 1 - color.blue;
            return color;
        }
    },
    rgbArray2Color: (rgbarr) => {
        var c = new Color(rgbarr[0] / 255, rgbarr[1] / 255, rgbarr[2] / 255);
        return c;
    },
	

// FILL
// ███████╗██╗██╗     ██╗     
// ██╔════╝██║██║     ██║     
// █████╗  ██║██║     ██║     
// ██╔══╝  ██║██║     ██║     
// ██║     ██║███████╗███████╗
// ╚═╝     ╚═╝╚══════╝╚══════╝
                           
fillGrid: (path, pat, freq, rnd, opt) => {        
    let bo = path.bounds
    let max = Math.max(bo.height, bo.width)
    let stp = max / freq * 1.05
    let freqX = bo.width < max ? Math.ceil(bo.width / (bo.height/freq)) : freq 
    let freqY = bo.height < max ? Math.ceil(bo.height / (bo.width/freq)) : freq 
    
    let res = new paper.Group()
    for(let x=0;x<freqX;x++) {
        for(let y=0;y<freqY;y++) {
            myp = bo.topLeft.add(new paper.Point(x*stp, y*stp))
            mypat = pat.clone()
            mypat.position=myp.add(new paper.Point(utl.Rr(rnd, -rnd),utl.Rr(rnd, -rnd)))
            mypat.parent=res
            mypat.style={...opt}
        }
    }
    let todel = []
    let ints = []
    res.children.forEach(item => {
        let isInt = path.intersects(item)
		let isBigger = path.isInside(item.bounds)
        if ((!path.contains(item.bounds.center) && !isInt) || isBigger) todel.push(item)
        if (isInt) ints.push(item)
    })
    
    ints.forEach(item => {
        let pcl = path.clone()
        let myres = item.intersect(pcl, {trace:false})
        if (myres instanceof paper.CompoundPath) {
            myres.children.forEach(item => {
               if (!path.contains(item.getPointAt(item.length/2))) item.remove()
            })
        }
        todel.push(item)
        pcl.remove()
    })
    
    todel.forEach(item => item.remove())
    return res
},

// STRING                                                           
//  ad88888ba                      88                            
// d8"     "8b  ,d                 ""                            
// Y8,          88                                               
// `Y8aaaaa,  MM88MMM  8b,dPPYba,  88  8b,dPPYba,    ,adPPYb,d8  
//   `"""""8b,  88     88P'   "Y8  88  88P'   `"8a  a8"    `Y88  
//         `8b  88     88          88  88       88  8b       88  
// Y8a     a8P  88,    88          88  88       88  "8a,   ,d88  
//  "Y88888P"   "Y888  88          88  88       88   `"YbbdP"Y8  
//                                                   aa,    ,88  
//                                                    "Y8bbdP"   
    pad: (num, size) => {
        num = num.toString();
        while (num.length < size) num = '0' + num;
        return num;
    },

	isUpperCase: (char) => {
		return /^[A-Z]$/.test(char);
	},

	RString: (length) =>{
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			result += characters[randomIndex];
		}
		return result;
	},
	

// EASING
// 88888888888                         88                            
// 88                                  ""                            
// 88                                                                
// 88aaaaa      ,adPPYYba,  ,adPPYba,  88  8b,dPPYba,    ,adPPYb,d8  
// 88"""""      ""     `Y8  I8[    ""  88  88P'   `"8a  a8"    `Y88  
// 88           ,adPPPPP88   `"Y8ba,   88  88       88  8b       88  
// 88           88,    ,88  aa    ]8I  88  88       88  "8a,   ,d88  
// 88888888888  `"8bbdP"Y8  `"YbbdP"'  88  88       88   `"YbbdP"Y8  
//                                                       aa,    ,88  
//                                                        "Y8bbdP"   

    easingAnims: (min, max, easing, phase) => {
        phase = animFrame / (document.getElementById('animSpeed').value * 10);
        var animValue = eval('utl.' + easing + '(phase)');
        var range = max - min;
        if (phase >= 1) {
            animDir = 0;
        } // requires global animDir variable to be set
        if (phase <= 0) {
            animDir = 1;
        }
        return parseInt(min) + parseFloat(animValue * range);
    },
    sine: (x) => {
        return Math.sin(x);
    },
    easeInOutCirc: (x) => {
        return x < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
            : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInOutElastic: (x) => {
        var c5 = (2 * Math.PI) / 4.5;
        return x === 0
            ? 0
            : x === 1
            ? 1
            : x < 0.5
            ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
            : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeOutElastic: (x) => {
        var c4 = (2 * Math.PI) / 3;
        return x === 0
            ? 0
            : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    easeOutBounce: (x) => {
        var n1 = 7.5625;
        var d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    },
    easeInOutBounce: (x) => {
        return x < 0.5
            ? (1 - utl.easeOutBounce(1 - 2 * x)) / 2
            : (1 + utl.easeOutBounce(2 * x - 1)) / 2;
    },
    easeInOutExpo: (x) => {
        return x === 0
            ? 0
            : x === 1
            ? 1
            : x < 0.5
            ? Math.pow(2, 20 * x - 10) / 2
            : (2 - Math.pow(2, -20 * x + 10)) / 2;
    },
	skewedEaseInOutSine: (x, k = 1) => {
		// Adjust k to ensure it doesn't skew too far
		k = Math.max(0.1, Math.min(k, 10));
	
		// Calculate the skewed position
		const skewedX = Math.pow(x, k);
	
		// Apply the standard sine ease-in-out function to the skewed position
		return -0.5 * (Math.cos(Math.PI * skewedX) - 1);
	},
    easeInBack: (x) => {
        var c1 = 1.70158;
        var c3 = c1 + 1;
        return c3 * x * x * x - c1 * x * x;
    },
    easeInExpo: (x) => {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    },
    easeInOutBack: (x) => {
        var c1 = 1.70158;
        var c2 = c1 * 1.525;
        return x < 0.5
            ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
            : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInQuart: (x) => {
        return x * x * x * x;
    },
    easeInOutSine: (x) => {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    },


	                                                                                                                 
// PRIMITIVES                                                                                                  
// 88888888ba               88                      88           88                                      
// 88      "8b              ""                      ""    ,d     ""                                      
// 88      ,8P                                            88                                             
// 88aaaaaa8P'  8b,dPPYba,  88  88,dPYba,,adPYba,   88  MM88MMM  88  8b       d8   ,adPPYba,  ,adPPYba,  
// 88""""""'    88P'   "Y8  88  88P'   "88"    "8a  88    88     88  `8b     d8'  a8P_____88  I8[    ""  
// 88           88          88  88      88      88  88    88     88   `8b   d8'   8PP"""""""   `"Y8ba,   
// 88           88          88  88      88      88  88    88,    88    `8b,d8'    "8b,   ,aa  aa    ]8I  
// 88           88          88  88      88      88  88    "Y888  88      "8"       `"Ybbd8"'  `"YbbdP"'                                                                                                        
                                                                                                      
                                                                                                                 
	C: (p,r,c) => new paper.Path.Circle({center: p, radius: r, fillColor: c }),
	centerR: (p, size, c) => { 
		let res = new paper.Path.Rectangle({point: p, size:size, fillColor:c}) 
		res.translate(size[0]/2, size[1]/2)
		return res
	},

	mark: (inR, outR, color, strokeWidth, pnt) => {
		let ci = new paper.Path.Circle({
			strokeWidth: strokeWidth,
			strokeColor: color,
			center: pnt,
			radius:(outR - inR) / 4
		})
		
		ci.splitAt(ci.segments[2].location)
		let cc = ci.splitAt(ci.segments[1].location)
		ci.remove()
		
		let path = cc.clone()
		
		for (let i = 0; i < 3; i++) {
			
			let clo = cc.clone()
			clo.rotate(-90 * (i + 1))
			
			let o = inR + (outR - inR) / 2
			
			if (i === 0) [x,y] = [0, o]
			if (i === 1) [x,y] = [o, o]
			if (i === 2) [x,y] = [o, 0]
			
			clo.translate(x, y)
			path = path.join(clo)
		}
		
		path.closed = true
		cc.remove()
		
		path.position = pnt
		
		return path
	},

	khronos: (rings, lines, outer, inner, rotation, colors) => {
		let khrono = new paper.Group()
		let cols = []
		let ringWidth = (outer-inner) / rings
		let zero = new paper.Point(0,0)

		for (let i=0;i<lines;i++) {
			cols.push( utl.getR(colors) )
		}

		for (let i=0;i<rings;i++) {
			let ring = new paper.Group({parent: khrono})

			let start = new paper.Point({angle:0, length: inner + (ringWidth * i)})
			let end = new paper.Point({angle:0, length: inner + ringWidth + (ringWidth * i) })

			// console.log(zero + v)
			
			for (let j=0;j<lines;j++) {
				
				new paper.Path({
					segments: [ start, end ],
					strokeWidth: 1,
					strokeColor: cols[j],
					parent: ring
				})
				
				start.angle += 360/lines
				end.angle += 360/lines
			}

			ring.rotate(utl.R(rotation))
		}
		return khrono
	},

	compass: (points, rad) => {
		let res = new paper.Group()

		let opt = {
			strokeColor: 'blue',
			strokeWidth: 1,
			parent: res
		}

		let cnt = new paper.Point(0,0)
	
		st = new paper.Path.Star({
			center: cnt,
			points: points,
			radius1: rad/2.5,
			radius2: rad,
			...opt
		})

		st.rotate(45)
	
		let pa = (s) => new paper.Path({segments: s, ...opt})
		let Ci = (p, r) => new paper.Path.Circle({center: p, radius: r, ...opt})
	
		pts = st.segments
	
		for (let i=0;i<points;i++) {
			pa([ pts[i], cnt])	
			pa([pts[i+points], cnt])
			te = Ci(cnt.add(new paper.Point({angle: (360/points*i)+45, length:rad/1.3 })), rad / 10)
		}
				
		return res
	
	},

	stripedRect: (w, h, stripeGap, stripeWidth, angle, bgColor, stripeColor) => {
		res = new paper.Group({clipped: true})

		
		bg = new paper.Path.Rectangle({
			point: (0,0),
			size: [w,h],
			fillColor: bgColor,
			parent: res
		})

		bg.rotate(angle)

		maxW = bg.bounds.width
		gapped = stripeWidth + stripeGap
		stripeCount = Math.floor(maxW / gapped) +1

		for (let i=0;i<stripeCount;i++) {
			f = new paper.Path.Rectangle({
				point: bg.bounds.topLeft.add(new paper.Point(i*gapped, 0)),
				size: [stripeWidth, bg.bounds.height],
				fillColor: stripeColor,
				parent: res
			})
		}

		mask = bg.clone()
		mask.fillColor = null
		mask.clipMask = true

		res.rotate(-angle)
		if (bgColor == null) bg.remove()

		utl.flattenClipping(res)

		return res

	},

	circleGrid: (w, h, xc, yc, size = 0.7, gap = 0.3, pad = 0.1, bgColor, circleColor) => {
		res = new paper.Group();
	
		bg = new paper.Path.Rectangle({
			point: [0, 0],
			size: [w, h],
			fillColor: bgColor,
			parent: res
		});
	
		// Adjusting max dimensions considering padding
		maxW = w - pad * 2 * w;
		maxH = h - pad * 2 * h;
	
		// Calculating the space each circle and gap will occupy
		cPlusG = maxW/(xc-gap)
		circleSize = cPlusG * size
		gapSize = cPlusG * gap
		totalSize = circleSize + gapSize
	
		// Start position considering padding
		startX = pad*w + circleSize/2
		startY = pad*h + circleSize/2
	
		for (let y = 0; y < yc; y++) {
			for (let x = 0; x < xc; x++) {
				new paper.Path.Circle({
					center: new paper.Point(startX + x * totalSize, startY + y * totalSize),
					radius: circleSize / 2,
					fillColor: circleColor,
					parent: res
				});
			}
		}
	
		return res;
	},
	
	//torus like polygon
	polygon: (point=new Point(0,0), sides=6, rad=20, thickness=5, color='black', bgColor=null, pad=0) => {

		let p1 = new paper.Path.RegularPolygon({
			center: point,
			sides: sides,
			radius: rad,
			fillColor:color
		})

		let p2 = new paper.Path.RegularPolygon({
			center: point,
			sides: sides,
			radius: rad - thickness,
			fillColor: color
		})

		let poly = p1.subtract(p2)

		p1.remove()
		p2.remove()
		
		let res = new paper.Group()

		if (bgColor) {
			bgRe = new paper.Path.Rectangle(poly.bounds)
			bgRe.scale(1+pad, 1+pad)
			bgRe.fillColor = bgColor
			res.addChild( bgRe)
		} 
		
		res.addChild(poly)


		return res

	},

	//Fill bounding element area with random line that avoids near touches
	randomPath: (pointCount, minL, maxL, radius, boundingEl, opt, smooth=true, view) => {
		const R = (a=1)=>Math.random()*a;
		const Rpo = () => paper.Point.random() * view.bounds.bottomRight
		const getRPoint = (curp, points, minL, maxL, radius, angle, boundingEl, view) => {
			tries = 0
			vb = view.bounds
			const R = (a=1)=>Math.random()*a;
			
			while (true) {
				dir = tries % 2 != 0 ? -1 : 1
				rL = minL + R(maxL-minL + tries)
				rA = curp[1] + (dir * R(50 + tries))
				myP = curp[0].add(new paper.Point({angle: rA, length: rL}))
				
				const checkBounds = boundingEl ? isOutGivenBounds : isOutBounds;
		
				if (!checkBounds(myP, boundingEl) && !isNearAnyPoint(myP, points, radius)) {
					return [myP, rA];
				}
				
				if (tries > 200) break
				
				tries++
			}  
		
			function isOutBounds(p) {
				if (p.x < 0 || p.x > vb.right || p.y < 0 || p.y > vb.bottom) return true
			}
			
			function isOutGivenBounds(p, boundingElement) {
				return !boundingElement.contains(p)
			}
			
			function isNearAnyPoint(p, points, r) {
				r = r / 2;
				return points.some(cp => 
					cp.x > p.x - r && cp.x < p.x + r && cp.y > p.y - r && cp.y < p.y + r
				)
			}
		}
	
		segs = []
		currentP = boundingEl ? [boundingEl.interiorPoint, R(360)] : [Rpo(), R(360)]
		
		for (let i=0;i<pointCount;i++) {
			newP = getRPoint(currentP, segs, minL, maxL, radius, 60, boundingEl, view)
			if (newP == undefined) continue
			segs.push(newP[0])
			currentP = newP
		}
	  
		p = new paper.Path({segments: segs, strokeColor: 'black', strokeWidth: 1, strokeCap: 'round', ...opt})
		if (smooth) p.smooth()
	
		return p
		
	},
	

	blob: (length, rad, dns, smoothness, opt) => {
		let checkA = (a1, a2, tole=40) => Math.abs(a1 - a2) < tole
		let P = (x,y) => new paper.Point(x,y)
		let pa = (segs) => new paper.Path({segments: segs})
		let V = (a,l) => new paper.Point({angle:a, length:l})
		
		let l = pa([P(0,0), P(length,0)])
		let l1 = l.segments[0].point
		let l2 = l.segments[1].point
		
		let ang = l1.subtract(l2).angle
		ang = ang < 0 ? 360-Math.abs(ang) : ang
		
		let points = []
		
		for (let i=0;i<dns;i++) {
			
			let myan = 360/dns*i
			
			if (!checkA(myan, ang)) {    
				let vector = V(myan, utl.R(rad / 2) + rad / 2);
				let point = l.segments[1].point.add(vector);
				points.push(point);
			}
		
			if (!checkA(myan, ang - 180)) {
				let vector = V(myan, utl.R(rad / 2) + rad / 2);
				let point = l.segments[0].point.add(vector);
				points.push(point);
			}
		}
		
		let center = l.getPointAt(l.length/2)
		
		function angleToPoint(center, point) {
			return Math.atan2(point.y - center.y, point.x - center.x);
		}
		
		let angleTolerance = smoothness
		let uniquePoints = points.filter((point, index, self) => {
			let angle = angleToPoint(center, point);
			return self.findIndex(p => {
				let otherAngle = angleToPoint(center, p);
				return Math.abs(angle - otherAngle) < angleTolerance;
			}) === index;
		});
		
		
		uniquePoints.sort((a, b) => {
			let angleA = angleToPoint(center, a);
			let angleB = angleToPoint(center, b);
			return angleA - angleB;
		});
		
		
		let mypa = new paper.Path({
			segments: uniquePoints,
			closed: true,
			...opt
		})
		
		mypa.smooth()
		l.remove()
		
		return mypa
	},
	
	// Polygon shaped radial lines with random line colors
	polyKhronos: ({
		center,
		radius = 100,
		sides = 6,
		lineFreq= 5,
		width = 30,
		colors = ['red', 'blue'],
		colorWeights = [5,5],
		strokeWidth = 1,
		mask = false,
		maskOff = 0 // Assuming a default value for maskOff
	}) => {
		let mm = 2.854
		let res = new paper.Group();
		let po = (p, r, s) => new paper.Path.RegularPolygon({ center: p, radius: r, sides: s });

		let c = center;
		let s = sides;
		let r = radius;
		let w = s !== 3 ? width : width * 1.2;

		let pl1 = po(c, r, s);
		let pl2 = po(c, r + w, s);

		let le = pl1.length;
		let cnt = s !== 3 ? Math.floor(le / lineFreq) : Math.floor(le / lineFreq * .8);

		let step = le / cnt;
		let step2 = pl2.length / cnt;

		let pl3 = po(c, r - maskOff, s);
		let pl4 = po(c, r + w + maskOff, s);

		let maskElement;
		if (mask) {
			maskElement = pl4.subtract(pl3);
			maskElement.fillColor = '#111';
			maskElement.parent = res;
		}

		for (let i = 0; i < cnt; i++) {
			let col = utl.weightedR(colors, colorWeights);
			let l = pl1.getLocationAt(i * step);
			let n = l.normal;
			let p = l.point;

			let l2 = pl2.getLocationAt(i * step2);
			let p2 = l2.point;

			new paper.Path.Line({
				from: p,
				to: p2,
				strokeColor: col,
				strokeWidth: strokeWidth * mm, // Ensure 'mm' is defined somewhere or provide a default value
				parent: res,
				strokeCap: 'round'
			});
		}

		[pl1, pl2, pl3, pl4].forEach(r => r.remove());

		return res;
	},

	// Asterisk star
	asterisk: (p, rad, w, cnt=2, opt, bgColor) => {
		const r = (c, sz, opt) => new paper.Path.Rectangle({point: c.subtract(new paper.Point(sz[0]/2, sz[1]/2)), size:sz, ...opt})
		
		let fig = new paper.Path()
		for (let i = 0; i < cnt; i++) {
			let el = r(p, [w, rad*2]).rotate(180 / cnt * i);
			fig = fig.unite(el, {insert: false})
			el.remove();
		}
		
		
		
		let ast = new paper.Path({segments: fig.segments,  ...opt, closed:true })
		
		let res = new paper.Group()
	
			if (bgColor) {
				bgRe = new paper.Path.Rectangle(ast.bounds)
				bgRe.scale(1.1)
				bgRe.fillColor = bgColor
				res.addChild( bgRe)
			} 
			
			res.addChild(ast)
		
		
		return res
	},

	// Peace sign
	peace: (p, rad, width, opt, project) => {
		const po = (x,y) => new paper.Point(x,y)
		const re = (c, sz, opt) => new paper.Path.Rectangle({point: c.subtract(new paper.Point(sz[0]/2, sz[1]/2)), size:sz, ...opt})
		const c = (cnt,r,opt) => new paper.Path.Circle({center: cnt, radius: r, ...opt})
		
		let cis = new paper.Group([c(p,rad,opt), c(p,rad-width,opt)])
		cic = cis.children
		let ci = cic[0].subtract(cic[1], {insert:false})
		cis.removeChildren()
		cis.addChild(re(p, [width, rad*2-width], opt))
		cis.addChild(re(p.add(po(0,rad/2)), [width, rad-width/4], {pivot:p, ...opt})).rotate(45)
		cis.addChild(cic[1].clone().rotate(-90))
		cic.forEach(i => ci = ci.unite(i), {insert:false})
		cis.remove()
	
		project.activeLayer.addChild(ci)
		return ci
	},

	love: (p, rad, width, opt, project) => {
		const po = (x,y) => new paper.Point(x,y)		
		const poa = (a,l) => new paper.Point({angle:a, length:l})
		const sg = (x,y, aIn, lIn, aOut, lOut) => new paper.Segment(po(x,y), poa(aIn,lIn), poa(aOut, lOut))						
		
		pnts = [
			po(rad,rad),
			sg(rad/2, rad/2, 0, rad/3, 180, rad/3),
			sg(0, rad, -90, rad/3, 90, rad/3),
			sg(rad,rad*2.2, -135, rad/3, -45, rad/3),
			sg(rad*2,rad, 90, rad/3, -90, rad/3),
			sg(rad*1.5,rad/2, 0, rad/3, 180, rad/3)
		]
		
		hrt = new paper.Path({segments:[...pnts], strokeWidth: width, ...opt, closed:true})
		hrt.position = p

		project.activeLayer.addChild(hrt)
		return hrt
	},


// PATH                                             
// 88888888ba                        88           
// 88      "8b                ,d     88           
// 88      ,8P                88     88           
// 88aaaaaa8P'  ,adPPYYba,  MM88MMM  88,dPPYba,   
// 88""""""'    ""     `Y8    88     88P'    "8a  
// 88           ,adPPPPP88    88     88       88  
// 88           88,    ,88    88,    88       88  
// 88           `"8bbdP"Y8    "Y888  88       88  
	
	// Requires fit-curve.js
	// Converts a path into smooth bezier curves. Error controls the maximun deviation from the original path
	toCurve: (path, error) => {

		const path2arr = (path) => {res = path.segments.map(seg => [seg.point.x, seg.point.y]); res.push([path.firstSegment.point.x, path.firstSegment.point.y]); return res }
		const po = ([x,y]) => new paper.Point(x, y)
		const hndl = ([hx, hy], [px, py]) => new paper.Point(hx-px, hy-py)
		const se = (point, handleIn, handleOut) => { 
			let pnt = po(point)
			hIn = handleIn ? hndl(handleIn, point) : null
			hOut = handleOut ? hndl(handleOut, point) : null
			return new paper.Segment({ point: pnt, handleIn: hIn, handleOut: hOut})
		} 
		
		let points = path2arr(path)
		var bz = fitCurve(points, error);

		let pa = []

		for (let i=0;i<bz.length;i++) {
			cur =bz[i]		
			
			if (i==0) {		
				pa.push( se(cur[0], null, cur[1]) )
				pa.push( se(cur[3], cur[2], null) )
			}
			else {
				pa[pa.length-1].handleOut = hndl(cur[1], cur[0])
				pa.push( se(cur[3], cur[2], null) )
			}	
		}
		
		path.segments = pa		
	},                                           
	

	simplifyPath: (path, tolerance) => {
		// Helper function to simplify a section of the path
		const simplifySection = (segments, start, end) => {
			if (end - start < 2) {
				return [segments[start], segments[end]];
			}
	
			let maxDistance = 0;
			let maxIndex = 0;
			for (let i = start + 1; i < end; i++) {
				let distance = calculateDistanceFromLine(segments[i].point, segments[start].point, segments[end].point);
				if (distance > maxDistance) {
					maxDistance = distance;
					maxIndex = i;
				}
			}
	
			if (maxDistance > tolerance) {
				return [
					...simplifySection(segments, start, maxIndex),
					...simplifySection(segments, maxIndex, end).slice(1)
				];
			} else {
				return [segments[start], segments[end]];
			}
		};
	
		// Calculate the distance from a point to a line
		const calculateDistanceFromLine = (point, lineStart, lineEnd) => {
			const dx = lineEnd.x - lineStart.x;
			const dy = lineEnd.y - lineStart.y;
			const numerator = Math.abs(dy * point.x - dx * point.y + lineEnd.x * lineStart.y - lineEnd.y * lineStart.x);
			const denominator = Math.sqrt(dx * dx + dy * dy);
			if (denominator === 0) return point.getDistance(lineStart);
			return numerator / denominator;
		};
	
		// Simplify each path within the compound path
		if (path instanceof paper.CompoundPath) {
			path.children.forEach(child => {
				let simplifiedSegments = simplifySection(child.segments, 0, child.segments.length - 1);
				child.segments = simplifiedSegments;
			});
		} else if (path instanceof paper.Path) {
			let simplifiedSegments = simplifySection(path.segments, 0, path.segments.length - 1);
			path.segments = simplifiedSegments;
		}
	
		// Return the original path with its segments replaced
		return path;
	},
	
	
	convertShapesToPaths: (item) => {

		// Convert paths that are shapes and cause problems
		if (item.hasChildren()) {

			toremove = []
			item.children.forEach(pa => {
				if (pa instanceof paper.Shape) {
					pa.toPath()
					toremove.push(pa)
				}
			})
		
			toremove.forEach(re => {
				re.remove()
			})
		}
		else  {
			item.toPath()
		}

		return item
	},

	matchToPoints: (p, p1, p2) => {
		// Calculate scale
		sc = p1.getDistance(p2) / p.bounds.width
		
		// Calculate angle for rotation
		aorig = p.firstSegment.point.subtract(p.lastSegment.point).angle
		atgt = p1.subtract(p2).angle
		a = atgt - aorig
		
		// Set pivot and apply transformations
		p.pivot = p.firstSegment.point
		p.rotate(a)
		p.scale(sc, sc)
		p.position = p1
		
		//fix rare errors
		p.lastSegment.point.x = p2.x
		p.lastSegment.point.y = p2.y
		
	},

	// Resamples path 
	resample: (path, count) => {
        let segs = []    
        let le = path.length
        for(let i=0;i<count;i++) {
            segs.push(new paper.Segment({point:path.getPointAt(le/count * i)}))
        }
        path.segments = segs
    },

	// Splits path into chuncks of specified length
	split: (path, length, insertAbove=true) => {
		var chunks = []
	
		while (path.length > length) {
			var newPath = path.splitAt(length)
			chunks.push(path)
			path = newPath
		}
		
		if (insertAbove) chunks.forEach(ch => ch.insertAbove(path))
		if (path.length > 0) chunks.push(path)
		return chunks
	},

	// Suffles the path's starting point
	suffle: (path) => {
		if (path.closed && path.segments.length > 0) {			
			const randomIndex = Math.floor(Math.random() * path.segments.length);
				
			const newSegments = path.removeSegments(0, randomIndex);
			path.addSegments(newSegments);
		}
	},

	// releases a compound path as Illustrator does it
	release: (cp) => {
        if (cp instanceof CompoundPath) {
            var items = cp.children.slice()
            cp.parent.addChildren(items)
            cp.remove()
        }
    },


// GRID                                           
//   ,ad8888ba,               88           88  
//  d8"'    `"8b              ""           88  
// d8'                                     88  
// 88             8b,dPPYba,  88   ,adPPYb,88  
// 88      88888  88P'   "Y8  88  a8"    `Y88  
// Y8,        88  88          88  8b       88  
//  Y8a.    .a88  88          88  "8a,   ,d88  
//   `"Y88888P"   88          88   `"8bbdP"Y8  

	// Examples of distort function
	// const xDistortF = (y) => y * 10 * Math.sin(y)
	// const yDistortF = (x) => x * 10 * Math.sin(x)

	//There should be equal number of pieces and weights
	unevenGrid: (returnType = 'obj', gDim ={x:10,y:10}, gSize=20, pieces=[{x:1,y:1},{x:1,y:2},{x:2,y:1},{x:2,y:2}], weights=[5,5,5,5], xDistortF, yDistortF, mask) => {
		
		let genGri = utl.genPieces(gDim, utl.genGridPoints(gDim, gSize, xDistortF, yDistortF), pieces, weights, mask)

		let resG = new paper.Group()
		genGri.forEach(p => p.path.parent = resG )
		
		if (returnType == 'obj') {
			return genGri
		}
		if (returnType == 'geometry') {
			return resG
		}

	},

	genGridPoints: (gDim,gSize,xDistortF,yDistortF) => {
		
		let gPoints = []

		gPoints = new Array((gDim.x + 1) * (gDim.y + 1)).fill().map((_, index) => {
			let x = index % (gDim.x + 1);
			let y = Math.floor(index / (gDim.x + 1));
					
			let xDistort = xDistortF ? x * gSize + xDistortF(x,y) : x * gSize
			let yDistort = yDistortF ? y * gSize + yDistortF(x,y) : y * gSize

			return { segment: new paper.Segment({point: new paper.Point(xDistort, yDistort)}) }
		});
		
		xLines = []
		for(let y=0;y<gDim.y+1;y++) {
			let li = new paper.Path()
			for(let x=0;x<gDim.x+1;x++) {
				pos = y * (gDim.x + 1) + x
				li.add(gPoints[pos].segment.clone())
			}
			li.smooth()
				
			for(let x=0;x<gDim.x+1;x++) {
				pos = y * (gDim.x + 1) + x
				gPoints[pos].xHandles = [li.segments[x].handleIn, li.segments[x].handleOut] 
			}

			li.remove()
		}
		
		yLines = []
		for(let x=0;x<gDim.x+1;x++) {
			let li = new paper.Path()
			for(let y=0;y<gDim.y+1;y++) {
				pos = y * (gDim.x + 1) + x;
				li.add(gPoints[pos].segment.clone())
			}
			li.smooth()
			
			for(let y=0;y<gDim.y+1;y++) {
				pos = y * (gDim.x + 1) + x;
				gPoints[pos].yHandles = [li.segments[y].handleIn, li.segments[y].handleOut] 
			}
			li.remove()
		}

		return gPoints
	},

	genPieces: (gDim, gPoints, pieces, weights, mask) => {
		
		let gCells = []

		const getGPos = (ind) => { return {x:ind%gDim.x, y:Math.floor(ind/gDim.y)} }
		const getAvailability = (ind, piece) => {
			// Boundary checks
			if (ind % gDim.x + piece.x > gDim.x || Math.floor(ind / gDim.x) + piece.y > gDim.y) return false;			
		
			// Overlap checks
			for (let y = 0; y < piece.y; y++) {
				for (let x = 0; x < piece.x; x++) {
					if (gBase[ind + y * gDim.x + x] === true) return false;					
				}
			}
		
			return true;
		}
		function P(ind, x, y) {
			let pos = getGPos(ind)
			
			this.x = x
			this.y = y
			
		
			this.segments = utl.getCellPoints(gPoints,ind,x,y,gDim)
			
			this.path = new paper.Path({
				segments: this.segments,
				strokeColor: 'black',
				strokeWidth: 1,
				closed: true,
			})
			this.point = this.segments[0].point
			this.width = this.path.bounds.width
			this.height = this.path.bounds.height
			
			for (y = 0; y < this.y; y++) {
				for (i = ind + (y * gDim.x); i < ind + (y * gDim.x) + this.x; i++) {
					let mypos = getGPos(i)
					if (mypos.y == pos.y + y) gBase[i] = true
					else gBase[i + gDim.x] = true
				}
			}
		}

		gBase = Array(gDim.x * gDim.y).fill(false);

		gBase.forEach((g, ind) => {
			
			if (g === true) return
			
			let myPos = getGPos(ind);
			let it = 0;
			let maxX = 10000;
			let myYRowEnd = (myPos.y * gDim.y) + gDim.y;
			let Rp;
			let maxY = 10000;
			let available = false;
			
			while ((maxX > myYRowEnd || maxY > gDim.y) && !available) {
				
				Rp = utl.weightedR(pieces, weights);
				available = getAvailability(ind, Rp);
				
				// If not available, skip the rest of the loop and try with another piece
				if (!available) {
					if (it > 100) break;
					it++;
					continue;
				}
				
				maxX = ind + Rp.x;
				maxY = myPos.y + Rp.y;
				
				if (it > 100) break;
				it++;
			}
			
			// Add to gCells only if available
			if (available) {
				gCells.push(new P(ind, Rp.x, Rp.y));
			}
		})

		if (mask) {
			todel = []
	
			gCells.forEach(c => {
				let out = true
				c.segments.forEach(s => {
					
					if (!mask.contains(s.point)) {
						near = mask.getNearestPoint(s.point)
						s.point.x = near.x
						s.point.y = near.y
						s.handleIn.length = 1
						s.handleOut.length = 1
					}
					else {out=false}
				})
				if (out) todel.push(c)
			})
	
			todel.forEach(i => {
				let index = gCells.indexOf(i);
	
				if (index !== -1) {
					gCells.splice(index, 1);
				}
				i.path.remove()
			})
	
			mask.remove()
		}

		return gCells
	},

	getCellPoints: (gPoints, ind, x, y, gDim) => {
		let res = []
		ind = Math.floor(ind/gDim.x) * (gDim.x + 1) + ind%gDim.x
		
		for (let xi = 0; xi < x+1; xi++) {
			let ss = gPoints[ind + xi]
			let myS = ss.segment.clone()
			
			if (xi != 0) myS.handleIn = ss.xHandles[0].clone()
			if (xi != x)  myS.handleOut = ss.xHandles[1].clone()
			if (xi == x)  myS.handleOut = ss.yHandles[1].clone()
			res.push(myS)
		}
	
		// Right edge (top to bottom, excluding the top corner)
		for (let yi = 1; yi < y+1; yi++) {
			let ss = gPoints[ind + yi*(gDim.x + 1) + x]
			let myS = ss.segment.clone()
			myS.handleIn = ss.yHandles[0].clone()
			if (yi != y) myS.handleOut = ss.yHandles[1].clone()
			if (yi == y) myS.handleOut = ss.xHandles[0].clone()
			res.push(myS)
		}
	
		// Bottom edge (right to left, excluding the right corner)
		for (let xi = x-1; xi > -1; xi--) {
			let ss = gPoints[ind + y*(gDim.x + 1) + xi]
			let myS = ss.segment.clone()
			if (xi != x) myS.handleIn = ss.xHandles[1].clone()
			if (xi != 0) myS.handleOut = ss.xHandles[0].clone()
			if (xi == 0) myS.handleOut = ss.yHandles[0].clone()
			res.push(myS)
			
		}
	
		 // Left edge (bottom to top, excluding the bottom and top corners)
		for (let yi = y - 1; yi > 0; yi--) {
			let ss = gPoints[ind + yi * (gDim.x + 1)];
			let myS = ss.segment.clone();
			myS.handleIn = ss.yHandles[1].clone();
			myS.handleOut = ss.yHandles[0].clone();
			res.push(myS);
		}
		
		let ss = gPoints[ind]
		// let myS = ss.segment.clone()
		res[0].handleIn = ss.yHandles[1].clone()
					
		return res
	},
	// Generates circular grid with specified ring and sector counts
	genCircGrid: (cnt,rad,rings,secs,minSecL) => {
		const L = (n, f) => { for (let i=0;i<n;i++) if (f(i) === false) { break;} }
		const pa = (segs, opt) => new paper.Path({segments:segs, ...opt})
		const pev = (a,l) => new paper.Point({angle:a,length:l})
		const div360 = (n) => {
			let res = []
			L(n, ()=>res.push(Math.random() * 360))
			res.sort(function(a, b) { return a - b; })
			return res
		}
		const midAngle = (a1,a2) => {
			let dif = (360+a2-a1)/2;
			let mid = a2-dif<0 ? a1+dif : a2-dif
			return mid
		}
		const pv = (a,l) => new paper.Point({angle:a,length:l})
		
		let res = new paper.Group()
		let oneW = rad/rings
		
		L(rings, (idx)=> {
			
			let myDivs = div360(secs)
			
			L(secs, (ix)=> {
				let cur, nxt, a1, a2, a12, p1, p2, p3, p4, arc1, arc2;

				if(ix==secs-1) {
					cur=ix
					nxt=0
				}
				else {
					cur=ix
					nxt=ix+1
				}
				
				a1 = myDivs[cur]
				a2 = myDivs[nxt]
				a12 = a1+(a2-a1)/2
				if(ix==secs-1) a12 = midAngle(a1,a2)
				
				p1 = cnt.add(pev(a1, oneW * idx))
				p24 = cnt.add(pev(a12, oneW * (idx + 1)))
				p2 = p1.add(pev(a1, oneW))
				p3 = cnt.add(pev(a2, oneW * idx))
				p13 = cnt.add(pev(a12, oneW * idx))
				p4 = p3.add(pev(a2, oneW))
				
				arc1 = new paper.Path.Arc({from:p2, to:p4, through:p24})
				arc2 = new paper.Path.Arc({from:p1, to:p3, through:p13})
				arc2.reverse()
				let seg = pa([...arc1.segments, ...arc2.segments], {closed:true})
				res.addChild(seg)
			})
		})
		
		return res
	},

	// Generated grid with exact column and row counts, but randomly divided row heights per column
	genGrid: (gridWidth, gridHeight, xCount, yCount, gap, minHeight) =>{
		var group = new paper.Group(),
			rectWidth = (gridWidth - (xCount - 1) * gap) / xCount;
	
		for (var i = 0; i < xCount; i++) {
			var availableHeight = gridHeight - (yCount - 1) * gap - yCount * minHeight,
				randomTotal = 0,
				randomValues = [];
	
			// Generate random values and calculate their total
			for (var j = 0; j < yCount; j++) {
				var rand = Math.random();
				randomValues.push(rand);
				randomTotal += rand;
			}
	
			// Calculate heights ensuring each is at least minHeight
			var heights = randomValues.map(function(rand) {
				return minHeight + (rand / randomTotal) * availableHeight;
			});
	
			var xPos = i * (rectWidth + gap),
				yPos = 0;
	
			// Create rectangles with calculated heights
			heights.forEach(function(height) {
				group.addChild(new paper.Path.Rectangle({
					point: [xPos, yPos],
					size: [rectWidth, height],
					insert:false                
				}));
				yPos += height + gap;
			});
		}
		return group;
	},

	// Randomly makes a grid of clipping groups that contain pieces from items. Grid should be a group.
	applyGrid: (grid, items, weights, flatten) => {
		res = new paper.Group()
		var cumulativeWeights = [];
		var totalWeight = 0;
		for (var i = 0; i < weights.length; i++) {
			totalWeight += weights[i];
			cumulativeWeights.push(totalWeight);
		}
			
		var paths = grid.children;
		for (var i = 0; i < paths.length; i++) {
			var path = paths[i];
	
			var clipGroup = new paper.Group({clipped: true});
	
			// Clone the path and add it as the clipping mask (first child)
			var pathClone = path.clone();
			pathClone.clipMask = true
			clipGroup.addChild(pathClone);
	
			// Randomly select an item based on weights
			var rand = Math.random() * totalWeight;
			var itemIndex = 0;
			for (var j = 0; j < cumulativeWeights.length; j++) {
				if (rand < cumulativeWeights[j]) {
					itemIndex = j;
					break;
				}
			}
	
			var itemToInsert = items[itemIndex].clone();
			clipGroup.addChild(itemToInsert);
			if(flatten) utl.flattenClipping(clipGroup)
			res.addChild(clipGroup)
			//	project.activeLayer.addChild(clipGroup);
		}
	
		items.forEach(i=>i.remove())
		return res
	},
	

// FOLDING                                                                   
// 88888888888           88           88  88                            
// 88                    88           88  ""                            
// 88                    88           88                                
// 88aaaaa   ,adPPYba,   88   ,adPPYb,88  88  8b,dPPYba,    ,adPPYb,d8  
// 88"""""  a8"     "8a  88  a8"    `Y88  88  88P'   `"8a  a8"    `Y88  
// 88       8b       d8  88  8b       88  88  88       88  8b       88  
// 88       "8a,   ,a8"  88  "8a,   ,d88  88  88       88  "8a,   ,d88  
// 88        `"YbbdP"'   88   `"8bbdP"Y8  88  88       88   `"YbbdP"Y8  
//                                                          aa,    ,88  
//                                                           "Y8bbdP"   
	getCutAndScore: (paths) => {
		res = new paper.Group()

		// Unite all paths in the paths array
		var join = paths.reduce(function (result, item, counter) {
			return result.unite(item, {insert:false});
		});
		
		joined = new paper.Path({segments: join.segments,strokeColor:'black', strokeWidth:1, closed:true, parent: res})
				
		folds = []
		
		paths.forEach(it => {
			it.curves.forEach(crv => {
				
				// Check if there is no existing path with the same start and end points
				if (!folds.some(fold => {
					const fs0 = fold.segments[0].point;
					const fs1 = fold.segments[1].point;
				
					return (fs0.equals(crv.point1) || fs0.equals(crv.point2)) && (fs1.equals(crv.point1) || fs1.equals(crv.point2));
				})) {
					// Create a new path only if no matching path is found
					const pp = new paper.Path({ segments: [crv.point1, crv.point2], strokeColor: 'orange', strokeWidth: 2, parent:res })
					
					folds.push(pp)
		
					// Check if path is in the middle of the shape of is it a boundary of a shape
					const cl = pp.getLocationAt(pp.length / 2)
					no = cl.normal
					no.length = 0.01

					if (!joined.contains(cl.point.add(no)) || !joined.contains(cl.point.subtract(no))) {
						pp.remove()
					}
				}
			})
		})

		paths.forEach(it => it.remove())
		return res
		
	},


// VECTEXT                                                                            
// 8b           d8                  888888888888                               
// `8b         d8'                       88                             ,d     
//  `8b       d8'                        88                             88     
//   `8b     d8'  ,adPPYba,   ,adPPYba,  88   ,adPPYba,  8b,     ,d8  MM88MMM  
//    `8b   d8'  a8P_____88  a8"     ""  88  a8P_____88   `Y8, ,8P'     88     
//     `8b d8'   8PP"""""""  8b          88  8PP"""""""     )888(       88     
//      `888'    "8b,   ,aa  "8a,   ,aa  88  "8b,   ,aa   ,d8" "8b,     88,    
//       `8'      `"Ybbd8"'   `"Ybbd8"'  88   `"Ybbd8"'  8P'     `Y8    "Y888  
                                                                            


	pathCommands: (s, offset) => {
		let paths = [];
		let currentPath = null;
		let mode = '';

		for (let t of s.split(' ')) {
			if (t.charAt(0) == 'M' || t.charAt(0) == 'L') {
				mode = t.charAt(0);
				t = t.substr(1);
			}

			let coords = t.split(',');
			let point = new paper.Point(parseInt(coords[0]) + offset, parseInt(coords[1]));

			if (mode == 'M') {
				// Start a new path
				currentPath = new paper.Path();
				currentPath.strokeColor = 'black';
				paths.push(currentPath);
				currentPath.moveTo(point);
			} else if (mode == 'L') {
				// Continue with the current path
				if (currentPath) {
					currentPath.lineTo(point);
				}
			}
		}

		return paths;
	},


	pathCommandsForText: (font, s) => {
		let allPaths = [];
		let offset = 0;

		for (let i = 0; i < s.length; i++) {
			let cidx = s.charCodeAt(i) - 33;
			if (cidx >= 0) {
				let charPaths = utl.pathCommands(font.chars[cidx].d, offset);
				allPaths.push(...charPaths);
				offset += parseInt(font.chars[cidx].o) * 2;
			} else {
				offset += 10;
			}
		}

		return allPaths;
	},

	// Main drawing function
	vecText: (text, project) => {
		const ast = {
			"futural": {
				"name": "Sans 1-stroke",
				"chars": [
					{
						"d": "M5,1 L5,15 M5,20 L4,21 5,22 6,21 5,20",
						"o": 5
					},
					{
						"d": "M4,1 L4,8 M12,1 L12,8",
						"o": 8
					},
					{
						"d": "M11,-3 L4,29 M17,-3 L10,29 M4,10 L18,10 M3,16 L17,16",
						"o": 11
					},
					{
						"d": "M8,-3 L8,26 M12,-3 L12,26 M17,4 L15,2 12,1 8,1 5,2 3,4 3,6 4,8 5,9 7,10 13,12 15,13 16,14 17,16 17,19 15,21 12,22 8,22 5,21 3,19",
						"o": 10
					},
					{
						"d": "M21,1 L3,22 M8,1 L10,3 10,5 9,7 7,8 5,8 3,6 3,4 4,2 6,1 8,1 10,2 13,3 16,3 19,2 21,1 M17,15 L15,16 14,18 14,20 16,22 18,22 20,21 21,19 21,17 19,15 17,15",
						"o": 12
					},
					{
						"d": "M23,10 L23,9 22,8 21,8 20,9 19,11 17,16 15,19 13,21 11,22 7,22 5,21 4,20 3,18 3,16 4,14 5,13 12,9 13,8 14,6 14,4 13,2 11,1 9,2 8,4 8,6 9,9 11,12 16,19 18,21 20,22 22,22 23,21 23,20",
						"o": 13
					},
					{
						"d": "M5,3 L4,2 5,1 6,2 6,4 5,6 4,7",
						"o": 5
					},
					{
						"d": "M11,-3 L9,-1 7,2 5,6 4,11 4,15 5,20 7,24 9,27 11,29",
						"o": 7
					},
					{
						"d": "M3,-3 L5,-1 7,2 9,6 10,11 10,15 9,20 7,24 5,27 3,29",
						"o": 7
					},
					{
						"d": "M8,7 L8,19 M3,10 L13,16 M13,10 L3,16",
						"o": 8
					},
					{
						"d": "M13,4 L13,22 M4,13 L22,13",
						"o": 13
					},
					{
						"d": "M5,18 L4,19 3,18 4,17 5,18 5,20 3,22",
						"o": 4
					},
					{
						"d": "M4,13 L22,13",
						"o": 13
					},
					{
						"d": "M4,17 L3,18 4,19 5,18 4,17",
						"o": 4
					},
					{
						"d": "M20,-3 L2,29",
						"o": 11
					},
					{
						"d": "M9,1 L6,2 4,5 3,10 3,13 4,18 6,21 9,22 11,22 14,21 16,18 17,13 17,10 16,5 14,2 11,1 9,1",
						"o": 10
					},
					{
						"d": "M6,5 L8,4 11,1 11,22",
						"o": 10
					},
					{
						"d": "M4,6 L4,5 5,3 6,2 8,1 12,1 14,2 15,3 16,5 16,7 15,9 13,12 3,22 17,22",
						"o": 10
					},
					{
						"d": "M5,1 L16,1 10,9 13,9 15,10 16,11 17,14 17,16 16,19 14,21 11,22 8,22 5,21 4,20 3,18",
						"o": 10
					},
					{
						"d": "M13,1 L3,15 18,15 M13,1 L13,22",
						"o": 10
					},
					{
						"d": "M15,1 L5,1 4,10 5,9 8,8 11,8 14,9 16,11 17,14 17,16 16,19 14,21 11,22 8,22 5,21 4,20 3,18",
						"o": 10
					},
					{
						"d": "M16,4 L15,2 12,1 10,1 7,2 5,5 4,10 4,15 5,19 7,21 10,22 11,22 14,21 16,19 17,16 17,15 16,12 14,10 11,9 10,9 7,10 5,12 4,15",
						"o": 10
					},
					{
						"d": "M17,1 L7,22 M3,1 L17,1",
						"o": 10
					},
					{
						"d": "M8,1 L5,2 4,4 4,6 5,8 7,9 11,10 14,11 16,13 17,15 17,18 16,20 15,21 12,22 8,22 5,21 4,20 3,18 3,15 4,13 6,11 9,10 13,9 15,8 16,6 16,4 15,2 12,1 8,1",
						"o": 10
					},
					{
						"d": "M16,8 L15,11 13,13 10,14 9,14 6,13 4,11 3,8 3,7 4,4 6,2 9,1 10,1 13,2 15,4 16,8 16,13 15,18 13,21 10,22 8,22 5,21 4,19",
						"o": 10
					},
					{
						"d": "M4,10 L3,11 4,12 5,11 4,10 M4,17 L3,18 4,19 5,18 4,17",
						"o": 4
					},
					{
						"d": "M4,10 L3,11 4,12 5,11 4,10 M5,18 L4,19 3,18 4,17 5,18 5,20 3,22",
						"o": 4
					},
					{
						"d": "M20,4 L4,13 20,22",
						"o": 12
					},
					{
						"d": "M4,10 L22,10 M4,16 L22,16",
						"o": 13
					},
					{
						"d": "M4,4 L20,13 4,22",
						"o": 12
					},
					{
						"d": "M3,6 L3,5 4,3 5,2 7,1 11,1 13,2 14,3 15,5 15,7 14,9 13,10 9,12 9,15 M9,20 L8,21 9,22 10,21 9,20",
						"o": 9
					},
					{
						"d": "M18,9 L17,7 15,6 12,6 10,7 9,8 8,11 8,14 9,16 11,17 14,17 16,16 17,14 M12,6 L10,8 9,11 9,14 10,16 11,17 M18,6 L17,14 17,16 19,17 21,17 23,15 24,12 24,10 23,7 22,5 20,3 18,2 15,1 12,1 9,2 7,3 5,5 4,7 3,10 3,13 4,16 5,18 7,20 9,21 12,22 15,22 18,21 20,20 21,19 M19,6 L18,14 18,16 19,17",
						"o": 14
					},
					{
						"d": "M9,1 L1,22 M9,1 L17,22 M4,15 L14,15",
						"o": 9
					},
					{
						"d": "M4,1 L4,22 M4,1 L13,1 16,2 17,3 18,5 18,7 17,9 16,10 13,11 M4,11 L13,11 16,12 17,13 18,15 18,18 17,20 16,21 13,22 4,22",
						"o": 10
					},
					{
						"d": "M18,6 L17,4 15,2 13,1 9,1 7,2 5,4 4,6 3,9 3,14 4,17 5,19 7,21 9,22 13,22 15,21 17,19 18,17",
						"o": 11
					},
					{
						"d": "M4,1 L4,22 M4,1 L11,1 14,2 16,4 17,6 18,9 18,14 17,17 16,19 14,21 11,22 4,22",
						"o": 10
					},
					{
						"d": "M4,1 L4,22 M4,1 L17,1 M4,11 L12,11 M4,22 L17,22",
						"o": 9
					},
					{
						"d": "M4,1 L4,22 M4,1 L17,1 M4,11 L12,11",
						"o": 8
					},
					{
						"d": "M18,6 L17,4 15,2 13,1 9,1 7,2 5,4 4,6 3,9 3,14 4,17 5,19 7,21 9,22 13,22 15,21 17,19 18,17 18,14 M13,14 L18,14",
						"o": 11
					},
					{
						"d": "M4,1 L4,22 M18,1 L18,22 M4,11 L18,11",
						"o": 11
					},
					{
						"d": "M4,1 L4,22",
						"o": 4
					},
					{
						"d": "M12,1 L12,17 11,20 10,21 8,22 6,22 4,21 3,20 2,17 2,15",
						"o": 8
					},
					{
						"d": "M4,1 L4,22 M18,1 L4,15 M9,10 L18,22",
						"o": 10
					},
					{
						"d": "M4,1 L4,22 M4,22 L16,22",
						"o": 7
					},
					{
						"d": "M4,1 L4,22 M4,1 L12,22 M20,1 L12,22 M20,1 L20,22",
						"o": 12
					},
					{
						"d": "M4,1 L4,22 M4,1 L18,22 M18,1 L18,22",
						"o": 11
					},
					{
						"d": "M9,1 L7,2 5,4 4,6 3,9 3,14 4,17 5,19 7,21 9,22 13,22 15,21 17,19 18,17 19,14 19,9 18,6 17,4 15,2 13,1 9,1",
						"o": 11
					},
					{
						"d": "M4,1 L4,22 M4,1 L13,1 16,2 17,3 18,5 18,8 17,10 16,11 13,12 4,12",
						"o": 10
					},
					{
						"d": "M9,1 L7,2 5,4 4,6 3,9 3,14 4,17 5,19 7,21 9,22 13,22 15,21 17,19 18,17 19,14 19,9 18,6 17,4 15,2 13,1 9,1 M12,18 L18,24",
						"o": 11
					},
					{
						"d": "M4,1 L4,22 M4,1 L13,1 16,2 17,3 18,5 18,7 17,9 16,10 13,11 4,11 M11,11 L18,22",
						"o": 10
					},
					{
						"d": "M17,4 L15,2 12,1 8,1 5,2 3,4 3,6 4,8 5,9 7,10 13,12 15,13 16,14 17,16 17,19 15,21 12,22 8,22 5,21 3,19",
						"o": 10
					},
					{
						"d": "M8,1 L8,22 M1,1 L15,1",
						"o": 8
					},
					{
						"d": "M4,1 L4,16 5,19 7,21 10,22 12,22 15,21 17,19 18,16 18,1",
						"o": 11
					},
					{
						"d": "M1,1 L9,22 M17,1 L9,22",
						"o": 9
					},
					{
						"d": "M2,1 L7,22 M12,1 L7,22 M12,1 L17,22 M22,1 L17,22",
						"o": 12
					},
					{
						"d": "M3,1 L17,22 M17,1 L3,22",
						"o": 10
					},
					{
						"d": "M1,1 L9,11 9,22 M17,1 L9,11",
						"o": 9
					},
					{
						"d": "M17,1 L3,22 M3,1 L17,1 M3,22 L17,22",
						"o": 10
					},
					{
						"d": "M4,-3 L4,29 M5,-3 L5,29 M4,-3 L11,-3 M4,29 L11,29",
						"o": 7
					},
					{
						"d": "M0,1 L14,25",
						"o": 7
					},
					{
						"d": "M9,-3 L9,29 M10,-3 L10,29 M3,-3 L10,-3 M3,29 L10,29",
						"o": 7
					},
					{
						"d": "M8,-1 L0,13 M8,-1 L16,13",
						"o": 8
					},
					{
						"d": "M0,29 L18,29",
						"o": 9
					},
					{
						"d": "M5,6 L3,8 3,10 4,11 5,10 4,9 3,10",
						"o": 4
					},
					{
						"d": "M15,8 L15,22 M15,11 L13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 10
					},
					{
						"d": "M4,1 L4,22 M4,11 L6,9 8,8 11,8 13,9 15,11 16,14 16,16 15,19 13,21 11,22 8,22 6,21 4,19",
						"o": 9
					},
					{
						"d": "M15,11 L13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 9
					},
					{
						"d": "M15,1 L15,22 M15,11 L13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 10
					},
					{
						"d": "M3,14 L15,14 15,12 14,10 13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 9
					},
					{
						"d": "M10,1 L8,1 6,2 5,5 5,22 M2,8 L9,8",
						"o": 7
					},
					{
						"d": "M15,8 L15,24 14,27 13,28 11,29 8,29 6,28 M15,11 L13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 10
					},
					{
						"d": "M4,1 L4,22 M4,12 L7,9 9,8 12,8 14,9 15,12 15,22",
						"o": 10
					},
					{
						"d": "M3,1 L4,2 5,1 4,0 3,1 M4,8 L4,22",
						"o": 4
					},
					{
						"d": "M5,1 L6,2 7,1 6,0 5,1 M6,8 L6,25 5,28 3,29 1,29",
						"o": 5
					},
					{
						"d": "M4,1 L4,22 M14,8 L4,18 M8,14 L15,22",
						"o": 8
					},
					{
						"d": "M4,1 L4,22",
						"o": 4
					},
					{
						"d": "M4,8 L4,22 M4,12 L7,9 9,8 12,8 14,9 15,12 15,22 M15,12 L18,9 20,8 23,8 25,9 26,12 26,22",
						"o": 15
					},
					{
						"d": "M4,8 L4,22 M4,12 L7,9 9,8 12,8 14,9 15,12 15,22",
						"o": 10
					},
					{
						"d": "M8,8 L6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19 16,16 16,14 15,11 13,9 11,8 8,8",
						"o": 10
					},
					{
						"d": "M4,8 L4,29 M4,11 L6,9 8,8 11,8 13,9 15,11 16,14 16,16 15,19 13,21 11,22 8,22 6,21 4,19",
						"o": 9
					},
					{
						"d": "M15,8 L15,29 M15,11 L13,9 11,8 8,8 6,9 4,11 3,14 3,16 4,19 6,21 8,22 11,22 13,21 15,19",
						"o": 10
					},
					{
						"d": "M4,8 L4,22 M4,14 L5,11 7,9 9,8 12,8",
						"o": 6
					},
					{
						"d": "M14,11 L13,9 10,8 7,8 4,9 3,11 4,13 6,14 11,15 13,16 14,18 14,19 13,21 10,22 7,22 4,21 3,19",
						"o": 9
					},
					{
						"d": "M5,1 L5,18 6,21 8,22 10,22 M2,8 L9,8",
						"o": 7
					},
					{
						"d": "M4,8 L4,18 5,21 7,22 10,22 12,21 15,18 M15,8 L15,22",
						"o": 10
					},
					{
						"d": "M2,8 L8,22 M14,8 L8,22",
						"o": 8
					},
					{
						"d": "M3,8 L7,22 M11,8 L7,22 M11,8 L15,22 M19,8 L15,22",
						"o": 11
					},
					{
						"d": "M3,8 L14,22 M14,8 L3,22",
						"o": 9
					},
					{
						"d": "M2,8 L8,22 M14,8 L8,22 6,26 4,28 2,29 1,29",
						"o": 8
					},
					{
						"d": "M14,8 L3,22 M3,8 L14,8 M3,22 L14,22",
						"o": 9
					},
					{
						"d": "M9,-3 L7,-2 6,-1 5,1 5,3 6,5 7,6 8,8 8,10 6,12 M7,-2 L6,0 6,2 7,4 8,5 9,7 9,9 8,11 4,13 8,15 9,17 9,19 8,21 7,22 6,24 6,26 7,28 M6,14 L8,16 8,18 7,20 6,21 5,23 5,25 6,27 7,28 9,29",
						"o": 7
					},
					{
						"d": "M4,-3 L4,29",
						"o": 4
					},
					{
						"d": "M5,-3 L7,-2 8,-1 9,1 9,3 8,5 7,6 6,8 6,10 8,12 M7,-2 L8,0 8,2 7,4 6,5 5,7 5,9 6,11 10,13 6,15 5,17 5,19 6,21 7,22 8,24 8,26 7,28 M8,14 L6,16 6,18 7,20 8,21 9,23 9,25 8,27 7,28 5,29",
						"o": 7
					},
					{
						"d": "M3,16 L3,14 4,11 6,10 8,10 10,11 14,14 16,15 18,15 20,14 21,12 M3,14 L4,12 6,11 8,11 10,12 14,15 16,16 18,16 20,15 21,12 21,10",
						"o": 12
					},
					{
						"d": "M0,1 L0,22 1,22 1,1 2,1 2,22 3,22 3,1 4,1 4,22 5,22 5,1 6,1 6,22 7,22 7,1 8,1 8,22 9,22 9,1 10,1 10,22 11,22 11,1 12,1 12,22 13,22 13,1 14,1 14,22 15,22 15,1 16,1 16,22",
						"o": 8
					}
				]
			}
		}
		
		let hershey = project.importJSON(ast)

		textG = new paper.Group()
		let mytext = utl.pathCommandsForText(hershey.futural, text);
		mytext.forEach(p => p.parent = textG)
		return textG		
	},
                                                            




// WARP                                                        
// I8,        8        ,8I                                     
// `8b       d8b       d8'                                     
//  "8,     ,8"8,     ,8"                                      
//   Y8     8P Y8     8P  ,adPPYYba,  8b,dPPYba,  8b,dPPYba,   
//   `8b   d8' `8b   d8'  ""     `Y8  88P'   "Y8  88P'    "8a  
//    `8a a8'   `8a a8'   ,adPPPPP88  88          88       d8  
//     `8a8'     `8a8'    88,    ,88  88          88b,   ,a8"  
//      `8'       `8'     `"8bbdP"Y8  88          88`YbbdP"'   
//                                                88           
//                                                88           

	warp: (src, tgt, resolution, delSrc = false, easingF,easeV) => {
		pa = (segs) => new paper.Path({ segments: segs })

		let sides = utl.getAltSides(tgt)
		let top = pa(sides.top)
		let btm = pa(sides.btm)
		let left = pa(sides.left)
		let right = pa(sides.right)

		utl.resample(top, 100)
		utl.resample(btm, 100)
		btm.reverse()
		left.reverse()

		bo = src.bounds

		processChildren(src)

		function processChildren(item) {
			if (item.hasChildren()) {
				item.children.forEach(child => processChildren(child))
			} else {
				processOne(item)
			}
		}

		function processOne(item) {
			let resCount = Math.floor(item.length / resolution)

			utl.resample(item, resCount)

			item.segments.forEach(s => {
				myX = (s.point.x - bo.left) / bo.width
				myY = (s.point.y - bo.top) / bo.height
				pp = utl.getP(top, btm, left, right, myX, myY, tgt, easingF,easeV)
				s.point.x = pp.x
				s.point.y = pp.y
			})
		}

		top.remove()
		btm.remove()
		left.remove()
		right.remove()
		if (delSrc) src.remove()
		return src
	},


	getAltSides: (tgt) => {
		tb = tgt.bounds
	
		ltP = tgt.getNearestLocation(tgt.bounds.topLeft)
		rtP = tgt.getNearestLocation(tgt.bounds.topRight)
	 
		lt = tgt.divideAt(ltP)
		if (lt==null) lt = tgt.getLocationOf(ltP.point).segment
		rt = tgt.divideAt(rtP)
		if (rt==null) rt = tgt.getLocationOf(rtP.point).segment
		
		let top = utl.segsBetween(tgt, lt, rt)
	
		blP = tgt.getNearestLocation(tgt.bounds.bottomLeft)
		brP = tgt.getNearestLocation(tgt.bounds.bottomRight)
		
		bl = tgt.divideAt(blP)
		if (bl==null) bl = tgt.getLocationOf(blP.point).segment
		br = tgt.divideAt(brP)
		if (br==null) br = tgt.getLocationOf(brP.point).segment
	
		let btm = utl.segsBetween(tgt, br, bl)
		
		let left = utl.segsBetween(tgt, bl, lt)
		let right = utl.segsBetween(tgt, rt, br )
	
		utl.fixSide(top, right, true)
		//fixSide(btm, left, false)
				
		return {top:top, btm:btm, left:left, right:right}
		
	},

	fixSide: (segs1, segs2, alt, thresh=20) => {
		
		for (var i = segs1.length - 1; i > 0; i--) {
			let seg = segs1[i];

			// Calculate the direction vector from this segment to the next
			let cur = seg.point
			let prev = segs1[i-1]
			
			let prevP = prev.point
			let dir = new paper.Point(cur.x - prevP.x , cur.y - prevP.y);

			// Calculate the angle between the direction vector and the vertical axis
			let angle = alt ? Math.abs(dir.angle-90) :  Math.abs(Math.abs(dir.angle-90)-180)
			

			// Check if the direction is nearly vertical and upwards
			if (angle <= thresh) { // && dir.y < 0) {
				segs2.unshift(seg)
				segs2.unshift(prev)
				
				segs1.pop()
			}
			else { break }
		}
	}, 

	segsBetween: (path, startSegment, endSegment) => {
		// Ensure the segments are part of the path
		// console.log(path, startSegment, endSegment)
		if (!path.segments.includes(startSegment) || !path.segments.includes(endSegment)) {
			console.error('Specified segments are not part of the path.');
			return [];
		}

		// Get the indices of the start and end segments
		let startIndex = startSegment.index;
		let endIndex = endSegment.index;

		// Handle wrapping around the start point
		if (startIndex > endIndex) {
			// Get segments from startIndex to the end of the path, and from the start of the path to endIndex
			let segmentsToEnd = path.segments.slice(startIndex);
			let segmentsFromStart = path.segments.slice(0, endIndex + 1);
			return segmentsToEnd.concat(segmentsFromStart);
		} else {
			// If no wrapping is needed, simply slice the segments
			return path.segments.slice(startIndex, endIndex);
		}
	}, 

	getP: (t,b,l,r,x,y,path,easingF,easeV) => {

		let res
		y = y == 0 ? y = 0.001 : y
		y = y == 1 ? y = 0.999 : y
		
		let inpol = new paper.Path()
		inpol.interpolate(t,b,y) 
					
		if (!path.contains(inpol.firstSegment.point) || !path.contains(inpol.lastSegment.point)) {
			xLi = inpol.intersect(path, {trace:false})
			if (xLi instanceof paper.CompoundPath) xLi = inpol.clone()
			inpol.remove()
		}
		else {
			xLi = inpol    
		}
		
		if (!xLi.length) console.log(t, b)
		
		if (easingF) {			
			y = easingF(y, easeV);
			x = easingF(x, easeV);
			
		}
		
		

		p1 = l.getPointAt(l.length*y)
		p2 = r.getPointAt(r.length*y)

		//match(xLi, p1, p2)
		utl.fixEnds(xLi, p1, p2)
		
		res = xLi.getPointAt(xLi.length * x)
		if (res == null) {
			console.log(x,y)
			console.log(p1,p2)
			console.log(xLi)
			console.log(res)
		}
		
		xLi.remove()
		
		return res
	},

	fixEnds: (path, p1, p2) => {
		
		smooth = () => {
			smoothV = .1
			
			let smoothStart = path.divideAt(smoothV*path.length)
			if (smoothStart) path.removeSegments(0,smoothStart.index)
			
			let smoothEnd = path.divideAt((1-smoothV)*path.length)
			if (smoothEnd) path.removeSegments(smoothEnd.index)
		}
		
		smooth()
		
		let fpo = path.firstSegment
		let lpo = path.lastSegment
		
		path.insert(0, new paper.Point(p1))
		path.add(new paper.Point(p2))
		
		let outh = lpo.previous.location.tangent
		outh.length = lpo.curve.length / 3
		lpo.handleOut = outh
		
		let inh = fpo.next.location.tangent
		inh.length = fpo.previous.curve.length / 3
		inh.angle += 180
		fpo.handleIn = inh
	},


// Drag'n drop	                                                                                                                         
// 88888888ba,                                         d8'             88888888ba,                                          
// 88      `"8b                                       d8'              88      `"8b                                         
// 88        `8b                                     ""                88        `8b                                        
// 88         88  8b,dPPYba,  ,adPPYYba,   ,adPPYb,d8  8b,dPPYba,      88         88  8b,dPPYba,   ,adPPYba,   8b,dPPYba,   
// 88         88  88P'   "Y8  ""     `Y8  a8"    `Y88  88P'   `"8a     88         88  88P'   "Y8  a8"     "8a  88P'    "8a  
// 88         8P  88          ,adPPPPP88  8b       88  88       88     88         8P  88          8b       d8  88       d8  
// 88      .a8P   88          88,    ,88  "8a,   ,d88  88       88     88      .a8P   88          "8a,   ,a8"  88b,   ,a8"  
// 88888888Y"'    88          `"8bbdP"Y8   `"YbbdP"Y8  88       88     88888888Y"'    88           `"YbbdP"'   88`YbbdP"'   
//                                         aa,    ,88                                                          88           
//                                          "Y8bbdP"                                                           88           

// Image drop Put these to js
// const callbackF = (raster) => {
// 	raster.size = new Size(gDim.x+1, gDim.y+1)
// 	update(raster)

// };

// document.addEventListener('drop', utl.onDocumentDrop(callbackF), false);
// document.addEventListener('dragover', utl.onDocumentDrag, false)
// document.addEventListener('dragleave', utl.onDocumentDrag, false)



	// DRAG'N DROP custom images =========================================
	onDocumentDrag: (event) => {
		const show = (elem) =>  {elem.style.display = 'block'}

		show(document.getElementById('imageTarget'))
		event.preventDefault()
	},

	onDocumentDrop: (callback) => (event) => {
		const hide = (elem) => { elem.style.display = 'none' }
	
		event.preventDefault()
	
		if (event.target.id == 'imageTarget') {
			var file = event.dataTransfer.files[0];
			var reader = new FileReader();
	
			reader.onload = function (event) {
				var image = document.createElement('img');
	
				image.onload = function () {
					let raster = new paper.Raster(image);
					// raster.visible = false;
					
					callback(raster);
				};
	
				image.src = event.target.result;
			};
			
			reader.readAsDataURL(file);
			hide(document.getElementById('imageTarget'));
		}
	},


// LAYOUT
// 88                                                                       
// 88                                                                ,d     
// 88                                                                88     
// 88           ,adPPYYba,  8b       d8   ,adPPYba,   88       88  MM88MMM  
// 88           ""     `Y8  `8b     d8'  a8"     "8a  88       88    88     
// 88           ,adPPPPP88   `8b   d8'   8b       d8  88       88    88     
// 88           88,    ,88    `8b,d8'    "8a,   ,a8"  "8a,   ,a88    88,    
// 88888888888  `"8bbdP"Y8      Y88'      `"YbbdP"'    `"YbbdP'Y8    "Y888  
//                              d8'                                         
//                             d8'                                          

	// Layout items on a page, each item: [item, <scaling factor>, <position array [x,y], 1 = touch right/bottom margin, -1 = touch left/top margin>]
	layout: (items, paperWidth, paperHeight, margin, view, showGuides=false, bgCol) => {
		let isLandscape = paperWidth > paperHeight;
		let vh, vw, outW, outH, mrg;

		if (isLandscape) {
			// Landscape Orientation
			vw = view.size.width;
			outH = vw * (paperHeight / paperWidth);
			mrg = vw * (margin*2 / paperWidth);
		} else {
			// Portrait Orientation
			vh = view.size.height;
			outW = vh * (paperWidth / paperHeight);
			mrg = vh * (margin*2 / paperHeight);
		}

		// Rectangles for outer bounds of paper and margins
		let r = isLandscape ? new paper.Rectangle(0, 0, vw, outH) : new paper.Rectangle(0, 0, outW, vh);
		let rIn = isLandscape ? new paper.Rectangle(0, 0, vw - mrg, outH - mrg) : new paper.Rectangle(0, 0, outW - mrg, vh - mrg);
		rIn.center = r.center;

		let r2 = new paper.Path.Rectangle(r);
		r2.strokeWidth = 1;
		r2.strokeColor = '#001';
		r2.fillColor = bgCol ? bgCol : null

		if (showGuides) {
			let r3 = new paper.Path.Rectangle(rIn);
			r3.strokeColor = 'blue';
			r3.opacity = .2;
		}
		res = new paper.Group([r2])

		items.forEach(itO => {
			let it = itO[0];
			it.parent = res
			let ib = it.bounds;

			if (ib.width > rIn.width || ib.height > rIn.height) {
				it.fitBounds(rIn);
			}

			it.position = rIn.center;

			if (itO[1]) it.scale(itO[1], itO[1]);

			ib = it.bounds; // update to reflect transformations

			if (itO[2]) {
				let xMax = rIn.right - ib.right;
				let yMax = rIn.bottom - ib.bottom;
				it.translate(itO[2][0] * xMax, itO[2][1] * yMax);
			}
			it.bringToFront();
		})

		return res
	},


	layoutExport: (width, height, project)  => {
        let mm = 2.83465
		let origViewSize = project.view.viewSize.clone()
		let origActiveLayerBounds = project.activeLayer.bounds.clone()

        project.view.viewSize = new paper.Size(width*mm, height*mm);
        project.activeLayer.fitBounds(project.view.bounds)

        var svg = project.exportSVG({asString: true})
        var blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"})
        saveAs(blob, 'image.svg')

		// return size properties after export
		project.view.viewSize = origViewSize
		project.activeLayer.fitBounds(origActiveLayerBounds) 

	},

// DISTORT
// 88888888ba,    88                                                       
// 88      `"8b   ""               ,d                               ,d     
// 88        `8b                   88                               88     
// 88         88  88  ,adPPYba,  MM88MMM  ,adPPYba,   8b,dPPYba,  MM88MMM  
// 88         88  88  I8[    ""    88    a8"     "8a  88P'   "Y8    88     
// 88         8P  88   `"Y8ba,     88    8b       d8  88            88     
// 88      .a8P   88  aa    ]8I    88,   "8a,   ,a8"  88            88,    
// 88888888Y"'    88  `"YbbdP"'    "Y888  `"YbbdP"'   88            "Y888  
                                                                        
       
    // Shift slices of image to opposite directions -----------------------------------------
    shift: (item, slizeSize, amount, vertical = false, ungroup = false) => {
		// console.log('distorting: shift')
		let ib = item.bounds

		let max = vertical ? ib.height : ib.width

		let num = utl.F(max / slizeSize)

		let step = max / num

		let resGroup = new paper.Group()

		let clips = []

		for (let i=0;i<num;i++) {
						
			let clipGroup = new paper.Group({parent: resGroup, clipped: true})
			clips.push(clipGroup)

			tl = ib.topLeft.clone()
			tl[vertical ? 'x' : 'y'] += step * i

			clipsize = vertical ? [step, ib.height] : [ib.width, step] 

			let mask = new paper.Path.Rectangle({point: tl, size: clipsize, parent: clipGroup })

			let ic = item.clone()
			ic.insertBelow(mask)

			mask.clipMask = true

			dir = i%2 == 0 ? 1 : -1
			clipGroup.position[vertical ? 'y' : 'x'] += amount * dir;

		}

		// clips.forEach(clip => vdist.ungroup(clip))
		if (ungroup) utl.ungroup(resGroup)

		for (let i=resGroup.children.length-1;i>-1;i--){
			el = resGroup.children[i] 
			if (el.length == 0) el.remove()
		}

		item.remove()

		return resGroup

	},

	triangulate: (item, count, power, pivotType = 1, ungroup = false, poisson = false) => {
		console.log('Distortion: triangulate')
		let ib = item.bounds
		let resGroup = new paper.Group()

		let randomPoints = [ib.topCenter.x, ib.topCenter.y, ib.leftCenter.x, ib.leftCenter.y, ib.bottomCenter.x, ib.bottomCenter.y, ib.rightCenter.x, ib.rightCenter.y]
		let points = []
		points.push([ib.topCenter.x, ib.topCenter.y], [ib.leftCenter.x, ib.leftCenter.y], [ib.bottomCenter.x, ib.bottomCenter.y], [ib.rightCenter.x, ib.rightCenter.y])

		if (!poisson) {
			for (let i=0;i<count;i++) {
				x = utl.R(ib.width) + ib.left
				y = utl.R(ib.height) + ib.top
				randomPoints.push( x, y ) // x coordinate
				points.push([x,y])
			}
		}
		else {
			const pds = new PoissonDiskSampling({
				shape: [ib.width, ib.height],
				minDistance: ib.width / (count * 2),
				maxDistance: ib.width / count,
				tries:10,
				distanceFunction: function (p) {
					return 1 - utl.getValue(p[0], p[1], ib.width, ib.height); // value between 0 and 1
				}
			});
			
			let poisPoints = pds.fill()

			poisPoints.forEach(p => {p[0] += ib.left; p[1] += ib.top})

			// let C = (x,y,r) => new paper.Path.Circle({center: new paper.Point(x,y), radius: r, fillColor: 'red' })

			// poisPoints.forEach(p => {
			// 	C(p[0], p[1], 2)
			// })

			poisPoints.forEach(po => {
				randomPoints.push(po[0], po[1]);
				points.push(po);
			})
		}
		
		const delaunay = new Delaunator(randomPoints);
		let tri = delaunay.triangles
		let co = delaunay.coords

		forEachTriangle(points, delaunay, drawTri)
		if (ungroup) {
			console.log('Distortion: ungrouping & flattening')
			utl.ungroup(resGroup)
		}

		item.remove()

		return resGroup
		
		// Helpers

		function drawTri(inp, points) {

			let clipGroup = new paper.Group({parent: resGroup, clipped: true})

			let mask = new paper.Path({
				segments: points,
				strokeColor: 'red',
				strokeWidth: 1,
				closed: true,
				parent: clipGroup
			})

			let ic = item.clone()
			ic.insertBelow(mask)
			ic.pivot = pivotType == 1 ? mask.bounds.center : ic.center

			ic.rotate(Math.random() * power * 180)

			mask.clipMask = true
		}

		function edgesOfTriangle(t) { return [3 * t, 3 * t + 1, 3 * t + 2]; }

		function pointsOfTriangle(delaunay, t) {
			return edgesOfTriangle(t)
				.map(e => delaunay.triangles[e]);
		}

		function forEachTriangle(points, delaunay, callback) {
			for (let t = 0; t < delaunay.triangles.length / 3; t++) {
				callback(t, pointsOfTriangle(delaunay, t).map(p => points[p]));
			}
		}

	},          
	
	getValue: (x, y, width, height) => {
		// Calculate the center of the area
		const centerX = width / 2;
		const centerY = height / 2;
	
		// Calculate the maximum distance from the center
		const maxDistance = Math.sqrt((centerX ** 2) + (centerY ** 2));
	
		// Calculate the distance from the center to the given coordinate
		const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
	
		// Calculate the value based on the distance
		const value = 1 - distance / maxDistance;
	
		// Ensure the value is within the [0, 1] range
		return Math.max(0, Math.min(1, value));
	},

	// Makes path edge jagged. Iterate either all curves (nicer result if sharp corners) or process the whole path as one
	jag: (path, wi, he, perCurve=true) => {
		let iterate = (item) => {
			if (item instanceof paper.Path && item.segments) {
				let newSegs = [];
				
				if (perCurve) {
					utl.each(item, cu => {					
						let seg2off = cu.isLast() ? item.length : cu.segment2.location.offset;
						let cule = seg2off - cu.segment1.location.offset
						genJags(cule, cu)
					});
				}
				else {
					genJags(item.length, item)
				}

				function genJags(length, myItem) {
					let stps = Math.floor(length / wi);
					if (stps % 2 == 0) stps++;
					let stp = length / stps;
		
					for (let i = 0; i <= stps; i++) {
						let lo = myItem.getLocationAt(Math.min(stp * i, length-.0001));
						if (i == stps) {newSegs.push(lo.point)}
						else {
							if (i % 2 == 0 && i != 0) newSegs.push(lo.point.add(lo.normal.multiply(he)));
							newSegs.push(lo.point);	
							if (i % 2 != 0) newSegs.push(lo.point.add(lo.normal.multiply(he)));
						}
					}
				}
		
				item.segments = newSegs;
			}
	
			if (item.hasChildren()) {
				utl.each(item.children, child => iterate(child));
			}
		};
		iterate(path);
		return path;
	},

	wave: (path, wi, he, perCurve=false) => {
	    let iterate = (item) => {
			if (item instanceof paper.Path && item.segments) {
				let newSegs = [];
				
				if (perCurve) {
				    let curves = item.curves
					curves.forEach(cu => {					
						let seg2off = cu.isLast() ? item.length : cu.segment2.location.offset;
						let cule = seg2off - cu.segment1.location.offset
						genWaves(cule, cu)
					});
				}
				else genWaves(item.length, item)

				function genWaves(length, myItem) {
					let stps = Math.floor(length/wi);
					if (stps%2!=0) stps++;
					let stp = length / stps;
		
					for (let i=0; i<=stps; i++) {
						let lo = myItem.getLocationAt(Math.min(stp * i, length));
						let v = lo.normal.multiply(he)
					    let newp = i%2==0 ? lo.point.add(v) : lo.point.add(v.multiply(-1))
					    let t = lo.tangent
						if (!(path.closed && i==stps)) newSegs.push( new paper.Segment({point:newp, handleIn:t.multiply(-wi/2), handleOut:t.multiply(wi/2) }) )
					}
				}
				item.segments = newSegs;
			}
	
			if (item.hasChildren()) {
				item.children.forEach(child => iterate(child));
			}
		};
		iterate(path);
		return path;
	},

	// Wraps around polar coordinates
	polar:(item, cnt, rev) => {
		const mypol = (po,cnt,wi) => cnt.add(new paper.Point({angle:(po.x-cnt.x)/wi*360*rev, length:cnt.y-po.y}))
		const wi = item.bounds.width
		const processPath = (item) => item.segments.map(se => se.point=mypol(se.point,cnt,wi))
		const process = (item, action) => {
			if (item.children) {
				item.children.forEach(child => process(child, action))
			}
			if (item instanceof paper.Path) action(item)
		}
		process(item, processPath)		
	},

	// deflect path with another path. Reasonable values for amount are 0-10
	deflect: (path, defo, amount, res) => {
		let iterate = (item) => {
			if (item instanceof paper.Path && item.segments) {
				defC = defo.bounds.center
				utl.resample(item, res)
				
				let segsWithinDef = []
				item.segments.forEach(s => { if (defo.contains(s.point)) segsWithinDef.push(s) })
				
				segsWithinDef.forEach(s => {
					if (s.point.x === defC.x) defC.x -= 2
				    if (s.point.y === defC.y) defC.y -= 1

					let v = s.point.subtract(defC)
					
					let li = new paper.Path.Line({
						from: defC,
						to: defC.add(v.multiply(100000))
					})
					
					let defI = li.getIntersections(defo)[0]
					li.remove()
					let defV = defI.point.subtract(s.point)
					defV.length -= defV.length / amount
					
					s.point = s.point.add(defV)
				})
			}

			if (item.hasChildren()) {
				item.children.forEach(child => iterate(child));
			}
		};		

		iterate(path);
		return path;
	},

	deflect2:(path, defo, amount, res) => {
		let iterate = (item) => {
			//if (item instanceof paper.Path && item.segments) {
			//	if (item.bounds.intersects(defo.bounds)) {
					
					defC = defo.bounds.center.clone()
					
					//if (defC.x === item.bounds.center.x || defC.y === item.bounds.center.y) defC = defC.add(new paper.Point(10,10))
					
					let segsWithinDef = []
					
					for (let i=0;i<res;i++) {
					   let off  = defo.length/res*i
					   let offL = defo.getLocationAt(off)
					   let li = new paper.Path.Line({
							from: defC,
							to: offL.point,
						}) 
						
						item.children.forEach(ch => {
							ch.divideAt(offL)
							if (ch.bounds.intersects(defo.bounds)) {
								if (onPath(ch, defC,200)) console.log('piste on käyrällä')
								int = ch.getIntersections(li)
								if (int.length>0) segsWithinDef.push([ch.divideAt(int[0]), offL.point])
							}
						})
						
						li.remove()
						defC = defo.bounds.center.clone()
					}
					
					segsWithinDef.forEach(s => {
						let defV = s[1].subtract(s[0].point)
						defV.length -= defV.length / amount
						s[0].point = s[0].point.add(defV)
					})
				//}
			//}

			function onPath(path, point, tolerance) {
				let location = path.getLocationAt(0); // Start from the beginning of the path
				let closestPoint = location.point;
				let closestDistance = point.getDistance(closestPoint);
			
				for (let offset = 0; offset <= path.length; offset += 1) {
					location = path.getLocationAt(offset);
					let currentPoint = location.point;
					let distance = point.getDistance(currentPoint);
			
					if (distance < closestDistance) {
						closestDistance = distance;
						closestPoint = currentPoint;
					}
				}
			
				return closestDistance <= tolerance;
			}
	
			//if (item.hasChildren()) iterate(child)
		};		
	
		iterate(path);
		return path;
	},

// PERLIN
// 88888888ba                          88  88               
// 88      "8b                         88  ""               
// 88      ,8P                         88                   
// 88aaaaaa8P'  ,adPPYba,  8b,dPPYba,  88  88  8b,dPPYba,   
// 88""""""'   a8P_____88  88P'   "Y8  88  88  88P'   `"8a  
// 88          8PP"""""""  88          88  88  88       88  
// 88          "8b,   ,aa  88          88  88  88       88  
// 88           `"Ybbd8"'  88          88  88  88       88  
                                                         
                                                         

    // Perlin noise integration
    perlin: (function() {
        var permutation = [
			151,160,137,91,90,15,
			131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
			190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
			88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
			77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
			102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
			135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
			5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
			223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
			129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
			251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
			49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
			138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
		];
	
		function scalenum(n) {
			return (1 + n)/2;
		}
	
		function grad(hash, x, y, z) {
			var h = hash & 15,       // convert lo 4 bits of hash code
				u = h < 8 ? x : y,   // into 12 gradient directions
				v = h < 4 ? y : h == 12 || h == 14 ? x : z;
			return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
		}
	
		function fade(t) {
			return t * t * t * (t * (t * 6 - 15) + 10);
		}
	
		// linear interpolation between a and b by amount t (0, 1)
		function lerp(t, a, b) {
			return a + t * (b - a);
		}
	
		var noise = function(scale) {
			// build the perm array
			var p = new Array(512)
			for (var i=0; i < 256 ; i++) {
				p[256+i] = p[i] = permutation[i];
			}
	
			return function(x, y, z) {
	
				if(!z) z = 0;
	
				x *= scale;
				y *= scale;
				z *= scale;
	
				// find unit cube that contains this point
				var X = Math.floor(x) & 255,
					Y = Math.floor(y) & 255,
					Z = Math.floor(z) & 255;
	
				// find relative x, y, z of point in cube
				x -= Math.floor(x);
				y -= Math.floor(y);
				z -= Math.floor(z);
	
				// compute the face curves for each of X, Y, Z
				var u = fade(x),
					v = fade(y),
					w = fade(z);
	
				// hash coordinates of the 8 cube corners
				var A  = p[X  ]+Y,
					AA = p[A  ]+Z,
					AB = p[A+1]+Z,
					B  = p[X+1]+Y,
					BA = p[B  ]+Z,
					BB = p[B+1]+Z;
	
				var lo =
					lerp(v,
						lerp(u, grad(p[AA  ], x  , y  , z   ),
								grad(p[BA  ], x-1, y  , z   )),
						lerp(u, grad(p[AB  ], x  , y-1, z   ),
								grad(p[BB  ], x-1, y-1, z   )));
	
				var hi =
					lerp(v,
						lerp(u, grad(p[AA+1], x  , y  , z-1 ),
								grad(p[BA+1], x-1, y  , z-1 )),
						lerp(u, grad(p[AB+1], x  , y-1, z-1 ),
								grad(p[BB+1], x-1, y-1, z-1 )));
	
				// add blended results from 8 corners of cube
				return scalenum(lerp(w, lo, hi));
			}
		};

        return {
            noise: noise
        };
    })(),

    // New noise function that uses the integrated Perlin noise
    noise: (phase) => {
        // Initialize Perlin noise with a scale, for example, 1
        var perlinNoise = utl.perlin.noise(1);
        return perlinNoise(phase, phase, phase);
    },


// SLICE                                             
//  ad88888ba   88  88                          
// d8"     "8b  88  ""                          
// Y8,          88                              
// `Y8aaaaa,    88  88   ,adPPYba,   ,adPPYba,  
//   `"""""8b,  88  88  a8"     ""  a8P_____88  
//         `8b  88  88  8b          8PP"""""""  
// Y8a     a8P  88  88  "8a,   ,aa  "8b,   ,aa  
//  "Y88888P"   88  88   `"Ybbd8"'   `"Ybbd8"'  
                                             
                                             
	splitUsingPath: (target, path, debug=false) => {
		const paths = [path];
		const targets = [target];
		
		const originalTarget = target.clone({ insert: false })
		const intersections = target.getIntersections(path)

		intersections.forEach(location => {
		const newTarget = target.splitAt(location)
		const isNew = newTarget !== target
		
		if (isNew) targets.push(newTarget)
		
		paths.forEach(path => {
			const offset = path.getOffsetOf(location.point)
			const pathLocation = path.getLocationAt(offset)

			if (pathLocation) {
					paths.push(path.splitAt(pathLocation))
			}
		})
		})

		const innerPath = paths.find(p => 
			originalTarget.contains(p.bounds.center))

		paths
			.filter(path => path !== innerPath)
			.forEach(item => item.remove())


		targets.forEach((target, i) => {
			const isFirst = i === 0
			const innerPathCopy = isFirst ? innerPath : innerPath.clone()

			if (innerPathCopy.getPointAt(0).isClose(target.getPointAt(target.length), 0.1)) innerPathCopy.reverse()

			target.join(innerPathCopy, innerPathCopy.length)
			target.closed = true

			if (debug) {
				let p  = new PointText({
					point: target.bounds.center,
					content: target.clockwise,
					fontSize: 10,
					fontColor: 'black',
					parent: debug
				})
			}
		})

		return targets
	},


// ROUND                                                                
// 88888888ba                                                  88  
// 88      "8b                                                 88  
// 88      ,8P                                                 88  
// 88aaaaaa8P'  ,adPPYba,   88       88  8b,dPPYba,    ,adPPYb,88  
// 88""""88'   a8"     "8a  88       88  88P'   `"8a  a8"    `Y88  
// 88    `8b   8b       d8  88       88  88       88  8b       88  
// 88     `8b  "8a,   ,a8"  "8a,   ,a88  88       88  "8a,   ,d88  
// 88      `8b  `"YbbdP"'    `"YbbdP'Y8  88       88   `"8bbdP"Y8  
                                                                


	// Round segments, optionally give array of segments as attribute
	round: (path, r, sharps, debug=false) => {

		if (path.segments.length == 0) {
			console.log('Rounding: no segments at path')
			return
		}

		if (sharps == undefined) {
			sharps = []

			path.segments.forEach(s => {
				if (!s.isSmooth()) sharps.push(s.location)
			})

		}

		
		if (sharps.length > 0) {
			let ref = path.clone()
			sharps.forEach(s => {
				if (s.segment) {
					utl.roundSegment(path, s.segment, r, sharps, ref, debug)
				}
			})
	
			if (debug) {
				ref.fillColor = null
				ref.strokeColor = 'blue'
				ref.opacity = .5
	
				utl.C(ref.segments[0].point, 4, 'green')
			}
			else {
				ref.remove()
			}
		}
	},

	// Round one segment on a path. Adds additional points at radius distance from a segment.
	roundSegment: (path, segment, radius, ints, referencePath, debug=false) => {
		
		var curPoint = segment.point

		var curOff = segment.location.offset
		var refCurOff = referencePath.getOffsetOf(segment.point)

		if (debug) utl.C(segment.point, 2, 'red')

		// get radius that is adjusted smaller if intersections are close to each other
		//Check that segment and next or previous rounded segments radiuses don't overlap
		var radiusBandF = utl.getAdjustedRadius(referencePath, refCurOff, radius, ints, debug)

		// get offset of the location where new point should be placed
		var off2 = utl.offsetCalc(path, curOff + radiusBandF[1])
		
		// Get segments that are within rounding radius and should be removed
		var segsAtRounding = utl.getSegmentsWithinRadius(path, segment, radiusBandF, debug)
		// allSegmentsWithinRadius.push(...segsAtRounding)

			// Add latter point and set incoming handle
		var p2 = utl.addPointToCurve( path, off2 )
		if (p2 != undefined) {
			p2.handleIn.length = radiusBandF[1] / 2
			if (p2.handleIn.angle == undefined) p2.handleIn.angle = path.getLocationAt(p2).location.tangent.angle
		}

		// get offset of the location where latter point should be placed
		// have to get offset again since adding point to curve changes path structure
		var off1 = utl.offsetCalc(path, path.getOffsetOf(curPoint) - radiusBandF[0]) 
		
		// Add former point and set outgoing handle
		var p1 = utl.addPointToCurve( path, off1 )
		if (p1 != undefined) p1.handleOut.length = radiusBandF[0] / 2

		// Finish by removing all segments within rounding radius including the segment to be rounded to begin with	
		segment.remove()
		if (segsAtRounding.length > 0) {
			for (var s = 0; s < segsAtRounding.length; s++) {
				if (debug) utl.C(segsAtRounding[s].point, 2, 'orange')								
				segsAtRounding[s].remove()
			}
		}

		return 

	},

	//Check that segment and next or previous rounded segments radiuses don't overlap
	getAdjustedRadius: (path, curOff, radius, ints, debug=false) => {
		
		const getDifference = (a, b) => Math.abs(a - b)


		var result = [radius, radius]

		for (var i = 0; i < ints.length; i++) {
			// var intOff = path.getNearestLocation(ints[i][1].point).offset // get offset of an intersection point
			var intOff = path.getOffsetOf(ints[i].point) // get offset of an intersection point

			var intDist = getRealDistance(intOff, curOff, path.length) // get distance between point being rounded and another intersection

			function getRealDistance(a, b, full) {
				var distResult = [ getDifference(intOff, curOff), false ] // difference between points, false as default indicator that points are not across zero point
				var half = full / 2

				if (distResult[0] > half) { // if distance between points is greater than half the total length of a path, then shortest distance between them must cross the zero point
					
					a = (a > half) ? full - a : a
					b = (b > half) ? full - b : b

					var dist = (a + b > half) ? full - (a + b) : a + b
					distResult = [ dist, true ]
				}

				return distResult
			}

			// console.log('result: ' + result)

			if (intDist[0] / 2 < radius && intOff != curOff && intOff != null && intDist[0] > 0.1) {
				// if (debug) {
				// 	var con = new paper.Path.Circle({
				// 		center: ints[i][1].point,
				// 		radius: 5,
				// 		name:'con',
				// 		fillColor: 'pink'
				// 	})
				// }

				var adj = intDist[0]/1000

				if (curOff > intOff) {
					result[0] = (intDist[0] / 2) - adj // if intersection points are too close to each other, default radius to half their distance
				}
				if (curOff < intOff) {
					result[1] = (intDist[0] / 2) - adj
				}
				
				if (intDist[1]) {
					if (debug) {
						// var zer = new paper.Path.Circle({
						// 	center: ints[i][1].point,
						// 	radius: 20,
						// 	fillColor:'pink'
						// })
					}
					if (curOff > intOff) {
						result[1] = (intDist[0] / 2) - adj // if intersection points are too close to each other, default radius to half their distance
					}
					if (curOff < intOff) {
						result[0] = (intDist[0] / 2) - adj
					}
				}
			}

		}

		return result
	},



	// Add a new segment to a curve so that appearance of the curve is not altered
	addPointToCurve: (path, offset) => {
		var p = path.getPointAt(offset)
		path.splitAt(path.getLocationAt(offset))
		path.join(path)
		
		if (path.getLocationOf(p) != undefined) {
			var result = path.getLocationOf(p).segment
			return result
		}
		else { 
			return undefined
		}
	},

	// Calculate offset taking into account looping over path end
	offsetCalc: (path, off) => {
		var result = off

		if (path.length < off) result = off - path.length

		if (off < 0) result = path.length - Math.abs(off)
			
		return result
	},

	// Get segments of a path that lie between two offset values
	getSegmentsWithinRadius: (path, seg, radiusBandF, debug=false) => {
		var result = []

		var myOff = seg.location.offset
		var nonAdjustedOff1 = myOff - radiusBandF[0]
		var off1 = utl.offsetCalc(path, nonAdjustedOff1)
		var nonAdjustedOff2 = myOff + radiusBandF[1]
		var off2 = utl.offsetCalc(path, nonAdjustedOff2)

		if (debug) {
			var con = new paper.Path.Circle({
				center: path.getPointAt(off1),
				radius: 2,
				fillColor: 'yellow',
				opacity: .5
			})
			var con = new paper.Path.Circle({
				center: path.getPointAt(off2),
				radius: 2,
				fillColor: 'blue',
				opacity:.5
			})
		}

		for (var s = 0; s < path.segments.length; s++) {
			var myS = path.segments[s];
			var sOff = myS.location.offset;
		
			// Check if the segment's offset falls within the range considering loop-over
			if (off1 <= off2) {
				// Normal scenario: The range does not loop over the path's end
				if (sOff >= off1 && sOff <= off2) {
					result.push(myS);
				}
			} else {
				// Loop-over scenario: The range crosses the path's end
				if (sOff >= off1 || sOff <= off2) {
					result.push(myS);
				}
			}
		}
		
		return result
	},

	roundd: (p, r) => {
		if (p instanceof paper.CompoundPath) {
			p.children.forEach(child => utl.roundd(child, r));
		} else {
			let nS = [];
			let round = [];
			let pL = p.length;
	
			const findNCorner = (p, s = 0, dir = 'next') => {
				let segs = p.segments, len = segs.length;
				for (let i = 1; i <= len; i++) {
					let idx = dir === 'next' ? (s + i) % len : (s - i + len) % len;
					if (!segs[idx].isSmooth()) return segs[idx];
				}
				return null;
			};
	
			// First pass: Collect rounding ranges for sharp corners
			p.segments.forEach((s, i) => {
				if (!s.isSmooth()) {
					let sO = s.location.offset;
					let ps = findNCorner(p, i, 'prev');
					let ns = findNCorner(p, i, 'next');
					let psO = ps.location.offset;
					let nsO = ns.location.offset;
	
					// Distances to previous and next corners
					let dP = (sO - psO + pL) % pL;
					let dN = (nsO - sO + pL) % pL;
	
					let pO = dP / 2 > r ? (sO - r + pL) % pL : (sO - dP / 2 + pL) % pL;
					let nO = dN / 2 > r ? (sO + r) % pL : (sO + dN / 2) % pL;
	
					// Store the rounding range with the index of the sharp corner
					round.push({ start: pO, end: nO, index: i });
				}
			});
	
			// Second pass: Process segments and exclude smooth segments within rounding ranges
			p.segments.forEach((s, i) => {
				let sO = s.location.offset;
	
				// Check if the segment is within any rounding range
				let withinRounding = false;
				for (let range of round) {
					if (range.start <= range.end) {
						if (sO >= range.start && sO <= range.end) {
							withinRounding = true;
							break;
						}
					} else {
						// Handle wrapping around the path length
						if (sO >= range.start || sO <= range.end) {
							withinRounding = true;
							break;
						}
					}
				}
	
				if (s.isSmooth()) {
					if (!withinRounding) {
						nS.push(s.clone());
					}
					// If within rounding range, do not include the smooth segment
				} else {
					// Find the rounding range for this corner
					let range = round.find(range => range.index === i);
					if (range) {
						// Create the rounded corner
						let s1 = p.clone({ insert: false }).divideAt(range.start);
						let s2 = p.clone({ insert: false }).divideAt(range.end);
						let h1 = s.point.subtract(s1.point).divide(2);
						let h2 = s.point.subtract(s2.point).divide(2);
						s1.handleOut = h1;
						s2.handleIn = h2;
	
						// Adjust angles for handles
						[s1, s2].forEach(seg => {
							let hOA = seg.handleOut.angle;
							let hIA = seg.handleIn.angle;
							if (hIA !== 0) {
								seg.handleOut.angle = hOA < 0 ? hIA + 180 : hIA - 180;
							}
						});
						nS.push(s1, s2);
					} else {
						nS.push(s.clone());
					}
				}
			});
	
			p.segments = nS;
		}
	},
	

//TREDE	                                                          
// 888888888888                              88              
//      88                                   88              
//      88                                   88              
//      88  8b,dPPYba,   ,adPPYba,   ,adPPYb,88   ,adPPYba,  
//      88  88P'   "Y8  a8P_____88  a8"    `Y88  a8P_____88  
//      88  88          8PP"""""""  8b       88  8PP"""""""  
//      88  88          "8b,   ,aa  "8a,   ,d88  "8b,   ,aa  
//      88  88           `"Ybbd8"'   `"8bbdP"Y8   `"Ybbd8"'  
      
	tree: (path, dp, ep, cols=['#004470','#009994','#ffeb91','#ee7620']) =>{
		res = new paper.Group()
		const getD = (pa, esc, d) => pa.add(pa.subtract(esc).normalize().multiply(d));
		const isVis = (pa, esc, cu) => !pa.contains(getD(cu.getPointAtTime(.5), esc, -5))
		const p = (segs, opt) => new paper.Path({segments: segs, ...opt})
		const tngts = (cc, rad, po) => {
			th = Math.acos(a/cc.getDistance(p))
			d = Math.atan2(po.y-cc.y, po.x-cc.x) 
			d1=d+th, d2=d-th
			return [new Point(cc.x+a*Math.cos(d1),cc.y+a*Math.sin(d1)), new Point(cc.x+a*Math.cos(d2), cc.y+a*Math.sin(d2))]
		}
		
		sides = [{side:path, dist:0}]
		
		utl.each(path.curves, cu => {
			if (isVis(path, ep, cu)) {
				let lo = cu.getLocationAtTime(.5)
				let fill = cols[lo.normal.quadrant-1]
				let di = lo.point.getDistance(ep)
				let cp1 = cu.point1, cp2 = cu.point2
				sides.push({side: p([cp1, getD(cp1,ep,-dp), getD(cp2,ep,-dp), cp2], {fillColor:fill, closed:true}), dist:di})
			}
		})
		
		sides.sort(function(a, b) { return b.dist - a.dist});
    	utl.each(sides, side => {side.side.parent = res; side.side.bringToFront();} )
    	return res
	},

                                                                              
// 88888888ba                           88         88                            
// 88      "8b                          88         ""                            
// 88      ,8P                          88                                       
// 88aaaaaa8P'  ,adPPYYba,   ,adPPYba,  88   ,d8   88  8b,dPPYba,    ,adPPYb,d8  
// 88""""""'    ""     `Y8  a8"     ""  88 ,a8"    88  88P'   `"8a  a8"    `Y88  
// 88           ,adPPPPP88  8b          8888[      88  88       88  8b       88  
// 88           88,    ,88  "8a,   ,aa  88`"Yba,   88  88       88  "8a,   ,d88  
// 88           `"8bbdP"Y8   `"Ybbd8"'  88   `Y8a  88  88       88   `"YbbdP"Y8  
//                                                                   aa,    ,88  
//                                                                    "Y8bbdP"   
// Requires geometryutil.js
pack: (container, count, weights, packArr, palette, gap) =>{
		const po = (x,y) => new paper.Point(x,y)
		const Rap = (arr) => {
			if (arr.every(item => item === undefined)) return undefined
			let item;
			do {
			  item = arr[Math.floor(Math.random() * arr.length)];
			} while (item === undefined);
			return item;
		  }


		container.data.nfp = paperjsPathToNFP(container)
		let contArea = Math.abs(container.area)
		let usedArea = 0

		let packed = []
		let elems = []

		L(count, () => {
			el = utl.weightedR(packArr, weights)     
			elems.push(el[0]({ strokeColor: 'black', fillColor: utl.getR(palette) }, ...el[1]))
		})
		elems.forEach(e=>e.position=po(0,0))
		elems.sort((a, b) => Math.abs(b.area) - Math.abs(a.area))

		
		for (idx=0;idx<elems.length;idx++) {
				
			if (usedArea > contArea * 0.75) {
				finalizePacking()
				return
			}
			
			let newS = elems[idx].clone()
			if (gap) {bw=newS.bounds.width; newS.scale((bw+gap)/bw) }
			newS.rotate(utl.R(360))
			let placed = false
			
			let contNfp = generateNoFitPolygon(container, newS, true, true)
			
			if (contNfp) {
				contNfp = contNfp[0]

				if (packed.length == 0) { //put first element somewhere along the container Nfp, there's a guaranteed place
					newS.position = contNfp.getPointAt(utl.R(contNfp.length))
					newS.data.nfp = paperjsPathToNFP(newS)
					packed.push(newS)
					usedArea += newS.area
					placed=true

				} else {
					let union = new paper.Path({ insert: false });
					let nfpArr = []
					let allConvex = true
					packed.forEach(pa => {
						let myNfp = newS.data.isConvex ? nfp(pa, newS) : generateNoFitPolygon(pa, newS, false, false)[0] //for faster performance, use simple method for convex shapes
						
						if (myNfp) nfpArr.push(myNfp)
						if (!newS.data.isConvex) allConvex = false
					});
	
					union = allConvex ? batchUnion(nfpArr, false) : unionPaths(nfpArr) //use clipper if all shapes are convex for performance
					// union = unionPaths(nfpArr) //use clipper if all shapes are convex for performance
					
					union = union instanceof paper.CompoundPath ? Rap(union.children) : union
					// union = union instanceof CompoundPath ? union.children.find(c => c.length > 0) : union
					if (union.closed) union.splitAt(0);
					// console.log(union)
					
					// union = union.intersects(contNfp) ? union.intersect(contNfp, { trace: false, insert: false }) : union
					union = union.intersect(contNfp, { trace: false, insert: false })
					if (union instanceof paper.CompoundPath) union = union.children.find(c => c.length > 0)
					
					if (union) {
						if (union.closed) union.splitAt(0)

						let newPos
						if (union.length > 0) {
							myR = R(union.length)
							newPos = union.getPointAt(myR)
						} 
						// let newPos = union.length !== 0 ? union.getPointAt(R(union.length)) : union.segments[0].point
						if (newPos) {
							newS.position = newPos;
							if (gap) newS.scale(bw / (bw + gap))
							newS.data.nfp = paperjsPathToNFP(newS)
							packed.push(newS)
							usedArea += newS.area
							placed = true
						}
						union.remove()
					}
				}
				if (!placed) {
					newS.remove();
				}
			}		 
		}

		return(finalizePacking())

		function finalizePacking() {
			elems.forEach(e => e.remove());
			let full = new paper.Group([...packed]);
			console.log(packed.length + '/' + count);
			return full
		}
		function paperjsPathToNFP(paperPath) {
			// Convert a Paper.js Path object into an array of {x, y} points
			let nfpFormat = [];
			paperPath.segments.forEach(segment => {
				nfpFormat.push({
					x: segment.point.x,
					y: segment.point.y
				});
			});
			return nfpFormat;
		}
		function nfpToPaperjsPath(nfpResult) {
			// Convert the NFP result into a Paper.js Path object
			let paperPath = new paper.Path({insert:false});
			nfpResult.forEach(point => {
				paperPath.add(new paper.Point(point.x, point.y));
			});
			paperPath.closed = true; // Ensure the path is closed
			return paperPath;
		}
		function generateNoFitPolygon(pathA, pathB, inside, searchEdges) {
			// Step 1: Convert Paper.js paths to NFP format
			pathA.data.nfp = pathA.data.nfp || paperjsPathToNFP(pathA);
			pathB.data.nfp = pathB.data.nfp || paperjsPathToNFP(pathB);
			// Step 2: Run the noFitPolygon algorithm
			let nfpResult = GeometryUtil.noFitPolygon(pathA.data.nfp, pathB.data.nfp, inside, searchEdges);
			
			// Step 3: Convert NFP result back to Paper.js Path format
			if (nfpResult && nfpResult.NFPs && nfpResult.NFPs.length > 0) {
				let res = nfpResult.NFPs.map(nfpPolygon => nfpToPaperjsPath(nfpPolygon));
			
				const btmP = (path) => { return path.segments.reduce((btmS, curS) => { return curS.point.y > btmS.point.y ? curS : btmS;}, path.segments[0]) };
		
				// This doesn't work if nfp is inside pathB
				if (!inside) {
					delta = pathB.bounds.center.subtract(btmP(pathB).point)
					res.forEach(p => p.translate(delta))
				}
				else {
					res.forEach(p => p.position = pathA.bounds.center)
				}
				return res
			}
			return null;
		}
		function nfp(po1,po2) {
			v = (s1,s2) => s1.point.subtract(s2.point)
			vecs = []
			
			vecgen = (pol, dir) => {
				segs = pol.segments
				sLe=segs.length
				for (let s=0;s<sLe;s++) {
					vecs.push( v(segs[dir?s:(s+1)%sLe],segs[(dir?(s+1)%sLe:s)]) )
				}
			}
			vecgen(po1, true)
			vecgen(po2, false)
			vecs.sort((a, b) => b.angle - a.angle);
			
			let nfp = new paper.Path({segments:[vc.clone()], insert: false})
			curS = nfp.segments[0].point
			
			vecs.forEach(v => {
				newS = curS.add(v)
				nfp.add(newS)
				curS = newS
			})
			
			nfp.position = po1.bounds.center
			
			return nfp
		}
		function unionPaths(paths) {
			if (paths.length === 0) return null;
			if (paths.length === 1) return paths[0].clone();
		
			let result = paths[0].clone();
			for (let i = 1; i < paths.length; i++) {
				result = result.unite(paths[i], {insert: false});
			}
		
			return result;
		}
		function batchUnion(polygons, insert = true) {
			// Function to resample paths for better precision (optional)
			function resample(path, segments = 100) {
				path.flatten(segments);
			}
		
			// Convert Paper.js paths (including compound paths) to Clipper.js format
			function convertToClipperPaths(paperPath) {
				let clipperPaths = [];
				if (paperPath instanceof paper.CompoundPath) {
					// Handle compound path
					paperPath.children.forEach(child => {
						let clipperPath = child.segments.map(segment => ({
							X: segment.point.x,
							Y: segment.point.y
						}));
						clipperPaths.push(clipperPath);
					});
				} else {
					// Handle regular path
					let clipperPath = paperPath.segments.map(segment => ({
						X: segment.point.x,
						Y: segment.point.y
					}));
					clipperPaths.push(clipperPath);
				}
				return clipperPaths;
			}
		
			// Flatten and convert all paths to Clipper.js format
			let allClipperPaths = [];
			polygons.forEach(p => {
				resample(p, 1); // Flatten the path for better precision
				let clipperPaths = convertToClipperPaths(p);
				allClipperPaths = allClipperPaths.concat(clipperPaths);
			});
		
			// Initialize Clipper
			let clipper = new ClipperLib.Clipper();
		
			// Add all paths to Clipper
			clipper.AddPaths(allClipperPaths, ClipperLib.PolyType.ptSubject, true);
		
			// Use PolyTree to handle compound paths with holes
			let solutionTree = new ClipperLib.PolyTree();
			clipper.Execute(
				ClipperLib.ClipType.ctUnion,
				solutionTree,
				ClipperLib.PolyFillType.pftNonZero,
				ClipperLib.PolyFillType.pftNonZero
			);
		
			// Convert PolyTree to Paper.js Path or CompoundPath
			function polyTreeToPathOrCompoundPath(polyNode, insert) {
				let children = polyNode.Childs();
				if (children.length === 0) {
					// No paths found, return an empty path
					return new paper.Path({ insert: insert });
				} else if (children.length === 1 && !children[0].IsHole() && children[0].ChildCount() === 0) {
					// Single path without holes, return a simple Path
					let outerPath = new paper.Path({ insert: insert });
					children[0].Contour().forEach(point => {
						outerPath.add(new paper.Point(point.X, point.Y));
					});
					outerPath.closePath();
					return outerPath;
				} else {
					// Multiple paths or a single path with holes, return a CompoundPath
					let compoundPath = new paper.CompoundPath({ insert: insert });
		
					function addToCompoundPath(node) {
						let path = new paper.Path({ insert: insert });
						node.Contour().forEach(point => {
							path.add(new paper.Point(point.X, point.Y));
						});
						path.closed = true;
		
						if (node.IsHole()) {
							path.clockwise = false; // Mark it as a hole
						}
		
						compoundPath.addChild(path);
		
						// Recursively add children (if any)
						node.Childs().forEach(child => addToCompoundPath(child));
					}
		
					children.forEach(child => addToCompoundPath(child));
		
					return compoundPath;
				}
			}
		
			let resultPath = polyTreeToPathOrCompoundPath(solutionTree, insert);
		
			return resultPath;
		}
		

	}
};


