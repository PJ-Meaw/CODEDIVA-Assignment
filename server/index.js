import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import bcrypt from 'bcrypt';
import { collection, addDoc, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, getMetadata, getDownloadURL } from "firebase/storage";
import { db } from "./firebase-config.js"
import jwt from "jsonwebtoken";

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const secretPassword = "qwehjk12dva56"

app.post('/register', async (req, res) => {
    const saltRounds = 10;
    const usersCol = collection(db, "users")
    const currentUser = query(usersCol, where("email", "==", req.body.email))
    const querySnapshot = await getDocs(currentUser)

    if (querySnapshot.empty) {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    email: req.body.email,
                    password: hash,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    telephone: req.body.telephone,
                    sex: req.body.sex,
                    birthday: req.body.birthday,
                });
                console.log("Document written with ID: ", docRef.id);
                return res.status(200).json({ status: "200", message: "Register Successful!" })
            } catch (err) {
                return res.status(500).json({ status: "500", message: err.message })
            }
        });
    } else {
        return res.status(200).json({ status: "200", message: "This email is already registered" })
    }
})

app.post('/login', async (req, res) => {
    try {

        const usersCol = collection(db, "users")
        const currentUser = query(usersCol, where("email", "==", req.body.email))
        const querySnapshot = await getDocs(currentUser)
        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                bcrypt.compare(req.body.password, doc.data().password, function (err, result) {
                    if (result) {
                        const token = jwt.sign({ email: req.body.email }, secretPassword, { expiresIn: '1h' });
                        return res.status(200).json({ status: "success", message: "Login successful", token: token })
                    } else {
                        return res.status(200).json({ status: "fail", message: "Wrong password" })
                    }
                });
            });
        } else {
            return res.status(200).json({ status: "fail", message: "Your Email is not defined" })
        }
    } catch (err) {
        return res.status(500).json({ status: "500", message: err.message })
    }
})

app.post('/auth', async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, secretPassword);
        return res.status(200).json({ status: "success", message: "Authen success" })
    } catch (err) {
        return res.json({ status: "fail", message: err.message })
    }

})

app.post('/test', async (req, res) => {
    try {
        const storage = getStorage();
        const forestRef = ref(storage, 'Promotion/636218_4_TH.jfif');
        getDownloadURL(ref(storage, 'Promotion/636218_4_TH.jfif'))
            .then((url) => {
                return res.status(200).json({ status: "200", message: url })
            })
            .catch((error) => {
                return res.status(200).json({ status: "200", message: error.message })
            });

    } catch (err) {
        return res.status(500).json({ status: "500", message: err.message })
    }

})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})