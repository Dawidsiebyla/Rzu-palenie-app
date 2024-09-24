
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


function FormGroupExample() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 2 || password.length < 4) {
            alert('Login musi mieć co najmniej 2 znaki, a hasło co najmniej 4 znaki.');
            return;
        }
        console.log('Dane z formularza:', { name, password });

    };
    return (
        <div>
            <Form.Group onSubmit={handleSubmit}>
                <Form.Label>Imię:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);

                    }}
                />

                <Form.Label>Hasło:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);

                    }}
                />

                <button type="submit" >
                    Zaloguj się
                </button>
            </Form.Group>
        </div>
    );
}

export default FormGroupExample;
