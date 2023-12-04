import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';



const DialogItem = (props) => {

    let path = "dialogs/" + props.id;

    return <div className="dialog-item">
    <NavLink to={path}> {props.name} </NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
        
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
  
    const [status, setStatus] = useState(<status-indicator />);
  
    useEffect(() => {
      const intervalId = setInterval(async () => {
        const result = await checkOnlineStatus();
        setStatus(result ? <status-indicator positive/> : <status-indicator  />);
      }, 300);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      async function handleLoad() {
        setStatus((await checkOnlineStatus()) ? <status-indicator positive /> : <status-indicator  />);
      }
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }, []);
  
    useEffect(() => {
      const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });
  
        return () => {
          unsub();
        };
      };
  
      currentUser.uid && getChats();
    }, [currentUser.uid]);
  
    const handleSelect = (u) => {
      dispatch({ type: "CHANGE_USER", payload: u });
    };

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
    
}

export default Dialogs;