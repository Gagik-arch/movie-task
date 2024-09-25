import React from "react";
import styles from './myMovies.module.css'
import Button from "../../core/Button";
import Icon from "../../core/Icon";
import MovieCard from "../../components/Card";
import { useNavigate } from "react-router-dom";

const MyMovies = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            {true ?
                <div>
                    <div className={styles.header}>
                        <div className={styles.my_account}>
                            <span>My Movies</span>
                            <Button><Icon name={'PlusCircle'} size={20} /></Button>
                        </div>
                        <div>
                            <Button className={styles.log_out_btn}>
                                Log out <Icon name={'LogOut'} size={16} />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.movies}>
                        <MovieCard title={'The Batman'} date={'2022'} />
                    </div>
                </div>
                :
                <div className={styles.empty_block}>
                    <div className={styles.title}>Your movie list is empty</div>
                    <Button variant={'primary'}>Add a new movie</Button>
                </div>
            }
        </div>
    )
}

export default MyMovies