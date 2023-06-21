var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["mail"] = document.getElementById("mail").value;
   formData["gender"] = document.getElementById("gender").value;
  formData["skills"] = document.getElementById("skills").value;
   // formData["qty"] = document.querySelectorAll('input[name="qty"]');
    //formData["perPrice"] = document.querySelectorAll('input[name="perPrice"]');
 
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.mail;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.skills;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("skills").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.mail;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.skills;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("skills").value = '';
    selectedRow = null;
}