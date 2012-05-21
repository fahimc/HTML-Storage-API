HTML-Storage-API
================

Easy to use methods to store/retrieve objects into tables using local storage

#
## Check if the browser supports Local storage

    if(storage.isLocalStorageSupported())
    {
     // do stuff
    }

## Check if a table exisits

    if(storage.checkTableExists("test"))
    {
     // table exists
    }else{
    // table does not exist
    }

## Create a Table

    storage.createTable("test");

## Add data to the Table
    
    var p = {name : "peter",age : 45};
    storage.addTableData("test", p);

## Remove Data from a Table

     storage.removeTableData("test", p);

## Remove a Table 

    storage.dropTable("test");

## Get Table Data

   storage.getTableData("test");

## Clear Database

    storage.clearDatabase();

## Check if database is Full
    
    function onError(event)
    {
      // exceeded quota
    }
    storage.errorEvent = onError;
    