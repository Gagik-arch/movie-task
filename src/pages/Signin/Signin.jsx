import React from "react";
import styles from './signin.module.css'
import Button from '../../core/Button'
import Input from '../../core/Input'
import Checkbox from '../../core/Checkbox'
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <div className={styles.block}>
                <div className={styles.title}>Sign in</div>
                <Input
                    name={'email'}
                    placeholder={'Email'}
                    onFinish={(e) => console.log(e.target.value)}
                />
                <Input
                    validationKey={'password'}
                    name={'password'}
                    placeholder={'Password'}
                    onFinish={(e) => console.log(e.target.value)}
                />
                <div className={styles.checkbox_container}>
                    <Checkbox label={'Remember me'}
                        onChange={(e) => {
                            console.log(e.target.checked)
                        }}
                    />
                </div>
                <Button variant={'primary'}
                    onClick={() => {
                        navigate('/my-movies')
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Signin