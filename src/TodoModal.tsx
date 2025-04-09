import React from "react";
import {Modal} from 'react-bootstrap';

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

type TodoModalProps = {
    show : boolean;
    todo : Todo | null;
    handleClose : () => void; 
}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    return(
        <div>
            <Modal show={show} onHide={handleClose} centered>
                {/* centered는 모달 상자가 center에 오도록 함*/}
                <Modal.Header closeButton>
                <Modal.Title>Todo 상세 정보</Modal.Title>
                </Modal.Header>
                {/* todo에 값이 존재한다면 text를 반환 값이 존재하지 않는다면 null 값 */}
                <Modal.Body>{todo?.text}</Modal.Body>
            </Modal>
        </div>
    )
}

export default TodoModal;