var totalRows = 7;//eventaully this will call the total number in the closures array
var cellsInRow = 2;
var min = 1;
var max = 9;

    function drawTable() {
        // get the reference for the body
        var table1 = document.getElementById('table1');

        // creating rows
        for (var r = 0; r < totalRows; r++) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
                var cellText = document.createTextNode(" ");
                cell.appendChild(cellText);
                row.appendChild(cell);

	     // create cells in row
             for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("November oneteenth Twothousand and pi");//and this will call the next date in the array
                cell.appendChild(cellText);
                row.appendChild(cell);
            }           
            
	table1.appendChild(row); // add the row to the end of the table body
        }
}
window.onload=drawTable; 