import React from 'react'

export const DrawTools = () => {
  return (
	<div>DrawTools</div>
  )
}

// import L from "leaflet";
// import React, { useState } from "react";
// import {
// 	MapContainer,
// 	TileLayer,
// 	Marker,
// 	Popup,
// 	FeatureGroup,
// 	Circle
// } from "react-leaflet";
// import { EditControl } from "react-leaflet-draw";

// const DrawTools = () => {
// 	const _onEdited = (e: any) => {
// 		let numEdited = 0;
// 		e.layers.eachLayer((layer: any) => {
// 			numEdited += 1;
// 		});
// 		console.log(`_onEdited: edited ${numEdited} layers`, e);

// 		// this._onChange();
// 	};

// 	const _onCreated = (e: any) => {
// 		let type = e.layerType;
// 		let layer = e.layer;
// 		if (type === "marker") {
// 			// Do marker specific actions
// 			console.log("_onCreated: marker created", e);
// 		} else {
// 			console.log("_onCreated: something else created:", type, e);
// 		}

// 		console.log("Geojson", layer.toGeoJSON());
// 		console.log("coords", layer.getLatLngs());
// 		// Do whatever else you need to. (save to db; etc)

// 		// this._onChange();
// 	};

// 	const _onDeleted = (e: any) => {
// 		let numDeleted = 0;
// 		e.layers.eachLayer((layer: any) => {
// 			numDeleted += 1;
// 		});
// 		console.log(`onDeleted: removed ${numDeleted} layers`, e);

// 		// this._onChange();
// 	};

// 	const _onMounted = (drawControl: any) => {
// 		console.log("_onMounted", drawControl);
// 	};

// 	const _onEditStart = (e: any) => {
// 		console.log("_onEditStart", e);
// 	};

// 	const _onEditStop = (e: any) => {
// 		console.log("_onEditStop", e);
// 	};

// 	const _onDeleteStart = (e: any) => {
// 		console.log("_onDeleteStart", e);
// 	};

// 	const _onDeleteStop = (e: any) => {
// 		console.log("_onDeleteStop", e);
// 	};

// 	const _onDrawStart = (e: any) => {
// 		console.log("_onDrawStart", e);
// 	};

// 	return (
// 		<FeatureGroup>
// 			<EditControl
// 				onDrawStart={_onDrawStart}
// 				position="topleft"
// 				onEdited={_onEdited}
// 				onCreated={_onCreated}
// 				onDeleted={_onDeleted}
// 				draw={{
// 					polyline: {
// 						icon: new L.DivIcon({
// 							iconSize: new L.Point(8, 8),
// 							className: "leaflet-div-icon leaflet-editing-icon"
// 						}),
// 						shapeOptions: {
// 							// guidelineDistance: 10,
// 							color: "navy",
// 							weight: 3
// 						}
// 					},
// 					rectangle: false,
// 					circlemarker: false,
// 					circle: false,
// 					polygon: false
// 				}}
// 			/>
// 		</FeatureGroup>
// 	);
// };

// export default DrawTools;
