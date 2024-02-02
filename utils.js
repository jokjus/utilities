// Utility functions for paper.js generative art
paper = paper && Object.prototype.hasOwnProperty.call(paper, 'default') ? paper['default'] : paper;

let utl = {
	C: (p,r,c) => new paper.Path.Circle({center: p, radius: r, fillColor: c }),
	R: (a) => Math.random() * a,
    // Mathematical helpers -----------------------------------------
    isEven: (n) => {
        return n % 2 === 0;
    },
    isOdd: (n) => {
        return !utils.isEven(n);
    },
    getRandomInt: (min, max) => {
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

	getV: (array, value) => {
		const index = Math.round(value * (array.length - 1));
		const safeIndex = Math.max(0, Math.min(index, array.length - 1));
		return array[safeIndex];
	},

    // Vector drawing calculations -----------------------------------------
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

        po = utils.getPo(path, x, y);
        se = new paper.Segment({
            point: po,
        });
        if (hIn || hOut) {
            poIn = utils.getPo(path, hIn[0], hIn[1]);
            poOut = utils.getPo(path, hOut[0], hOut[1]);
            se.handleIn = poIn.subtract(po);
            se.handleOut = poOut.subtract(po);
        }
        return se;
    },

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
	genPoissonPoints: (center, maxDistance, minDistance, count) => {

		const pds = new PoissonDiskSampling({
			shape: [maxDistance * 2, maxDistance * 2],
			minDistance,
		});

		pds.addRandomPoints(count);

		const points = pds.getPoints().map(([x, y]) => new Point(center.x + x, center.y + y));
		return points;
	},

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
					utils.getSeg(to, x, y, [hinx, hiny], [houtx, houty])
				);
				result.addChild(resP)
            });
        }

        return result;
    },

	mapArtOnPath: (art, path, cellHeight, cellWidth, randomizeWidth = 0, demo) => {
		let p = path
		let h = cellHeight
		let w = cellWidth
		let result = new paper.Group()
		let curPos = 0
		let counter = 0
		let delta = 0.01

		while (curPos < p.length) {
			
			// if art is one path, repeat it, if it's array, take nth item of array and loop array if necessary
			let myart = Array.isArray(art) ? art[counter%art.length] : art 

			// introduce little width randomizing
			let stepW = w ? w : myart.bounds.height / 1.5 * (Math.random() * randomizeWidth + 1)

			let artClone = myart.clone()

			// get points of a rectangle that is along the path
			let n = p.getNormalAt(curPos)
			let myp = p.getPointAt(curPos)

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

			mappedArtHeight = h

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
			result.addChild(utils.mapArt(artClone, seg, 1))

			seg.remove()
			counter++
		}

		return result
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
	
	// Do the hidden line removal
	occlusion: (item, callback, cookieCutter = false, verbose = true) => {
		console.log('occlusion starting')
		console.log('ungrouping items')
		utils.ungroup(item)
		
		console.log('ungrouping items')
		let resultG = new paper.Layer()

		var mask = new paper.Path()

		// This function assumes that input item has children
		var elCount = item.children.length

		// Initialize counter
		var x = elCount - 1

		// Loop through all elements in occludable item
		function loop() {

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
		
				// mask = new paper.Path({
				// 	name: 'unitedSprites'
				// })

				mask.remove()

				// Reverse order
				resultG.reverseChildren()

				// Ungroup possible resulted compound paths
				utils.ungroup(resultG, false)		

				// Remove original paths
				item.remove()

				// Clean up small lines smaller than threshold						
				// toDelete = []

				// limit = c.removeSmallLines * 0.352

				// resultLayer.children.forEach(path => {
				// 	if ((path.bounds.height < limit && path.bounds.width < limit) || path.length < limit) {
				// 		toDelete.push(path)
				// 	}
				// })

				// if (verbose) console.log('Small lines to delete found: ' + toDelete.length)

				// toDelete.forEach(p => {
				// 	p.remove()
				// })

				
				
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

		flag = true

		for (var i = 0; i < item.children.length; i++) {
			var el = item.children[i]

			// If item is a group
			if ( el.hasChildren() ) {

				// don't process clipping compound paths
				// if (el.clipMask && el instanceof paper.CompoundPath ) {
				// 	continue
				// }
				if (el instanceof paper.CompoundPath && el.closed && keepCompounds) {				
					continue
				}
				
				// Have to deal with clipping groups first
				if (el.clipped) utils.flattenClipping(el)

				// Move children to parent element and remove the group
				el.parent.insertChildren(el.index, el.removeChildren())
				el.remove()
				flag = false
			}

			// Recurse as long as there are groups left
			if (!flag) {
				utils.ungroup(item)
			}
		}
	},

	// Flattens a clipping group
	flattenClipping: (clipGroup) => {

		// Ungroup everything inside a clipping group
		utils.ungroup(clipGroup)

		// Find the clipping mask (it should be the first layer but cannot be certain)
		var clipMasks = clipGroup.children.filter(obj => {
			return obj.clipMask === true
		})

		var clipMaskOrig = clipMasks[0]

		// if clipmask element is a shape, let's convert to a path first
		// this is ugly but didn't yet find other way to prevent extra elements from generating
		if (clipMaskOrig.type != undefined) {
			var clipMask = clipMaskOrig.toPath()		
		}
		else  {
			var clipMask = clipMaskOrig
		}

		// Close clipping mask for more predicatable results
		if (clipMask.closed == false) clipMask.closePath()
		
		// Get the actual clipped layers
		var innerLayers = clipGroup.children.filter(obj => {
			return obj.clipMask === false
		})

		

		// Loop through clipped layers and get the boolean intersection against clone of the clipping mask
		for (var x = 0; x < innerLayers.length; x++) {
			var innerOrig = innerLayers[x]
			var mask = clipMask.clone()
			let origFill = innerOrig.fillColor
			let origStrokeColor = innerOrig.strokeColor
			let origStrokeWidth = innerOrig.strokeWidth

			// if inner element is a shape, let's convert to a path first
			// this is ugly but didn't yet find other way to prevent extra elements from generating
			var inner = inner instanceof paper.Shape ? innerOrig.toPath() : innerOrig
			// if (innerOrig.type != undefined) {
			// 	var inner = innerOrig.toPath()	
			// }
			// else {
			// 	var inner = innerOrig
			// }

			// Use suitable tracing method for open and closed paths
			var traceMethod = false
			if (innerOrig.closed || innerOrig.type != undefined) traceMethod = true

			// The boolean operation
			var newEl = inner.intersect(mask, {trace: traceMethod})

			// If the result is a compound path, restore original appearance after boolean operation	
			if (newEl instanceof CompoundPath) {
				newEl.children.forEach(el => el.fillColor = origFill)
				newEl.children.forEach(el => el.strokeColor = origStrokeColor)
				newEl.children.forEach(el => el.strokeWidth = origStrokeWidth)
			}

			// clean up
			mask.remove()
			inner.remove()
			innerOrig.remove()
		}
		
		//clean up	
		clipMask.remove()
		clipMaskOrig.remove()
		clipGroup.clipped = false

	},

	// Hatch fill simple shapes (renctangle, circle etc. No U-shapes)
	hatchFill: (path, off, angle, penW, color) => {

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
	
	   return resG
		
	},

	// Hatch fill any shape
	hatchFillAny: (origpath, penW, angle, color, debug=false) => {
		
		let commonPivot = new paper.Point(0,0)
		penW = penW * 2.83465 // convert pen width from mm to points

		let origColor = origpath.fillColor ? origpath.fillColor : 'black'
		if (color) origColor = color

		resG = new paper.Group({pivot: commonPivot})

		path = PaperOffset.offset(origpath, -penW)
		path.pivot = commonPivot
		path.rotate(angle)

		indentedOutline = PaperOffset.offset(origpath, -.5 * penW)
		
	

		// get dimensions
		var pb = path.bounds;

		let di = pb.topLeft.getDistance(pb.bottomRight)
				
		// set offset
		let offset = (di - pb.width) / 2

		// calculate how much lines fit onto the path with density given as parametre
		var linesCount = (Math.max(pb.width, pb.height) + 2 * offset) /  penW
		
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
			var x = pb.left - offset + l * penW;

			// Create reference line in order to get intersection points
			var refline = new paper.Path.Line({
				from: new paper.Point(x, pb.top - offset),
				to: new paper.Point(x, pb.bottom + offset)
			})
	
			// Rotate for diagonal hatching based on given parameter	
			// refline.rotate(angle);
	
			// Get intersection points
			var ints = path.getIntersections(refline);
	
			// Sort intersections along the reference line
			ints.sort(function(a, b) {
				return refline.getOffsetOf(a.point) - refline.getOffsetOf(b.point);
			  });
	
			// if (ints.length == 1) console.log('ohilyönti')
	
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
				var continuousLine = new paper.Path({strokeColor: path.strokeColor});
				var myList = oRunList[i];
	
				if (myList.length == 0) console.log('Tyhjä myList')
	
				// Every other end connected to create zigzag pattern
				for (var k = 0; k < myList.length; k++) {
					if (isEven(k)) {
						addToContinuousLine(0)
						addToContinuousLine(1)
					}
					else {
						addToContinuousLine(1)
						addToContinuousLine(0)
					}
				}
	
				function addToContinuousLine(ind) {
					continuousLine.add(myList[k][ind]);
				}
				
				lines.addChild(continuousLine);
			}
			
			// Put lines vector element into drawing in front of the texturized path
			lines.parent = resG;
		}
		resG.rotate(-angle)
		indentedOutline.parent = resG

		resG.strokeWidth = penW
		resG.fillColor = null
		resG.strokeColor = origColor
		resG.strokeCap = 'round'
		resG.strokeJoin = 'round'

		
		path.remove()

		return resG

		function outline(path) {
			path.fillColor = null;
			path.strokeWidth = 1;
		}
		
		function isEven(n) {
			return n % 2 == 0;
		 }
	},

    // Color  -----------------------------------------
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
        return '#' + utils.componentToHex(r) + utils.componentToHex(g) + utils.componentToHex(b);
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

    // String manipulation -------------------------------------------------
    pad: (num, size) => {
        num = num.toString();
        while (num.length < size) num = '0' + num;
        return num;
    },

	isUpperCase: (char) => {
		return /^[A-Z]$/.test(char);
	},

    // Animation related functions -----------------------------------------
    easingAnims: (min, max, easing, phase) => {
        phase = animFrame / (document.getElementById('animSpeed').value * 10);
        var animValue = eval('utils.' + easing + '(phase)');
        var range = max - min;
        if (phase >= 1) {
            animDir = 0;
        } // requires global animDir variable to be set
        if (phase <= 0) {
            animDir = 1;
        }
        return parseInt(min) + parseFloat(animValue * range);
    },

    // Easing functions -----------------------------------------
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
            ? (1 - utils.easeOutBounce(1 - 2 * x)) / 2
            : (1 + utils.easeOutBounce(2 * x - 1)) / 2;
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

	// DRAWING PRIMITIVES
	mark: (inR, outR, color, strokeWidth) => {
		let ci = new paper.Path.Circle({
			strokeWidth: strokeWidth,
			strokeColor: color,
			center: vc,
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
		
		path.position = vc
		
		return path
	},

	khronos: (rings, lines, outer, inner, rotation, colors) => {
		let res = new paper.Group()
		let cols = []
		ringWidth = (outer-inner) / 2
		zero = new paper.Point(0,0)

		for (let i=0;i<lines;i++) {
			cols.push( utl.getR(colors) )
		}

		for (let i=0;i<rings;i++) {
			let ring = new Group()
			let v = new paper.Point({angle:0, length: ringWidth})
			
			for (let j=0;j<lines;j++) {
				new Path({
					segments: [ zero, zero + v ],
					strokeWidth: 1,
					strokeColor: cols[j]
				})

				v.angle += 360/lines
			}

			ring.rotate(utl.R(rotation))

		}
	},

	getCutAndScore: (paths) => {
		res = new paper.Group()

		// Unite all paths in the paths array
		var join = paths.reduce(function (result, item, counter) {
			return result.unite(item, {insert:false});
		});
		
		joined = new paper.Path({segments: join.segments, ...opt, closed:true, parent: res})
				
		folds = []
		
		paths.forEach(it => {
			it.curves.forEach(c => {
				
				// Check if there is no existing path with the same start and end points
				if (!folds.some(fold => {
					const fs0 = fold.segments[0].point;
					const fs1 = fold.segments[1].point;
				
					return (fs0.equals(c.point1) || fs0.equals(c.point2)) && (fs1.equals(c.point1) || fs1.equals(c.point2));
				})) {
					// Create a new path only if no matching path is found
					const pp = new paper.Path({ segments: [c.point1, c.point2], strokeColor: 'orange', strokeWidth: 2, parent:res })
					
					folds.push(pp)
		
					// Check if path is in the middle of the shape of is it a boundary of a shape
					const cl = pp.getLocationAt(pp.length / 2)
					if (!joined.contains(cl.point + cl.normal) || !joined.contains(cl.point - cl.normal)) {
						pp.remove()
					}
				}
			})
		})

		return res
		
		//paths.forEach(it => it.remove())
	}
};
