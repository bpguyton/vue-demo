<script setup lang="ts">
import {ref} from 'vue'

var employees = ref([
    {id: 1, first_name: "John", last_name: "Doe", title: "asdf"},
    {id: 2, first_name: "Jane", last_name: "Doe", title: "asdf"},
    {id: 3, first_name: "Brandon", last_name: "Guyton", title: "bsdf"}
])
var showEmployees = ref(true)
var new_id = 4;
var addingEmployee = ref({id: new_id, first_name: "", last_name: "", title: ""})

//var columnHeaders = Object.keys(employees[0])
var columnHeaders = [
    {title: 'First', align: 'end', key: 'first_name'},
    {title: 'Last', align: 'end', key: 'last_name'},
    {title: 'Title', align: 'end', key: 'title'},
]
function showEmployeesChange(){
    showEmployees.value = !showEmployees.value
}

function addEmployee(){
    employees.value.push(addingEmployee.value)
    new_id++
}
</script>

<template>
    <div class="demo">
        <v-col class="card half left">
            <v-switch @click="showEmployeesChange" label="show/hide employees"></v-switch>
            <div class="table-container" v-show="showEmployees">
                <v-data-table :headers="columnHeaders" :items="employees" item-key="id" items-per-page="5" width="fit-content"></v-data-table>
            </div>
        </v-col>
        <v-col class="card half right">
            <v-text-field class="half" label="First Name" v-model="addingEmployee.first_name"></v-text-field>
            <v-text-field class="half" label="Last Name" v-model="addingEmployee.last_name"></v-text-field>
            <v-text-field class="full" label="Title" v-model="addingEmployee.title"></v-text-field>
            <v-btn @click="addEmployee" class="add">Add new employee</v-btn>
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
.card{
    border: solid;
    border-width: 1px;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 20px;
    display: flex;
    flex-wrap: wrap;
}
.half{
    width: 48%;
    margin-left: 3px;
    margin-right: 3px;
}
.left{
    margin-right: 5px;
}
.right{
    margin-left: 5px;
}
.add{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    min-width: 80%;
}
</style>