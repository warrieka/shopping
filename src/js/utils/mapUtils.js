import proj4 from 'proj4'
import {getOsmData } from './overpass.js'

let BASEURL = "https://tiles.arcgis.com/tiles/1KSVSmnHT2Lw9ea6/arcgis/rest/services/basemap_stadsplan_v5/MapServer/tile"
//let BASEURL = 'https://tile.openstreetmap.org/'

class Map {
  constructor(matrix, col, row) {
    this.matrix = matrix;
    this.col = col;
    this.row = row;
    this.url = `${BASEURL}/${matrix}/${col}/${row}`;
  }
  
  getData( callback )
  {
    let data;
    let bbox =  this.tile_extent();
    
    let merc = proj4('EPSG:3857');
    let xy0 = proj4(merc, [bbox[1], bbox[0]]);
    let xy1 = proj4(merc, [bbox[3], bbox[2]]);
    let scaleFactor = 512 / (xy1[0] - xy0[0]);

    getOsmData( bbox, d => {
      data = d.elements.filter(e => e.type == "node" )
      .map(e => {
          let xy = proj4(merc, [e.lon, e.lat]);
          let x = Math.floor(( xy1[0] - xy[0]) * scaleFactor);
          let y = Math.floor(( xy1[1] - xy[1]) * scaleFactor);
          let name = e.tags.name ? e.tags.name : `${e.tags.amenity} ${e.id}`;
          return {x: x, y: y, type: e.tags.amenity, name: name, id: e.id };
      });
      console.log(d, data)
      callback(data);
    });
  }


  tile_extent() {
      let xy0 = [tile2long(this.col,this.matrix), tile2lat(this.row,this.matrix)];
      let xy1 = [tile2long(this.col+1,this.matrix), tile2lat(this.row+1,this.matrix)];
      console.log([xy1[1], xy0[0], xy0[1], xy1[0]]);
      return [xy1[1], xy0[0], xy0[1], xy1[0]];
  }
}

let tile2long = (x,z) => x / Math.pow(2,z)* 360 -180

let tile2lat = (y,z) => {
    let n= Math.PI-2*Math.PI*y/Math.pow(2,z);
    return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
}

export default  Map;
export {tile2long, tile2lat};


