$(document).ready(initializeEvents);
function initializeEvents(){
    //Cargar la tabla con los datos del json
    initData();
    $("#save").click(saveNewFilm);
    $("#modify").click(modifyFilm);
    $("#delete").click(deleteFilm);
    $("#reload").click(initData);
    $("#fecha").datepicker();
}


function initData(){
    peticionAjaxGet();
}
function selectRow(){
    //Eliminamos las anteriores clases seleccionadas
    clearRowSelected();
    $(this).addClass('row-selected');
    $(this).css("background-color", "#ff0");
    showInForm($('.row-selected').find('.td-titulo').text(),$('.row-selected').find('.td-director').text(),
        $('.row-selected').find('.td-sinopsis').text(),$('.row-selected').find('.td-fecha').text());
    
}

function clearRowSelected(){
    $('#table-body .film-row').each(function(){
        $(this).removeClass('row-selected');
        $(this).css("background-color", "#fff");
    });
}

function saveNewFilm(){
    peticionAjaxPost();
    reloadTableBody();
    peticionAjaxGet();
}

function modifyFilm(){
    let rowToModify = $('#table-body .film-row.row-selected .td-id').text();

    peticionAjaxPut(rowToModify);
}

function deleteFilm(){
    //Recuperamos los ids de las filas que están seleccionadas para un borrado multiple
 /*   let rowsToDelete=[];
    $('#table-body .film-row .td-checked').each(function(){
        if ($(this)[0].firstChild.checked){
               
            }
        });
        */
    //TODO:Recuperar el id de la pelicula seleccionada para borrar que estará en el formulario
    let rowToDelete = $('#table-body .film-row.row-selected .td-id').text();
    peticionAjaxDelete(rowToDelete);
 //   reloadTableBody();
//    $.when(reloadTableBody).then(peticionAjaxGet());
}

function peticionAjaxPut(rowToModify){

    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        //data: {titulo:"Los Goonies",director:"mono",sinopsis:"Slot ha encontrado nuevos amigos", fecha:"01/04/1990"},
        //data:{},
        data: createFilmData(),
        //Tipo de peticion 
        type:"PUT",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"+rowToModify
    }).done(peticionCompletadaNoReload).fail(peticionFallida);
}

function peticionAjaxPost(){

    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        //data: {titulo:"Los Goonies",director:"mono",sinopsis:"Slot ha encontrado nuevos amigos", fecha:"01/04/1990"},
        //data:{},
        data: createFilmData(),
        //Tipo de peticion 
        type:"POST",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionAjaxGet(){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        data: {},
        //data:{},
        //Tipo de peticion 
        type:"GET",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"
    }).done(peticionCompletada).fail(peticionFallida);
}

function peticionAjaxDelete(rowToDelete){
    $.ajax({
        //Puede ser una cadena, un array o un object de JS
        data: {},
        //data:{},
        //Tipo de peticion 
        type:"DELETE",
        // tipo de dato esperado
        dataType:"json",
        //URL de comunicacion con el servicio
        url: "http://localhost:3000/peliculas/"+rowToDelete
    }).done(peticionCompletadaNoReload).fail(peticionFallida);
}

function peticionCompletada(data, status){
    alert("Peticion completada get con status : " +status + ": "+data);
    reloadTableBody();
    jsonToRowData(data);
}

function peticionCompletadaNoReload(data, status){
    alert("Peticion completada delete con status : " +status + ": "+data);
}

function peticionFallida(jqXHR, status, error){
    //alert("Error al procesar la peticion");
    console.log("Status " +status);
    console.log("Error! " +error);
}

function createFilmData(){
    let data = {"titulo": $("#titulo").val(), "director": $("#director").val(),"sinopsis": $("#sinopsis").val(),"fecha": $("#fecha").val()};
    return data;
}

function jsonToRowData(data){
    for (let iterator=0;iterator<data.length;iterator++){
        let id = data[iterator].id;
        let titulo = data[iterator].titulo;
        let director =data[iterator].director;
        let sinopsis = data[iterator].sinopsis;
        let fecha = data[iterator].fecha;
        fillRow(id,titulo,director,sinopsis,fecha);
    }
    $("#table-body .film-row").click(selectRow);
}


function fillRow(id,titulo,director,sinopsis,fecha){
    let newRow= '<tr class="film-row"><td class="td-id" hidden="true">'+id+'</td><td class="td-checked"><input type="checkbox" class="selected"/></td><td class="td-titulo">'+titulo+'</td><td class="td-director">'+director+'</td><td class="td-sinopsis">'+sinopsis+'</td><td class="td-fecha">'+fecha+'</td></tr>';
    $("#table-body").append(newRow);
}

function reloadTableBody(){
    $('#table-body').children().remove();
}

function showInForm(titulo,director,sinopsis,fecha){
    $(".form-control#titulo").val(titulo);
    $(".form-control#director").val(director);
    $(".form-control#sinopsis").val(sinopsis);
    $(".form-control#fecha").val(fecha);
}