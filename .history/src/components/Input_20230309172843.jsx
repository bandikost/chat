import React, { useContext, useState, useEffect } from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const Input = () => {
  const [fixedTime, setFixedTime] = useState(null);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (text === "" && img === null) {
      setIsSendButtonDisabled(true);
    } else {
      setIsSendButtonDisabled(false);
    }
  }, [text, img]);

   const setTime = () => {
    if (!fixedTime) { // check if fixedTime is not already set
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setFixedTime(`${hours}:${minutes}`);
    }
  }

  const handleSend = async () => {
    // Append fixed time to message text if it's set
    const messageText = text;

    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text: messageText,
                  time: fixedTime,
                  senderId: currentUser.uid,
                  img: downloadURL,
                }),
              });
            }
          );
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text: messageText,
          time: fixedTime,
          senderId: currentUser.uid,
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text: messageText,
        time: fixedTime,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text: messageText,
        time: fixedTime,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setFixedTime("");
    setImg(null);
  };
  
  return (
    <div className="input">
      <input
        type="text"
        placeholder="message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img style={{position: "relative", top: "3px"}} src={Img} alt="" />
        </label>
        <div onClick={setTime}>
          <button
            onClick={handleSend}
            style={{ borderRadius: "5px" }}
            disabled={isSendButtonDisabled} // add the disabled attribute
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
  }
export default Input;