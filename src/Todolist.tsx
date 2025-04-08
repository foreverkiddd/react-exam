import React, { useState } from "react";
import { Button } from 'react-bootstrap';

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일"

    // 구조 분해 할당
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : '공부하기', isChecked : false}, 
        {id : 2, text : '잠자기', isChecked : false}, 
        {id : 3, text : '미팅하기', isChecked : false}
    ]);

    // newTodo는 할 일 입력 칸
    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) => 
            prevItems.map((item) =>
                // 해당 아이템 아이디가 일치한 아이템을 찾아 isChecked를 false -> true, true -> false로 바꾸기
                // 일치하지 않는 아이템들은 그냥 냅두기 
                item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
            )
        )
    }

    const addTodo = () => {
        // trim()을 사용해서 중복 데이터를 걸러주고, 데이터 유무를 알 수 있음
        // newTodo.trim()이 비어있지 않다면 => 할 일 입력 칸이 비어있지 않다면
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id : Date.now(), text : newTodo, isChecked : false }])
            setNewTodo('');
        }
    }

    const removeTodo = (id : number) => {
        // 기존 todos의 각 데이터를 todo로 필터링하면서 todo.id가 삭제 버튼을 누른 id와 같지 않다면
        // 배열에 두고
        // 같다면 배열에 두지 않음 => 삭제됨
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handelTodoClick = (todo : Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <div>
                    <input type = "text"
                        placeholder='할 일 입력'
                        style={{marginRight : '10px', writingMode : 'horizontal-tb'}}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button variant="warning" onClick={addTodo}>추가</Button>
                </div>
                <p></p>
                <div className='board'>
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li key={todo.id}>
                                    <input type="checkbox"
                                    onChange={() => {
                                        // 체크 눌렀다면? handleCheckedChage 함수로
                                        handleCheckedChange(todo.id);
                                    }}></input>
                                    <span onClick={() => handelTodoClick(todo)}>
                                        {
                                            // todo.isChecked가 true라면?
                                            // <del></del> 사용해서 취소선
                                            // 아니라면 두기
                                            todo.isChecked ?
                                            <del>{todo.text}</del>
                                            : <span>{todo.text}</span>
                                        }
                                    </span>
                                    <button
                                        // 삭제 버튼을 누른 todo의 id 값을 가지고 removeTodo 함수로 넘어가면
                                        onClick={() => removeTodo(todo.id)}
                                        className='delbutton'
                                    >삭제</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

        
    )
}

export default TodoList;