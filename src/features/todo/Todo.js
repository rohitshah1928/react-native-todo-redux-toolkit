import React, { useEffect, useState } from 'react'
import { Dimensions, View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet, Alert } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { add, deleteById, deleteAll } from './todoSlice'

const Todo = () => {
    const todoList = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState("");
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    useEffect(() => {

    }, [todoText])


    function handle_add_Todo() {
        if (todoText != '') {
            dispatch(add(todoText))
            setTodoText('')
        }
        else {
            Alert.alert(
                "! Error",
                "Please Enter Your Todo",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }


    }
    function deleteTodoById(id) {
        if (todoList.length > 0) {
            Alert.alert(
                "Confirm",
                "Are you sure to Delete this Todo",
                [
                    { text: "OK", onPress: () => dispatch(deleteById(id)) }
                ]
            );
        }
        else {
            Alert.alert(
                "! Error",
                "No Todos Found",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }


    }
    function deleteAllTodos() {
        if (todoList.length > 0) {
            Alert.alert(
                "Confirm",
                "Are you sure to Delete all todos",
                [
                    { text: "OK", onPress: () => dispatch(deleteAll()) }
                ]
            );
        }
        else {
            Alert.alert(
                "! Error",
                "No Todos Found",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

        }
    }
    return (
        <View style={styles.appContainer}>

            {/* Add Todos Area  */}

            <View style={styles.view_list_container}>
                <View style={styles.addTodo}>
                    <TextInput
                        onChangeText={text => setTodoText(text)}
                        style={styles.text_input}
                        placeholder="Enter your Todo" />

                    <TouchableOpacity
                        onPress={() => { handle_add_Todo() }}
                        style={styles.btn_addTodo}>
                        <Text style={styles.text_addTodoButton}>Add </Text>
                    </TouchableOpacity>
                </View>
                {
                    todoList.length == 0 ? <View>
                        <Text style={styles.text_no_todo}>No Todos Found</Text>
                    </View>
                        : (
                            <FlatList
                                renderItem={({ item, index }) => (
                                    <View
                                        style={styles.render_list}>
                                        <Text style={styles.lable}>
                                            {item.todoName}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => deleteTodoById(item.id)}
                                            style={styles.btn_delete_by_id}>
                                            <Text style={styles.text_delete_by_id}>Del </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                data={todoList}
                                keyExtractor={item => `${item.id}`}
                                ListFooterComponent={
                                    <View style={styles.blank}>

                                    </View>
                                }
                            />
                        )
                }
            </View>



            {/* Delete All Button */}
            <View style={styles.view_delete_all}>
                <TouchableOpacity onPress={() => deleteAllTodos()}
                    style={styles.btn_delete_all}>
                    <Text style={styles.text_delete_all}>Delete All </Text>

                </TouchableOpacity>
            </View>
        </View>



    )
}

export default Todo;


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'space-between',



    },
    view_list_container: {
        height: '90%'
    },
    view_delete_all: {
        height: '10%'
    },
    addTodo: {
        padding: 6,
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#DDDDDD',
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn_addTodo: {
        width: 70,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_addTodoButton: {
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20

    },
    text_input: {
        height: 50,
        fontSize: 18,


    },
    render_list: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 7,
        backgroundColor: '#00FFFF',

    },
    btn_delete_all: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        margin: 20,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_delete_all: {
        color: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    text_no_todo: {

        marginLeft: 100,
        top: 20,
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_delete_by_id: {
        width: 70,
        padding: 7,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text_delete_by_id: {
        color: 'white',

        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20

    },
    lable: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    blank: {
        marginBottom: 100
    }


})