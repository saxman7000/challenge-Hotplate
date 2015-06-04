"use strict";

var Hotplate = {
    createGrid: function(){
      var grid = new Array(256);
      for(var i = 1; i <= 256; i++) {
          if(i === 1 ||
            i === 16 ||
            i === grid.length - 15 ||
            i === grid.length){
            grid[i] = 0;
          } else {
            grid[i] = 50;
          }
      }
        return grid;
    },

    printGrid: function (aGrid){
      document.write('<table>');
      document.write('<tr>');
        for(var i = 1; i <= 256; i++){
            if(i % 16 === 0){
              document.write('<td>'+aGrid[i]+'</td>');
                document.write('</tr><tr>');
            } else {
              document.write('<td>'+aGrid[i]+'</td>');
            }
        }
      document.write('</tr></table>');
    }


};

Hotplate.printGrid(Hotplate.createGrid());
