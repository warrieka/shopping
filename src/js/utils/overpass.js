

export function getOsmData(bbox, callback){
    let q = `[out:json];
             ( 
                node["amenity"](${bbox});
                <;
             ); 
             out body;` ;
console.log(q)

    fetch("https://lz4.overpass-api.de/api/interpreter ", 
        {method:"POST", body: q }).then(d => d.json() ).then(callback);
}

