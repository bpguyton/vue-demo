<script setup lang="ts">
import {ref} from 'vue'

var employees = ref([
    {id: 1, first_name: "John", last_name: "Doe", title: "asdf"},
    {id: 2, first_name: "Jane", last_name: "Doe", title: "asdf"},
    {id: 3, first_name: "Brandon", last_name: "Guyton", title: "bsdf"}
])
var showEmployees = ref(true)
var new_id = 4;
var addingEmployee = {id: new_id, first_name: "new", last_name: "guy", title: "manager"}

//var columnHeaders = Object.keys(employees[0])
var columnHeaders = [
    {title: 'First', align: 'end', key: 'first_name'},
    {title: 'Last', align: 'end', key: 'last_name'},
    {title: 'Title', align: 'end', key: 'title'},
]
console.log(columnHeaders)
function showEmployeesChange(){
    showEmployees.value = !showEmployees.value
    console.log(showEmployees.value)
}

function addEmployee(){
    employees.value.push(addingEmployee)
    new_id++
    console.log(employees.value)
}
</script>

<template>
    <div class="demo">
        <v-col class="left">
            <v-switch @click="showEmployeesChange" label="show/hide employees"></v-switch>
            <div class="table-container" v-show="showEmployees">
                <v-data-table :headers="columnHeaders" :items="employees" item-key="id" items-per-page="5" width="fit-content"></v-data-table>
            </div>
        </v-col>
        <v-col class="right">
            <v-btn @click="addEmployee">Add new employee</v-btn>
        </v-col>
    </div>
</template>

<style scoped>
.demo{
    width: 100vw;   
    margin-top: 75px;
    display: flex;
    flex-wrap: wrap;
}
.v-switch{
    display: flex;
    min-width: 100%;
    width: 100%;
    justify-content: center;
}
.table-container{
    display: flex;
    width: fit-content;
    margin: auto;
    border: solid;
    border-width: 1px;
    border-radius: 15px;
    justify-content: center;
}
.left{
    border: dashed;
    display: flex;
    flex-wrap: wrap;
    width: 50%;
}
.right{
    border: dashed;
    display: flex;
    width: 50%;
}
</style>