$(document).ready(initializeEvents);
function initializeEvents(){
    $("#form-titulo").focus(clearValue);
    $("#form-director").focus(clearValue);
    $("#form-sinopsis").focus(clearValue);
    $("#form-fecha").focus(clearValue);
    $("#save").click(saveFilm);
    $("#modify").click(modifyFilm);
    $("#delete").click(deleteFilm);
    $("#table-body .film-row").focus(setFocus);
    $("#table-body .film-row").blur(setBlur);
    $("#table-body .film-row").click(selectRow);
}

function setFocus(){
    $(this).css("background-color","#fF0");
}
function setBlur(){
    $(this).css("background-color","#0Ff");
}

function selectRow(){
    $(this).parent().addClass('row-selected');
}


var checkedRows = [];


function selectChequedRows(){
    checkedRows = []
    let arrayChecked = $('#table-body .film-row .td-checked .selected');

    for (let posicion= 0; posicion<arrayChecked.length; posicion++){
          if ($('#table-body .film-row .td-checked')[posicion].firstChild.checked){
              //Guardamos el numero de fila a seleccionada
              checkedRows.push(posicion);
          }
        }
      return checkedRows;
}


function clearValue(){
    $("#form-titulo").attr("value","");
    $("#form-director").attr("value","");
    $("#form-sinopsis").attr("value","");
    $("#form-fecha").attr("value","");
}

function modifyFilm(){


    let rowsToModify = selectChequedRows();
    if (rowsToModify.length > 0){
        if (rowsToModify.length == 1){
            console.log($('#table-body .film-row')[rowsToModify[0]]);
        } else {
            alert("Por favor seleccione una sola fila")
        }
     } else {
          alert("No se ha seleccionado ninguna fila para modificar");
     }

    $('#table-body .film-row .td-checked').each(function(){
        if ($(this)[0].firstChild.checked){
            $(this).parent().addClass('row-selected');
         }
        });
        showInForm($('.row-selected').find('.td-titulo').text(),$('.row-selected').find('.td-director').text(),
        $('.row-selected').find('.td-sinopsis').text(),$('.row-selected').find('.td-fecha').text());
        
    }


function showInForm(titulo,director,sinopsis,fecha){
    
    $("#form-titulo").attr("value",titulo);
    $("#form-director").attr("value",director);
    $("form-#sinopsis").attr("value", sinopsis);
    $("form-#fecha").attr("value",fecha);
    
    /*
    $('input')[0].form.titulo.value;
    $('input')[1].form.director.value = director;
    $('input')[2].form.sinopsis.value = sinopsis;
    $('input')[3].form.fecha.value = fecha;
    */
}
/*
function deleteFilm(){
    let rowsToDelete = selectChequedRows();
    if (rowsToDelete.length > 0){
        //Reverse del array para borrar las filas correctas en la tabla original
        rowsToDelete.reverse();
        for (let deletePosition=0; deletePosition<rowsToDelete.length; deletePosition++){
           $('#table-body .film-row')[rowsToDelete[deletePosition]].remove();
        }
     } else {
          alert("No se ha seleccionado ninguna fila para borrar");
     }
}
*/

function deleteFilm(){
    //Buscamos entre todas las filas de la tabla las que tengan el check activo y eliminamos las filas
        $('#table-body .film-row .td-checked').each(function(){
            if ($(this)[0].firstChild.checked){
                $(this).parent().remove();
            }
        });

}        



function saveFilm(){
    let id = Math.random;
    /*let titulo = $('input')[0].form.titulo.value;
    let director = $('input')[1].form.director.value;
    let sinopsis = $('input')[2].form.sinopsis.value;
    let fecha = $('input')[3].form.fecha.value;*/

    let titulo = $("#form-titulo").val();
    let director = $("#form-director").val();
    let sinopsis = $("#form-sinopsis").val();
    let fecha = $("#form-fecha").val()
    fillRow(id,titulo,director,sinopsis,fecha);
    $("#table-body .film-row").focus(setFocus);
    $("#table-body .film-row").blur(setBlur);
    $("#table-body .film-row").click(selectRow);
}

function fillRow(id,titulo,director,sinopsis,fecha){
    let newRow= '<tr class="film-row"><td class="td-id" hidden="true">'+id+'</td><td class="td-checked"><input type="checkbox" class="selected"/></td><td class="td-titulo">'+titulo+'</td><td class="td-director">'+director+'</td><td class="td-sinopsis">'+sinopsis+'</td><td class="td-fecha">'+fecha+'</td></tr>';
    $("#table-body").append(newRow);
}

