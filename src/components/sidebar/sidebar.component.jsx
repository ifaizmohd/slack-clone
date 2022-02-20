import {
  Add,
  Apps,
  BookmarkBorder,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import { auth, DB } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarOption from "../sidebar-options/sidebar-option.component";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styles";
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(DB, "rooms"));
  const [user] = useAuthState(auth);

  console.log(channels);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & User Groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
