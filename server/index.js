import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import bcrypt from 'bcrypt';
import { collection, addDoc, doc, setDoc} from "firebase/firestore";
import { db } from "./firebase-config.js"

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('/register', async (req, res) => {
    const saltRounds = 10;
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
            return res.status(500).json({ status: "500", message: err })
        }
    });
})

app.post('/login', async (req, res) => {

    try {
        const docRef = doc(db, "users", "passw");
        const docSnap = await getDoc(docRef);

    } catch (err) {
        return res.status(500).json({ status: "500", message: err })
    }

    req.body.password
    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //     // result == true
    // });
})

app.post('/test', async (req, res) => {
    try {
        // const docRef = await addDoc(collection(db, "cities"), {
        //     email: req.body.email,
        //     password: req.body.password,
        //     firstname: req.body.firstname,
        //     lastname: req.body.lastname,
        //     telephone: req.body.telephone,
        //     sex: req.body.sex,
        //     birthday: req.body.birthday,
        // });
        // console.log("Document written with ID: ", docRef.id);
        // return res.status(200).json({ status: "200", message: "Register Successful!" })
        await setDoc(doc(db, "meaw", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });
        return res.status(200).json({ status: "200", message: "Successful!" })

    } catch (err) {
        return res.status(500).json({ status: "500", message: err })
    }

})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})