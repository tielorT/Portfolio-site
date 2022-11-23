import styles from '../styles/Contact.module.css'
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('sending');
        

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                name: name,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
        console.log(name, email, message)

    };

    return (
        <div className={styles.container}>
            <div className={styles.contactTitle}>
                <h2>Contact Me</h2> 
                <span style={{ fontSize: '19px', color: '#6B8490', fontWeight: 'bold'}}>Fill the form out below to reach out. Can&apos;t wait to
                      bring value and create with you.
                </span>
            </div>
            <form className={styles.form} action='mailto:tielorboon@gmail.com' method='get' encType='text/plain'>
                <div className={styles.entry}>
                    <label>Name</label>
                    <input required type='text' name='name' placeholder='enter name'
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.entry}>
                    <label>Email</label>
                    <input required type='text' name='email' placeholder='enter email'
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.entry}>
                    <label>Message</label>
                    <textarea  placeholder='enter your message' required rows='10'
                               onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className={styles.button} onClick={(e) => handleSubmit(e)} type='submit' name='submit' value='send'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;