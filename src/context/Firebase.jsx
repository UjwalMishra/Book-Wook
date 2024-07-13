import { initializeApp } from "firebase/app";

import { useContext, createContext, useEffect, useState } from "react";

//authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// firestore-data
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// firestore-databse
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-hot-toast";

//getting firebase in your app
const firebaseConfig = {
  apiKey: "AIzaSyCr1NlmaVTXkfC8zpJd69fyc0UhlguK9Jg",
  authDomain: "book-library-a96ae.firebaseapp.com",
  projectId: "book-library-a96ae",
  storageBucket: "book-library-a96ae.appspot.com",
  messagingSenderId: "1079546903293",
  appId: "1:1079546903293:web:76ee2ea55cbf628b0d5c94",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//register
const firebaseAuth = getAuth(firebaseApp);

//google-register
const provider = new GoogleAuthProvider();

//firestore
const firestore = getFirestore(firebaseApp);

//storage
const storage = getStorage(firebaseApp);

//setting context ---> syntax part
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);
export const FirebaseProvider = (props) => {
  //register with email and password
  const registerUser = (email, password,userName) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  //register with google
  const registerWithGoogle = () => {
    signInWithPopup(firebaseAuth, provider);
    toast.success("Successful");
  };

  //login with email and password
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);

  };

  // is user is loggedIn or Not ?
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      // console.log("user", user);
    });
  }, []);
  const isLoggedIn = user ? true : false;

  //log-out
  const logOut = () => {
    signOut(firebaseAuth).then(() => {
      toast.success("Logged Out!");
    });
  };

  //register-your-book --> adding data in firestore-database
  const addBookList = async (name, isbn, price,Uname, coverpic,condition) => {
    toast.success("Your book got listed");
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${coverpic.name}`
    );
    const uploadResult = await uploadBytes(imageRef, coverpic);

    return await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userId: user.uid,
      userName: Uname,
      email: user.email,
      condition
    });
  };

  //to show image from database to your screen
  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  // to access data from database
  const listBooks = async () => {
    return await getDocs(collection(firestore, "books"));
  };

  // to get more detail about particular book by id
  const getBookDescbyId = async (id) => {
    const bookRef = doc(firestore, "books", id);
    const result = await getDoc(bookRef);
    return result;
  };

  //to get order details on backend --->
  const placeOrder = async (bookId, qty) => {
    toast.success("Order Placed");
    const collectionRef = collection(firestore, "books", bookId, "orders");
    const result = await addDoc(collectionRef, {
      userName: user.userName,
      userId: user.uid,
      userName: user.displayName,
      email: user.email,
      quantity: Number(qty),
    });
    return result;
  };

  // view books listed by you
  const fetchBookListedByYou = async (userId) => {
    if (!user) return null;

    const collecRef = collection(firestore, "books");
    const q = query(collecRef, where("userId", "==", userId));
    const result = await getDocs(q);
    
    return result;
  };

  // fetching order-detail for particular book
  const orderDetails = async (bookId) => {
    const collecRef = collection(firestore, "books", bookId, "orders");
    const result = await getDocs(collecRef);
    return result;
  };

  return (
    <FirebaseContext.Provider
      value={{
        registerUser,
        registerWithGoogle,
        loginUser,
        isLoggedIn,
        logOut,
        addBookList,
        getImageURL,
        listBooks,
        getBookDescbyId,
        placeOrder,
        fetchBookListedByYou,
        user,
        orderDetails,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
