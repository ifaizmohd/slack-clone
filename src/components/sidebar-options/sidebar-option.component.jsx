import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/appSlice";
import { DB } from "../../firebase";
import {
  SidebarOptionChannel,
  SidebarOptionContainer,
} from "./sidebar-option.styles";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name!");
    if (channelName) {
      try {
        await addDoc(collection(DB, "rooms"), {
          name: channelName,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
